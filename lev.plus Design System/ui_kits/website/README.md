# lev.plus — marketing website UI kit

Ukrainian homepage for lev.plus (rebrand of green.lev.travel). Composes components from the design-system bundle (`window.LevPlusDesignSystem_732b9c`).

- `index.html` — desktop 1440. `mobile.html` — mobile 390 (same components, `m` prop switches layouts).
- Floating switcher (bottom-right): palette A «Ліс і льон» / B «Нічний ліс», type pair 1 (Geologica + Golos Text) / 2 (Unbounded + Onest).
- `Chrome.jsx` Header, Footer, Shell, H2, Lead · `Hero.jsx` · `Sections.jsx` Steps, Houses, Why, Income · `Sections2.jsx` Club, Team, Faq, AccessForm · `App.jsx` Site.

Interactive: nav scrolls to sections, mobile menu, FAQ accordion, access form → success state.
Placeholders: team photos/names; house renders reuse the single cabin render from the source repo.


## v2 (current)
`index.html` / `mobile.html` now load the v2 design: Geologica + Golos Text, bright eco-luxe (white/linen, forest, sun #E6B24C, leaf #5E9A4B), full-bleed hero, pill CTAs. Files: `V2Chrome.jsx` (Wrap, Kicker, Title, Body, Cta, Header, Footer), `V2Top.jsx` (Hero, Manifest, Houses), `V2Mid.jsx` (Steps, Why, Income), `V2End.jsx` (Club, Team, Faq, Access, SiteV2). Previous version: `index-v1.html`, `mobile-v1.html`.
