# Development Workflow — Round Check

This file is maintained by the `dev-workflow-agent` (see `.claude/agents/dev-workflow-agent.md`)
using the `workflow-log` skill. It tracks what has been built, how it was verified, decisions
made along the way, and known gaps versus the original site this project was modeled on and has
since been fully rebranded and rewritten away from (see the two 2026-09-21 entries below: the
brand rename to "Round Check", then the domain pivot from a haircut-salon app to a generic
appointment-booking-for-any-business app).

## Checklist

### Foundation
- [x] Vite + React 19 + TypeScript project verified (pre-existing)
- [x] react-router-dom, styled-components installed
- [x] Vitest + Testing Library installed and configured (`vite.config.ts`, `src/test/setup.ts`)
- [x] Theme tokens (`src/theme.ts`) from the original reference site's CSS custom properties
- [x] Global styles / reset (`src/GlobalStyle.ts`)
- [x] Google Fonts (Poppins) loaded in `index.html`
- [x] Shared primitives: `Container`, `Button`/`ButtonLink`/`ExternalButtonLink`, `SectionHeading`, `Placeholder`, icon set
- [x] `.claude/agents/dev-workflow-agent.md` + 4 skills (`component-scaffold`, `page-scaffold`, `workflow-log`, `verify-build`)

### Home page (`/`)
- [x] Header (logo, mega-menu style nav, Sign In, Find a Business, responsive hamburger menu)
- [x] Footer (app badges, social links, 4 link columns, legal bar, copyright)
- [x] Hero
- [x] ServiceCategories (scrollable carousel of business categories)
- [x] SocialProof (870k+ reviews stat)
- [x] FeatureShowcase (Online Check-In / Client Notes)
- [x] AppDownload (email form with validation)
- [x] GreatNews (3-card grid)

### Services page (`/services`)
- [x] ServicesHero
- [x] ServicesCategoryGrid (Health & Wellness, Home Services, Personal Care, Fitness & Recreation, Professional Services)
- [x] PopularServicesCarousel (16 example bookable services spanning all 5 categories)
- [x] ServiceBenefits (Client Notes, pre-appointment consultations, consistent results; + note that no pricing is published)

### Online Check-In page (`/online-check-in`)
- [x] CheckInHero
- [x] CheckInIntro
- [x] CheckInSteps (reused for the 5-step website flow and 6-step app flow)
- [x] CheckInQuestions

### Find a Business page (`/find-a-business`)
- [x] BusinessLocatorHero
- [x] BusinessSearchForm (client-side filter by city/state/zip)
- [x] BusinessCard (shows name, category badge, address, hours, phone, wait time)
- [x] BusinessResultsList (uses fictional sample business data — see Open issues)

### Quality
- [x] Fully responsive (mobile-first, hamburger nav under `lg` breakpoint)
- [x] Unit tests for every component (20 files / 24 tests)
- [x] `npm run lint` clean
- [x] `npx tsc -b` clean
- [x] `npm run build` succeeds
- [x] Vite starter boilerplate removed (`App.css`, default logos, `hero.png`)

### Rebrand
- [x] All "Great Clips" text, labels, comments and links replaced with "Round Check" throughout the app, docs, agent and skills

### Domain pivot (haircut/salon → any-business appointments)
- [x] All haircut/salon/hair-domain vocabulary removed from app text, code identifiers, comments, tests and docs
- [x] Salon Locator renamed to Find a Business (`SalonLocatorPage`→`BusinessLocatorPage`, `SalonLocatorHero`→`BusinessLocatorHero`, `SalonSearchForm`→`BusinessSearchForm`, `SalonCard`→`BusinessCard`, `SalonResultsList`→`BusinessResultsList`, `data/salons.ts`→`data/businesses.ts`, type `Salon`→`Business`, route `/salon-locator`→`/find-a-business`)
- [x] Men's-haircut-styles carousel replaced with `PopularServicesCarousel` showing 16 generic example services across business categories
- [x] Home + Services category cards rewritten to 5 generic business categories (Health & Wellness, Home Services, Personal Care, Fitness & Recreation, Professional Services)
- [x] "Clip Notes" feature renamed to "Client Notes"; its copy genericized
- [x] Nav restructured: Products and Promotions menus (hair-product lines, sports sponsorship promos) dropped — no generic equivalent; Services menu items genericized; "Salon Careers"→"Careers", "Franchising"→"List Your Business"
- [x] Route `/haircare-services` renamed to `/services`

