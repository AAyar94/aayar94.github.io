# Migrating from v1 (Classic) to v2 (Bento)

v2 is a **visual** overhaul — the markup, styling system, fonts and layout were
rebuilt. The good news: **your content carries over unchanged**. Only custom
*styles* and any edits to the section components need re-applying.

> Prefer the classic look? Stay on v1 — `git clone -b v1 https://github.com/mayankagarwal09/dev-portfolio`
> or the [v1.0.0 release](https://github.com/mayankagarwal09/dev-portfolio/releases/tag/v1.0.0). No migration needed.

---

## TL;DR

- ✅ **Data is compatible** — all `public/profile/*.json` and `public/images/*`
  work as-is (one new *optional* field: `home.json` → `status`).
- ⚠️ **Styling changed** — custom colours/CSS must move to the new design tokens.
- ⚠️ **Layout is now a bento grid** — new span utilities; Bootstrap-style
  `.col-*` classes are gone for tiles.
- ⚠️ **`react-chrono` removed** — Education is now a custom timeline.
- 🌙 **Dark-first** by default (`useDarkMode(true)` in `src/App.jsx`).

---

## Recommended upgrade path

Easiest is to start from a fresh v2 clone and copy your content in:

```bash
git clone https://github.com/mayankagarwal09/dev-portfolio dev-portfolio-v2
cd dev-portfolio-v2
# copy your data + images from your v1 project
cp -r ../<your-v1>/public/profile ./public/
cp -r ../<your-v1>/public/images  ./public/
npm install && npm run dev
```

Then re-apply any custom **styles** (see below). If you maintained a fork, you
can instead merge `master` and resolve conflicts in `src/` — but expect the
visual files to be rewritten.

---

## What changed (breaking)

### 1. Theming — `src/theme/themes.js`
Restructured around a neutral ramp + a single accent. Existing keys are kept so
nothing breaks, but values are retuned and **new keys were added**:
`textMuted`, `accentColor2` (gradient partner), `accentSoft`, `glow1`, `glow2`,
`navbarBackground`, `shadowSm`, `shadowMd`, `timelineLineColor`.
→ Re-enter your brand colours here under `lightTheme` / `darkTheme`.

### 2. Design tokens — `src/theme/GlobalStyles.js`
The theme is now published as **CSS custom properties** consumed across
`src/css/`: colour (`--accent`, `--bg`, `--text`, `--surface`, `--border`…),
spacing (`--space-1…8`), `--radius-*`, `--shadow-*`, motion (`--ease`, `--dur`),
and fonts (`--font-sans|display|mono`).
→ Custom CSS should use these instead of hard-coded values.

### 3. Fonts
v2 loads **Inter / Fraunces / JetBrains Mono** via a `<link>` in `index.html`
plus the `--font-*` tokens (v1 used the system stack). Swap the Google Fonts
link and tokens to change them.

### 4. Layout — bento grid + span utilities
Sections are bento grids. Tiles use **`.span-2 / .span-3 / .span-4 / .span-6`**
and **`.rspan-2`** (renamed from `col-*` to avoid clashing with Bootstrap's grid
classes). If you hand-edited the old single-column layouts, redo them with tiles.

### 5. CSS files & class names
- Removed: `src/css/experience.css`, `src/css/education.css`.
- Current: `home.css`, `about.css`, `skills.css`, `projects.css`, `timeline.css`.
- New class families: timeline `.tl*`, project cards `.project-card__*`,
  skills `.skill-*`. Old selectors no longer apply.

### 6. Removed: `react-chrono` + legacy timeline
`react-chrono` and `src/components/timeline/{Timeline,TimelineItem}.jsx` were
deleted. **Experience** and **Education** now share one custom timeline
(`src/css/timeline.css`). Any Chrono prop customisation must be redone there.

### 7. Section components rewritten
`Home`, `About`, `Skills`, `Projects`, `Experience`, `Education` have new markup.
Custom logic in these needs re-applying on top of the v2 versions.

---

## Data compatibility

| File | Status in v2 |
| ---- | ------------ |
| `navbar.json`, `routes.json` | unchanged |
| `about.json`, `skills.json`, `projects.json`, `experiences.json`, `education.json`, `social.json` | unchanged |
| `home.json` | unchanged + new **optional** `status` (hero label; hidden if omitted) |
| `public/images/*` | unchanged |

So your text and images move over verbatim — only styling needs attention.

---

## Migrating custom styles — checklist

1. Move custom colours into `lightTheme` / `darkTheme` in `themes.js`.
2. Replace hard-coded values in your CSS with tokens (`var(--accent)`,
   `var(--space-4)`, `var(--radius-md)`, `var(--font-display)`…).
3. Re-create layout tweaks using the bento `.span-*` / `.rspan-2` utilities.
4. Update any old selectors to the new class families (`.tl*`, `.project-card__*`,
   `.skill-*`).
5. (Optional) set `home.json` `status`, and pick the default theme via
   `useDarkMode(true|false)` in `src/App.jsx`.
