#!/usr/bin/env bash
# RYSE — PostToolUse hook (BLOQUANT v2.0)
#
# Lance Theme Check sur le fichier édité (si .liquid) ET BLOQUE si erreurs détectées.
# Pattern recommandé Reddit/communauté terrain mai 2026 : "theme-check capture les
# patterns INCONNUS que le pre-edit guard ne prévient pas".
#
# Format : exit 2 + stderr → Claude voit l'erreur et corrige avant de continuer.
# (cohérent avec pattern Boris Cherny verification loop 3 couches)

set -uo pipefail

payload=$(cat)
file_path=$(echo "$payload" | jq -r '.tool_input.file_path // empty')

# Skip si pas de fichier
if [ -z "$file_path" ]; then
  exit 0
fi

# Skip les fichiers non-livrables (cohérent avec pre-edit-protect.sh)
case "$file_path" in
  */tasks/*|*/lessons.md|*/scripts/*|*/.claude/*|*/README*|*/docs/*|*/CLAUDE.md|*/CLIENT.md|*/_evals/*|*/_templates/*)
    exit 0
    ;;
esac

blocking_errors=""

# ────────────────────────────────────────────────────────────────────────────
# .liquid → Theme Check BLOQUANT
# ────────────────────────────────────────────────────────────────────────────
if [[ "$file_path" == *.liquid ]] && command -v shopify >/dev/null 2>&1; then
  # Trouve le theme dir (premier ancêtre contenant config/settings_schema.json)
  dir="$(dirname "$file_path")"
  while [ "$dir" != "/" ] && [ ! -f "$dir/config/settings_schema.json" ]; do
    dir="$(dirname "$dir")"
  done

  if [ -f "$dir/config/settings_schema.json" ]; then
    cd "$dir"
    # Run theme check uniquement sur le fichier touché (rapide)
    relative_file="${file_path#$dir/}"
    output=$(shopify theme check --severity error 2>&1 || true)
    # Filtrer pour ne garder QUE les erreurs sur ce fichier
    file_errors=$(echo "$output" | grep -A2 "$relative_file" | head -20)
    if echo "$output" | grep -qE "error|Error" && [ -n "$file_errors" ]; then
      blocking_errors+="❌ Theme Check errors sur $relative_file :"$'\n'
      blocking_errors+="$file_errors"$'\n'
    fi
  fi
fi

# ────────────────────────────────────────────────────────────────────────────
# .json → validation syntaxe BLOQUANTE
# ────────────────────────────────────────────────────────────────────────────
if [[ "$file_path" == *.json ]] && command -v jq >/dev/null 2>&1; then
  if [ -f "$file_path" ]; then
    json_error=$(jq empty "$file_path" 2>&1 || true)
    if [ -n "$json_error" ]; then
      blocking_errors+="❌ JSON invalide dans $(basename "$file_path") : $json_error"$'\n'
    fi
  fi
fi

# ────────────────────────────────────────────────────────────────────────────
# Décision : si erreurs, BLOQUER avec exit 2 (Claude voit + corrige)
# ────────────────────────────────────────────────────────────────────────────
if [ -n "$blocking_errors" ]; then
  {
    echo "$blocking_errors"
    echo ""
    echo "→ Corriger ces erreurs AVANT de poursuivre. Ne pas annoncer 'fait' tant qu'elles persistent."
  } >&2
  exit 2
fi

exit 0
