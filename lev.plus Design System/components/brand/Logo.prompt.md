The lev.plus logo — use in headers, footers, favicons and avatars; never redraw it.
```jsx
<Logo />                                   // full lockup, seal mark, forest on linen
<Logo tone="linen" ring="var(--forest)" />  // on forest backgrounds
<Logo variant="mark" mark="seal" size={64} />
<Logo variant="wordmark" size={28} />
```
- `mark`: seal (primary), cross, arch — 3 concepts under review.
- `tone`: forest | linen | night | mono-dark | mono-light. Set `ring` to the background colour so the plus badge cut-out reads.
