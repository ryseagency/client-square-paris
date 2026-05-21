#!/usr/bin/env bash
# RYSE — PostToolUse hook (Edit|Write|MultiEdit)
# Lance validate-ryse-schema.mjs sur le dossier thème contenant le fichier édité
# et mappe "violations" (exit 1 du validateur) → exit 2, le seul code que Claude
# Code remonte à Claude en PostToolUse pour qu'il se corrige automatiquement.
#
# Ferme le trou audit P0-2 / contrainte schema #2 (range default sur step),
# qui n'était garantie par AUCUN hook actif (validate-ryse-schema.mjs orphelin).

payload=$(cat 2>/dev/null)
file_path=$(echo "$payload" | jq -r '.tool_input.file_path // empty' 2>/dev/null)
[ -z "$file_path" ] && exit 0
case "$file_path" in *.liquid) ;; *) exit 0 ;; esac
command -v node >/dev/null 2>&1 || exit 0

# Remonter jusqu'au dossier thème (celui qui contient sections/ ou blocks/)
dir=$(dirname "$file_path")
theme=""
while [ -n "$dir" ] && [ "$dir" != "/" ]; do
  if [ -d "$dir/sections" ] || [ -d "$dir/blocks" ]; then theme="$dir"; break; fi
  dir=$(dirname "$dir")
done
[ -z "$theme" ] && exit 0

# Localiser le validateur : .claude du repo, puis _templates canonique
validator=""
r="$theme"
while [ -n "$r" ] && [ "$r" != "/" ]; do
  if [ -f "$r/.claude/hooks/lib/validate-ryse-schema.mjs" ]; then
    validator="$r/.claude/hooks/lib/validate-ryse-schema.mjs"; break
  fi
  r=$(dirname "$r")
done
[ -z "$validator" ] && [ -f "$HOME/Documents/Claude/RYSE/_templates/hooks/lib/validate-ryse-schema.mjs" ] \
  && validator="$HOME/Documents/Claude/RYSE/_templates/hooks/lib/validate-ryse-schema.mjs"
[ -z "$validator" ] && exit 0

out=$(node "$validator" "$theme" 2>&1 1>/dev/null); code=$?
if [ "$code" -eq 1 ]; then
  {
    echo "❌ Doctrine schema RYSE violée dans $theme — corriger puis ré-éditer :"
    echo "$out"
  } >&2
  exit 2
fi
exit 0
