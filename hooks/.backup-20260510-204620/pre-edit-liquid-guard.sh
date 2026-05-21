#!/usr/bin/env bash
# RYSE — PreToolUse hook (Liquid structural guard)
#
# Bloque Write/Edit sur des fichiers .liquid qui violent les règles structurelles RYSE :
#   1. type: "text" ou "textarea" sur un champ contenu visible (au lieu de richtext)
#   2. couleur hex hardcodée (#xxxxxx) hors bloc CSS vars defaults
#
# Mécanisme : retourne JSON { hookSpecificOutput: { permissionDecision: "deny", ... } }
# Cf https://github.com/anthropics/claude-code/issues/13744 — exit 2 ne bloque pas Write/Edit,
# le format JSON est OBLIGATOIRE pour un blocage déterministe.
#
# Whitelist contenu visible (OK en text/textarea) :
#   - boutons courts < 30 chars : button_label, cta_*, badge, label, alt_*
#   - identifiants techniques : url, link, href, email, sku, gtin, _id, _key, _slug
#   - dates ISO, nombres, count_*, position, order
#   - settings techniques : color_scheme_id, font_family_id

set -euo pipefail

payload=$(cat)
content=$(echo "$payload" | jq -r '.tool_input.new_str // .tool_input.content // .tool_input.file_text // empty')
file_path=$(echo "$payload" | jq -r '.tool_input.file_path // empty')

# Skip si pas de contenu ou pas un .liquid
if [ -z "$content" ] || [[ "$file_path" != *.liquid ]]; then
  exit 0
fi

