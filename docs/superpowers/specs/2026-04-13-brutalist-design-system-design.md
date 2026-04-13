# Brutalist Design System — Design Spec

**Date:** 2026-04-13
**Project:** EnnBi website redesign
**Scope:** Phase 1 — foundational design system only (tokens + primitives + styleguide). Page rebuilds happen in a separate Phase 2 session.

## Goal

Replace the current generic "AI-SaaS template" aesthetic (gradient blobs, glassmorphism, Space Grotesk, radiant+tango palette) with a brutalist, dark, engineering-firm design system. Deliver this as a foundation — tokens, base CSS, component primitives, live styleguide — without visually breaking the existing homepage during rollout. A follow-up session will apply the system to every page.

## Aesthetic direction (locked in brainstorm)

| Decision | Value |
|---|---|
| Archetype | Technical / Engineering-First |
| Mood | Brutalist Monochrome |
| Accent color | Mint Teal `#14b8a6` |
| Display font | Archivo Black (Google Fonts) |
| Body font | IBM Plex Sans (Google Fonts) |
| Mono font | IBM Plex Mono (Google Fonts) |
| Theme | Dark only |
| Shadows | Hybrid — flat default, hard offset (6px 6px 0 mint) on primary CTAs only |
| Border radius | 2px on everything |

References: Cloudflare (dark variants), Vercel, Fly.io, Railway — brutalist edges balanced with engineering restraint.

## Architecture & file layout

### New directories and files

```
src/
  design/
    tokens.css       CSS custom properties (colors, radii, shadows, motion)
    base.css         reset + base element styles + global focus ring
  components/
    ui/
      Button.tsx
      Card.tsx
      Badge.tsx
      Input.tsx
      Textarea.tsx
      Section.tsx
      Container.tsx
      Eyebrow.tsx
      Link.tsx
      index.ts       barrel export
    Styleguide.tsx   single-file /styleguide page
docs/
  superpowers/
    specs/
      2026-04-13-brutalist-design-system-design.md   (this file)
```

### Changes to existing files (Phase 1, additive only)

- `tailwind.config.js` — **add** `ink` neutral palette, `mint` accent palette, new font families in `fontFamily`, custom `boxShadow` utilities. **Keep** existing `primary`, `accent`, `radiant`, `tango` palettes and `font-display: Space Grotesk` untouched so existing sections keep rendering.
- `src/index.css` — **prepend** imports for `design/tokens.css` and `design/base.css`. **Keep** existing `.btn`, `.btn-primary`, `.card`, `.glass-morph`, `.section-heading`, `.text-gradient`, `.reveal`, `.stagger-fade-in` classes untouched.
- `src/App.tsx` — **add** a lazy-loaded route `<Route path="/styleguide" element={<Suspense><Styleguide /></Suspense>} />`. No changes to existing routes or `useEffect`.
- `index.html` — **add** `<link rel="preconnect">` + `<link rel="stylesheet">` tags for Archivo Black, IBM Plex Sans, IBM Plex Mono via Google Fonts. **Keep** the existing Anton link. Font loading lives in `index.html` (not a separate CSS file) to avoid the `@import` render-blocking penalty.
- `.gitignore` — already updated earlier to ignore `.superpowers/`.

**No existing component, section, or CSS class is modified or removed in Phase 1.** The homepage renders byte-identically to `main` before merge.

## Design tokens

### Colors

Declared as CSS custom properties in `src/design/tokens.css` and mapped into Tailwind utility classes via `tailwind.config.js`.

**Neutrals — `ink` scale:**
```
ink-950  #050505   page background
ink-900  #0a0a0a   primary surface
ink-800  #141414   elevated surface (cards, nav bg)
ink-700  #1f1f1f   hairline borders
ink-600  #2e2e2e   stronger borders
ink-500  #525252   tertiary / muted text
ink-400  #737373   secondary text labels
ink-300  #a3a3a3   secondary body text
ink-200  #d4d4d4   primary body text
ink-100  #ededed   emphasized body text
ink-50   #fafafa   highest contrast / headings
```

**Accent — `mint` scale (Tailwind utility name; CSS var layer uses `--accent-*`):**
```
mint-900  #042f2e
mint-700  #0f766e
mint-500  #14b8a6   the chosen mint teal (canonical accent)
mint-300  #5eead4   hover-lighten
mint-100  #ccfbf1   subtle fills
```

