#!/bin/bash
# scripts/verify-shadcn-rules.sh
# Mechanical gate for shadcn critical rules per plan + strategist note.
# Exits 1 on any forbidden pattern in app/ or components/site-*.tsx
# Patterns:
#   1. space-[xy]- (no space-y-* / space-x-*)
#   2. Card(Description|Title|Header|Content) with typography overrides in className (text-[, text-base, text-foreground, leading-)
#   3. Horizontal <Field ...> that contains raw <div> wrapping label/desc instead of <FieldContent>

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGETS=("${ROOT_DIR}/app" "${ROOT_DIR}/components/site-"*.tsx)
FAIL=0

echo "=== verify-shadcn-rules.sh ==="
echo "Scanning: ${TARGETS[*]}"

# 1. space-[xy]-
if grep -rnE 'space-[xy]-' "${TARGETS[@]}" 2>/dev/null; then
  echo "VIOLATION: space-[xy]-* found (use gap-* instead)"
  FAIL=1
fi

# 2. Card* className containing forbidden typography tokens
# Look for CardDescription|CardTitle|CardHeader|CardContent followed by className=... with text- or leading-
if grep -rnE 'Card(Description|Title|Header|Content)[^>]*className="[^"]*(text-\[|text-base|text-foreground|leading-)' "${TARGETS[@]}" 2>/dev/null; then
  echo "VIOLATION: Card sub-component has typography override in className (layout only; use semantic or none)"
  FAIL=1
fi

# Also catch className=... on the component itself for those tokens in same line for safety
if grep -rnE '<(CardDescription|CardTitle|CardHeader|CardContent)[^>]*className="[^"]*(text-\[|text-base|text-foreground|leading-)[^"]*"' "${TARGETS[@]}" 2>/dev/null; then
  echo "VIOLATION: Card sub-component className contains text-/leading- overrides"
  FAIL=1
fi

# 3. Horizontal Field using raw div instead of FieldContent for label/desc content
# Heuristic: look for <Field orientation="horizontal" ...> ... <div ...> ... (FieldLabel|FieldDescription) ... </div> ... </Field>
# Simpler: any raw <div class=...> immediately inside a horizontal Field that is not FieldContent
if grep -rnPzo '(?s)<Field[^>]*orientation="horizontal"[^>]*>.*?<div(?![^>]*data-slot="field-content")[^>]*>.*?(FieldLabel|FieldDescription).*?</div>.*?</Field>' "${TARGETS[@]}" 2>/dev/null; then
  echo "VIOLATION: horizontal Field uses raw <div> instead of <FieldContent> for content"
  FAIL=1
fi

# Additional safety: any raw div containing FieldLabel/FieldDescription inside Field (horizontal context)
if grep -rnE '<Field[^>]*orientation="horizontal"[^>]*>[\s\S]{0,300}<div(?!.*data-slot="field-content")[\s\S]{0,300}(FieldLabel|FieldDescription)' "${TARGETS[@]}" 2>/dev/null | head -5; then
  echo "VIOLATION (heuristic): possible raw div wrapper in horizontal Field"
  FAIL=1
fi

if [ $FAIL -eq 1 ]; then
  echo "=== FAIL: shadcn rules violations detected ==="
  exit 1
else
  echo "=== PASS: no forbidden patterns found ==="
  exit 0
fi
