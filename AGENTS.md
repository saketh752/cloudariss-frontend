# Cloudariss Technologies — Project Rules & Implementation Standards

These rules govern all work inside `D:\Projects\Cloudarris_Frontend`. Follow them strictly across every coding, design, and planning session.

## 1. Visual Design & Brand Integrity
- **Human-Crafted Aesthetic:** Build intentional, art-directed layouts. Never use generic AI-generated templates, purple aurora gradients, emoji UI icons, or decorative filler sections.
- **Brand Tokens Only:** Preserve the established Cloudariss palette (`#020817` canvas, `#071B63` navy, `#0878E8` blue, `#19BCE8` / `#00D2FF` cyan, `#FF7A00` action orange) and typography (`Manrope` headings, `Inter` body, `font-mono` technical labels) defined in `tailwind.config.js`.
- **Restrained Containers:** Avoid repetitive boxed cards, nested card-in-card layouts, and heavy borders. Favor open editorial layouts with hairline dividers (`border-white/10`) and subtle atmospheric overlays.
- **Preserve Public Pages:** Do not alter unrelated public pages, routes, assets, or copy when working on targeted features.

## 2. Mobile-First & Responsive Engineering
- **Device-Specific Layouts:** Design genuinely mobile-first layouts rather than shrinking or compressing desktop grids onto small viewports.
- **Viewport Fit & Spacing:** Keep major desktop sections balanced within ~`100vh` where content permits; avoid excessive vertical padding or dead space.
- **Mandatory Breakpoint Verification:** Verify layout changes across mobile (`390px`), tablet (`768px`), and desktop (`1440px`) widths with zero horizontal overflow.

## 3. Accessibility & UI Completeness
- **Readable Typography & Contrast:** Maintain high contrast for all body text, labels, and interactive controls against dark atmospheric backgrounds.
- **Touch & Keyboard Ergonomics:** Ensure touch-friendly tap targets ($\ge 44\text{px}$ height on mobile), semantic HTML elements, explicit form `<label>` associations, and visible `:focus-visible` states.
- **Complete Interactive States:** Every data-driven view or form must implement explicit loading, validation error, empty, and success states.

## 4. Security & Backend Architecture
- **Independent Backend Authorization:** Enforce authentication, session validation, and role authorization on every protected API endpoint independently of frontend routing.
- **Server-Side Validation:** Validate and sanitize all request payloads, query parameters, and uploaded files (`.xlsx`) on the server before database operations.
- **Secrets Protection:** Never hardcode, log, or expose `.env` values, credentials, tokens, or connection strings in code, commits, or chat output. Keep `.env*` ignored and document only variable names in `.env.example`.
- **Safe Data Operations:** Prevent silent overwrites during imports or updates; record administrative mutations in an audit log.

## 5. Code Reuse, Scope & Token Efficiency
- **Reuse First:** Inspect and reuse existing UI primitives (`src/components/ui/`), layout wrappers, and data constants (`src/data/`) before creating new components or installing dependencies.
- **Strict Scope Discipline:** Modify only files directly required by the user's request. Do not introduce unrequested features, mock data, or speculative abstractions.
- **Token & Tool Efficiency:** Use targeted searches and file reads; avoid redundant tool calls, unnecessary re-reads, or verbose recaps while never skipping mandatory build, type, or security checks.

## 6. Git Safety, Milestone Push Policy & Honest Reporting
- **Protect `main`:** Treat `main` as the stable production branch. Never commit directly to `main` and never push milestone work to `main`. Implement features on a dedicated feature branch (e.g., `feature/admin-backend`) and merge only via reviewed pull requests when explicitly requested.
- **Push After Every Major Milestone:** After completing each major milestone:
  1. Run all relevant tests, typechecks, build, and security audits.
  2. Review the diff to guarantee zero secrets, credentials, or `.env` files are included.
  3. Commit the completed milestone on the feature branch with a descriptive message.
  4. Push the feature branch to GitHub (`git push -u origin <feature-branch>`) and verify the remote commit.
  5. Report commit hash, push status, test results, and branch URL, then wait for explicit user approval before beginning the next milestone.
- **No Destructive Git Commands:** Never run `git reset --hard`, `git clean -fd`, `git rebase`, `git push --force`, or delete branches without explicit user instruction. Never silently overwrite remote history.
- **Verified Reporting Only:** Report only commands, builds, tests, push operations, and visual checks that were actually executed and verified on disk or remote.