# Skip dossiers non-livrables (cohérent avec pre-edit-protect.sh)
case "$file_path" in
  */tasks/*|*/scripts/*|*/.claude/*|*/snippets/icon-*|*/_templates/*)
    exit 0
    ;;
esac

violations=()

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 1 — type: "text" / "textarea" sur contenu visible
# ────────────────────────────────────────────────────────────────────────────
# Whitelist : id de setting qui matche un pattern technique → autorisé en text
WHITELIST_REGEX='(button|cta|badge|label|alt|url|link|href|email|sku|gtin|date|count|position|order|color_scheme|font_family|placeholder|aria|class|tag|icon|^id$)'

# Extraire les blocks "text" ou "textarea" du schema avec leur id
# Pattern : "id": "X", suivi de "type": "text|textarea" dans la même {} block (max 10 lignes entre)
text_violations=$(
  echo "$content" \
    | awk '/\{% schema %\}/,/\{% endschema %\}/' \
    | python3 -c '
import sys, json, re
raw = sys.stdin.read()
# extraire le JSON entre {% schema %} et {% endschema %}
m = re.search(r"\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}", raw, re.DOTALL)
if not m:
    sys.exit(0)
try:
    schema = json.loads(m.group(1))
except Exception:
    sys.exit(0)

WHITELIST = re.compile(r"button|cta|badge|label|alt|url|link|href|email|sku|gtin|date|count|position|order|color_scheme|font_family|placeholder|aria|class|tag|icon|^id$", re.I)

def check(settings, prefix):
    out = []
    if not isinstance(settings, list):
        return out
    for s in settings:
        if not isinstance(s, dict):
            continue
        sid = s.get("id", "?")
        stype = s.get("type")
        if stype in ("text", "textarea") and not WHITELIST.search(sid):
            out.append(f"{prefix}.{sid} (type={stype})")
    return out

violations = []
violations += check(schema.get("settings"), "settings")
for i, b in enumerate(schema.get("blocks") or []):
    if isinstance(b, dict):
        violations += check(b.get("settings"), f"blocks[{i}].settings")
for v in violations:
    print(v)
' 2>/dev/null || true
)

if [ -n "$text_violations" ]; then
  while IFS= read -r line; do
    violations+=("type=text/textarea sur contenu visible — utiliser richtext/inline_richtext : $line")
  done <<< "$text_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 2 — couleur hex hardcodée hors CSS vars defaults
# ────────────────────────────────────────────────────────────────────────────
# Pattern : #xxxxxx ou #xxx (hors d'un bloc `--var: {{ ... | default: '#xxx' }}`)
# Le pattern accepte : --bg: {{ section.settings.bg | default: '#fff' }};
# Le pattern refuse : background: #C9A96E;  ou  color: #1a1a1a;
hex_violations=$(
  echo "$content" \
    | grep -nE ':\s*#[0-9a-fA-F]{3,8}\b' \
    | grep -vE 'default:\s*.#[0-9a-fA-F]+|--[a-z-]+:\s*\{\{|/\*.*#|//.*#' \
    || true
)

if [ -n "$hex_violations" ]; then
  while IFS= read -r line; do
    violations+=("Couleur hex hardcodée — utiliser un setting color picker + CSS var : $line")
  done <<< "$hex_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 3 — Hiérarchie Hn : H1 unique par template (pas zéro, pas deux)
# ────────────────────────────────────────────────────────────────────────────
# Compte les <h1> dans le contenu rendu (hors {% comment %} et {% schema %})
# Skip si fichier dans /snippets/ ou /blocks/ (pas un template autonome)
if [[ "$file_path" != */snippets/* ]] && [[ "$file_path" != */blocks/* ]]; then
  # Strip schema + comments avant comptage
  content_stripped=$(echo "$content" | python3 -c '
import sys, re
raw = sys.stdin.read()
# Strip {% schema %}...{% endschema %}
raw = re.sub(r"\{%\s*schema\s*%\}.*?\{%\s*endschema\s*%\}", "", raw, flags=re.DOTALL)
# Strip {% comment %}...{% endcomment %}
raw = re.sub(r"\{%\s*comment\s*%\}.*?\{%\s*endcomment\s*%\}", "", raw, flags=re.DOTALL)
print(raw)
')
  h1_count=$(echo "$content_stripped" | grep -cE '<h1[\s>]' || true)
  # Section/template dans /sections/ avec le mot "main-" → considérée template autonome avec H1
  if [[ "$file_path" == */sections/main-* ]] || [[ "$file_path" == */sections/header-main* ]]; then
    if [ "$h1_count" -gt 1 ]; then
      violations+=("H1 multiple détectés ($h1_count) — règle non-négociable : 1 H1 unique par page (cf aeo-geo-rules.md §Hiérarchie Hn)")
    fi
  elif [ "$h1_count" -gt 1 ]; then
    violations+=("H1 multiple détectés ($h1_count) dans une section — règle : 1 H1 unique par page")
  fi
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 4 — Naming sans préfixe client (header-main.liquid, pas mde-header.liquid)
# ────────────────────────────────────────────────────────────────────────────
basename_file=$(basename "$file_path" .liquid)
# Préfixes client connus à proscrire (peut être étendu)
client_prefixes_regex='^(mde|libsy|kmi|carona|mc|line|ll|champion|cs|square|sq|coachwork)-'
if echo "$basename_file" | grep -qE "$client_prefixes_regex"; then
  violations+=("Nommage avec préfixe client interdit : $basename_file — utiliser nom fonctionnel (header-main, hero, footer-grid, etc.)")
fi

# CSS vars avec préfixe client : --mde-, --libsy-, etc.
css_var_violations=$(echo "$content" | grep -nE '\-\-(mde|libsy|kmi|carona|mc|line|ll|champion|cs|square|sq|coachwork)-' || true)
if [ -n "$css_var_violations" ]; then
  while IFS= read -r line; do
    violations+=("CSS var avec préfixe client interdit — utiliser --color-X / --space-X / --font-X : $line")
  done <<< "$css_var_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 5 — Schema name max 25 BYTES UTF-8 (Shopify limite en bytes, pas chars)
