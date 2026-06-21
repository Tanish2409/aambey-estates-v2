---
project_name: "aambey-estates-v2"
user_name: "Tanish"
date: "2026-06-21"
sections_completed:
  - technology_stack
  - language_rules
  - framework_rules
  - testing_rules
  - quality_rules
  - workflow_rules
  - anti_patterns
status: "complete"
rule_count: 53
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- Next.js `16.2.9` with App Router and metadata APIs
- React `19.2.7` and React DOM `19.2.7`
- TypeScript `6.0.3` with `strict`, `noUncheckedIndexedAccess`, `noImplicitOverride`, and `exactOptionalPropertyTypes`
- Tailwind CSS `3.4.17` with `tailwindcss-animate`
- shadcn/ui config (`new-york`, `neutral`, CSS variables, `lucide`)
- ESLint `9.39.4` with `eslint-config-next` `16.2.9`
- Prettier `3.8.4` with `prettier-plugin-tailwindcss` `0.8.0`
- Utility packages: `class-variance-authority` `0.7.1`, `clsx` `2.1.1`, `tailwind-merge` `3.6.0`
- Runtime baseline: Node `>=20.9.0`, npm `>=10.0.0`

## Critical Implementation Rules

### Language-Specific Rules

- Keep TypeScript strict-clean. Respect `strict`, `noUncheckedIndexedAccess`, `noImplicitOverride`, and `exactOptionalPropertyTypes`.
- Prefer `type` imports where only types are needed.
- Use the `@/*` path alias for internal imports from `src`.
- Keep shared structured content in typed `const` data objects, matching the existing `as const` pattern in `src/content/site.ts`.
- Prefer named exports for reusable functions, constants, and components.
- Keep utility functions small and direct. Follow the existing inline style instead of adding wrappers or single-use abstractions.
- Preserve exact string unions and literal inference when content drives routes or metadata.
- When reading route params in App Router pages, match the existing async `params: Promise<{ slug: string }>` pattern already used in the codebase.

### Framework-Specific Rules

- Treat this as an App Router codebase. New routes belong under `src/app`.
- Default to server components. Add `"use client"` only when browser-only interactivity is required.
- For marketing/content pages, preserve the static-first pattern with `dynamic = "force-static"` unless there is a real runtime data need.
- Generate dynamic route pages from centralized content arrays using `generateStaticParams`.
- Generate route metadata with `generateMetadata` and canonical URLs from `siteConfig.url`.
- Keep SEO structured data in dedicated helpers/components like `src/lib/seo.ts` and `src/components/seo/json-ld.tsx`.
- Reuse shared layout chrome from `src/app/layout.tsx`; do not duplicate header, footer, or skip-link structure inside pages.
- Keep page composition simple: import section components into route files instead of embedding large blocks of repeated markup.
- Put sitewide marketing copy, nav items, service definitions, and location definitions in `src/content/site.ts` unless there is a strong reason to split them.
- When a slug lookup can fail, use `notFound()` rather than rendering partial or fallback content.

### Testing Rules

- Do not add tests.
- Do not introduce a testing framework, test config, or test-only dependencies unless explicitly requested.
- Validate changes with direct inspection or the cheapest targeted non-test check only when needed.
- If work ships without tests or test execution, state that explicitly in the summary.

### Code Quality & Style Rules

- Make the smallest maintainable change that solves the request.
- Prefer existing patterns over new abstractions, helpers, wrappers, or folders.
- Keep components and utilities focused, direct, and easy to scan.
- Use kebab-case for file names and PascalCase for React component names.
- Keep shared content centralized in `src/content/site.ts` instead of scattering copy across components.
- Reuse existing semantic utility classes from `src/app/globals.css` such as `section`, `eyebrow`, `h-xl`, `h-lg`, and `lead`.
- Follow the existing Tailwind-first styling approach. Use `cn()` only when conditional class composition is actually needed.
- Keep shadcn-style UI primitives simple and variant-driven, consistent with `src/components/ui/button.tsx`.
- Prefer named exports across the codebase unless a framework file convention requires a default export.
- Avoid broad refactors, speculative cleanup, and “helper for helper” patterns.
- Add comments only when logic is non-obvious. Do not add commentary for straightforward code.

### Development Workflow Rules

- Inspect the smallest relevant scope first: exact file, symbol, route, or config involved in the request.
- Prefer targeted searches and capped command output. Avoid broad repo scans, full file dumps, and unbounded logs.
- Do not run broad validation by default. Skip validation for low-risk work and say so plainly.
- Do not add or run tests unless explicitly requested.
- Match validation cost to risk. Prefer the cheapest useful non-test check when validation is needed.
- Avoid unrelated cleanup while implementing a request.
- Do not introduce new abstractions, helpers, wrappers, or files unless they clearly reduce complexity.
- Keep final summaries short and practical: what changed, files touched, validation run or skipped, remaining risk.
- Correct the user when needed, but optimize for the narrow request first.
- Treat the user as a principal engineer: keep communication concise and technically direct.

### Critical Don't-Miss Rules

- Do not duplicate service, location, nav, or contact data across route files and components. Update `src/content/site.ts` as the source of truth.
- Do not hardcode canonical URLs or domain fragments in multiple places. Derive them from `siteConfig.url`.
- Do not break slug consistency between content arrays, `generateStaticParams`, metadata generation, and page lookup logic.
- Do not replace `notFound()` with silent fallbacks when a content-driven route misses.
- Do not introduce `"use client"` into pages or shared layout code unless interactivity genuinely requires it.
- Do not move env-backed contact or site settings out of `src/content/site.ts` without a clear replacement source of truth.
- Do not bypass existing SEO helpers when adding structured data; keep JSON-LD generation centralized.
- Do not scatter one-off spacing and typography patterns when an existing semantic class already covers the use case.
- Do not add broad infrastructure, CMS-like abstractions, or data layers to a simple content-driven marketing site without an explicit request.
- When changing content that affects multiple routes, check for downstream metadata, JSON-LD, nav, and CTA text dependencies before editing.

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing code in this repo.
- Follow all rules here unless the user explicitly overrides them.
- Prefer the more restrictive option when two patterns seem possible.
- Update this file when the stack or core implementation patterns change.

**For Humans:**

- Keep this file lean and focused on unobvious agent guidance.
- Update it when technology versions or project patterns change.
- Remove stale or obvious rules instead of letting it grow.

Last Updated: 2026-06-21
