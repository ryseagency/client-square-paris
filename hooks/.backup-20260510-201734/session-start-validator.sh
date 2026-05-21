#!/usr/bin/env bash
# RYSE — SessionStart hook (audit ENVIRONNEMENT avant que Claude commence)
#
# Pattern senior 2026 (sourcé) : "feedback loop pour Claude attrape ses propres erreurs
# = +2-3× qualité (Boris Cherny)". Au démarrage de chaque session client, audit auto :
# 1. shopify theme check sur le theme local (si présent)
# 2. Audit références block dans templates/*.json (block missing)
# 3. Audit metafields utilisés en éditeur (PUBLIC_READ check)
# 4. Affiche le rapport AVANT que tu commences à coder
#
# But : que Claude SACHE dès le départ que le theme a 3 erreurs résiduelles à éviter.

set -uo pipefail

CWD=$(pwd)
CLIENT=$(echo "$CWD" | sed -nE 's|.*/clients/([^/]+).*|\1|p')

if [ -z "$CLIENT" ]; then
  # Pas dans un dossier client RYSE → skip
  exit 0
fi

CLIENT_DIR="/Users/ryseagency/Documents/Claude/RYSE/clients/$CLIENT"
THEME_DIR="$CLIENT_DIR/shopify-theme"

ISSUES=()

# ────────────────────────────────────────────────────────────────────────────
# 1. shopify theme check
# ────────────────────────────────────────────────────────────────────────────
if [ -d "$THEME_DIR" ] && command -v shopify >/dev/null 2>&1; then
  cd "$THEME_DIR"
  CHECK_OUT=$(shopify theme check --severity error 2>&1 || true)
  ERR_COUNT=$(echo "$CHECK_OUT" | grep -cE '^\s*✗|error' || echo "0")
  if [ "$ERR_COUNT" -gt 0 ]; then
    ISSUES+=("⚠️  $ERR_COUNT erreurs theme check sur $CLIENT/shopify-theme :")
    ISSUES+=("$(echo "$CHECK_OUT" | grep -E '^\s*✗|error' | head -5)")
  fi
fi

# ────────────────────────────────────────────────────────────────────────────
# 2. Audit références blocks dans templates/*.json
# ────────────────────────────────────────────────────────────────────────────
if [ -d "$THEME_DIR/templates" ] && [ -d "$THEME_DIR/blocks" ]; then
  cd "$THEME_DIR"
  MISSING=$(python3 <<'PYEOF' 2>/dev/null
import json, os, re
from glob import glob

missing = []
existing_blocks = set()
for f in glob("blocks/*.liquid"):
    existing_blocks.add(os.path.basename(f).replace('.liquid', ''))

for tpl in glob("templates/*.json"):
    try:
        data = json.load(open(tpl))
    except Exception:
        continue
    sections = data.get("sections", {})
    for sec_id, sec in sections.items():
        if not isinstance(sec, dict):
            continue
        for blk_id, blk in sec.get("blocks", {}).items():
            if isinstance(blk, dict):
                bt = blk.get("type", "")
                if bt and not bt.startswith("_") and bt not in ("@theme", "@app") and bt not in existing_blocks:
                    missing.append(f"{tpl} : block '{bt}' référencé mais blocks/{bt}.liquid manquant")

# Aussi sections référencées
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
            missing.append(f"{tpl} : section '{st}' référencée mais sections/{st}.liquid manquante")

for m in missing[:10]:
    print(m)
PYEOF
)
  if [ -n "$MISSING" ]; then
    ISSUES+=("⚠️  Références blocks/sections cassées (cascade 'Type non valide' potentielle au push) :")
    while IFS= read -r line; do
      ISSUES+=("    $line")
    done <<< "$MISSING"
  fi
fi

# ────────────────────────────────────────────────────────────────────────────
# 3. Backups récents (rappel save-theme.sh)
# ────────────────────────────────────────────────────────────────────────────
LAST_SAVE="$HOME/Archives/themes/$CLIENT/shopify-theme-LATEST.tar.gz"
if [ -f "$LAST_SAVE" ]; then
  AGE_HOURS=$(( ( $(date +%s) - $(stat -f %m "$LAST_SAVE") ) / 3600 ))
  if [ "$AGE_HOURS" -gt 24 ]; then
    ISSUES+=("⚠️  Dernière sauvegarde $CLIENT date de ${AGE_HOURS}h. Avant grosse modif → tape /sauvegarde")
  fi
fi

# ────────────────────────────────────────────────────────────────────────────
# Afficher le rapport (sortie via additionalContext JSON pour SessionStart)
# ────────────────────────────────────────────────────────────────────────────
if [ ${#ISSUES[@]} -eq 0 ]; then
  # Tout propre, on n'injecte rien (pas polluer)
  exit 0
fi

REPORT_LINES=()
REPORT_LINES+=("🔍 AUDIT ENVIRONNEMENT $CLIENT (${#ISSUES[@]} signaux détectés AVANT démarrage session) :")
REPORT_LINES+=("")
for issue in "${ISSUES[@]}"; do
  REPORT_LINES+=("$issue")
done
REPORT_LINES+=("")
REPORT_LINES+=("→ Recommandation : signaler ces issues à user en début de réponse, proposer fix avant de commencer la tâche demandée.")

REPORT=$(printf '%s\n' "${REPORT_LINES[@]}")

# Sortie via JSON additionalContext (format SessionStart Claude Code 2026)
ADDITIONAL_CONTEXT="$REPORT" python3 <<'PYEOF'
import json, os
print(json.dumps({
    "hookSpecificOutput": {
        "hookEventName": "SessionStart",
        "additionalContext": os.environ.get("ADDITIONAL_CONTEXT", "")
    }
}))
PYEOF

# Stderr pour visibilité humaine aussi
printf '%s\n' "${REPORT_LINES[@]}" >&2

exit 0