# ────────────────────────────────────────────────────────────────────────────
# Bug LMDE 2026-05-10 : "name" avec accents (ex "élément") passait le check chars
# mais Shopify rejetait silencieusement le fichier entier → cascade d'erreurs.
# Vérifie tous les "name" dans {% schema %} (section + blocks + presets) EN BYTES.
name_violations=$(
  echo "$content" | python3 -c '
import sys, json, re
raw = sys.stdin.read()
m = re.search(r"\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}", raw, re.DOTALL)
if not m:
    sys.exit(0)
try:
    schema = json.loads(m.group(1))
except Exception:
    sys.exit(0)

NAME_MAX_BYTES = 25
violations = []

def check_name(name, label):
    if not isinstance(name, str):
        return
    n_bytes = len(name.encode("utf-8"))
    if n_bytes > NAME_MAX_BYTES:
        n_chars = len(name)
        suffix = f" ({n_bytes} bytes UTF-8, {n_chars} chars — accents prennent 2 bytes)" if n_chars != n_bytes else f" ({n_bytes} bytes)"
        violations.append(f"{label} = {n_bytes} bytes (max {NAME_MAX_BYTES}){suffix} : \"{name}\"")

check_name(schema.get("name"), "schema.name")
for i, b in enumerate(schema.get("blocks") or []):
    if isinstance(b, dict):
        check_name(b.get("name"), f"blocks[{i}].name")
for i, p in enumerate(schema.get("presets") or []):
    if isinstance(p, dict):
        check_name(p.get("name"), f"presets[{i}].name")

for v in violations:
    print(v)
' 2>/dev/null || true
)

if [ -n "$name_violations" ]; then
  while IFS= read -r line; do
    violations+=("Schema name > 25 bytes UTF-8 (Shopify rejette silencieusement → cascade erreurs) : $line")
  done <<< "$name_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 6 — Theme blocks préfixés _ (nested-only) ne peuvent PAS être DÉCLARÉS
#           dans schema.blocks[].type (ni section, ni autre block)
# ────────────────────────────────────────────────────────────────────────────
# Bug LMDE 2026-05-10 : convention Shopify théme blocks préfixés `_` = nested-only via @theme.
# - Section schema : "blocks": [{"type": "_pi-X"}] → INVALIDE
# - Block schema (parent) : "blocks": [{"type": "_pi-tab"}] → INVALIDE aussi
# Symptôme : "Valeur de type non valide pour le bloc". Cascade d'erreurs ailleurs.
# Pour usage déclaré, le block doit être nommé SANS underscore.
underscore_block_violations=$(
  echo "$content" | python3 -c '
import sys, json, re
raw = sys.stdin.read()
m = re.search(r"\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}", raw, re.DOTALL)
if not m:
    sys.exit(0)
try:
    schema = json.loads(m.group(1))
except Exception:
    sys.exit(0)

violations = []
# Vérifie schema.blocks[].type pour underscore en début (section OU block parent)
for i, b in enumerate(schema.get("blocks") or []):
    if isinstance(b, dict):
        block_type = b.get("type", "")
        if block_type.startswith("_"):
            violations.append(f"blocks[{i}].type = \"{block_type}\" (commence par _ = nested-only, INVALIDE en déclaration)")
# Vérifie aussi presets[].blocks[].type pour underscore
for i, p in enumerate(schema.get("presets") or []):
    if isinstance(p, dict):
        for j, b in enumerate(p.get("blocks") or []):
            if isinstance(b, dict):
                block_type = b.get("type", "")
                if block_type.startswith("_"):
                    violations.append(f"presets[{i}].blocks[{j}].type = \"{block_type}\" (preset référence un type _ INVALIDE)")

for v in violations:
    print(v)
' 2>/dev/null || true
)

if [ -n "$underscore_block_violations" ]; then
  while IFS= read -r line; do
    violations+=("Block préfixé _ déclaré dans schema (nested-only, Shopify rejette → cascade d'erreurs) — renommer sans underscore : $line")
  done <<< "$underscore_block_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 7 — Metafield rich_text rendu sans | metafield_tag → JSON brut au front