## Log

### 2026-09-21 — Domain pivot: haircut/salon app → any-business appointment booking
- User clarified this app is not specifically for haircuts or salons — it's meant to book
  appointments for any kind of business — and asked to remove every trace of "haircut,"
  "haircuts" and "salon," replacing the underlying concepts with "business" and "appointments."
- Asked the user four scoping questions first, since this changes information architecture, not
  just wording: what replaces the haircut-styles carousel on the Services page (→ generic example
  services), what the home-page demographic haircut categories become (→ 5 generic business
  categories), whether to rename code identifiers containing "Salon" (→ yes, fully), and who picks
  replacement names for "Clip Notes" and the taglines (→ agent's judgment).
- **Data layer rewritten:**
  - [businesses.ts](../src/data/businesses.ts) replaces `salons.ts`: `Business` type (added a
    `category` field), 8 fictional sample businesses spanning all 5 categories.
  - [home.ts](../src/data/home.ts): hero copy reworded off "look GREAT® haircut" branding;
    `serviceCategories`→`businessCategories` (5 generic categories replace
    Men's/Women's/Kids'/Seniors' Haircuts + Additional Services); reviews/App Download copy
    genericized; `features.slides` "Clip Notes"→"Client Notes"; `greatNews` franchising/lookbook
    copy replaced with partnership/business-discovery copy pointing at fictional `roundcheck.com`
    paths (no real franchising program exists for this fictional brand).
  - [services.ts](../src/data/services.ts): `servicesCategories` now the same 5 generic
    categories; the 16-item men's-hairstyle list (`mensStyles`) replaced by `popularServices` — 16
    invented example services (dental checkup, house cleaning, personal training, tax
    consultation, dog grooming, etc.) spanning multiple categories, each with 3 descriptive tags in
    the same shape as the original data so the carousel UI needed no restructuring; unused
    `additionalServices` array (Neck Trim/Beard Trim/Shampoo) deleted; `serviceBenefits` and
    `servicesNote` genericized.
  - [checkIn.ts](../src/data/checkIn.ts): "salon" → "business" throughout; "how many people will
    be getting haircuts" → "how many people the appointment is for" in both the website and app
    check-in step lists.
  - [navigation.ts](../src/data/navigation.ts): dropped the **Products** nav group (hair-product
    lines: Solutions/Tea Tree/Latitude by \[brand\], salon products) and the **Promotions** group
    (Senior Discounts, Haircare Sale, sports-league sponsorships) entirely — these are
    haircare-industry marketing content with no generic "any business" equivalent worth
    fabricating. Services group items genericized to the 5 categories + Online Check-In + app +
    Client Notes + Blog. Secondary links "Salon Careers"→"Careers", "Franchising"→"List Your
    Business" (a marketplace platform's equivalent of franchising is recruiting businesses to list,
    not selling salon franchises).
- **Components renamed** (folder + file + test + all imports) to drop "Salon"/"Haircut" from code,
  not just displayed text: `SalonCard`→[BusinessCard](../src/components/BusinessCard),
  `SalonLocatorHero`→[BusinessLocatorHero](../src/components/BusinessLocatorHero),
  `SalonSearchForm`→[BusinessSearchForm](../src/components/BusinessSearchForm),
  `SalonResultsList`→[BusinessResultsList](../src/components/BusinessResultsList),
  `HaircutStylesCarousel`→[PopularServicesCarousel](../src/components/PopularServicesCarousel),
  `SalonLocatorPage`→[BusinessLocatorPage](../src/pages/BusinessLocatorPage.tsx). `BusinessCard`
  gained a category badge (using the new `Business.category` field) so the sample data visibly
  spans multiple kinds of business, not just one.
