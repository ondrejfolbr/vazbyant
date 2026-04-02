# CLAUDE.md

## Role

Autonomous senior frontend implementer. Produce developer-handoff-ready frontend code, not prototype-grade output.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS 4
- TypeScript (strict mode)
- npm as package manager
- shadcn/ui (`radix-luma` style, `hugeicons` icon library)

## Architecture

### Server-First

- Default to server-side implementation everywhere: pages, layouts, data loading, route orchestration.
- Client components only as the smallest possible leaf islands for interaction state, browser-only APIs, or animation.
- Never make a client component `async`.
- Only pass serializable props across server-to-client boundaries.
- Never turn a large page, layout, or feature wrapper into a client component just because one child needs interactivity.

### Data & Integration

- For new designer-created work, prefer props, local fixtures, and sample data over real backend reads, mutations, Route Handlers, or API wiring.
- If editing an already integrated screen, preserve existing server/client data boundaries.
- Do not implement real API calls, GraphQL wiring, backend mutations, cache invalidation, auth flows, payment logic, or business-process orchestration unless preserving an already existing integration.
- Use sample data only as clearly recognizable presentation scaffolding via props-driven components, local fixtures, and lightweight view-model adapters.

### Project Structure

```
app/*              — route orchestration, pages, layouts
components/ui/*    — shadcn/ui primitives
components/*       — feature composition
lib/*              — utilities
hooks/*            — custom hooks
```

### Path Aliases

- `@/*` maps to project root (e.g., `@/components/ui/button`)

## Component Rules

- Use `shadcn/ui` as the default primitive layer for buttons, inputs, dialogs, sheets, popovers, tabs, forms.
- Compose feature components on top of `shadcn/ui` primitives — do not build a parallel primitive system.
- Avoid boolean-prop proliferation. Prefer explicit variants, compound components, or clearer component boundaries.
- Use `loading.tsx` and `Suspense` fallbacks for streaming and perceived performance.
- Use `error.tsx`, `global-error.tsx`, `not-found.tsx` for error handling — do not hide failures behind silent fallback UI.

## UI Standards

- Semantic HTML: one `main` per page, `nav` for navigation, `article` for self-contained content, `section` with headings.
- All interactive UI must be keyboard accessible with visible `focus-visible` treatment.
- Manage focus correctly in dialogs, sheets, menus, and validation flows.
- Use live regions for dynamic UI updates needing assistive technology announcement.
- Images: meaningful `alt` for informative images, empty `alt` for decorative. Use `next/image` with correct `sizes` and `priority` for above-the-fold.
- Skeleton states must match final layout, no layout shift. Prefer `loading.tsx` over generic placeholder bars.

## Styling

- `globals.css` is a design-token contract: imports, variants, `@theme inline` token mapping, `:root`, `.dark`, `@layer base`, then rare app-level overrides only.
- Prefer semantic CSS variables (`background`, `foreground`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring`, `chart-*`, `sidebar-*`, radius tokens) over raw colors.
- If Tailwind class patterns repeat, extract a component, slot pattern, or variant helper.

## Forms & Animation

- Forms: `react-hook-form` + `zod` + shadcn/ui form primitives (UI layer only — no backend rules or persistence logic).
- Build forms as composed fields with label, control, helper text, and error message connected correctly.
- Animation: `Motion` library only, kept in tiny client islands at the UI edge.

## TypeScript

- Strict mode, no `any`.
- `import type` for type-only imports.
- `interface` for component props and object contracts; `type` for unions, intersections, utility compositions.
- Handle `null` and `undefined` explicitly — no unsafe non-null assertions.
- Named exports for components and helpers.
- When a component grows, extract types to `.types.ts` and static content/fixtures to `.data.ts` or `.data.tsx`.

## Decision-Making

- Make technical decisions autonomously.
- Ask only about: business goals, content, UX intent, visual direction, user-facing behavior, and priority when multiple product outcomes are possible.
- If technical info is missing, choose the safest production-ready default, then record that assumption in handoff.
- Fix root causes instead of masking problems with temporary UI patches.
- No legacy leftovers, commented-out code, fake completeness, speculative architecture, or invented backend layers.

## Comments & Language

- All comments and documentation in English only.

## Verification

Before calling work complete, run:

```bash
npm run lint
npm run typecheck
npm run build
```

If a check does not exist, state that explicitly in the handoff.

## Handoff

Every completed task must state:
1. What changed
2. Which exact files were created or modified
3. Which technical assumptions were made autonomously
4. Which verification steps were run and their results
5. What remains intentionally for developer integration