# ────────────────────────────────────────────────────────────────────────────
# Bug LMDE 2026-05-10 : {{ fiche.alert }} affiche `{"type":"root","children":[...]}`
# au front si le metafield est rich_text (format ProseMirror Shopify).
# Solution : {{ fiche.alert | metafield_tag }} rend en HTML.
# Pattern de détection : `{{ X.metafields.* }}` ou `{{ fiche.X }}` ou `{{ X.value }}` SANS `| metafield_tag`
# (heuristique, on accepte aussi | escape, | strip_html, | richtext en cas de filtre conscient)
metafield_violations=$(
  echo "$content" | python3 -c '
import sys, re
raw = sys.stdin.read()
violations = []
# Cherche les rendus de metafield potentiels (pas dans bloc {%- liquid -%})
# Pattern : {{ ... .metafields. ... }} ou {{ fiche. ... }} ou {{ block.settings...metaobject... }}
patterns = [
    r"\{\{\s*[\w.]+\.metafields\.[\w.]+\s*\}\}",
    r"\{\{\s*fiche\.[\w]+\s*\}\}",
]
SAFE_FILTERS = ["metafield_tag", "escape", "strip_html", "default", "richtext", "json", "size", "image_url", "image_tag", "money", "date"]
for pattern in patterns:
    for m in re.finditer(pattern, raw):
        # Vérifie sil y a un | filter quelconque dedans
        full = m.group(0)
        if "|" not in full:
            line_no = raw[:m.start()].count("\n") + 1
            violations.append(f"L{line_no}: {full} → sans filter, risque JSON brut si rich_text. Utiliser | metafield_tag")

for v in violations[:5]:  # max 5 pour ne pas spam
    print(v)
' 2>/dev/null || true
)

if [ -n "$metafield_violations" ]; then
  while IFS= read -r line; do
    violations+=("Metafield rendu sans \`| metafield_tag\` → risque JSON ProseMirror brut au front si rich_text : $line")
  done <<< "$metafield_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 8 — `"limit": N` sur theme block (sans préfixe _) dans section schema
# ────────────────────────────────────────────────────────────────────────────
# Bug LMDE 2026-05-10 : `"blocks": [{"type": "pi-X", "limit": 1}]` → Shopify rejette.
# `limit` valide UNIQUEMENT pour section blocks legacy. Pour theme blocks (exposés
# sans préfixe `_`), Shopify rejette le `limit` en déclaration section.
limit_violations=$(
  REASON_INPUT="$content" python3 <<'PYEOF' 2>/dev/null
import os, json, re
raw = os.environ.get("REASON_INPUT", "")
m = re.search(r"\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}", raw, re.DOTALL)
if not m:
    raise SystemExit(0)
try:
    schema = json.loads(m.group(1))
except Exception:
    raise SystemExit(0)

violations = []
for i, b in enumerate(schema.get("blocks") or []):
    if not isinstance(b, dict):
        continue
    block_type = b.get("type", "")
    if block_type == "@theme":
        continue
    if not block_type.startswith("_") and "limit" in b:
        limit_val = b["limit"]
        violations.append(f"blocks[{i}] type='{block_type}' limit={limit_val} (theme block ne supporte pas limit en section schema)")
for v in violations:
    print(v)
PYEOF
)

if [ -n "$limit_violations" ]; then
  while IFS= read -r line; do
    violations+=("Limit sur theme block en section schema → Shopify rejette : $line")
  done <<< "$limit_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 9 — Richtext default non-wrappé <p>...</p> → Shopify rejette au push
