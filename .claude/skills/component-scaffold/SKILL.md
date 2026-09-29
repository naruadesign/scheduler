---
name: component-scaffold
description: Conventions for creating a section or shared UI component in this project (folder layout, styled-components, typing, tests). Use whenever adding or editing anything under src/components.
---

# Creating a component

Each component is independent: it imports only from `src/theme`, `src/components/shared`, `src/data` and third-party packages, never from a sibling section component.

## Layout
```
src/components/<Name>/
  <Name>.tsx          # component (named export + default export not needed)
  <Name>.styles.ts    # styled-components
  <Name>.test.tsx     # Vitest + Testing Library render test
  index.ts            # export { <Name> } from './<Name>'
```
Shared primitives (Container, Button, SectionHeading) live in `src/components/shared/`.

## Rules
- TypeScript only. `erasableSyntaxOnly` is on: no enums, no parameter properties.
- Props are typed with an `interface <Name>Props`; content comes from `src/data/*.ts` or props, not hard-coded in JSX where it is a list.
- Styled-components: use theme tokens (`theme.colors.primary`, `theme.breakpoints.md`), transient props prefixed with `$` (e.g. `$active`), no inline styles.
- Mobile first: base styles for phones, `@media (min-width: ${theme.breakpoints.md})` to grow.
- Accessibility: semantic elements, `aria-label` on icon-only buttons, visible focus state, alt text for meaningful images (`alt=""` for decorative).
- No trademarked images: use inline SVG or `Placeholder` from shared.
- Test: render it with `renderWithTheme` from `src/test/utils` and assert one key heading/role; add interaction tests for stateful components.
- After creating, run the `verify-build` skill and log via `workflow-log`.