- **Routes changed** in [App.tsx](../src/App.tsx): `/haircare-services`→`/services`,
  `/salon-locator`→`/find-a-business`. `/online-check-in` unchanged — reframed as arriving and
  checking in for an appointment at any business, which needed no structural change, just copy.
- Updated every `ButtonLink`/link pointing at the old routes (Header, SocialProof, ServicesHero,
  CheckInHero) and every test asserting on old copy, headings or hrefs across ~10 test files.
- Swept the whole `src/` tree for `haircut|salon|hair|haircare|stylist|barber|Clip Notes` after
  the rewrite — clean.
- Updated `README.md`, this file, `.claude/agents/dev-workflow-agent.md` and
  `.claude/skills/page-scaffold/SKILL.md` to describe the app as an any-business appointment
  platform and list the current routes/component names, so future work doesn't reintroduce
  haircut-salon assumptions.
- Verified via `verify-build`: `npm run lint`, `npx tsc -b`, `npm test` (24/24), `npm run build` —
  all clean after the rewrite.

### 2026-09-21 — Rebrand to "Round Check"
- User asked to remove every reference/link/text/content naming the original chain and replace it
  with "Round Check" everywhere in the app.
- Mechanically renamed the literal phrase across all source, data, test, doc, agent and skill
  files: brand text ("Great Clips" → "Round Check"), the logo split text in
  [Header.tsx](../src/components/Header/Header.tsx) (missed by the mechanical pass since it was
  split as `Great`/`Clips` across a `<span>`, fixed by hand), the nav `SITE` constant and all
  external URLs (`greatclips.com` → `roundcheck.com`, `jobs.greatclips.com` →
  `jobs.roundcheck.com`), and the five social handles in
  [navigation.ts](../src/data/navigation.ts).
- Fixed two things the blind rename got wrong: (1) grammar — "Great Clips'" (correct possessive for
  a word ending in *s*) became "Round Check'" (missing the *s*) in a few doc sentences; fixed to
  "Round Check's". (2) A leftover "®" on "Round Check app®" in
  [checkIn.ts](../src/data/checkIn.ts) — that mark was the original chain's registered trademark
  and doesn't apply to this project's own placeholder brand, so it was dropped (left standalone
  "GREAT®" stylings alone, since those don't literally say the original chain's name and are out of
  scope for this change).
- Updated the two tests that asserted on renamed strings ([Header.test.tsx](../src/components/Header/Header.test.tsx),
  [CheckInQuestions.test.tsx](../src/components/CheckInQuestions/CheckInQuestions.test.tsx)).
- Reworded doc/narrative sentences that the blind rename made factually wrong: e.g. "Fetched
  roundcheck.com" (that domain isn't real, so this project never fetched it) became "Fetched the
  original reference site's pages" — content sourcing is now described without naming the original
  chain, per the request, while staying accurate about what was actually done.
- Verified via `verify-build`: `npm run lint`, `npx tsc -b`, `npm test` (24/24), `npm run build` —
  all clean after the rename.
- **Known side effect, flagged rather than silently shipped:** nav/footer links to pages this app
  never built (Products, Promotions, Blog, Lookbook, Careers, Franchising, legal pages, customer
  service) now point at `https://www.roundcheck.com/...`, a domain that does not exist. Before the
  rebrand these pointed at the real, working site being modeled; now they are dead links like any
  other unbuilt placeholder route. Not fixed without user direction, since "replace the link" was
  the explicit instruction and there is no real Round Check site to link to instead.

### 2026-09-21 — Initial build
- Scoped the project with the user: homepage + Services, Online Check-In, Salon Locator pages;
  styled-components; react-router-dom; placeholder imagery; Claude Code subagent + 4 skills;
  `docs/WORKFLOW.md` as the log. (Services/Salon Locator were later renamed — see the domain-pivot
  entry above.)
