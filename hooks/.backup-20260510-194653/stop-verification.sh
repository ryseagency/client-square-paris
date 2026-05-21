#!/usr/bin/env bash
# RYSE — Stop hook
# Vérifie avant que Claude rende la main : Theme Check global propre.
# Si erreurs → exit 2 + JSON decision:block force Claude à continuer pour corriger.

set -euo pipefail

# Trouve le theme dir depuis le cwd
dir="$PWD"
while [ "$dir" != "/" ] && [ ! -f "$dir/config/settings_schema.json" ]; do
  dir="$(dirname "$dir")"
done

# Pas de theme Shopify dans l'arbo → on ne fait rien
if [ ! -f "$dir/config/settings_schema.json" ]; then
  exit 0
fi

# Theme Check global
if command -v shopify >/dev/null 2>&1; then
  cd "$dir"
  output=$(shopify theme check --severity error 2>&1 || true)
  
  if echo "$output" | grep -qE 'error|Error'; then
    cat >&2 <<EOF
{
  "decision": "block",
  "reason": "Theme Check a remonté des erreurs avant que tu rendes la main. Lis la sortie ci-dessous, corrige, et seulement après tu peux finir.\n\n$(echo "$output" | head -40)\n\nRappel règle Boris Cherny : never mark a task complete without proving it works. Un staff engineer Shopify validerait-il ça ?"
}
EOF
    exit 2
  fi
fi

# RYSE Doctrine validator (Règles 1-4 sur {% schema %})
# Cherche la racine RYSE en remontant depuis le theme dir jusqu'à trouver _templates/.
# Si pas trouvé → on n'est pas dans un workspace RYSE → skip silencieux.
repo_root="$dir"
while [ "$repo_root" != "/" ] && [ ! -d "$repo_root/_templates" ]; do
  repo_root="$(dirname "$repo_root")"
done

if [ -d "$repo_root/_templates" ]; then
  validator="$repo_root/_templates/hooks/lib/validate-ryse-schema.mjs"
  if [ -f "$validator" ] && command -v node >/dev/null 2>&1; then
    set +e
    violations=$(node "$validator" "$dir" 2>&1 1>/dev/null)
    code=$?
    set -e

    if [ "$code" -eq 1 ]; then
      cat >&2 <<EOF
{"decision":"block","reason":"Doctrine RYSE violée :\n\n$violations\n\nFix obligatoire avant d'arrêter (règle Boris Cherny : feedback loop = qualité 2-3x)."}
EOF
      exit 2
    elif [ "$code" -ne 0 ]; then
      echo "⚠ validate-ryse-schema.mjs exit=$code (script error, doctrine check skipped, theme check OK)" >&2
    fi
  fi
fi

# Tout va bien
exit 0
