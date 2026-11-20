# lev.plus — design system

lev.plus is a curatorial and management company for investors in rental country houses in the Carpathians (rebrand of green.lev.travel). The investor gets a turnkey project: vetted plot → standard branded house → construction on a fixed budget → full rental management. «Лев» = strength, reliability, capital protection; «plus» = added value (rental income + land appreciation).

Audience: affluent people 35–60 (Kyiv, Lviv) with free capital and no time. They value reliability, transparency, status and calm. Not tourists.

Surfaces:
- **Marketing website** (UA) — `ui_kits/website/` (desktop 1440 + mobile 390).
- **Investor cabinet** — closed area with project cards — `ui_kits/cabinet/` (night theme).

## Sources
- GitHub: https://github.com/tarasgirnyk/green.lev.travel — legacy site; source of the lion mark, mascot and cabin render. Explore it further for more context.
- Brief supplied by the client (structure, palettes, tone).

## Content fundamentals
- Language: Ukrainian. Address the reader as «ви» (formal, lowercase in running text), company speaks as «ми».
- Tone: premium, calm, confident, honest. Facts and mechanisms instead of promises. Never «гарантуємо 30% річних»; forecasts carry «прогноз, не гарантія».
- Sentence case for headings; uppercase only for small tracked labels (section labels, field labels).
- Short declarative sentences. Examples: «Ваш капітал — у карпатській нерухомості. Ми робимо все інше.», «Фіксований кошторис. Перевищення понад +10% — наш ризик.», «Ціна — за запитом».
- No emoji, no exclamation marks, no tourist vocabulary («відпочинок мрії», «гарячі пропозиції»).

## Visual foundations
- **Colour.** Palette A «Ліс і льон» (default): Forest #1F3A2B, Moss #4E6B3A, Linen #F2EDE3, Ochre #C8A25A (accent), Graphite #1C1E1B (text). Palette B «Нічний ліс» via `data-theme="night"`: bg #12241A, cards #1B3326, text #EFE8DA, gold #C9A35C. Ochre is never used for body text on linen (fails AA) — use `--ochre-ink` #7A5C24 for accent text on light grounds; ochre fills carry graphite text. See `guidelines/colors-contrast.html`.
- **Type.** Pair 1 (default): Geologica display + Golos Text body. Pair 2 (`data-type="b"`): Unbounded + Onest. Both full Cyrillic. Large light-weight grotesk headlines (300–400) with tight negative tracking; numbers set in the display face.
- **Backgrounds.** Flat linen and forest fields; full-bleed warm nature/architecture photography. No gradients except a soft dark protection gradient under text on photos.
- **Shapes.** Arch-topped image frames (`--radius-arch`) echo windows/gables; cards have modest radii, 1px hairline borders in `--line`; pill badges.
- **Shadows.** Very soft, low-contrast, warm (see `guidelines/shadows.html`); most separation comes from borders and surface tone.
- **Motion.** Quiet fades and grid-row expands, `--ease` / `--dur` tokens; no bounces.
- **Hover/press.** Buttons darken/lighten one step; ghost links get an ochre underline. No scale-shrink.
- **Imagery.** Warm, natural light, wood and forest, real houses. No stock «happy families».
- **Mascot.** Lion architect (green mane, linen jacket, blueprints) — hero and as a sparse guide between sections, never more than once per screen.

## Iconography
Thin outline line icons (24px grid, 1.8 stroke, round caps) in `components/core/Icon.jsx`, Lucide-style paths. The legacy repo has no icon set, so this is a substitution — swap in Lucide from CDN if exact parity is wanted. Icons often sit in a circular hairline ring (`RoundIcon`). No emoji, no unicode glyph icons.

## Logo
Official logo files (client-supplied): `assets/brand/lev-plus-primary.svg` (for light backgrounds) and `assets/brand/lev-plus-primary-light.svg` (for dark/photo backgrounds). `<Logo />` (variant `full`, default) renders them; tone `linen`/`night`/`mono-light` picks the light file. Variants `lockup`/`mark`/`wordmark` are earlier proposals for a compact mark (favicon/avatar). Legacy lion: `assets/brand/`.

## Components
- Brand: Logo, LogoMark, Wordmark
- Core: Button, Badge, Icon, SectionLabel
- Forms: Input, Select
- Content: FaqItem, FeatureChip, HouseCard, MetricTile, RoundIcon, StepItem
- Cabinet: ProjectCard

## Index
- `styles.css` — entry point (imports `tokens/*.css`)
- `tokens/` — colors, typography, fonts, spacing, brand
- `guidelines/` — specimen cards, `brand-board.html`
- `components/` — React primitives (above)
- `ui_kits/website/` — homepage desktop + mobile
- `ui_kits/cabinet/` — investor cabinet with project cards
- `assets/` — brand, mascot, imagery, reference
- `SKILL.md` — Agent Skill entry
