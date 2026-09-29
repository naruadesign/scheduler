---
name: page-scaffold
description: Conventions for creating page-level components under src/pages and registering their routes. Use whenever adding or editing a page or route.
---

# Creating a page

Pages live in `src/pages/` and only compose section components; they hold no styling of their own beyond layout wrappers.

## Layout
```
src/pages/<Name>Page.tsx       # composes section components in order
src/pages/<Name>Page.test.tsx  # renders the page, asserts each section heading is present
src/pages/index.ts             # re-exports every page
```

## Rules
- Page component name ends in `Page` (`HomePage`, `ServicesPage`, ...).
- Header and Footer are NOT rendered by pages; the `Layout` route element in `src/App.tsx` renders them once around an `<Outlet />`.
- Register the route in `src/App.tsx` (react-router-dom `Routes`). Current routes: `/`, `/services`, `/online-check-in`, `/find-a-business`.
- Set the document title in the page with a small `useEffect` (`document.title = '... | Round Check'`).
- Add the route to the Header/Footer link data in `src/data/navigation.ts` if it should be reachable.
- A page that needs a section that does not exist yet: create the section first with the `component-scaffold` skill.
- After finishing, run `verify-build` and log via `workflow-log`.