- Fetched the original reference site's pages (home, online-check-in, haircare-services,
  haircare-services/mens-hair-services) via WebFetch and pulled its CSS for color tokens, font
  (Poppins) and radii.
- Installed `react-router-dom`, `styled-components`, `vitest`, `jsdom`, `@testing-library/react`,
  `@testing-library/jest-dom`, `@testing-library/user-event`.
- Built shared primitives, theme, global styles, all section components under `src/components/<Name>/`
  (own styles + test + index per skill `component-scaffold`), 4 pages under `src/pages/` per
  `page-scaffold`, and wired routes in `src/App.tsx` with a shared `Layout` (`Header`/`Footer`
  around an `<Outlet />`).
- Verified via `verify-build`: `npm run lint` (1 fast-refresh error found and fixed — removed an
  unused named export from `Icons.tsx`), `npx tsc -b` (clean), `npm test` (24/24 passing after
  fixing two categories of test bugs — see Decisions), `npm run build` (clean, 350 kB JS / 0.03 kB CSS).
- Removed Vite starter boilerplate (`App.css`, `hero.png`, `react.svg`, `vite.svg`, `public/icons.svg`).

## Decisions

- **The app's domain is generic appointment booking for any business**, not a haircut/salon
  service — see the 2026-09-21 domain-pivot entry. All future content additions should use the 5
  established business categories (Health & Wellness, Home Services, Personal Care, Fitness &
  Recreation, Professional Services) or invent new generic ones; do not reintroduce hair-salon-
  specific services or categories.
- **Products/Promotions nav groups were dropped, not genericized.** They were entirely
  haircare-industry marketing content (product lines, sports sponsorships) with no natural
  "any business" equivalent; inventing one would be pure fabrication with no source to adapt from.
- **Images**: all photography/logo are neutral inline-SVG/gradient `Placeholder` components with a
  descriptive `aria-label`, never the original site's actual assets (trademark/copyright).
- **Social icons**: recreated as generic outline icons (Feather-style), not traced from the
  original site's own icon font, to avoid copying its asset.
- **Business Locator data is fictional.** A real business directory like this would need a
  separate, licensed data source with live wait times that Claude Code cannot fetch or license; 8
  sample businesses with invented addresses/wait times/categories are used instead, clearly
  labeled as sample data in the UI.
- **Nav links to pages we didn't build** (formerly Products/Promotions items, Blog, Careers detail,
  etc.) point to `https://www.roundcheck.com/...` and open in a new tab. **This domain does not
  exist** — see the rebrand entry above for why these are dead links.
- **Test fixes**: (1) jsdom's computed-style engine does not evaluate `@media` rules, so the
  desktop-only nav/actions read as `hidden` to Testing Library; those queries pass `hidden: true`.
  (2) `Placeholder`'s `aria-label` duplicates its visible label text, so section tests assert via
  `getByRole('heading', ...)` instead of `getByText` where a card title matches its own image
  placeholder's label.

## Open issues / caveats

- Blog, Client Notes detail, the Round Check App marketing page, Careers detail, "List Your
  Business," and all footer legal pages are **not** built in this app — nav links to them point at
  `roundcheck.com`/`jobs.roundcheck.com`, which are **fictional domains that do not resolve** (see
  the rebrand entry). Clicking these in the running app will fail to load, same as any placeholder
  link.
- Find a Business has no real map or geolocation; it's a client-side filter over fictional sample
  data, and the 5 business categories are illustrative only — no real category taxonomy or
  business-onboarding flow exists.
- "Sign In" is a placeholder link (`/sign-in`) with no destination page.
- Visual fidelity is based on fetched HTML/CSS text (colors, fonts, layout structure) from the
  original reference site, not a pixel-level screenshot comparison, since Claude Code cannot
  render a live page visually. Since the domain pivot, most body copy is now original writing for
  the generic-business concept rather than adapted from the reference site.
