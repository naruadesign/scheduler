# Round Check

A single-page appointment-booking app for any kind of business, built as a learning project with
React 19, TypeScript and Vite. "Round Check" is this project's own fictional brand; its layout was
originally modeled on a real haircare chain's public website, then fully rebranded and rewritten
around a generic "book an appointment with any business" concept — see
[Content & assets](#content--assets) below.

## Pages

- **Home** (`/`) — hero, business categories, social proof, feature highlights, app download, "Great news" grid.
- **Services** (`/services`) — business categories, popular services, benefits.
- **Online Check-In** (`/online-check-in`) — how it works, website and app check-in steps, support.
- **Find a Business** (`/find-a-business`) — search and browse a sample business directory.

## Stack

- React 19 + TypeScript, Vite
- react-router-dom for routing
- styled-components for styling (theme in [src/theme.ts](src/theme.ts))
- Vitest + React Testing Library for unit tests

## Project structure

```
src/
  components/<Name>/   # one independent section component per folder
                        # (Component.tsx, .styles.ts, .test.tsx, index.ts)
  components/shared/    # shared primitives: Container, Button, SectionHeading, Placeholder, icons
  components/Layout/    # app shell (Header + <Outlet /> + Footer)
  pages/                # page-level components composed from section components
  data/                 # page content, typed and separated from markup
  theme.ts, GlobalStyle.ts
docs/WORKFLOW.md         # development log kept by the dev-workflow-agent
.claude/agents/           # dev-workflow-agent definition
.claude/skills/           # component-scaffold, page-scaffold, workflow-log, verify-build
```

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run lint       # ESLint
npx tsc -b         # type-check
npm test           # Vitest (single run)
npm run build      # production build
```

## Content & assets

This project's layout and structure were originally modeled on a real haircare chain's live
website (not named in this repo, per the project's rebrand to "Round Check"), then rewritten from
a haircut-salon app into a generic appointment-booking app for any business — see
[docs/WORKFLOW.md](docs/WORKFLOW.md) for that rewrite's log entry. All photography and the logo are
neutral placeholders; no third party's actual imagery or brand marks are reproduced. The business
directory on the Find a Business page uses entirely fictional sample data spanning several
business categories (Health & Wellness, Home Services, Personal Care, Fitness & Recreation,
Professional Services) — there is no real "Round Check" business directory or app behind it. See
[docs/WORKFLOW.md](docs/WORKFLOW.md) for the full list of decisions and known gaps.
