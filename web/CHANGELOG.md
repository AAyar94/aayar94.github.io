# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [2.0.0] - Unreleased

A major UI overhaul. The visual layer is rebuilt, so custom styles based on the
old theme/classes need migrating — see `docs/MIGRATION.md`.

### Added
- Modern **bento** layout across every section (Home, About, Skills, Projects,
  Experience, Education).
- Design-token system — colour, spacing, radius, shadow, motion and font tokens
  published as CSS custom properties from `src/theme/GlobalStyles.js`.
- Refined web fonts: Inter (UI), Fraunces (display), JetBrains Mono (accents).
- Configurable hero status label via `home.json` `status` (hidden when unset).
- Shared elegant timeline for Experience and Education.

### Changed
- **Dark-first** default appearance; near-monochrome palette with a single accent.
- Projects redesigned as a bento grid with a featured tile, hover lift and clearer
  card spacing.
- Theme-adaptive translucent (glass) navbar.

### Removed
- `react-chrono` dependency and the legacy vertical-timeline components.

### Fixed
- Deep-linking or refreshing a non-home route (`/about`, `/projects`, …) — route
  components are now bundled into proper per-route chunks via a Vite-analyzable
  dynamic import.

## [1.0.0]

- Classic UI on the modern Vite + React 18 toolchain.