# ────────────────────────────────────────────────────────────────────────────
# Bug LMDE 2026-05-10 + MEMORY feedback : `"type": "richtext", "default": "Texte"`
# → "Tous les nœuds de niveau supérieur doivent être des balises…"
# Wrap obligatoire : <p>, <ul>, <ol>, <h1>-<h6>, etc.
richtext_default_violations=$(
  REASON_INPUT="$content" python3 <<'PYEOF' 2>/dev/null
import os, json, re
raw = os.environ.get("REASON_INPUT", "")
m = re.search(r"\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}", raw, re.DOTALL)
if not m:
    raise SystemExit(0)
try:
    schema = json.loads(m.group(1))
except Exception:
    raise SystemExit(0)

ALLOWED = ("<p", "<ul", "<ol", "<h1", "<h2", "<h3", "<h4", "<h5", "<h6", "<blockquote", "<pre")

def is_unwrapped(text):
    if not isinstance(text, str) or text == "":
        return False
    return not any(text.strip().lower().startswith(t) for t in ALLOWED)

def walk(settings, prefix, violations):
    if not isinstance(settings, list):
        return
    for i, s in enumerate(settings):
        if not isinstance(s, dict):
            continue
        if s.get("type") == "richtext" and "default" in s:
            default = s["default"]
            if is_unwrapped(default):
                snippet = default[:40] + ("..." if len(default) > 40 else "")
                sid = s.get("id", "?")
                violations.append(f"{prefix}.settings[{i}](id={sid}) default='{snippet}' non-wrappe (commencer par <p>, <ul>, <ol>, <h1-6>)")

violations = []
walk(schema.get("settings"), "section", violations)
for i, b in enumerate(schema.get("blocks") or []):
    if isinstance(b, dict):
        walk(b.get("settings"), f"blocks[{i}]", violations)

for v in violations[:8]:
    print(v)
PYEOF
)

if [ -n "$richtext_default_violations" ]; then
  while IFS= read -r line; do
    violations+=("Richtext default non-wrappé <p> → Shopify rejette au push : $line")
  done <<< "$richtext_default_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 10 — Apostrophe simple ' dans une string Liquid '...' = syntax error
# ────────────────────────────────────────────────────────────────────────────
# Bug LMDE 2026-05-10 (×2) : `default: 'Commande aujourd''hui'` → "Expected end_of_string"
# Solution : utiliser double quotes "..." pour les strings contenant des apostrophes.
# Détection heuristique : grep `default: '...''...'` ou `'...'X'...'` (apostrophe au milieu)
apostrophe_violations=$(
  REASON_INPUT="$content" python3 <<'PYEOF' 2>/dev/null
import os, re
raw = os.environ.get("REASON_INPUT", "")
# Pattern : 'X'X' où le 2ème ' n'est ni en début ni en fin (donc apostrophe à l'intérieur)
# Cible aussi les '' doublés style SQL (qui ne marche pas en Liquid)
violations = []
for line_no, line in enumerate(raw.split("\n"), 1):
    # Pattern 1 : '' doublé dans une string
    if re.search(r"'[^']*''[^']*'", line):
        violations.append(f"L{line_no}: '' doublé style SQL ne marche pas en Liquid : {line.strip()[:80]}")
        continue
    # Pattern 2 : default: 'X'YZ'X' (apostrophe non-doublée au milieu)
    # Heuristique : 3+ apostrophes sur la ligne dans un default ou filter
    if re.search(r"default:\s*'", line) or re.search(r"\|\s*default:\s*'", line):
        n_quotes = line.count("'")
        if n_quotes >= 3:
            violations.append(f"L{line_no}: apostrophe au milieu d'une string Liquid '...' : {line.strip()[:80]}")
for v in violations[:5]:
    print(v)
PYEOF
)

if [ -n "$apostrophe_violations" ]; then
  while IFS= read -r line; do
    violations+=("Apostrophe dans string Liquid '...' → utiliser \"...\" double quotes : $line")
  done <<< "$apostrophe_violations"
fi

