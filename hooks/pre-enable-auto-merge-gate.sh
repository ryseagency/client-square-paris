#!/usr/bin/env bash
# RYSE — PreToolUse hook — Block auto-merge arming without review verdict >= 9
#
# Covers two paths:
#   1. MCP tool: mcp__github__enable_pr_auto_merge
#   2. Bash: gh pr merge --auto (if gh CLI available in env)
#
# Gate: .claude/review-verdicts/<branch-slug>.json must exist with score >= 9.
# On allow: writes .claude/auto-merge-armed/<branch-slug> marker so the push
# guard can block subsequent pushes.

set -uo pipefail

payload=$(cat)
tool_name=$(echo "$payload" | jq -r '.tool_name // empty')

IS_AUTO_MERGE=false

case "$tool_name" in
  mcp__github__enable_pr_auto_merge)
    IS_AUTO_MERGE=true
    ;;
  Bash)
    command=$(echo "$payload" | jq -r '.tool_input.command // empty')
    if echo "$command" | grep -qE '(gh\s+pr\s+merge\s+.*--auto|--auto.*gh\s+pr\s+merge)'; then
      IS_AUTO_MERGE=true
    fi
    ;;
esac

if [ "$IS_AUTO_MERGE" != "true" ]; then
  exit 0
fi

BRANCH=$(git branch --show-current 2>/dev/null || echo "")
if [ -z "$BRANCH" ]; then
  exit 0
fi

SLUG=$(echo "$BRANCH" | tr '/' '-' | tr -cd '[:alnum:]-_')
VERDICT_FILE=".claude/review-verdicts/$SLUG.json"

deny() {
  local reason="$1"
  echo "$reason" >&2
  REASON="$reason" python3 -c '
import json,os
r=os.environ["REASON"]
d={"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":r}}
import sys; sys.stdout.write(json.dumps(d))
'
  exit 0
}

if [ ! -f "$VERDICT_FILE" ]; then
  deny "$(cat <<MSG
❌ AUTO-MERGE BLOQUÉ — aucun verdict de revue trouvé pour la branche '$BRANCH'.

→ Lancer une revue d'abord. Le verdict doit être écrit via:
  hooks/write-review-verdict.sh <score> '$BRANCH' [pr_number]

Le fichier attendu: $VERDICT_FILE
MSG
)"
fi

SCORE=$(jq -r '.score // 0' "$VERDICT_FILE" 2>/dev/null || echo "0")

if [ "$SCORE" -lt 9 ] 2>/dev/null; then
  deny "$(cat <<MSG
❌ AUTO-MERGE BLOQUÉ — verdict de revue insuffisant: $SCORE/10 (minimum requis: 9/10).

→ Corriger les problèmes identifiés dans la revue, puis relancer une revue.
→ Fichier verdict: $VERDICT_FILE
MSG
)"
fi

mkdir -p ".claude/auto-merge-armed"
echo "$BRANCH" > ".claude/auto-merge-armed/$SLUG"
echo "✅ Auto-merge autorisé (verdict: $SCORE/10). Marqueur armé écrit." >&2

exit 0
