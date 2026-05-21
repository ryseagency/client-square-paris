#!/usr/bin/env bash
# RYSE — Installation des hooks dans un projet client
# Usage : ./install-hooks.sh /chemin/vers/projet
# Ou depuis le dossier projet : ./install-hooks.sh .

set -euo pipefail

target="${1:-.}"
target_abs="$(cd "$target" && pwd)"

if [ ! -d "$target_abs" ]; then
  echo "❌ Dossier introuvable : $target_abs" >&2
  exit 1
fi

# Source = dossier où se trouve ce script
src="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "📁 Installation hooks RYSE dans : $target_abs"

# Créer .claude/hooks/
mkdir -p "$target_abs/.claude/hooks"

# Copier les scripts hooks
cp "$src/pre-edit-protect.sh" "$target_abs/.claude/hooks/"
cp "$src/post-edit-quality.sh" "$target_abs/.claude/hooks/"
cp "$src/stop-verification.sh" "$target_abs/.claude/hooks/"

# Rendre executable
chmod +x "$target_abs/.claude/hooks/"*.sh

# Settings.json — gérer le cas où il existe déjà
if [ -f "$target_abs/.claude/settings.json" ]; then
  echo "⚠️  $target_abs/.claude/settings.json existe déjà"
  echo "   → Le nouveau settings.json est dans : $src/settings.json"
  echo "   → À merger manuellement (ou sauvegarder l'ancien et écraser)"
else
  cp "$src/settings.json" "$target_abs/.claude/settings.json"
  echo "✅ settings.json installé"
fi

# Vérifier dépendances
echo ""
echo "🔍 Dépendances :"
command -v jq >/dev/null 2>&1 && echo "  ✅ jq" || echo "  ❌ jq manquant — install: brew install jq"
command -v shopify >/dev/null 2>&1 && echo "  ✅ shopify CLI" || echo "  ⚠️  shopify CLI manquant — install: brew tap shopify/shopify && brew install shopify-cli"

echo ""
echo "✅ Hooks installés. Ils s'activeront à la prochaine session Claude Code dans ce projet."
echo ""
echo "Pour désactiver temporairement : renommer .claude/settings.json en .claude/settings.json.off"
