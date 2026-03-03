# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server on 0.0.0.0:3000 (HMR enabled)
pnpm build      # Production build
pnpm start      # Start production server (requires build first)
pnpm lint       # Run ESLint
```

Use `pnpm` exclusively — never `npm` or `yarn`.

## Architecture

### Routing (Next.js App Router)

Two layout groups:
- **Root layout** (`src/app/layout.tsx`): wraps all pages with `<LanguageProvider>` and `<Navbar>`.
- **`(contenido-con-footer)` group** (`src/app/(contenido-con-footer)/layout.tsx`): adds `<Footer>` to `/nosotros`, `/servicios`, and `/contactanos`. The home page (`/`) does not use this group and has no footer.

### Internationalisation (ES/EN)

All UI strings live in `src/i18n/translations.ts` as a nested object with `{ es: "...", en: "..." }` leaves. Use the `t(key, lang)` helper to resolve them:

```tsx
import { t } from "@/src/i18n/translations";
const label = t("nav.inicio", lang); // "Inicio" | "Home"
```

Active language is managed by `src/context/LanguageContext.tsx` (`LanguageProvider` / `useLanguage`), persisted to `sessionStorage` under `"ingeaudit-lang"`. The provider is mounted in the root layout so any component can call `useLanguage()`.

When adding new text, add both `es` and `en` entries to `translations.ts` first, then reference via `t()`.

### Component locations

| Path | Contents |
|---|---|
| `src/components/sections/` | Custom page sections (Hero, Navbar, Footer, About, etc.) |
| `src/components/UI/` | Custom base UI primitives |
| `components/ui/` | shadcn/ui components — do not edit manually |

shadcn components are added via `pnpm dlx shadcn@latest add <component>`. Config is in `components.json` (style: new-york, icon library: lucide).

### Styling

The project uses **Tailwind CSS v4** alongside **CSS Modules** per component.

- CSS Modules (`.module.css`) for component-specific styles; class names must be **camelCase** (`styles.navContainer`).
- **Never use hardcoded hex colors or magic pixel values** in CSS modules. Use the CSS custom properties defined in `src/app/globals.css`: `--gold-primary`, `--blue-primary`, `--blue-dark`, `--text-primary`, `--border-soft`, `--radius`.
- Tailwind utility classes can be used inline in TSX for layout/spacing.

### Path aliases

`@/*` maps to the repo root:
- `@/src/...` → `src/`
- `@/components/...` → `components/` (shadcn)
- `@/public/...` → `public/`
- `@/lib/...` → `lib/`

### Navigation

Always use Next.js `<Link href="...">` for internal links. Never use `<a>` tags — they cause full page reloads.

## Git workflow

- `main` is production — never commit directly.
- Branch naming: `feat/name`, `fix/description`, `style/description`.
- PRs require review before merging into `main`.
