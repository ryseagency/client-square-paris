#!/usr/bin/env bash
# RYSE — Utility: write a review verdict to local state + stdout PR comment template.
#
# Usage: ./write-review-verdict.sh <score> <branch> [pr_number]
#
# Creates .claude/review-verdicts/<branch-slug>.json so hooks can gate auto-merge.
# Prints the greppable PR comment body to stdout for posting.
#
# Verdict file survives subagent death — that's the whole point.

set -euo pipefail

SCORE="${1:?Usage: write-review-verdict.sh <score> <branch> [pr_number]}"
BRANCH="${2:?Usage: write-review-verdict.sh <score> <branch> [pr_number]}"
PR_NUMBER="${3:-0}"

if ! [[ "$SCORE" =~ ^[0-9]+$ ]] || [ "$SCORE" -lt 0 ] || [ "$SCORE" -gt 10 ]; then
  echo "ERROR: score must be 0-10, got '$SCORE'" >&2
  exit 1
fi

SLUG=$(echo "$BRANCH" | tr '/' '-' | tr -cd '[:alnum:]-_')

VERDICT_DIR=".claude/review-verdicts"
mkdir -p "$VERDICT_DIR"

cat > "$VERDICT_DIR/$SLUG.json" <<EOF
{"score":${SCORE},"branch":"${BRANCH}","pr":${PR_NUMBER},"ts":"$(date -u +%Y-%m-%dT%H:%M:%SZ)"}
EOF

echo "Verdict written: $VERDICT_DIR/$SLUG.json (score=$SCORE)" >&2

cat <<EOF
## RYSE Review Verdict

**Score: ${SCORE}/10**

<!-- RYSE-VERDICT:${SCORE} -->
EOF
