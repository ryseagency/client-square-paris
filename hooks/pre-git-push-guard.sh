#!/usr/bin/env bash
# RYSE — PreToolUse hook (Bash) — Two guards on git push:
#
# 1. BRANCH GUARD: blocks push to protected branches (main, master, production).
#    Bug fix vs previous version: parses ONLY the push refspec target, not the
#    entire command string. A protected branch name in a commit message or flag
#    value no longer triggers a false positive.
#
# 2. AUTO-MERGE GUARD: blocks push when the branch's PR has auto-merge armed.
#    Race condition this prevents: push after arming = merge on unreviewed code.
#    State source: .claude/auto-merge-armed/<branch-slug> marker written by
#    pre-enable-auto-merge-gate.sh.

set -uo pipefail

payload=$(cat)
tool_name=$(echo "$payload" | jq -r '.tool_name // empty')

if [ "$tool_name" != "Bash" ]; then
  exit 0
fi

command=$(echo "$payload" | jq -r '.tool_input.command // empty')

if ! echo "$command" | grep -qE '\bgit\s+push\b'; then
  exit 0
fi

deny() {
  local reason="$1"
  echo "$reason" >&2
  REASON="$reason" python3 -c '
import json,os,sys
r=os.environ["REASON"]
d={"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":r}}
sys.stdout.write(json.dumps(d))
'
  exit 0
}

# ────────────────────────────────────────────────────────────────────────────
# Extract the push target branch from the command.
#
# Handles:
#   git push origin feature/xyz
#   git push -u origin feature/xyz
#   git push origin HEAD:feature/xyz
#   git push --force-with-lease origin feature/xyz
#   git push                          (implicit: current branch)
#   cd foo && git push origin bar     (chained commands)
#
# Key fix: parses ONLY the git push segment's positional args.
# A protected branch name in a commit message (from a prior command in
# the chain) does NOT trigger a false positive.
# ────────────────────────────────────────────────────────────────────────────

extract_push_target() {
  local cmd="$1"

  local push_segment
  push_segment=$(echo "$cmd" | grep -oE 'git\s+push\b[^;&|]*' | tail -1)

  if [ -z "$push_segment" ]; then
    echo ""
    return
  fi

  local args_str
  args_str=$(echo "$push_segment" | sed -E 's/^git\s+push\s*//')

  local positional=()
  local skip_next=false
  for token in $args_str; do
    if [ "$skip_next" = true ]; then
      skip_next=false
      continue
    fi
    case "$token" in
      -u|--set-upstream|--force|--force-with-lease|-f|--no-verify|--dry-run|-n|--verbose|-v|--quiet|-q|--all|--tags|--delete|-d|--prune)
        continue
        ;;
      --repo|--receive-pack|--exec|-o|--push-option|--recurse-submodules|--signed)
        skip_next=true
        continue
        ;;
      --force-with-lease=*|--repo=*|--push-option=*|--recurse-submodules=*|--signed=*)
        continue
        ;;
      -*)
        continue
        ;;
      *)
        positional+=("$token")
        ;;
    esac
  done

  local refspec="${positional[1]:-}"

  if [ -z "$refspec" ]; then
    git branch --show-current 2>/dev/null || echo ""
    return
  fi

  if echo "$refspec" | grep -q ':'; then
    echo "$refspec" | sed -E 's/^[^:]*://' | sed -E 's|^refs/heads/||'
  else
    echo "$refspec"
  fi
}

TARGET_BRANCH=$(extract_push_target "$command")

if [ -z "$TARGET_BRANCH" ]; then
  TARGET_BRANCH=$(git branch --show-current 2>/dev/null || echo "")
fi

# ────────────────────────────────────────────────────────────────────────────
# Guard 1: Protected branch check (parse target only, not full command)
# ────────────────────────────────────────────────────────────────────────────
PROTECTED_BRANCHES="main master production deploy live"

for pb in $PROTECTED_BRANCHES; do
  if [ "$TARGET_BRANCH" = "$pb" ]; then
    deny "$(cat <<MSG
❌ PUSH BLOQUÉ — branche protégée '$pb'.

→ Les branches protégées ($PROTECTED_BRANCHES) ne reçoivent pas de push direct.
→ Passer par une PR.
MSG
)"
  fi
done

# ────────────────────────────────────────────────────────────────────────────
# Guard 2: Auto-merge armed check
# ────────────────────────────────────────────────────────────────────────────
SLUG=$(echo "$TARGET_BRANCH" | tr '/' '-' | tr -cd '[:alnum:]-_')
ARMED_FILE=".claude/auto-merge-armed/$SLUG"

if [ -f "$ARMED_FILE" ]; then
  deny "$(cat <<MSG
❌ PUSH BLOQUÉ — auto-merge est armé sur la PR de '$TARGET_BRANCH'.

Pusher après l'armement déclenche le merge sur du code potentiellement non revu.

→ Pour pusher : désarmer d'abord l'auto-merge (mcp__github__disable_pr_auto_merge),
  puis supprimer le marqueur : rm $ARMED_FILE
→ Après le push, relancer une revue avant de réarmer.
MSG
)"
fi

exit 0
