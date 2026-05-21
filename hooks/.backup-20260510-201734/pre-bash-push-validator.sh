#!/usr/bin/env bash
# RYSE — PreToolUse hook (Bash) — validation AVANT shopify theme push
#
# Pattern senior 2026 : valider l'environnement AVANT d'exécuter une action à risque.
# Avant que Claude exécute `shopify theme push`, on vérifie :
# 1. Tous les blocks référencés dans templates/*.json existent dans blocks/
# 2. Tous les sections référencées dans templates/*.json existent dans sections/
# 3. Theme check error sur les fichiers du theme
#
# Si une vérif fail → BLOQUER le push (permissionDecision: deny).
# Claude voit le message, fixe AVANT de retenter.
#
# Cible : 0 push "with errors" silencieux.

set -uo pipefail

payload=$(cat)
tool_name=$(echo "$payload" | jq -r '.tool_name // empty')

# Skip si pas Bash
if [ "$tool_name" != "Bash" ]; then
  exit 0
fi

command=$(echo "$payload" | jq -r '.tool_input.command // empty')

# Skip si pas un shopify theme push
if ! echo "$command" | grep -qE 'shopify\s+theme\s+push'; then
  exit 0
fi

# Détecter le theme dir (cwd ou via --path)
THEME_DIR=""
if echo "$command" | grep -qE '\-\-path\s+'; then
  THEME_DIR=$(echo "$command" | sed -nE 's/.*--path\s+([^ ]+).*/\1/p')
fi
if [ -z "$THEME_DIR" ]; then
  THEME_DIR=$(pwd)
fi

# Si pas un theme dir (pas de config/settings_schema.json), skip
if [ ! -f "$THEME_DIR/config/settings_schema.json" ]; then
  # Peut-être que cwd est le client root, theme dans shopify-theme/
  if [ -d "$THEME_DIR/shopify-theme" ] && [ -f "$THEME_DIR/shopify-theme/config/settings_schema.json" ]; then
    THEME_DIR="$THEME_DIR/shopify-theme"
  else
    exit 0
  fi
fi

cd "$THEME_DIR"

VIOLATIONS=()

# ────────────────────────────────────────────────────────────────────────────
# 1. Audit références blocks/sections cassées
# ────────────────────────────────────────────────────────────────────────────
MISSING=$(python3 <<'PYEOF' 2>/dev/null
import json, os
from glob import glob

missing = []
existing_blocks = set()
for f in glob("blocks/*.liquid"):
    existing_blocks.add(os.path.basename(f).replace('.liquid', ''))
existing_sections = set()
for f in glob("sections/*.liquid"):
    existing_sections.add(os.path.basename(f).replace('.liquid', ''))

for tpl in glob("templates/*.json"):
    try:
        data = json.load(open(tpl))
    except Exception:
        continue
    sections = data.get("sections", {})
    for sec_id, sec in sections.items():
        if not isinstance(sec, dict):
            continue
        st = sec.get("type", "")
        if st and st not in existing_sections and st != "@theme":
            missing.append(f"{tpl} : section '{st}' référencée mais sections/{st}.liquid MANQUANTE")
        for blk_id, blk in sec.get("blocks", {}).items():
            if isinstance(blk, dict):
                bt = blk.get("type", "")
                if bt and not bt.startswith("_") and bt not in ("@theme", "@app") and bt not in existing_blocks:
                    missing.append(f"{tpl} : block '{bt}' référencé mais blocks/{bt}.liquid MANQUANT")

# Aussi schemas internes des sections (presets[].blocks[].type)
for sec_file in glob("sections/*.liquid"):
    try:
        content = open(sec_file).read()
    except Exception:
        continue
    import re
    m = re.search(r"\{%\s*schema\s*%\}(.*?)\{%\s*endschema\s*%\}", content, re.DOTALL)
    if not m:
        continue
    try:
        schema = json.loads(m.group(1))
    except Exception:
        continue
    for p in schema.get("presets") or []:
        if isinstance(p, dict):
            for b in p.get("blocks") or []:
                if isinstance(b, dict):
                    bt = b.get("type", "")
                    if bt and not bt.startswith("_") and bt not in ("@theme", "@app") and bt not in existing_blocks:
                        # Chercher aussi dans blocks[] interne du schema (section blocks)
                        internal = {sb.get("type") for sb in (schema.get("blocks") or []) if isinstance(sb, dict)}
                        if bt not in internal:
                            missing.append(f"{sec_file} preset référence block '{bt}' mais blocks/{bt}.liquid + section blocks[] MANQUANTS")

for m_str in missing[:10]:
    print(m_str)
PYEOF
)

if [ -n "$MISSING" ]; then
  while IFS= read -r line; do
    VIOLATIONS+=("$line")
  done <<< "$MISSING"
fi

# ────────────────────────────────────────────────────────────────────────────
# Décision : si violations, BLOQUER avec JSON deny
# ────────────────────────────────────────────────────────────────────────────
if [ ${#VIOLATIONS[@]} -gt 0 ]; then
  REASON_LINES=()
  REASON_LINES+=("❌ PUSH BLOQUÉ — références cassées détectées AVANT push (éviterait cascade 'Type non valide') :")
  REASON_LINES+=("")
  for v in "${VIOLATIONS[@]}"; do
    REASON_LINES+=("  • $v")
  done
  REASON_LINES+=("")
  REASON_LINES+=("→ ACTION : créer les fichiers manquants OU retirer leurs références dans templates/*.json AVANT de retenter le push.")
  REASON_LINES+=("→ OU lancer : ~/Documents/Claude/RYSE/_scripts/audit-theme-references.sh $THEME_DIR pour rapport complet.")

  REASON=$(printf '%s\n' "${REASON_LINES[@]}")

  # Stderr humain
  printf '%s\n' "${REASON_LINES[@]}" >&2

  # JSON deny
  REASON="$REASON" python3 <<'PYEOF'
import json, os
print(json.dumps({
    "hookSpecificOutput": {
        "hookEventName": "PreToolUse",
        "permissionDecision": "deny",
        "permissionDecisionReason": os.environ["REASON"]
    }
}))
PYEOF
  exit 0
fi

exit 0
