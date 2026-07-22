---
project: page_factory_next
updated: 2026-07-22
---

## Pending preferences

- status: pending
  scope: color/accent
  preference: Kia-inspired visual structure uses the portfolio's existing teal accent instead of lime or green.
  implementation: Use `#0099CC` as the core signal color; use contrast-adjusted teal variants for text and focus states in light/dark themes.
  source: User correction on 2026-07-22.

- status: superseded
  scope: component/footer
  preference: Keep the footer as the same dark inverse band in both light and dark themes instead of theme-inverting it.
  implementation: Footer background remains `#0B0D0C` with white text across themes; footer logo stays light on the fixed dark surface.
  source: User correction on 2026-07-22.

- status: pending
  scope: component/footer
  preference: Let the Footer follow the active light/dark surface and adapt the white source logo per theme.
  implementation: Use canvas/primary-text tokens for the Footer; invert the white SVG in light mode and retain its original white color in dark mode.
  source: User correction on 2026-07-22.

- status: pending
  scope: layout/mobile-content-gutter
  preference: Give the information-dense content sections slightly more horizontal breathing room on mobile.
  implementation: Use `24px` side gutters for Profile, Projects, and Contact below `768px`; preserve the existing Hero gutter and the `32px` tablet/desktop gutter.
  source: User correction on 2026-07-22.

- status: superseded
  scope: component/contact
  preference: Center the Contact content column instead of leaving the form weighted to one side.
  implementation: Keep the heading and fields together in a centered `720px` maximum-width column, while retaining full-width fields on narrow screens.
  source: User correction on 2026-07-22.

- status: pending
  scope: component/contact
  preference: Keep Contact aligned with the page grid rather than centered, while distributing fields to avoid one-sided visual weight.
  implementation: Use the full content width; arrange Name and Email in two columns from tablet widths and stack them on smaller screens, with Message spanning the full row.
  source: User correction on 2026-07-22.

- status: pending
  scope: typography/section-hierarchy
  preference: Preserve numbered section eyebrows such as `01 · PROFILE` as a distinct level above internal headings.
  implementation: Do not merge the eyebrow with `About Me`; keep `About Me`, `Education`, `Links`, and similar labels as sibling subsection headings within the numbered section.
  source: User correction on 2026-07-22.

- status: pending
  scope: typography/subsection-headings
  preference: Use the same monospaced font family as the numbered eyebrow for Profile subsection headings.
  implementation: Render `About Me`, `Education`, `Links`, `Skills`, and equivalent subsection headings with `--pf-font-mono` while preserving their larger size and hierarchy.
  source: User correction on 2026-07-22.

- status: pending
  scope: typography/group-headings
  preference: Extend the monospaced heading principle to nested group labels such as `Languages` and `Frameworks & Libraries`.
  implementation: Render `.pf-group-title` with `--pf-font-mono`, retaining its smaller scale to distinguish it from subsection headings.
  source: User correction on 2026-07-22.

- status: pending
  scope: typography/group-heading-scale
  preference: Keep nested mono group headings visually quieter than subsection headings.
  implementation: Size `.pf-group-title` responsively from `18px` to `22px`, preserving hierarchy beneath the larger subsection titles.
  source: User correction on 2026-07-22.

- status: superseded
  scope: typography/projects-hierarchy
  preference: Apply the Profile heading hierarchy consistently to the Projects section.
  implementation: Preserve `02 · SELECTED WORK` as the eyebrow, render `Projects` with the mono subsection-title treatment, and retain project categories as smaller mono group headings.
  source: User correction on 2026-07-22.

- status: pending
  scope: typography/projects-hierarchy
  preference: Use `02 · PROJECTS` as the section eyebrow and promote each project category to the decorated subsection level.
  implementation: Remove the standalone `Projects` heading; render `Mobile Projects`, `Web Projects`, and `Other Projects` with the teal square, mono title, and horizontal divider treatment.
  source: User correction on 2026-07-22.

- status: pending
  scope: typography/contact
  preference: Use monospaced typography throughout Contact UI copy while keeping user-entered field text in the standard sans family.
  implementation: Apply `--pf-font-mono` to the Contact title, labels, eyebrow, and submit action; explicitly retain sans typography for inputs and textarea.
  source: User correction on 2026-07-22.

- status: pending
  scope: copy/hero-line-breaks
  preference: Keep the desktop hero introduction to three deliberate lines without reducing the display type size.
  implementation: Break after `설계하고`, keeping `구현하는 개발자 오은택입니다.` together on the final line.
  source: User correction on 2026-07-22.

- status: pending
  scope: typography/sans-family
  preference: Use self-hosted Pretendard instead of Noto Sans KR for the primary sans and display typography.
  implementation: Load the provided Pretendard WOFF2 files through `next/font/local` for weights 100–900 and expose them as `--font-pretendard`; preserve the separate mono heading stack.
  source: User correction on 2026-07-22.
