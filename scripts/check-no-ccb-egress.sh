#!/usr/bin/env bash
# Rebase-regression guard: fails if a future merge/rebase from upstream
# reintroduces a hardcoded claude-code-best.win egress default into
# real source code. Test fixtures (which legitimately reference the
# upstream domain in mocked URLs) are excluded.
set -euo pipefail
if grep -rncE "claude-code-best\.win" src packages scripts \
     --include='*.ts' --include='*.tsx' --include='*.cjs' --include='*.json' \
     --exclude-dir='__tests__' --exclude-dir='tests' \
     --exclude='*.test.ts' --exclude='*.test.tsx' \
   | grep -vE ':0$'; then
  echo "FAIL: claude-code-best.win egress default present" >&2
  exit 1
fi
echo "OK: no claude-code-best.win egress defaults"