# ════════════════════════════════════════════════════════════════════════════
# RÈGLES 12-17 — Patches issus du scraping GitHub Shopify CLI 2024-2026
# Source : ~/Documents/Claude/RYSE/.claude/skills/lovable-to-shopify/_shared/shopify-known-bugs.md
# ════════════════════════════════════════════════════════════════════════════

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 12 — Empty file (.liquid/.json/.css/.js) — bug Shopify A2
# ────────────────────────────────────────────────────────────────────────────
# Bug GitHub Shopify CLI : empty file dans sections/assets/blocks casse `theme push`
# avec "Asset must have a value or attachment". Bloquer toute écriture vide.
if [[ "$file_path" =~ \.(liquid|json|css|js)$ ]]; then
  trimmed_content=$(echo "$content" | tr -d '[:space:]')
  if [ -z "$trimmed_content" ]; then
    violations+=("Fichier vide non autorisé (theme push fail 'Asset must have a value') : $file_path")
  fi
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 13 — `select` setting avec default value non listée dans options — bug A9
# ────────────────────────────────────────────────────────────────────────────
# Bug GitHub Shopify CLI : silent fallback à 1ère option, valeur user perdue.
select_violations=$(
  REASON_INPUT="$content" python3 <<'PYEOF' 2>/dev/null
import os, json, re
raw = os.environ.get("REASON_INPUT", "")
m = re.search(r"\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}", raw, re.DOTALL)
if not m:
    raise SystemExit(0)
try:
    schema = json.loads(m.group(1))
except Exception:
    raise SystemExit(0)

violations = []
def walk(settings, prefix):
    if not isinstance(settings, list):
        return
    for i, s in enumerate(settings):
        if not isinstance(s, dict) or s.get("type") != "select":
            continue
        default = s.get("default")
        options = s.get("options", [])
        if default is not None and isinstance(options, list):
            option_values = {o.get("value") for o in options if isinstance(o, dict)}
            if default not in option_values:
                sid = s.get("id", "?")
                violations.append(f"{prefix}.settings[{i}](id={sid}) select default='{default}' PAS dans options {list(option_values)}")

walk(schema.get("settings"), "section")
for i, b in enumerate(schema.get("blocks") or []):
    if isinstance(b, dict):
        walk(b.get("settings"), f"blocks[{i}]")

for v in violations:
    print(v)
PYEOF
)
if [ -n "$select_violations" ]; then
  while IFS= read -r line; do
    violations+=("Select default invalide (silent fallback Shopify) : $line")
  done <<< "$select_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 14 — Block self-référencé dans son propre blocks[] — bug A4
# ────────────────────────────────────────────────────────────────────────────
# Bug GitHub Shopify : récursion infinie silencieuse, theme dev hang.
self_ref_violations=$(
  REASON_INPUT="$content" FILE_PATH="$file_path" python3 <<'PYEOF' 2>/dev/null
import os, json, re
raw = os.environ.get("REASON_INPUT", "")
m = re.search(r"\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}", raw, re.DOTALL)
if not m:
    raise SystemExit(0)
try:
    schema = json.loads(m.group(1))
except Exception:
    raise SystemExit(0)

# Récup le nom du block courant (depuis le file_path basename)
import sys
fp = os.environ.get("FILE_PATH", "")
block_name = os.path.basename(fp).replace(".liquid", "")

violations = []
for i, b in enumerate(schema.get("blocks") or []):
    if isinstance(b, dict):
        bt = b.get("type", "")
        if bt == block_name:
            violations.append(f"blocks[{i}].type='{bt}' = self-référence (récursion infinie)")

for v in violations:
    print(v)
PYEOF
)
if [ -n "$self_ref_violations" ]; then
  while IFS= read -r line; do
    violations+=("Self-référence block (récursion infinie) : $line")
  done <<< "$self_ref_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 15 — `richtext` default avec balises non-supportées (<div>, <span>) — bug A21
