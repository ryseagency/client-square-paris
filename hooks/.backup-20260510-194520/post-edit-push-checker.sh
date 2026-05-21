#!/usr/bin/env bash
# RYSE — PostToolUse hook (Shopify push checker)
#
# Détecte si une commande Bash `shopify theme push` retourne "with errors" dans stdout.
# Sans ça, Claude voit "✓ Theme uploaded" en haut et croit que tout est OK,
# mais en bas il y a "with errors" sur des fichiers spécifiques.
#
# Bug observé LMDE 2026-05-10 : 13 push successifs avec "with errors" non détectés
# en amont, cascade de retravaux.

set -uo pipefail

payload=$(cat)
tool_name=$(echo "$payload" | jq -r '.tool_name // empty')

# Skip si pas une commande Bash
if [ "$tool_name" != "Bash" ]; then
  exit 0
fi

# Récupère la commande exécutée et le résultat
command=$(echo "$payload" | jq -r '.tool_input.command // empty')
output=$(echo "$payload" | jq -r '.tool_response.stdout // .tool_response.output // empty')

# Skip si pas une commande shopify theme push
if ! echo "$command" | grep -qE 'shopify\s+theme\s+push'; then
  exit 0
fi

# Détection : "with errors" dans output
if echo "$output" | grep -qiE 'with errors|push failed|invalid'; then
  errors_extracted=$(echo "$output" | grep -iE 'error|invalid|with errors' | head -10)

  # ────────────────────────────────────────────────────────────────────────
  # Bug Shopify CONNU (depuis 2022) : "Type must be defined in schema"
  # → ordre de push qui prioritise schemas avant configs qui les référencent
  # → SOLUTION OFFICIELLE : push en 2 étapes (configs JSON puis sections Liquid)
  # Ref : github.com/Shopify/cli issues sur "Type must be defined"
  # ────────────────────────────────────────────────────────────────────────
  if echo "$output" | grep -qiE 'Type must be defined|n.existe pas|Valeur de type non valide'; then
    cat >&2 <<EOF
⚠️  BUG SHOPIFY CONNU : "Type must be defined in schema" (depuis 2022)
Cause : ordre de push prioritise schemas AVANT configs qui les référencent.

→ SOLUTION OFFICIELLE EN 2 ÉTAPES :
   1. shopify theme push --theme <id> --only "config/*","templates/*"
   2. shopify theme push --theme <id> --only "sections/*","blocks/*","snippets/*"

Ou si tu préfères auto-fix : lancer
   ~/Documents/Claude/RYSE/_scripts/audit-theme-references.sh <theme-dir>
   pour identifier précisément quel block/section est référencé sans fichier.

Errors extracted:
$errors_extracted
EOF
  else
    cat >&2 <<EOF
⚠️  Push Shopify avec erreurs détecté !
Le push a peut-être uploadé une partie mais d'autres fichiers ont été REJETÉS.
Extrait :
$errors_extracted

→ ACTION : ne pas annoncer "push OK" tant que les erreurs ne sont pas résolues.
   Lire output complet : shopify theme push --theme <id> 2>&1 | grep -B2 -A4 error
EOF
  fi
fi

exit 0