Note: the Tailwind utility is named `mint` during Phase 1 to avoid collision with the existing purple `accent` palette. CSS custom properties use the semantic name `--accent-500`. When Phase 2 deletes the legacy palette, the Tailwind utility is renamed `mint → accent` in a single pass.

**Semantic (declared now, primitives don't use yet):**
```
success  #22c55e    warning  #f59e0b    danger  #ef4444    info  #14b8a6
```

### Typography

13 named scale entries. Declared as Tailwind `fontSize` tuples with `[size, { lineHeight, letterSpacing, fontWeight, fontFamily }]`.

| Token | Size | Line-height | Family | Weight | Use |
|---|---|---|---|---|---|
| `display-xl` | 6rem | 0.95 | Archivo Black | 900 | page-level headline |
| `display-lg` | 4.5rem | 0.95 | Archivo Black | 900 | hero headline |
| `display-md` | 3.5rem | 1.00 | Archivo Black | 900 | section openers |
| `display-sm` | 2.5rem | 1.05 | Archivo Black | 900 | smaller section titles |
| `heading-xl` | 2rem | 1.15 | Archivo Black | 900 | card/panel titles |
| `heading-lg` | 1.5rem | 1.2 | Archivo Black | 900 | |
| `heading-md` | 1.125rem | 1.3 | IBM Plex Sans | 700 | |
| `heading-sm` | 1rem | 1.4 | IBM Plex Sans | 700 | |
| `body-lg` | 1.125rem | 1.5 | IBM Plex Sans | 400 | lead paragraphs |
| `body-md` | 0.9375rem | 1.55 | IBM Plex Sans | 400 | default body |
| `body-sm` | 0.8125rem | 1.55 | IBM Plex Sans | 400 | dense text |
| `caption` | 0.75rem | 1.5 | IBM Plex Sans | 400 | footnote |
| `label` | 0.6875rem | 1.4 | IBM Plex Mono | 500 | eyebrow, UPPERCASE, 0.1em tracking |
| `code` | 0.875rem | 1.5 | IBM Plex Mono | 400 | inline code |

All `display-*` tokens force `letter-spacing: -0.02em` and `text-transform: uppercase` by default (Archivo Black reads best uppercase).

### Spacing

Tailwind default 4px rhythm. No custom additions.

### Radius

```
radius-none  0
radius-xs    2px   ← default everywhere
```

### Shadows

```
shadow-none           none                                       default for cards, panels
shadow-offset         6px 6px 0 0 var(--accent-500)              primary CTA rest
shadow-offset-hover   3px 3px 0 0 var(--accent-500)              primary CTA hover (paired with translate 3px 3px)
shadow-offset-active  0 0 0 0 transparent                        primary CTA active (paired with translate 6px 6px)
```

Only primary CTAs use offset shadows. Everything else is flat.

### Borders

```
border-default  1px solid var(--ink-700)       hairlines, card edges
border-strong   1px solid var(--ink-300)       interactive defaults
border-accent   1px solid var(--accent-500)    selected / focused / active
border-thick    2px solid var(--accent-500)    emphasized elements
```

### Motion

```
duration-fast   120ms     hover color shifts, focus rings
duration-base   200ms     button press, card transitions
duration-slow   350ms     larger movements, section transitions

ease-out        cubic-bezier(0.2, 0, 0, 1)
ease-in-out     cubic-bezier(0.4, 0, 0.2, 1)
```

### Focus ring

```
outline: 2px solid var(--accent-500);
outline-offset: 2px;
```

Applied globally via `base.css` to all `:focus-visible` states. Never removed.

## Component primitives

Each primitive is a single `.tsx` file in `src/components/ui/`. All primitives consume tokens only (no magic values in component files). All primitives are re-exported from `src/components/ui/index.ts`.

### Button

**API:**
```tsx
<Button
  variant="primary" | "secondary" | "ghost"
  size="sm" | "md" | "lg"
  as="button" | "a" | typeof Link
  href?={string}
  to?={string}
  disabled?={boolean}
  leftIcon?={ReactNode}
  rightIcon?={ReactNode}
  onClick?={(e) => void}
>Label</Button>
```

**Variants:**
- `primary` — `bg-ink-50 text-ink-950`, `border-thick`, `shadow-offset`. Hover: `translate(3px, 3px)` + `shadow-offset-hover`. Active: `translate(6px, 6px)` + `shadow-offset-active`. The hybrid brutalist press-down.
- `secondary` — transparent bg, `text-ink-50`, `border-strong`. Hover: border becomes `accent-500`.
- `ghost` — transparent bg, `text-ink-200`, no border. Hover: `text-ink-50`, mint underline.

**Sizes:** `sm` 32px tall, `md` 40px, `lg` 48px. Label is always IBM Plex Mono 500, uppercase, 0.1em tracking.

**`as` prop** lets the component render as `<button>` (default), `<a>` (when `href` provided), or React Router `<Link>` (when `to` provided), without prop drilling.

### Card

**API:**
```tsx
<Card
  padding="sm" | "md" | "lg"
  variant="default" | "outlined" | "filled"
  interactive?={boolean}
>{children}</Card>
```

- `default` — `bg-ink-900 border-default`, no shadow.
- `outlined` — transparent bg, `border-strong`.
- `filled` — `bg-ink-800 border-default` (slight elevation).
- `interactive={true}` — hover shifts border to `accent-500`, cursor pointer.

Padding: `sm`=16px, `md`=24px, `lg`=32px.

### Badge

**API:**
```tsx
<Badge variant="default" | "accent" | "outline" size="sm" | "md">Label</Badge>
```

- `default` — `bg-ink-800 text-ink-200`, IBM Plex Mono, uppercase, 0.1em tracking.
- `accent` — `bg-accent-500 text-ink-950`. For emphasis.
- `outline` — `border-default text-ink-300`.

### Input & Textarea

**API:**
```tsx
<Input
  type="text" | "email" | "tel" | "url" | "password"
  label={string}
  helperText?={string}
  error?={string}
  placeholder?={string}
  value?={string}
  onChange?={(e) => void}
  disabled?={boolean}
  required?={boolean}
  id?={string}
  name?={string}
/>
```

Same API for `Textarea` plus `rows?={number}`.

- Background `ink-900`, border `default`, text `ink-50`, placeholder `ink-500`.
- Focus: border `accent-500`, 2px outline offset. No glow.
- Error: border `danger`, helper text `danger`.
- Label is rendered as an Eyebrow (Plex Mono label style, `ink-400`) above the input.
- Native HTML5 validation — no custom validation library.

### Section

**API:**
```tsx
<Section
  id?={string}
  eyebrow?={string}
  title?={string}
  variant="default" | "bordered"
>{children}</Section>
```

Full-width `<section>` with vertical padding `py-24 md:py-32`. Optional `eyebrow` renders as Eyebrow; `title` renders as `heading-xl` (Archivo Black). `bordered` variant adds `border-t border-default`.

### Container

**API:**
```tsx
<Container size="sm" | "md" | "lg" | "full">{children}</Container>
```

- Horizontal padding `px-6 md:px-8` + max-width wrapper.
- `sm`=640px, `md`=1024px, `lg`=1280px, `full`=none.
- No vertical padding (Section owns rhythm).

### Eyebrow

**API:**
```tsx
<Eyebrow withDot?={boolean}>LABEL</Eyebrow>
```

IBM Plex Mono 500, 11px, uppercase, 0.1em tracking, `ink-400`. If `withDot`, prepends a 5px mint circle (for status eyebrows).

### Link

**API:**
```tsx
<Link
  to?={string}
  href?={string}
  variant="default" | "accent" | "inline"
  external?={boolean}
>Label</Link>
```

- `default` — `ink-200`, underline on hover.
- `accent` — `accent-500`, always underlined.
- `inline` — inherits parent color, mint underline with left-to-right wipe animation on hover (CSS `background-size`, no JS).

`to` renders `<Link>` from react-router-dom; `href` renders `<a>`. `external={true}` adds `target="_blank" rel="noreferrer noopener"`.

### Not building in Phase 1

Modal, Dropdown/Select, Tooltip, Toast, Data Table, Tabs, Accordion. Add when a real consumer requires them.

## Styleguide route

**Route:** `/styleguide` (lazy-loaded via `React.lazy`, not linked in main nav).

**Layout:** Two-column. 240px sticky left nav with scroll-spy anchor links. Full-width content column. Mobile: nav becomes a horizontal pill list at the top.

**Page background:** `ink-950`. Content panels on `ink-900`.

**Built with the system's own primitives** (`Section`, `Container`, `Card`, `Button`, etc.) — the styleguide is its own acceptance test.

### Sections rendered on the page (in order)

1. **Header** — Eyebrow `// DESIGN SYSTEM v0.1`, display-lg title, body intro.
2. **Colors** — Swatch grid for Ink, Accent (mint), Semantic. 64px chip + name + hex + usage note. Click-to-copy hex.
3. **Typography** — Each of the 13 scale entries rendered with real sample text, labeled with token name and spec annotation below.
4. **Spacing & Radius** — Visual tape measure for 4px rhythm (4, 8, 16, 24, 32, 48, 64, 96) + card showing 2px radius.
5. **Shadows** — Three primary buttons side-by-side, locked into Rest / Hover / Active states (not hover-dependent). Rule explained in a caption.
6. **Borders** — Four stacked panels labeled with each border token.
7. **Buttons** — 3 variants × 3 sizes grid. Below: disabled, with-icon, `as="a"` examples.
8. **Cards** — Three variants side-by-side with sample content. One `interactive` card.
9. **Badges** — Row of every variant × size combo, plus real-usage examples.
10. **Inputs** — Six states in a 2-column grid for Input and Textarea: default, focused, filled, error, disabled, with-helper-text.
11. **Section & Container** — Visible outlines around dummy instances showing scaffolding.
12. **Eyebrow** — Three examples: plain, with dot, as part of a Section header.
13. **Link** — Paragraph of body text with all three link variants inline.
14. **Motion** — Four clickable tiles replaying transitions (fast / base / slow / button press).
15. **Footer** — "Primitives missing? Add to `src/design/TODO.md`" + token file locations.

Scroll-spy via `IntersectionObserver` (same pattern already used in `App.tsx:59-71`).

## Rollout (two phases)

### Phase 1 (this spec)

Ship as a single branch `design-system`, five commits:

1. `Add design system tokens and base CSS` — `src/design/tokens.css`, `base.css`; wire into `src/index.css`.
2. `Extend Tailwind config and load new fonts` — additive `tailwind.config.js` changes + Google Fonts `<link>` tags in `index.html`.
3. `Add UI primitive components` — nine primitives + barrel.
4. `Add Styleguide route` — `Styleguide.tsx` + lazy route in `App.tsx`.
5. `Update docs and add design system entry point notes` — optional polish commit.

**Validation gates:**
- `npm run build` passes with zero new warnings.
- Homepage renders identically to pre-branch `main` (spot-check Hero, About, Services, Footer).
- `/styleguide` loads without console errors.
- `npm run dev` hot-reloads the styleguide.
- All primitives show visible focus rings on keyboard tab.

**Merge strategy:** regular merge commit (no squash) to preserve commit history for Phase 2.

### Phase 2 (future session, not scoped here)

Rebuild homepage sections one at a time. After each section stops referencing legacy tokens/classes, delete those tokens/classes. Final cleanup commit removes old palettes (`primary`, `accent`, `radiant`, `tango`), old utility classes (`.btn`, `.card`, `.glass-morph`, `.section-heading`, `.text-gradient`), old font loading (Anton, Space Grotesk), and renames Tailwind utility `mint → accent`.

## Testing

No automated tests in Phase 1. Primitives have no logic to unit-test — they are thin styled wrappers over HTML elements. The `/styleguide` page is the acceptance test: if every section renders correctly with all interactive states working, the system is validated. When Phase 2 introduces components with real behavior (form submission, modal state machines), unit tests are added at that point.

## Accessibility

- All interactive elements have visible `:focus-visible` rings via global base.css.
- All form inputs have associated labels (via the `label` prop that renders a `<label htmlFor={id}>`).
- Buttons rendered as `<a>` include `role="button"` and keyboard handlers if they don't have `href`.
- Color contrast: ink-50 on ink-950 is 19.5:1 (WCAG AAA). Accent-500 on ink-950 is 8.2:1 (WCAG AA). Ink-300 on ink-950 is 7.1:1 (WCAG AA).
- No reliance on color alone for state signaling — borders and icons accompany color changes (error states have border + text change, not just color).

## Rollback

Phase 1 is purely additive. To roll back, `git revert` the merge commit — the codebase returns to the pre-design-system state with zero residual changes.