# ────────────────────────────────────────────────────────────────────────────
# Bug GitHub Shopify : richtext n'accepte QUE <p>, <ul>, <ol>, <li>, <strong>, <em>, <a>, <h1-6>, <br>.
# <div>, <span>, <section>, <table> rejettés silencieusement (texte vide au render).
richtext_invalid_tags=$(
  REASON_INPUT="$content" python3 <<'PYEOF' 2>/dev/null
import os, json, re
raw = os.environ.get("REASON_INPUT", "")
m = re.search(r"\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}", raw, re.DOTALL)
if not m:
    raise SystemExit(0)
try:
    schema = json.loads(m.group(1))
except Exception:
    raise SystemExit(0)

ALLOWED = {"p", "ul", "ol", "li", "strong", "em", "a", "h1", "h2", "h3", "h4", "h5", "h6", "br", "blockquote"}

def check_tags(default_str, label, violations):
    if not isinstance(default_str, str):
        return
    tags = re.findall(r"<(\w+)[^>]*>", default_str)
    invalid = [t for t in tags if t.lower() not in ALLOWED]
    if invalid:
        violations.append(f"{label} richtext default contient balises non-supportées {set(invalid)} (rejetées silencieusement par Shopify)")

violations = []
def walk(settings, prefix):
    if not isinstance(settings, list):
        return
    for i, s in enumerate(settings):
        if not isinstance(s, dict) or s.get("type") not in ("richtext", "inline_richtext"):
            continue
        check_tags(s.get("default", ""), f"{prefix}.settings[{i}]", violations)

walk(schema.get("settings"), "section")
for i, b in enumerate(schema.get("blocks") or []):
    if isinstance(b, dict):
        walk(b.get("settings"), f"blocks[{i}]")

for v in violations[:5]:
    print(v)
PYEOF
)
if [ -n "$richtext_invalid_tags" ]; then
  while IFS= read -r line; do
    violations+=("Richtext balises non-supportées : $line")
  done <<< "$richtext_invalid_tags"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 16 — `text` setting avec id _url/_link/_href → strip Shopify (bug RYSE 2026-05-10)
# ────────────────────────────────────────────────────────────────────────────
# Pattern observé LMDE meuble : Shopify Admin STRIP les valeurs text qui ressemblent à des URLs.
# Solution : utiliser type `url` ou `select` preset avec mapping hardcoded.
url_setting_violations=$(
  REASON_INPUT="$content" python3 <<'PYEOF' 2>/dev/null
import os, json, re
raw = os.environ.get("REASON_INPUT", "")
m = re.search(r"\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}", raw, re.DOTALL)
if not m:
    raise SystemExit(0)
try:
    schema = json.loads(m.group(1))
except Exception:
    raise SystemExit(0)

URL_KEYS = re.compile(r"_url$|_link$|_href$|_to$|_uri$", re.I)
violations = []

def walk(settings, prefix):
    if not isinstance(settings, list):
        return
    for i, s in enumerate(settings):
        if not isinstance(s, dict):
            continue
        sid = s.get("id", "")
        stype = s.get("type", "")
        if stype in ("text", "textarea") and URL_KEYS.search(sid):
            violations.append(f"{prefix}.settings[{i}](id={sid}) type=text avec id URL — Shopify strip les valeurs URL en text. Utiliser type=url OU select preset")

walk(schema.get("settings"), "section")
for i, b in enumerate(schema.get("blocks") or []):
    if isinstance(b, dict):
        walk(b.get("settings"), f"blocks[{i}]")

for v in violations:
    print(v)
PYEOF
)
if [ -n "$url_setting_violations" ]; then
  while IFS= read -r line; do
    violations+=("Text setting avec id URL → Shopify strip valeur. Utiliser type=url : $line")
  done <<< "$url_setting_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 17 — `range` settings : (max-min)/step ≤ 101 steps — bug Shopify limite native
# ────────────────────────────────────────────────────────────────────────────
range_steps_violations=$(
  REASON_INPUT="$content" python3 <<'PYEOF' 2>/dev/null
import os, json, re
raw = os.environ.get("REASON_INPUT", "")
m = re.search(r"\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}", raw, re.DOTALL)
if not m:
    raise SystemExit(0)
try:
    schema = json.loads(m.group(1))
except Exception:
    raise SystemExit(0)

violations = []
def walk(settings, prefix):
    if not isinstance(settings, list):
        return
    for i, s in enumerate(settings):
        if not isinstance(s, dict) or s.get("type") != "range":
            continue
        try:
            mn = float(s.get("min", 0))
            mx = float(s.get("max", 0))
            st = float(s.get("step", 1))
            if st <= 0:
                continue
            n_steps = (mx - mn) / st
            if n_steps > 101:
                sid = s.get("id", "?")
                violations.append(f"{prefix}.settings[{i}](id={sid}) range {mn}-{mx} step={st} = {n_steps:.0f} steps (max 101)")
        except Exception:
            continue

walk(schema.get("settings"), "section")
for i, b in enumerate(schema.get("blocks") or []):
    if isinstance(b, dict):
        walk(b.get("settings"), f"blocks[{i}]")

for v in violations:
    print(v)
PYEOF
)
if [ -n "$range_steps_violations" ]; then
  while IFS= read -r line; do
    violations+=("Range > 101 steps (limite Shopify) : $line")
  done <<< "$range_steps_violations"
