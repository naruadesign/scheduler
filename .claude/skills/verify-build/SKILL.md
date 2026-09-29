---
name: verify-build
description: Run lint, type-check, tests and production build for this project and fix failures. Use before declaring any change complete.
---

# Verify

Run from the project root, in this order, and stop to fix the first failure:

1. `npm run lint`
2. `npx tsc -b` (type-check)
3. `npm test` (Vitest, single run)
4. `npm run build`

Rules:
- Fix the root cause; do not silence with `eslint-disable`, `@ts-ignore` or by deleting tests.
- Report the actual result of each command. If something cannot be run, say so.
- Once all four pass, tell the caller so it can tick the checklist via `workflow-log`.