fi

# ────────────────────────────────────────────────────────────────────────────
# RÈGLE 11 — Dynamic source DOIT utiliser closest.product.metafields
# ────────────────────────────────────────────────────────────────────────────
# Bug LMDE 2026-05-10 : 87 bindings écrits avec {{ product.metafields.X }} → rendu OK au front
# MAIS éditeur de thème ne reconnaît PAS comme dynamic source (pas d'icône 🔗 verte).
# Fix : utiliser {{ closest.product.metafields.X }} pour binding éditeur reconnu.
# Vaut UNIQUEMENT pour les *.json templates (sections settings) et schemas Liquid de blocks.
if [[ "$file_path" == *.json ]] || [[ "$file_path" == *.liquid ]]; then
  closest_violations=$(echo "$content" | grep -nE '\{\{\s*product\.metafields\.' | grep -v 'closest\.product\.metafields' | head -5 || true)
  if [ -n "$closest_violations" ]; then
    while IFS= read -r line; do
      violations+=("Dynamic source manque préfixe \`closest.\` → éditeur ne reconnaît pas comme bindée : $line")
    done <<< "$closest_violations"
  fi
fi

# ────────────────────────────────────────────────────────────────────────────
# Décision : si violations, retourner JSON deny (format Claude Code 2026)
# ────────────────────────────────────────────────────────────────────────────
if [ ${#violations[@]} -gt 0 ]; then
  # ──── LOG d'activation pour audit-rules.py (P2 critique externe) ────
  LOG_DIR="$HOME/Documents/Claude/RYSE/.claude/skills/lovable-to-shopify/_evals"
  mkdir -p "$LOG_DIR" 2>/dev/null
  LOG_FILE="$LOG_DIR/hook-activations.log"
  TS_LOG=$(date +"%Y-%m-%d %H:%M:%S")
  client_path=$(echo "$file_path" | sed -nE 's|.*/clients/([^/]+)/.*|\1|p')
  [ -z "$client_path" ] && client_path="unknown"
  for v in "${violations[@]}"; do
    # Extraire le nom de règle court (1er mot avant " :" ou " >")
    rule_label=$(echo "$v" | sed -E 's/^([^:>(\\]+).*/\1/' | tr -d '\n' | cut -c1-60)
    echo -e "${TS_LOG}\t${client_path}\t${rule_label}\t$(basename "$file_path")" >> "$LOG_FILE"
  done

  reason_lines=()
  reason_lines+=("Édition bloquée — règles structurelles RYSE violées dans $(basename "$file_path") :")
  for v in "${violations[@]}"; do
    reason_lines+=("  • $v")
  done
  reason_lines+=("")
  reason_lines+=("Doctrine : editor-control-rules.md §Textes/Naming + aeo-geo-rules.md §Hiérarchie Hn. Corriger et réessayer.")

  reason=$(printf '%s\n' "${reason_lines[@]}")

  # Stderr pour visibilité humaine (cohérent avec pre-edit-protect.sh)
  printf '%s\n' "${reason_lines[@]}" >&2

  # JSON stdout pour blocage déterministe (Claude Code 2026 spec)
  # cf https://github.com/anthropics/claude-code/issues/13744
  # python3 gère les newlines proprement dans json.dumps (vs jq qui peut bugger sur control chars)
  REASON="$reason" python3 -c '
import json, os
print(json.dumps({
    "hookSpecificOutput": {
        "hookEventName": "PreToolUse",
        "permissionDecision": "deny",
        "permissionDecisionReason": os.environ["REASON"]
    }
}))
'
  exit 0
fi

exit 0
