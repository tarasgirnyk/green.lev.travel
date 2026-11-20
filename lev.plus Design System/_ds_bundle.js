/* @ds-bundle: {"format":4,"namespace":"LevPlusDesignSystem_732b9c","components":[{"name":"LogoMark","sourcePath":"components/brand/Logo.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Logo.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ProjectCard","sourcePath":"components/cabinet/ProjectCard.jsx"},{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"FeatureChip","sourcePath":"components/content/FeatureChip.jsx"},{"name":"HouseCard","sourcePath":"components/content/HouseCard.jsx"},{"name":"MetricTile","sourcePath":"components/content/MetricTile.jsx"},{"name":"RoundIcon","sourcePath":"components/content/RoundIcon.jsx"},{"name":"StepItem","sourcePath":"components/content/StepItem.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"f6de95d92d5e","components/cabinet/ProjectCard.jsx":"84be499abd16","components/content/FaqItem.jsx":"1404045d893e","components/content/FeatureChip.jsx":"a1fcc79aa7a6","components/content/HouseCard.jsx":"e26a5fa06b11","components/content/MetricTile.jsx":"0b9f702f63aa","components/content/RoundIcon.jsx":"56a0ed7f971a","components/content/StepItem.jsx":"54fc624a671f","components/core/Badge.jsx":"ac2b4ebac91b","components/core/Button.jsx":"dbb825047dbc","components/core/Icon.jsx":"6841d030bb66","components/core/SectionLabel.jsx":"89f4b7df8a14","components/forms/Input.jsx":"2f6507daf440","components/forms/Select.jsx":"eab61fa4e1eb","ui_kits/cabinet/Cabinet.jsx":"af5710c10432","ui_kits/website/App.jsx":"7068249dd987","ui_kits/website/Chrome.jsx":"0723293119eb","ui_kits/website/Hero.jsx":"f49d96562926","ui_kits/website/Sections.jsx":"306f59b2b27c","ui_kits/website/Sections2.jsx":"18ad93a9ca46","ui_kits/website/V2Chrome.jsx":"61e6f1640688","ui_kits/website/V2End.jsx":"ca3af32185e1","ui_kits/website/V2Mid.jsx":"65d159a7a536","ui_kits/website/V2Top.jsx":"9d3bcf6cdbbe"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LevPlusDesignSystem_732b9c = window.LevPlusDesignSystem_732b9c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
const TONES = {
  forest: {
    mark: 'var(--forest)',
    plus: 'var(--ochre)',
    plusFg: 'var(--forest)',
    inner: 'var(--linen)',
    word: 'var(--forest)',
    dot: 'var(--ochre)'
  },
  linen: {
    mark: 'var(--linen)',
    plus: 'var(--ochre)',
    plusFg: 'var(--forest)',
    inner: 'var(--forest)',
    word: 'var(--linen)',
    dot: 'var(--ochre)'
  },
  night: {
    mark: 'var(--night-gold)',
    plus: 'var(--night-gold)',
    plusFg: 'var(--night-bg)',
    inner: 'var(--night-bg)',
    word: 'var(--night-text)',
    dot: 'var(--night-gold)'
  },
  'mono-dark': {
    mark: 'var(--graphite)',
    plus: 'var(--graphite)',
    plusFg: 'var(--linen)',
    inner: 'var(--linen)',
    word: 'var(--graphite)',
    dot: 'var(--graphite)'
  },
  'mono-light': {
    mark: '#FFFFFF',
    plus: '#FFFFFF',
    plusFg: 'var(--graphite)',
    inner: 'var(--graphite)',
    word: '#FFFFFF',
    dot: '#FFFFFF'
  }
};
function PlusGlyph({
  size,
  color
}) {
  const t = Math.max(2, size * 0.16);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: (size - t) / 2,
      top: 0,
      width: t,
      height: size,
      background: color,
      borderRadius: t / 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (size - t) / 2,
      left: 0,
      height: t,
      width: size,
      background: color,
      borderRadius: t / 2
    }
  }));
}
function LogoMark({
  mark = 'seal',
  tone = 'forest',
  size = 48,
  ring = 'var(--surface-page)'
}) {
  const c = TONES[tone] || TONES.forest;
  if (mark === 'cross') {
    return /*#__PURE__*/React.createElement("span", {
      "aria-label": "lev.plus",
      style: {
        position: 'relative',
        display: 'inline-block',
        width: size,
        height: size,
        background: c.mark,
        clipPath: 'polygon(30% 0,70% 0,70% 30%,100% 30%,100% 70%,70% 70%,70% 100%,30% 100%,30% 70%,0 70%,0 30%,30% 30%)',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "lp-lion",
      style: {
        position: 'absolute',
        inset: '22%',
        color: c.inner
      }
    }));
  }
  if (mark === 'arch') {
    return /*#__PURE__*/React.createElement("span", {
      "aria-label": "lev.plus",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: size * 0.02,
        width: size * 0.82,
        height: size,
        background: c.mark,
        borderRadius: '50% 50% 10% 10% / 40% 40% 10% 10%',
        paddingTop: size * 0.14,
        boxSizing: 'border-box',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: size * 0.58,
        lineHeight: 1,
        color: c.inner,
        marginTop: -size * 0.06
      }
    }, "l"), /*#__PURE__*/React.createElement(PlusGlyph, {
      size: size * 0.26,
      color: c.plus
    }));
  }
  const b = size * 0.4;
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": "lev.plus",
    style: {
      position: 'relative',
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lp-lion",
    style: {
      position: 'absolute',
      inset: 0,
      color: c.mark
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -size * 0.06,
      bottom: -size * 0.02,
      width: b,
      height: b,
      borderRadius: '50%',
      background: c.plus,
      boxShadow: '0 0 0 ' + Math.max(2, size * 0.05) + 'px ' + ring,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PlusGlyph, {
    size: b * 0.48,
    color: c.plusFg
  })));
}
function Wordmark({
  tone = 'forest',
  size = 32
}) {
  const c = TONES[tone] || TONES.forest;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-display)',
      fontSize: size,
      lineHeight: 1,
      letterSpacing: 'var(--ls-display)',
      color: c.word,
      whiteSpace: 'nowrap'
    }
  }, "lev", /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.dot
    }
  }, "."), "plus");
}
const LIGHT = {
  linen: 1,
  night: 1,
  'mono-light': 1
};
function Logo({
  variant = 'full',
  mark = 'seal',
  tone = 'forest',
  size = 40,
  ring
}) {
  if (variant === 'full') return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "lev.plus",
    className: 'lp-logo ' + (LIGHT[tone] ? 'lp-logo-light' : 'lp-logo-primary'),
    style: {
      height: size,
      width: size * 506.625 / 130,
      alignSelf: 'flex-start'
    }
  });
  if (variant === 'mark') return /*#__PURE__*/React.createElement(LogoMark, {
    mark: mark,
    tone: tone,
    size: size,
    ring: ring
  });
  if (variant === 'wordmark') return /*#__PURE__*/React.createElement(Wordmark, {
    tone: tone,
    size: size
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.32
    }
  }, /*#__PURE__*/React.createElement(LogoMark, {
    mark: mark,
    tone: tone,
    size: size,
    ring: ring
  }), /*#__PURE__*/React.createElement(Wordmark, {
    tone: tone,
    size: size * 0.82
  }));
}
Object.assign(__ds_scope, { LogoMark, Wordmark, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/MetricTile.jsx
try { (() => {
function MetricTile({
  value,
  label,
  hint,
  tone = 'light'
}) {
  const d = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: '18px 20px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (d ? 'var(--border-inverse)' : 'var(--border)'),
      background: d ? 'rgba(255,255,255,.03)' : 'var(--surface-card)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: d ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-num)',
      fontWeight: 600,
      fontSize: 30,
      lineHeight: 1.05,
      color: d ? 'var(--text-inverse)' : 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: d ? 'var(--ochre)' : 'var(--accent-ink)'
    }
  }, hint));
}
Object.assign(__ds_scope, { MetricTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MetricTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const S = {
  free: {
    c: 'var(--status-free)',
    t: 'Вільна'
  },
  reserved: {
    c: 'var(--status-reserved)',
    t: 'Заброньована'
  },
  sold: {
    c: 'var(--status-sold)',
    t: 'Продана'
  },
  neutral: {
    c: 'var(--text-muted)',
    t: ''
  },
  accent: {
    c: 'var(--accent)',
    t: ''
  }
};
function Badge({
  status = 'neutral',
  children,
  solid
}) {
  const s = S[status] || S.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 28,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      border: solid ? 'none' : '1px solid var(--border)',
      background: solid ? s.c : 'var(--surface-card)',
      color: solid ? 'var(--linen)' : 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.02em',
      whiteSpace: 'nowrap'
    }
  }, !solid && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: s.c
    }
  }), children || s.t);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const P = {
  arrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14 7 5 5-5 5"
  })),
  trend: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 18 18 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6h8v8"
  })),
  terrain: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 17c3.2-5.2 6.3-5.2 9.4 0 2.8 4.6 5.6 4.5 8.6-.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10.5c2.7-3.5 5.5-3.5 8.3 0 2.7 3.4 5.2 3.5 7.7.4"
  })),
  blueprint: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 4v16M15 4v16M4 10h16M4 15h16"
  })),
  home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m4 11 8-7 8 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10v10h12V10M10 20v-6h4v6"
  })),
  cycle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 8a8 8 0 0 0-13.5-2L3 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 4v4h4M5 16a8 8 0 0 0 13.5 2l2.5-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 20v-4h-4"
  })),
  briefcase: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "7",
    width: "18",
    height: "12",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7V5h6v2M3 12h18M10 12v2h4v-2"
  })),
  team: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 20a5.5 5.5 0 0 1 11 0M16 6.5a3 3 0 0 1 0 5.5M17 15a5 5 0 0 1 3.5 5"
  })),
  flag: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 21V4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 5h11l-2 4 2 4H6"
  })),
  plus: /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }),
  minus: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  shield: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  receipt: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 3h12v18l-3-2-3 2-3-2-3 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 8h6M9 12h6M9 16h3"
  })),
  lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "10",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V7a4 4 0 0 1 8 0v4"
  })),
  pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  key: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "15",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m11 12 9-9M17 6l3 3M15 8l2 2"
  })),
  file: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3v5h5M9 13h6M9 17h4"
  })),
  calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3v4M8 3v4M3 10h18"
  })),
  chevron: /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  chevronRight: /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  }),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 7 9 6 9-6"
  })),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"
  }),
  ruler: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 17 17 3l4 4L7 21z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7 13 2 2M10 10l2 2M13 7l2 2"
  })),
  grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "4",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "13",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "13",
    width: "7",
    height: "7",
    rx: "1"
  })),
  wallet: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7h16a2 2 0 0 1 2 2v2h-4a2 2 0 0 0 0 4h4"
  })),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  })),
  leaf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
  })),
  sun: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
  })),
  mountain: /*#__PURE__*/React.createElement("path", {
    d: "m8 3 4 8 5-5 5 15H2L8 3z"
  }),
  logout: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m16 17 5-5-5-5M21 12H9"
  }))
};
const ICON_NAMES = Object.keys(P);
function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    }
  }, P[name]);
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqItem.jsx
try { (() => {
function FaqItem({
  question,
  answer,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      borderBottom: '1px solid var(--border)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": !!open,
    onClick: onToggle,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '22px 0',
      border: 0,
      background: 'transparent',
      textAlign: 'left',
      cursor: 'pointer',
      color: 'var(--text-heading)',
      font: 'inherit',
      fontSize: 17,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      flex: '0 0 auto',
      borderRadius: '50%',
      border: '1px solid var(--accent)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--accent-ink)',
      background: open ? 'var(--accent)' : 'transparent',
      transition: 'background var(--dur)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: open ? 'var(--accent-on)' : 'inherit'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'minus' : 'plus',
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: 'grid-template-rows var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      overflow: 'hidden',
      margin: 0,
      paddingBottom: open ? 22 : 0,
      maxWidth: 720,
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--text-muted)'
    }
  }, answer)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureChip.jsx
try { (() => {
function FeatureChip({
  icon = 'check',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 18px',
      background: 'rgba(251,248,242,.94)',
      border: '1px solid rgba(31,58,43,.08)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--forest)',
      backdropFilter: 'blur(8px)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ochre-ink)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), children);
}
Object.assign(__ds_scope, { FeatureChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureChip.jsx", error: String((e && e.message) || e) }); }

// components/content/RoundIcon.jsx
try { (() => {
function RoundIcon({
  name,
  size = 52,
  tone = 'light'
}) {
  const d = tone === 'dark';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: '50%',
      border: '1px solid ' + (d ? 'rgba(200,162,90,.7)' : 'var(--accent)'),
      display: 'grid',
      placeItems: 'center',
      color: d ? 'var(--ochre)' : 'var(--accent-ink)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { RoundIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RoundIcon.jsx", error: String((e && e.message) || e) }); }

// components/content/StepItem.jsx
try { (() => {
function StepItem({
  n,
  icon,
  title,
  text,
  tone = 'light',
  active
}) {
  const d = tone === 'dark';
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-num)',
      fontWeight: 500,
      fontSize: 52,
      lineHeight: 1,
      color: active ? 'var(--accent)' : d ? 'rgba(239,232,218,.45)' : 'var(--moss)',
      opacity: active ? 1 : .75
    }
  }, n), icon && /*#__PURE__*/React.createElement(__ds_scope.RoundIcon, {
    name: icon,
    size: 44,
    tone: d ? 'dark' : 'light'
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 700,
      color: d ? 'var(--text-inverse)' : 'var(--text-heading)'
    }
  }, title), text && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: d ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, text));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const V = {
  primary: {
    background: 'var(--btn-primary-bg)',
    color: 'var(--btn-primary-fg)',
    border: '1px solid transparent',
    boxShadow: '0 10px 24px rgba(22,43,31,.16)'
  },
  accent: {
    background: 'var(--btn-accent-bg)',
    color: 'var(--btn-accent-fg)',
    border: '1px solid transparent',
    boxShadow: '0 10px 24px rgba(200,162,90,.22)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-heading)',
    border: '1px solid var(--border-strong)'
  },
  inverse: {
    background: 'transparent',
    color: 'var(--text-inverse)',
    border: '1px solid rgba(200,162,90,.7)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-heading)',
    border: '1px solid transparent',
    textDecoration: 'underline',
    textUnderlineOffset: '5px',
    textDecorationColor: 'var(--accent)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconLeft,
  children,
  disabled,
  fullWidth,
  onClick,
  type = 'button',
  style
}) {
  const [h, setH] = React.useState(false);
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sm ? 10 : 14,
      minHeight: sm ? 'var(--btn-h-sm)' : 'var(--btn-h)',
      padding: variant === 'ghost' ? '0 4px' : sm ? '0 18px' : '0 24px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontSize: sm ? 13 : 15,
      fontWeight: 700,
      letterSpacing: '.005em',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      width: fullWidth ? '100%' : undefined,
      transition: 'transform var(--dur-fast) var(--ease),box-shadow var(--dur-fast),background var(--dur-fast)',
      transform: h && !disabled ? 'translateY(-2px)' : 'none',
      ...V[variant],
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: sm ? 16 : 18
  }), /*#__PURE__*/React.createElement("span", null, children), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 16 : 18
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cabinet/ProjectCard.jsx
try { (() => {
function ProjectCard({
  code,
  name,
  location,
  status = 'free',
  image,
  plot = {},
  house = {},
  checks = [],
  figures = [],
  onOpen,
  onReserve,
  layout = 'horizontal'
}) {
  const v = layout === 'vertical';
  const lab = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    margin: 0
  };
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: v ? '1fr' : 'minmax(0,0.9fr) minmax(0,1.1fr)',
      gap: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: v ? 220 : 360,
      background: 'var(--surface-sunken) url(' + image + ') center/cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 16,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    status: status
  })), code && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      padding: '6px 10px',
      borderRadius: 'var(--radius-xs)',
      background: 'rgba(18,36,26,.72)',
      color: '#EFE8DA',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em'
    }
  }, code)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: v ? 22 : 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      ...lab,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--accent-ink)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "pin",
    size: 14
  }), location), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-display)',
      fontSize: v ? 28 : 34,
      lineHeight: 1.05,
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: lab
  }, "\u0414\u0456\u043B\u044F\u043D\u043A\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, plot.area), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, plot.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: lab
  }, "\u0411\u0443\u0434\u0438\u043D\u043E\u043A"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, house.type), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, house.note))), checks.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 16px'
    }
  }, checks.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-free)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 2.2
  })), c))), figures.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + Math.min(figures.length, v ? 2 : 3) + ',1fr)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }
  }, figures.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f.label,
    style: {
      padding: '14px 12px 14px ' + (i % (v ? 2 : 3) === 0 ? 0 : 12) + 'px',
      borderLeft: i % (v ? 2 : 3) === 0 ? 'none' : '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...lab,
      fontSize: 10
    }
  }, f.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-num)',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1,
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, f.value), f.hint && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 11,
      color: 'var(--accent-ink)'
    }
  }, f.hint)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    icon: "arrow",
    onClick: onOpen
  }, "\u041F\u0430\u0441\u043F\u043E\u0440\u0442 \u043F\u0440\u043E\u0454\u043A\u0442\u0443"), status === 'free' && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "outline",
    iconLeft: "key",
    onClick: onReserve
  }, "\u0417\u0430\u0431\u0440\u043E\u043D\u044E\u0432\u0430\u0442\u0438 \u0434\u0456\u043B\u044F\u043D\u043A\u0443"))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cabinet/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/HouseCard.jsx
try { (() => {
function HouseCard({
  name,
  kind,
  specs = [],
  themes = [],
  image,
  imagePosition = 'center',
  onRequest,
  featured
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: featured ? 'var(--surface-inverse)' : 'var(--surface-card)',
      color: featured ? 'var(--text-inverse)' : 'var(--text-body)',
      borderRadius: 'var(--radius-xl)',
      border: featured ? 'none' : '1px solid var(--border)',
      padding: 14,
      fontFamily: 'var(--font-body)',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3.4',
      borderRadius: 'var(--radius-arch)',
      background: 'var(--linen-2) url(' + image + ') ' + imagePosition + '/cover',
      border: '1px solid ' + (featured ? 'rgba(200,162,90,.5)' : 'var(--border)')
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '22px 10px 8px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: featured ? 'var(--ochre)' : 'var(--accent-ink)'
    }
  }, kind), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-display)',
      fontSize: 'var(--fs-h3)',
      lineHeight: 1.05,
      letterSpacing: 'var(--ls-display)',
      color: featured ? 'var(--text-inverse)' : 'var(--text-heading)'
    }
  }, name)), specs.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 18px',
      fontSize: 13,
      color: featured ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, specs.map(s => /*#__PURE__*/React.createElement("li", {
    key: s
  }, s))), themes.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 8px',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: featured ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, "\u0422\u0435\u043C\u0438 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, themes.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 14,
      borderTop: '1px solid ' + (featured ? 'var(--border-inverse)' : 'var(--border)'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u2014 ", /*#__PURE__*/React.createElement("b", null, "\u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C")), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: featured ? 'accent' : 'outline',
    icon: "arrow",
    onClick: onRequest
  }, "\u0417\u0430\u043F\u0438\u0442"))));
}
Object.assign(__ds_scope, { HouseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/HouseCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function SectionLabel({
  index,
  children,
  tone = 'default'
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label)',
      fontWeight: 800,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: light ? 'var(--ochre)' : 'var(--accent-ink)'
    }
  }, index && /*#__PURE__*/React.createElement("span", null, index), index && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: 'currentColor',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  tone = 'light',
  value,
  onChange,
  name,
  hint,
  error
}) {
  const d = tone === 'dark';
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: d ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    name: name,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      height: 'var(--input-h)',
      padding: '0 16px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (error ? 'var(--danger)' : f ? 'var(--accent)' : d ? 'var(--border-inverse)' : 'var(--border)'),
      background: d ? 'rgba(0,0,0,.16)' : 'var(--surface-card)',
      color: d ? 'var(--text-inverse)' : 'var(--text-body)',
      font: 'inherit',
      fontSize: 15,
      outline: 'none',
      boxShadow: f ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast),box-shadow var(--dur-fast)'
    }
  }), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger)' : d ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  tone = 'light',
  name,
  placeholder
}) {
  const d = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: d ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    name: name,
    value: value,
    onChange: onChange,
    defaultValue: value === undefined ? '' : undefined,
    style: {
      width: '100%',
      height: 'var(--input-h)',
      padding: '0 44px 0 16px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (d ? 'var(--border-inverse)' : 'var(--border)'),
      background: d ? 'rgba(0,0,0,.16)' : 'var(--surface-card)',
      color: d ? 'var(--text-inverse)' : 'var(--text-body)',
      font: 'inherit',
      fontSize: 15,
      appearance: 'none',
      WebkitAppearance: 'none',
      outline: 'none',
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      color: '#1C1E1B'
    }
  }, o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron",
    size: 18
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/Cabinet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LP = window.LevPlusDesignSystem_732b9c;
const IMG = '../../assets/imagery/cabin-forest.png';
const PROJECTS = [{
  id: 'LP-014',
  name: 'Ділянка над Опором',
  location: 'Сколівщина, Львівська обл.',
  status: 'free',
  pos: 'center',
  plot: {
    area: '0,25 га',
    note: "під'їзд цілий рік · світло · вода"
  },
  house: {
    type: 'Сімейний',
    note: 'два рівні'
  },
  checks: ['Юридична', 'Технічна', 'Ринкова'],
  figures: [{
    label: 'Кошторис',
    value: '$96 000',
    hint: 'ліміт +10%'
  }, {
    label: 'Будівництво',
    value: '7 міс.'
  }, {
    label: 'Дохід / рік',
    value: '$11–14k',
    hint: 'прогноз'
  }]
}, {
  id: 'LP-009',
  name: 'Схил біля Славського',
  location: 'Славське, Львівська обл.',
  status: 'reserved',
  pos: '75% 60%',
  plot: {
    area: '0,12 га',
    note: 'вид на хребет · світло'
  },
  house: {
    type: 'Для двох',
    note: 'одноповерхова студія'
  },
  checks: ['Юридична', 'Технічна', 'Ринкова'],
  figures: [{
    label: 'Кошторис',
    value: '$58 000',
    hint: 'ліміт +10%'
  }, {
    label: 'Будівництво',
    value: '5 міс.'
  }, {
    label: 'Дохід / рік',
    value: '$7–9k',
    hint: 'прогноз'
  }]
}, {
  id: 'LP-021',
  name: 'Галявина у Яремчі',
  location: 'Яремче, Івано-Франківська обл.',
  status: 'free',
  pos: '30% 55%',
  plot: {
    area: '0,40 га',
    note: 'кластер до 5 будинків'
  },
  house: {
    type: 'Вілла',
    note: 'дві спальні, на дві сім\'ї'
  },
  checks: ['Юридична', 'Технічна'],
  figures: [{
    label: 'Кошторис',
    value: '$148 000',
    hint: 'ліміт +10%'
  }, {
    label: 'Будівництво',
    value: '9 міс.'
  }, {
    label: 'Дохід / рік',
    value: '$16–21k',
    hint: 'прогноз'
  }]
}];
const NAVI = [['grid', 'Проєкти'], ['home', 'Мої об\'єкти'], ['receipt', 'Звіти'], ['team', 'Клуб власників'], ['user', 'Профіль']];
function Sidebar() {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: '0 0 248px',
      borderRight: '1px solid var(--border)',
      padding: '28px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 36,
      position: 'sticky',
      top: 0,
      height: '100vh',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 10
    }
  }, /*#__PURE__*/React.createElement(LP.Logo, {
    tone: "night",
    size: 32,
    ring: "var(--night-bg)"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, NAVI.map(([i, t], k) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 12px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 14,
      fontWeight: 600,
      color: k === 0 ? 'var(--accent)' : 'var(--text-muted)',
      background: k === 0 ? 'var(--surface-card)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: i,
    size: 18
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 14,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border)',
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, "\u0412\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-body)'
    }
  }, "\u0406\u043C'\u044F \u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"), /*#__PURE__*/React.createElement("br", null), "info@lev.plus"));
}
function Scenarios() {
  const rows = [['Заповнюваність', '35%', '50%', '62%'], ['Чистий прибуток власника / рік', '$8 400', '$12 100', '$15 800'], ['Окупність будівництва', '11 р.', '8 р.', '6 р.'], ['Вартість землі через 5 р.', '+10%', '+25%', '+40%']];
  const th = {
    textAlign: 'left',
    padding: '12px 14px',
    fontSize: 11,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontWeight: 700,
    borderBottom: '1px solid var(--border)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--text-heading)'
    }
  }, "\u0424\u0456\u043D\u043C\u043E\u0434\u0435\u043B\u044C \xB7 \u0442\u0440\u0438 \u0441\u0446\u0435\u043D\u0430\u0440\u0456\u0457"), /*#__PURE__*/React.createElement(LP.Badge, {
    status: "accent"
  }, "\u041F\u0440\u043E\u0433\u043D\u043E\u0437, \u043D\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u044F")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\u041E\u0431\u0435\u0440\u0435\u0436\u043D\u0438\u0439"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      color: 'var(--accent)'
    }
  }, "\u0411\u0430\u0437\u043E\u0432\u0438\u0439"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "\u041E\u043F\u0442\u0438\u043C\u0456\u0441\u0442\u0438\u0447\u043D\u0438\u0439"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, r.map((c, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    style: {
      padding: '14px',
      borderBottom: '1px solid var(--border)',
      color: i === 0 ? 'var(--text-muted)' : 'var(--text-heading)',
      fontFamily: i ? 'var(--font-num)' : 'inherit',
      fontSize: i ? 20 : 14,
      fontWeight: i ? 600 : 400,
      fontVariantNumeric: 'tabular-nums'
    }
  }, c)))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\u0414\u0435\u043C\u043E-\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043C\u0430\u043A\u0435\u0442\u0430. \u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u2014 \u043F\u0456\u0434 \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F\u043C lev.plus, \u043F\u0456\u0441\u043B\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0445 \u0432\u0438\u0442\u0440\u0430\u0442."));
}
function Passport({
  p
}) {
  const blocks = [['Юридична', 'Власність, обтяження, цільове призначення, кадастр'], ['Технічна', 'Під\'їзд, електрика, вода, рельєф, ризики підтоплення'], ['Ринкова', 'Ціни сусідніх ділянок, конкуренти, заповнюваність'], ['Локація', 'Дороги, туристичні точки, плани громади']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 12
    }
  }, blocks.map(([t, d]) => {
    const ok = p.checks.includes(t);
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 14,
        padding: 18,
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border)',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        flex: '0 0 auto',
        display: 'grid',
        placeItems: 'center',
        background: ok ? 'var(--status-free)' : 'transparent',
        border: ok ? 'none' : '1px dashed var(--border-strong)',
        color: '#EFE8DA'
      }
    }, ok ? /*#__PURE__*/React.createElement(LP.Icon, {
      name: "check",
      size: 16,
      strokeWidth: 2.4
    }) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 15,
        color: 'var(--text-heading)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '4px 0 0',
        fontSize: 13,
        color: 'var(--text-muted)',
        lineHeight: 1.5
      }
    }, ok ? d : 'Експертиза триває')));
  }));
}
function Cabinet() {
  const [list, setList] = React.useState(PROJECTS);
  const [filter, setFilter] = React.useState('all');
  const [open, setOpen] = React.useState(null);
  const [note, setNote] = React.useState('');
  const reserve = id => {
    setList(l => l.map(p => p.id === id ? {
      ...p,
      status: 'reserved'
    } : p));
    setNote('Ділянку ' + id + ' заброньовано на 14 днів. Менеджер надішле реквізити для депозиту.');
  };
  const cur = list.find(p => p.id === open);
  const shown = list.filter(p => filter === 'all' || p.status === filter);
  const chip = (k, t) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setFilter(k),
    style: {
      border: '1px solid ' + (filter === k ? 'var(--accent)' : 'var(--border)'),
      background: filter === k ? 'var(--accent)' : 'transparent',
      color: filter === k ? 'var(--accent-on)' : 'var(--text-body)',
      borderRadius: 999,
      padding: '8px 16px',
      font: '600 13px var(--font-body)',
      cursor: 'pointer'
    }
  }, t);
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": "night",
    className: "lp-dots-night",
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-page)',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, null), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: '32px 48px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, cur ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(null);
    },
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(180deg)'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "arrow",
    size: 16
  })), "\u0423\u0441\u0456 \u043F\u0440\u043E\u0454\u043A\u0442\u0438") : /*#__PURE__*/React.createElement(LP.SectionLabel, {
    tone: "light"
  }, "\u041A\u0430\u0431\u0456\u043D\u0435\u0442 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 48,
      lineHeight: 1.05,
      color: 'var(--text-heading)'
    }
  }, cur ? cur.name : 'Перевірені проєкти')), !cur && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, chip('all', 'Усі'), chip('free', 'Вільні'), chip('reserved', 'Заброньовані'))), note && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-inverse)',
      border: '1px solid rgba(201,163,92,.4)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "key",
    size: 18
  })), note, /*#__PURE__*/React.createElement("button", {
    onClick: () => setNote(''),
    style: {
      marginLeft: 'auto',
      border: 0,
      background: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      font: 'inherit'
    }
  }, "\u0417\u0430\u043A\u0440\u0438\u0442\u0438")), !cur && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
      gap: 20
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(LP.ProjectCard, _extends({
    key: p.id,
    code: p.id
  }, p, {
    image: IMG,
    layout: "vertical",
    onOpen: () => setOpen(p.id),
    onReserve: () => reserve(p.id)
  })))), cur && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LP.ProjectCard, _extends({
    code: cur.id
  }, cur, {
    image: IMG,
    onOpen: () => {},
    onReserve: () => reserve(cur.id)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--text-heading)'
    }
  }, "\u041F\u0430\u0441\u043F\u043E\u0440\u0442 \u0434\u0456\u043B\u044F\u043D\u043A\u0438"), /*#__PURE__*/React.createElement(Passport, {
    p: cur
  })), /*#__PURE__*/React.createElement(Scenarios, null)))));
}
window.Cabinet = Cabinet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/Cabinet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function Site({
  m
}) {
  const [theme, setTheme] = React.useState(localStorage.getItem('lp-theme') || 'light');
  const [type, setType] = React.useState(localStorage.getItem('lp-type') || 'a');
  React.useEffect(() => {
    localStorage.setItem('lp-theme', theme);
    localStorage.setItem('lp-type', type);
  }, [theme, type]);
  const ref = React.useRef();
  const go = id => {
    const el = document.getElementById(id);
    const sc = document.scrollingElement;
    if (el) sc.scrollTo({
      top: el.getBoundingClientRect().top + sc.scrollTop - (m ? 64 : 80),
      behavior: 'smooth'
    });
  };
  const pill = (on, label, fn) => /*#__PURE__*/React.createElement("button", {
    onClick: fn,
    style: {
      border: 0,
      cursor: 'pointer',
      padding: '7px 12px',
      borderRadius: 999,
      font: '700 12px var(--font-body)',
      background: on ? 'var(--ochre)' : 'transparent',
      color: on ? '#1C1E1B' : '#EFE8DA'
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-theme": theme === 'night' ? 'night' : undefined,
    "data-type": type === 'b' ? 'b' : undefined,
    style: {
      background: 'var(--surface-page)',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    m: m,
    theme: theme,
    go: go
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    m: m,
    go: go
  }), /*#__PURE__*/React.createElement(Steps, {
    m: m
  }), /*#__PURE__*/React.createElement(Houses, {
    m: m,
    go: go
  }), /*#__PURE__*/React.createElement(Why, {
    m: m
  }), /*#__PURE__*/React.createElement(Income, {
    m: m
  }), /*#__PURE__*/React.createElement(Club, {
    m: m
  }), /*#__PURE__*/React.createElement(Team, {
    m: m
  }), /*#__PURE__*/React.createElement(Faq, {
    m: m
  }), /*#__PURE__*/React.createElement(AccessForm, {
    m: m
  })), /*#__PURE__*/React.createElement(Footer, {
    m: m
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      zIndex: 60,
      right: 16,
      bottom: 16,
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: 6,
      padding: 6,
      borderRadius: 16,
      background: 'rgba(18,36,26,.92)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, pill(theme === 'light', 'A · Ліс і льон', () => setTheme('light')), pill(theme === 'night', 'B · Нічний ліс', () => setTheme('night'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, pill(type === 'a', 'Geologica', () => setType('a')), pill(type === 'b', 'Unbounded', () => setType('b')))));
}
window.Site = Site;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const LP = window.LevPlusDesignSystem_732b9c;
const ASSET = '../../assets';
function Shell({
  m,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: m ? '0 20px' : '0 80px',
      boxSizing: 'content-box',
      ...style
    }
  }, children);
}
function H2({
  m,
  children,
  light,
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-display)',
      fontSize: m ? 40 : 'var(--fs-display-m)',
      lineHeight: 1.05,
      letterSpacing: 'var(--ls-display)',
      color: light ? 'var(--text-inverse)' : 'var(--text-heading)',
      textWrap: 'balance',
      ...style
    }
  }, children);
}
function Lead({
  children,
  light,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.65,
      color: light ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      maxWidth: 560,
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
const NAV = [['steps', 'Як це працює'], ['houses', 'Будинки'], ['why', 'Чому з нами'], ['income', 'Дохід'], ['club', 'Клуб'], ['faq', 'FAQ']];
function Header({
  m,
  theme,
  go
}) {
  const [open, setOpen] = React.useState(false);
  const night = theme === 'night';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: night ? 'rgba(18,36,26,.88)' : 'rgba(242,237,227,.9)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    m: m,
    style: {
      height: m ? 64 : 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(LP.Logo, {
    tone: night ? 'night' : 'forest',
    size: m ? 32 : 38,
    ring: night ? 'var(--night-bg)' : 'var(--linen)'
  })), !m && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30,
      fontSize: 14,
      fontWeight: 600
    }
  }, NAV.map(([id, t]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      color: 'var(--text-body)'
    }
  }, t))), !m && /*#__PURE__*/React.createElement(LP.Button, {
    size: "sm",
    variant: "outline",
    iconLeft: "lock",
    onClick: () => go('access')
  }, "\u041A\u0430\u0431\u0456\u043D\u0435\u0442 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430"), m && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      border: 0,
      background: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-heading)',
      font: 'inherit',
      fontWeight: 700,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, open ? 'Закрити' : 'Меню', /*#__PURE__*/React.createElement(LP.Icon, {
    name: open ? 'minus' : 'plus',
    size: 18
  }))), m && open && /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'absolute',
      top: 64,
      left: 0,
      right: 0,
      height: 'calc(100vh - 64px)',
      background: 'var(--surface-page)',
      padding: '20px 20px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, NAV.map(([id, t]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      setOpen(false);
      go(id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      padding: '14px 0',
      borderBottom: '1px solid var(--border)',
      color: 'var(--text-heading)'
    }
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(LP.Button, {
    fullWidth: true,
    icon: "arrow",
    onClick: () => {
      setOpen(false);
      go('access');
    }
  }, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0440\u043E\u0454\u043A\u0442\u0456\u0432"))));
}
function Footer({
  m
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse-deep)',
      color: 'var(--text-inverse-muted)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    m: m,
    style: {
      padding: m ? '40px 20px' : '56px 80px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      justifyContent: 'space-between',
      gap: 28,
      paddingBottom: 32,
      borderBottom: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement(LP.Logo, {
    tone: "linen",
    size: 36,
    ring: "var(--surface-inverse-deep)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: m ? 14 : 48
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@lev.plus",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: 'var(--text-inverse)'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "mail",
    size: 18
  }), "info@lev.plus"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: 'var(--text-inverse)'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "pin",
    size: 18
  }), "\u041A\u0438\u0457\u0432 \xB7 \u041B\u044C\u0432\u0456\u0432 \xB7 \u041A\u0430\u0440\u043F\u0430\u0442\u0438"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: 820,
      fontSize: 12,
      lineHeight: 1.7
    }
  }, "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0456 \u043D\u0435 \u0454 \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u043E\u044E \u043E\u0444\u0435\u0440\u0442\u043E\u044E, \u0456\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0456\u0439\u043D\u043E\u044E \u0447\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u043E\u044E \u043F\u043E\u0440\u0430\u0434\u043E\u044E. \u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0456 \u043F\u043E\u043A\u0430\u0437\u043D\u0438\u043A\u0438 \u2014 \u043F\u0440\u043E\u0433\u043D\u043E\u0437, \u043D\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u044F \u0434\u043E\u0445\u0456\u0434\u043D\u043E\u0441\u0442\u0456; \u0444\u0430\u043A\u0442\u0438\u0447\u043D\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0437\u0430\u043B\u0435\u0436\u0438\u0442\u044C \u0432\u0456\u0434 \u0440\u0438\u043D\u043A\u0443, \u0441\u0435\u0437\u043E\u043D\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0447\u0438\u043D\u043D\u0438\u043A\u0456\u0432. \u041E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 12
    }
  }, "\xA9 2026 lev.plus")));
}
Object.assign(window, {
  LP,
  ASSET,
  Shell,
  H2,
  Lead,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  m,
  go
}) {
  const facts = [['shield', 'Ділянка у вашій власності'], ['wallet', 'Кошторис з лімітом +10%'], ['receipt', 'Звітність з чеками']];
  const visual = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: m ? 460 : 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: m ? '0 0 0 0' : '0 0 0 40px',
      borderRadius: 'var(--radius-arch)',
      background: `linear-gradient(0deg,rgba(18,36,26,.35),transparent 50%),url(${ASSET}/imagery/cabin-forest.png) 62% center/cover`,
      border: '1px solid rgba(200,162,90,.55)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/mascot/mascot-cutout.png`,
    alt: "\u041B\u0435\u0432 \u2014 \u0430\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u043E\u0440 \u0456 \u0443\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C lev.plus",
    style: {
      position: 'absolute',
      height: m ? '96%' : '100%',
      left: m ? '50%' : '6%',
      transform: m ? 'translateX(-58%)' : 'none',
      bottom: m ? '-4%' : '-6%',
      filter: 'drop-shadow(0 24px 24px rgba(0,0,0,.3))'
    }
  }), /*#__PURE__*/React.createElement(LP.FeatureChip, {
    icon: "terrain",
    style: {
      position: 'absolute',
      right: m ? 8 : -12,
      top: m ? '12%' : '16%',
      fontSize: m ? 12 : 13
    }
  }, "\u0415\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0434\u0456\u043B\u044F\u043D\u043A\u0438"), /*#__PURE__*/React.createElement(LP.FeatureChip, {
    icon: "blueprint",
    style: {
      position: 'absolute',
      right: m ? 8 : 24,
      bottom: m ? '10%' : '14%',
      fontSize: m ? 12 : 13
    }
  }, "\u0422\u0438\u043F\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0454\u043A\u0442"));
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "lp-dots",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    m: m,
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.08fr) minmax(0,.92fr)',
      gap: m ? 36 : 40,
      alignItems: 'center',
      padding: m ? '36px 20px 48px' : '56px 80px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: m ? 22 : 30
    }
  }, /*#__PURE__*/React.createElement(LP.SectionLabel, null, "\u041A\u0430\u0440\u043F\u0430\u0442\u0438 \xB7 \u0437\u0430\u043C\u0456\u0441\u044C\u043A\u0456 \u0431\u0443\u0434\u0438\u043D\u043A\u0438 \u043F\u0456\u0434 \u043E\u0440\u0435\u043D\u0434\u0443"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-display)',
      fontSize: m ? 48 : 'var(--fs-display-xl)',
      lineHeight: m ? 1.02 : .96,
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)',
      textWrap: 'balance'
    }
  }, "\u0412\u0430\u0448 \u043A\u0430\u043F\u0456\u0442\u0430\u043B \u2014 \u0443 \u043A\u0430\u0440\u043F\u0430\u0442\u0441\u044C\u043A\u0456\u0439 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-ink)',
      fontStyle: 'italic',
      fontWeight: 500
    }
  }, "\u041C\u0438 \u0440\u043E\u0431\u0438\u043C\u043E \u0432\u0441\u0435 \u0456\u043D\u0448\u0435.")), /*#__PURE__*/React.createElement(Lead, {
    style: {
      fontSize: m ? 16 : 19
    }
  }, "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u0430 \u0434\u0456\u043B\u044F\u043D\u043A\u0430, \u0442\u0438\u043F\u043E\u0432\u0438\u0439 \u0431\u0440\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0431\u0443\u0434\u0438\u043D\u043E\u043A, \u0431\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E \u0437 \u0444\u0456\u043A\u0441\u043E\u0432\u0430\u043D\u0438\u043C \u043A\u043E\u0448\u0442\u043E\u0440\u0438\u0441\u043E\u043C \u0456 \u043F\u043E\u0432\u043D\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u043E\u0440\u0435\u043D\u0434\u043E\u044E. \u0412\u0438 \u2014 \u0432\u043B\u0430\u0441\u043D\u0438\u043A \u0430\u043A\u0442\u0438\u0432\u0443, \u044F\u043A\u0438\u0439 \u043D\u0456\u043A\u0443\u0434\u0438 \u043D\u0435 \u0434\u0456\u043D\u0435\u0442\u044C\u0441\u044F."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(LP.Button, {
    icon: "arrow",
    fullWidth: m,
    onClick: () => go('access')
  }, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0440\u043E\u0454\u043A\u0442\u0456\u0432"), /*#__PURE__*/React.createElement(LP.Button, {
    variant: "outline",
    fullWidth: m,
    onClick: () => go('steps')
  }, "\u042F\u043A \u0446\u0435 \u043F\u0440\u0430\u0446\u044E\u0454")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,auto)',
      gap: m ? 12 : 28,
      paddingTop: m ? 8 : 18,
      borderTop: '1px solid var(--border)',
      justifyContent: 'start'
    }
  }, facts.map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)',
      paddingTop: m ? 0 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-ink)'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: i,
    size: 18
  })), t)))), visual));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STEPS = [['01', 'grid', 'Вибір проєкту', 'У закритому кабінеті: ділянка після експертизи, модель будинку, фінмодель.'], ['02', 'key', 'Бронювання ділянки', 'Невеликий депозит закріплює ділянку за вами на 2–4 тижні.'], ['03', 'file', 'Купівля землі', 'Ділянка оформлюється у вашу власність з нотаріальним супроводом.'], ['04', 'briefcase', 'Комісія 10%', 'Від кошторису будівництва, частинами 30 / 40 / 30. Без прихованих платежів.'], ['05', 'home', 'Будівництво', 'Типовий проєкт, фіксований кошторис, гарантовані строки, технагляд.'], ['06', 'flag', 'Запуск', 'Фото, оголошення на нашому сайті, Booking та Airbnb.'], ['07', 'cycle', 'Управління', 'Бронювання, персонал на місці, обслуговування, щомісячний звіт.'], ['08', 'trend', 'Розподіл прибутку', 'Чистий прибуток ділиться за договором. Кожна витрата — з чеком.']];
function Steps({
  m
}) {
  const cols = m ? 1 : 4;
  return /*#__PURE__*/React.createElement("section", {
    id: "steps",
    style: {
      padding: m ? '64px 0' : '120px 0'
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    m: m
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40,
      marginBottom: m ? 36 : 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(LP.SectionLabel, {
    index: "01"
  }, "\u042F\u043A \u0446\u0435 \u043F\u0440\u0430\u0446\u044E\u0454"), /*#__PURE__*/React.createElement(H2, {
    m: m
  }, "\u0412\u0456\u0441\u0456\u043C \u043A\u0440\u043E\u043A\u0456\u0432 \u2014 \u0432\u0456\u0434 \u0434\u0456\u043B\u044F\u043D\u043A\u0438 \u0434\u043E \u0440\u043E\u0437\u043F\u043E\u0434\u0456\u043B\u0443 \u043F\u0440\u0438\u0431\u0443\u0442\u043A\u0443.")), !m && /*#__PURE__*/React.createElement(Lead, {
    style: {
      maxWidth: 360
    }
  }, "\u0412\u0438 \u0443\u0445\u0432\u0430\u043B\u044E\u0454\u0442\u0435 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u043D\u0430 \u043A\u0440\u043E\u043A\u0430\u0445 1\u20134. \u0414\u0430\u043B\u0456 \u2014 \u043D\u0430\u0448\u0430 \u0440\u043E\u0431\u043E\u0442\u0430, \u0430 \u0432\u0438 \u0431\u0430\u0447\u0438\u0442\u0435 \u043A\u043E\u0436\u0435\u043D \u0435\u0442\u0430\u043F \u0443 \u043A\u0430\u0431\u0456\u043D\u0435\u0442\u0456.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols},1fr)`,
      borderTop: '1px solid var(--border)'
    }
  }, STEPS.map(([n, i, t, d], k) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: m ? '22px 0' : '32px 28px 36px',
      paddingLeft: m || k % 4 === 0 ? 0 : 28,
      borderRight: !m && k % 4 !== 3 ? '1px solid var(--border)' : 'none',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(LP.StepItem, {
    n: n,
    icon: i,
    title: t,
    text: d,
    active: k === 4
  }))))));
}
const THEMES = ['Адам і Єва', 'Пікассо', 'Max Royal', 'Ромео і Джульєтта'];
const HOUSES = [{
  name: 'Для двох',
  kind: 'Одноповерхова студія',
  specs: ['1 рівень', 'для пари', 'панорамне скління'],
  pos: '78% 60%'
}, {
  name: 'Сімейний',
  kind: 'Два рівні',
  specs: ['2 рівні', 'для сім\'ї з дітьми', 'тераса'],
  pos: '62% center',
  featured: true
}, {
  name: 'Вілла',
  kind: 'Дві спальні, на дві сім\'ї',
  specs: ['2 спальні', 'для двох сімей', 'спільна вітальня'],
  pos: '30% 55%'
}];
function Houses({
  m,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "houses",
    style: {
      padding: m ? '64px 0' : '40px 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    m: m
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      marginBottom: m ? 32 : 56
    }
  }, /*#__PURE__*/React.createElement(LP.SectionLabel, {
    index: "02"
  }, "\u041B\u0456\u043D\u0456\u0439\u043A\u0430 \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432"), /*#__PURE__*/React.createElement(H2, {
    m: m
  }, "\u0422\u0440\u0438 \u0442\u0438\u043F\u043E\u0432\u0456 \u0431\u0443\u0434\u0438\u043D\u043A\u0438. \u0427\u043E\u0442\u0438\u0440\u0438 \u0442\u0435\u043C\u0438 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443."), /*#__PURE__*/React.createElement(Lead, null, "\u041A\u043E\u0436\u0435\u043D \u0442\u0438\u043F \u2014 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u0438\u0439 \u043F\u0440\u043E\u0454\u043A\u0442 \u0437 \u0432\u0456\u0434\u043E\u043C\u0438\u043C \u043A\u043E\u0448\u0442\u043E\u0440\u0438\u0441\u043E\u043C. \u0422\u0435\u043C\u0443 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443 \u0432\u0438 \u043E\u0431\u0438\u0440\u0430\u0454\u0442\u0435 \u043F\u0456\u0434 \u0441\u0432\u043E\u044E \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u044E \u0433\u043E\u0441\u0442\u0435\u0439.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)',
      gap: m ? 16 : 24
    }
  }, HOUSES.map(h => /*#__PURE__*/React.createElement(LP.HouseCard, _extends({
    key: h.name
  }, h, {
    themes: THEMES,
    image: `${ASSET}/imagery/cabin-forest.png`,
    imagePosition: h.pos,
    onRequest: () => go('access')
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\u0412\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 \u2014 \u043F\u0440\u0438\u043A\u043B\u0430\u0434. \u0424\u0456\u043D\u0430\u043B\u044C\u043D\u0456 \u0440\u0435\u043D\u0434\u0435\u0440\u0438 \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0443 \u0431\u0443\u0434\u0443\u0442\u044C \u0434\u043E\u0434\u0430\u043D\u0456.")));
}
const WHY = [['shield', 'Перевірені ділянки', 'Юридична, технічна і ринкова експертиза до того, як ділянка потрапить у кабінет. На кожну — паспорт проєкту.'], ['wallet', 'Фіксований кошторис', 'Ліміт перевищення +10%. Усе понад це — наш ризик. Економію ділимо 50/50.'], ['receipt', 'Прозора звітність', 'Щомісячний звіт у кабінеті власника: бронювання, витрати, розподіл — з чеками.'], ['team', 'Повне управління', 'Персонал на місці, бронювання, обслуговування, ціни. Ви нічим не займаєтесь.']];
function Why({
  m
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    style: {
      padding: m ? '0' : '0 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    m: m,
    style: m ? {
      padding: 0
    } : {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      borderRadius: m ? 0 : 'var(--radius-xl)',
      padding: m ? '56px 20px' : '80px 72px',
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,.8fr) minmax(0,1.2fr)',
      gap: m ? 36 : 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(LP.SectionLabel, {
    index: "03",
    tone: "light"
  }, "\u0427\u043E\u043C\u0443 \u0437 \u043D\u0430\u043C\u0438"), /*#__PURE__*/React.createElement(H2, {
    m: m,
    light: true
  }, "\u0420\u0438\u0437\u0438\u043A\u0438, \u044F\u043A\u0456 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u043B\u044F\u0433\u0430\u044E\u0442\u044C \u043D\u0430 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430, \u043C\u0438 \u0431\u0435\u0440\u0435\u043C\u043E \u043D\u0430 \u0441\u0435\u0431\u0435.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : '1fr 1fr',
      gap: m ? 28 : '40px 48px'
    }
  }, WHY.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(LP.RoundIcon, {
    name: i,
    tone: "dark"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 19,
      fontWeight: 700,
      color: 'var(--text-inverse)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.65,
      color: 'var(--text-inverse-muted)'
    }
  }, d)))))));
}
function IncomeChart({
  m
}) {
  const W = 560,
    H = 300,
    years = 8,
    bw = 30;
  const x = i => 40 + i * ((W - 70) / (years - 1));
  const land = Array.from({
    length: years
  }, (_, i) => H - 70 - i * 22 - i * i * 1.2);
  const path = land.map((y, i) => (i ? 'L' : 'M') + x(i) + ' ' + y).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: "20",
    x2: W - 10,
    y1: H - 30 - i * 64,
    y2: H - 30 - i * 64,
    stroke: "var(--border)"
  })), Array.from({
    length: years
  }, (_, i) => {
    const h = i === 0 ? 0 : i === 1 ? 26 : 44 + Math.min(i, 4) * 4;
    return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: x(i) - bw / 2,
      y: H - 30 - h,
      width: bw,
      height: h,
      rx: "4",
      fill: "var(--moss)",
      opacity: ".85"
    });
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "2.5",
    strokeDasharray: "6 5"
  }), land.map((y, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y,
    r: "4",
    fill: "var(--surface-card)",
    stroke: "var(--accent)",
    strokeWidth: "2"
  })), Array.from({
    length: years
  }, (_, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: x(i),
    y: H - 10,
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--text-muted)",
    fontFamily: "var(--font-body)"
  }, i === 0 ? 'старт' : 'рік ' + i)));
}
function Income({
  m
}) {
  const legend = [['var(--moss)', 'Дохід від оренди', 'Чистий прибуток після операційних витрат, щорічно.'], ['var(--accent)', 'Вартість землі і будинку', 'Актив, що лишається вашим і може зростати в ціні.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "income",
    style: {
      padding: m ? '64px 0' : '0 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    m: m,
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,.85fr) minmax(0,1.15fr)',
      gap: m ? 32 : 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(LP.SectionLabel, {
    index: "04"
  }, "\u042F\u043A \u0437\u0430\u0440\u043E\u0431\u043B\u044F\u0454 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440"), /*#__PURE__*/React.createElement(H2, {
    m: m
  }, "\u0414\u0432\u0430 \u0434\u0436\u0435\u0440\u0435\u043B\u0430 \u0432\u0438\u0433\u043E\u0434\u0438: \u043E\u0440\u0435\u043D\u0434\u0430 \u0456 \u0437\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0437\u0435\u043C\u043B\u0456."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      marginTop: 8
    }
  }, legend.map(([c, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 4,
      background: c,
      marginTop: 4,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 15,
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, d)))))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: m ? 16 : 28
    }
  }, /*#__PURE__*/React.createElement(IncomeChart, {
    m: m
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-ink)',
      fontWeight: 800,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      fontSize: 10
    }
  }, "\u0406\u043B\u044E\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0441\u0445\u0435\u043C\u0430"), "\u041F\u0440\u043E\u0433\u043D\u043E\u0437, \u043D\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u044F. \u0411\u0435\u0437 \u0447\u0438\u0441\u043B\u043E\u0432\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u044C."))));
}
Object.assign(window, {
  Steps,
  Houses,
  Why,
  Income
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections2.jsx
try { (() => {
function Club({
  m
}) {
  const rules = ['Членство — після будівництва першого об\'єкта', 'Дні проживання в об\'єктах мережі щороку', 'Пріоритет на нові перевірені ділянки', 'Рекомендації — лише від власників, винагорода — лише за реальну угоду', 'Один рівень, умови відкриті для всіх'];
  return /*#__PURE__*/React.createElement("section", {
    id: "club",
    style: {
      padding: m ? '64px 0' : '0 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    m: m
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1fr)',
      gap: m ? 28 : 72,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-xl)',
      padding: m ? '36px 22px' : '64px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(LP.SectionLabel, {
    index: "05"
  }, "\u041A\u043B\u0443\u0431 \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0456\u0432"), /*#__PURE__*/React.createElement(H2, {
    m: m
  }, "\u0421\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0430 \u0442\u0438\u0445, \u0445\u0442\u043E \u0432\u0436\u0435 \u0437\u0431\u0443\u0434\u0443\u0432\u0430\u0432."), /*#__PURE__*/React.createElement(Lead, null, "\u041A\u043B\u0443\u0431 \u2014 \u043D\u0435 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430. \u0426\u0435 \u043A\u043E\u043B\u043E \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0456\u0432, \u044F\u043A\u0456 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u0432\u0430\u044E\u0442\u044C \u0432 \u043E\u0431'\u0454\u043A\u0442\u0430\u0445 \u043E\u0434\u043D\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u0456 \u043F\u0435\u0440\u0448\u0438\u043C\u0438 \u0431\u0430\u0447\u0430\u0442\u044C \u043D\u043E\u0432\u0456 \u043F\u0440\u043E\u0454\u043A\u0442\u0438.")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      alignSelf: 'center'
    }
  }, rules.map(r => /*#__PURE__*/React.createElement("li", {
    key: r,
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 0',
      borderBottom: '1px solid var(--border)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-ink)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "check",
    size: 18
  })), r))))));
}
function Team({
  m
}) {
  const team = [['Концепція, бренд, IT'], ['Юридичний супровід, нотаріус'], ['Стратегічний партнер, Київ']];
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    style: {
      padding: m ? '0 0 64px' : '0 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    m: m
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      marginBottom: m ? 28 : 48
    }
  }, /*#__PURE__*/React.createElement(LP.SectionLabel, {
    index: "06"
  }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430"), /*#__PURE__*/React.createElement(H2, {
    m: m
  }, "\u041B\u044E\u0434\u0438, \u044F\u043A\u0456 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0442\u044C \u0437\u0430 \u0432\u0430\u0448 \u043F\u0440\u043E\u0454\u043A\u0442.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr 1fr' : 'repeat(3,1fr)',
      gap: m ? 16 : 24
    }
  }, team.map(([r], i) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      gridColumn: m && i === 2 ? '1 / -1' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: m && i === 2 ? '2/1' : '4/4.6',
      borderRadius: 'var(--radius-arch)',
      background: 'repeating-linear-gradient(135deg,var(--surface-sunken) 0 10px,var(--surface-card) 10px 20px)',
      border: '1px solid var(--border)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\u0444\u043E\u0442\u043E"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, "\u0406\u043C'\u044F \u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, r)))))));
}
const FAQS = [['Кому належить земля і будинок?', 'Вам. Ділянка купується у вашу власність, будинок будується на ній для вас. Ми — куратор і управитель.'], ['Що буде, якщо кошторис перевищено?', 'До +10% — резерв на непередбачене, його покриває інвестор. Понад +10% — наш ризик у межах нашої комісії. Економію проти кошторису ділимо 50/50.'], ['Чи гарантуєте ви дохідність?', 'Ні. Ми показуємо фінмодель у трьох сценаріях як прогноз. Дохід залежить від сезону, заповнюваності й ринку.'], ['Як розподіляється прибуток?', 'Ділиться чистий прибуток після операційних витрат. Пропорцію фіксуємо в договорі до старту, звітність — щомісяця, з чеками.'], ['Чи можу я відпочивати у своєму будинку?', 'Так, у погоджені дати поза вже проданими бронюваннями.'], ['Чи можна вийти з управління?', 'Так, за правилами виходу в договорі: завчасне попередження, обслуговування вже проданих бронювань і розрахунок по резервному фонду.']];
function Faq({
  m
}) {
  const [o, setO] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      padding: m ? '0 0 64px' : '0 0 120px'
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    m: m,
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,.8fr) minmax(0,1.2fr)',
      gap: m ? 24 : 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(LP.SectionLabel, {
    index: "07"
  }, "\u041F\u0438\u0442\u0430\u043D\u043D\u044F"), /*#__PURE__*/React.createElement(H2, {
    m: m
  }, "\u0427\u0435\u0441\u043D\u0456 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456 \u0434\u043E \u043F\u0435\u0440\u0448\u043E\u0457 \u0440\u043E\u0437\u043C\u043E\u0432\u0438.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)'
    }
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement(LP.FaqItem, {
    key: q,
    question: q,
    answer: a,
    open: o === i,
    onToggle: () => setO(o === i ? -1 : i)
  })))));
}
function AccessForm({
  m
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "access",
    style: {
      background: 'var(--surface-inverse)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    m: m,
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) 300px minmax(0,.85fr)',
      gap: m ? 32 : 40,
      padding: m ? '56px 20px 380px' : '96px 80px',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(LP.SectionLabel, {
    tone: "light"
  }, "\u0417\u0430\u043A\u0440\u0438\u0442\u0438\u0439 \u043A\u0430\u0431\u0456\u043D\u0435\u0442 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430"), /*#__PURE__*/React.createElement(H2, {
    m: m,
    light: true
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0440\u043E\u0454\u043A\u0442\u0456\u0432."), /*#__PURE__*/React.createElement(Lead, {
    light: true
  }, "\u041F\u0456\u0441\u043B\u044F \u0441\u0445\u0432\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u0432\u0438 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0435 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0438 \u0434\u0456\u043B\u044F\u043D\u043E\u043A, \u043C\u043E\u0434\u0435\u043B\u0456 \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432 \u0456 \u0444\u0456\u043D\u043C\u043E\u0434\u0435\u043B\u0456 \u0432 \u0442\u0440\u044C\u043E\u0445 \u0441\u0446\u0435\u043D\u0430\u0440\u0456\u044F\u0445.")), !m && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/mascot/mascot-cutout.png`,
    alt: "",
    style: {
      position: 'absolute',
      height: 560,
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: -150,
      filter: 'drop-shadow(0 20px 25px rgba(0,0,0,.3))'
    }
  })), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      color: 'var(--text-inverse)'
    }
  }, /*#__PURE__*/React.createElement(LP.RoundIcon, {
    name: "check",
    tone: "dark",
    size: 56
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 600
    }
  }, "\u0414\u044F\u043A\u0443\u0454\u043C\u043E. \u0417\u0430\u044F\u0432\u043A\u0443 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-inverse-muted)'
    }
  }, "\u041C\u0438 \u0437\u0432'\u044F\u0436\u0435\u043C\u043E\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u0434\u043D\u044F.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 16,
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(LP.Input, {
    tone: "dark",
    label: "\u0406\u043C'\u044F",
    placeholder: "\u042F\u043A \u0434\u043E \u0432\u0430\u0441 \u0437\u0432\u0435\u0440\u0442\u0430\u0442\u0438\u0441\u044F?"
  }), /*#__PURE__*/React.createElement(LP.Input, {
    tone: "dark",
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    type: "tel",
    placeholder: "+380"
  }), /*#__PURE__*/React.createElement(LP.Select, {
    tone: "dark",
    label: "\u0411\u0430\u0436\u0430\u043D\u0438\u0439 \u0431\u044E\u0434\u0436\u0435\u0442",
    placeholder: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D",
    options: ['до $80 000', '$80 000 – $150 000', '$150 000 – $250 000', 'понад $250 000']
  }), /*#__PURE__*/React.createElement(LP.Button, {
    variant: "accent",
    type: "submit",
    icon: "arrow",
    fullWidth: true
  }, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'var(--text-inverse-muted)'
    }
  }, "\u0414\u0430\u043D\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0434\u043B\u044F \u0437\u0432'\u044F\u0437\u043A\u0443 \u0449\u043E\u0434\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E \u043A\u0430\u0431\u0456\u043D\u0435\u0442\u0443."))), m && /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/mascot/mascot-cutout.png`,
    alt: "",
    style: {
      position: 'absolute',
      zIndex: 1,
      height: 400,
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: -40,
      filter: 'drop-shadow(0 20px 25px rgba(0,0,0,.3))'
    }
  }));
}
Object.assign(window, {
  Club,
  Team,
  Faq,
  AccessForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/V2Chrome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LP = window.LevPlusDesignSystem_732b9c;
const ASSET = '../../assets';
const IMG = ASSET + '/imagery/cabin-forest.png';
const MASCOT = ASSET + '/mascot/mascot-cutout.png';
function Wrap({
  m,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1312,
      margin: '0 auto',
      padding: m ? '0 20px' : '0 64px',
      ...style
    }
  }, children);
}
function Kicker({
  children,
  light,
  dot = 'var(--sun)'
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: light ? 'rgba(255,255,255,.82)' : 'var(--stone)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: dot
    }
  }), children);
}
function Title({
  m,
  children,
  light,
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: m ? 38 : 64,
      lineHeight: 1.02,
      letterSpacing: '-.04em',
      color: light ? '#fff' : 'var(--forest)',
      textWrap: 'balance',
      ...style
    }
  }, children);
}
function Body({
  children,
  light,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.6,
      color: light ? 'rgba(255,255,255,.74)' : 'var(--stone)',
      maxWidth: 520,
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
const CTA_KINDS = {
  sun: {
    background: 'var(--sun)',
    color: 'var(--graphite)',
    boxShadow: '0 14px 34px rgba(230,178,76,.38)'
  },
  glass: {
    background: 'rgba(255,255,255,.1)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.42)',
    backdropFilter: 'blur(10px)',
    boxShadow: 'none'
  },
  forest: {
    background: 'var(--forest)',
    color: '#fff',
    boxShadow: '0 14px 30px rgba(18,53,42,.22)'
  },
  line: {
    background: 'transparent',
    color: 'var(--forest)',
    border: '1px solid rgba(31,58,43,.3)',
    boxShadow: 'none'
  }
};
function Cta({
  kind = 'sun',
  style,
  children,
  ...p
}) {
  return /*#__PURE__*/React.createElement(LP.Button, _extends({}, p, {
    style: {
      borderRadius: 999,
      padding: p.size === 'sm' ? '0 20px' : '0 30px',
      whiteSpace: 'nowrap',
      ...CTA_KINDS[kind],
      ...style
    }
  }), children);
}
const NAV = [['concept', 'Концепція'], ['houses', 'Вілли'], ['steps', 'Як це працює'], ['why', 'Чому ми'], ['income', 'Дохід'], ['club', 'Клуб'], ['faq', 'FAQ']];
function Header({
  m,
  go
}) {
  const [sc, setSc] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const f = () => setSc(window.scrollY > 40);
    f();
    addEventListener('scroll', f);
    return () => removeEventListener('scroll', f);
  }, []);
  const solid = sc || open;
  const H = m ? 68 : 88;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      marginBottom: -H,
      transition: 'background .3s, box-shadow .3s',
      background: solid ? 'rgba(255,255,255,.94)' : 'transparent',
      backdropFilter: solid ? 'blur(16px)' : 'none',
      boxShadow: solid ? '0 1px 0 var(--line)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    m: m,
    style: {
      height: H,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      setOpen(false);
      go('top');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(LP.Logo, {
    tone: solid ? 'forest' : 'linen',
    size: m ? 34 : 42
  })), !m && /*#__PURE__*/React.createElement("nav", {
    className: "v2nav",
    style: {
      display: 'flex',
      gap: 2,
      padding: 5,
      borderRadius: 999,
      background: solid ? 'transparent' : 'rgba(255,255,255,.1)',
      border: '1px solid ' + (solid ? 'transparent' : 'rgba(255,255,255,.22)'),
      backdropFilter: solid ? 'none' : 'blur(10px)'
    }
  }, NAV.map(([id, t]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      padding: '9px 15px',
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      color: solid ? 'var(--graphite)' : '#fff'
    }
  }, t))), !m && /*#__PURE__*/React.createElement(Cta, {
    size: "sm",
    kind: solid ? 'forest' : 'sun',
    iconLeft: "lock",
    onClick: () => go('access')
  }, "\u041A\u0430\u0431\u0456\u043D\u0435\u0442 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430"), m && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      border: 0,
      background: solid ? 'var(--linen)' : 'rgba(255,255,255,.14)',
      borderRadius: 999,
      height: 40,
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: solid ? 'var(--forest)' : '#fff',
      font: '600 13px var(--font-body)',
      cursor: 'pointer'
    }
  }, open ? 'Закрити' : 'Меню', /*#__PURE__*/React.createElement(LP.Icon, {
    name: open ? 'minus' : 'plus',
    size: 16
  }))), m && open && /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'absolute',
      top: H,
      left: 0,
      right: 0,
      height: 'calc(100vh - 68px)',
      background: '#fff',
      padding: 20,
      display: 'flex',
      flexDirection: 'column'
    }
  }, NAV.map(([id, t]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      setOpen(false);
      go(id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      letterSpacing: '-.03em',
      fontSize: 30,
      padding: '12px 0',
      borderBottom: '1px solid var(--line)',
      color: 'var(--forest)'
    }
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Cta, {
    fullWidth: true,
    icon: "arrow",
    onClick: () => {
      setOpen(false);
      go('access');
    }
  }, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0440\u043E\u0454\u043A\u0442\u0456\u0432"))));
}
function Footer({
  m,
  go
}) {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  };
  const h = {
    margin: '0 0 4px',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '.16em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,.45)'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--forest-ink)',
      color: 'rgba(255,255,255,.7)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    m: m,
    style: {
      padding: m ? '56px 20px 32px' : '80px 64px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : '1.5fr 1fr 1fr',
      gap: m ? 36 : 48,
      paddingBottom: 40,
      borderBottom: '1px solid rgba(255,255,255,.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(LP.Logo, {
    tone: "linen",
    size: 48
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 340,
      lineHeight: 1.6
    }
  }, "\u041A\u0443\u0440\u0430\u0442\u043E\u0440\u0441\u044C\u043A\u0430 \u0456 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0447\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u0434\u043B\u044F \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0456\u0432 \u0443 \u0437\u0430\u043C\u0456\u0441\u044C\u043A\u0456 \u0432\u0456\u043B\u043B\u0438 \u043F\u0456\u0434 \u043E\u0440\u0435\u043D\u0434\u0443 \u0432 \u041A\u0430\u0440\u043F\u0430\u0442\u0430\u0445.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("p", {
    style: h
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@lev.plus",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "mail",
    size: 18
  }), "info@lev.plus"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "pin",
    size: 18
  }), "\u041A\u0438\u0457\u0432 \xB7 \u041B\u044C\u0432\u0456\u0432 \xB7 \u041A\u0430\u0440\u043F\u0430\u0442\u0438")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("p", {
    style: h
  }, "\u0420\u043E\u0437\u0434\u0456\u043B\u0438"), NAV.slice(0, 5).map(([id, t]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      color: '#fff'
    }
  }, t)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: 860,
      fontSize: 12,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,.55)'
    }
  }, "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0456 \u043D\u0435 \u0454 \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u043E\u044E \u043E\u0444\u0435\u0440\u0442\u043E\u044E, \u0456\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0456\u0439\u043D\u043E\u044E \u0447\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u043E\u044E \u043F\u043E\u0440\u0430\u0434\u043E\u044E. \u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0456 \u043F\u043E\u043A\u0430\u0437\u043D\u0438\u043A\u0438 \u2014 \u043F\u0440\u043E\u0433\u043D\u043E\u0437, \u043D\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u044F \u0434\u043E\u0445\u0456\u0434\u043D\u043E\u0441\u0442\u0456; \u0444\u0430\u043A\u0442\u0438\u0447\u043D\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0437\u0430\u043B\u0435\u0436\u0438\u0442\u044C \u0432\u0456\u0434 \u0440\u0438\u043D\u043A\u0443, \u0441\u0435\u0437\u043E\u043D\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0447\u0438\u043D\u043D\u0438\u043A\u0456\u0432. \u041E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 12,
      color: 'rgba(255,255,255,.55)'
    }
  }, "\xA9 2026 lev.plus")));
}
Object.assign(window, {
  LP,
  ASSET,
  IMG,
  MASCOT,
  Wrap,
  Kicker,
  Title,
  Body,
  Cta,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/V2Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/V2End.jsx
try { (() => {
function Club({
  m
}) {
  const rules = ["Членство — після будівництва першого об'єкта", "Дні проживання в об'єктах мережі щороку", 'Пріоритет на нові перевірені ділянки', 'Рекомендації — лише від власників, винагорода — лише за реальну угоду', 'Один рівень, умови відкриті для всіх'];
  return /*#__PURE__*/React.createElement("section", {
    id: "club",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--forest-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${IMG}) 90% 70%/cover`,
      filter: 'saturate(1.15) brightness(1.05)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(9,28,19,.86) 0%,rgba(9,28,19,.55) 55%,rgba(9,28,19,.3) 100%)'
    }
  }), /*#__PURE__*/React.createElement(Wrap, {
    m: m,
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,.9fr)',
      gap: m ? 32 : 80,
      padding: m ? '80px 20px' : '140px 64px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    light: true
  }, "\u041A\u043B\u0443\u0431 \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0456\u0432"), /*#__PURE__*/React.createElement(Title, {
    m: m,
    light: true
  }, "\u0421\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0430 \u0442\u0438\u0445, \u0445\u0442\u043E \u0432\u0436\u0435 \u0437\u0431\u0443\u0434\u0443\u0432\u0430\u0432."), /*#__PURE__*/React.createElement(Body, {
    light: true
  }, "\u041A\u043B\u0443\u0431 \u2014 \u043D\u0435 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430. \u0426\u0435 \u043A\u043E\u043B\u043E \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0456\u0432, \u044F\u043A\u0456 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u0432\u0430\u044E\u0442\u044C \u0432 \u043E\u0431'\u0454\u043A\u0442\u0430\u0445 \u043E\u0434\u043D\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u0456 \u043F\u0435\u0440\u0448\u0438\u043C\u0438 \u0431\u0430\u0447\u0430\u0442\u044C \u043D\u043E\u0432\u0456 \u043F\u0440\u043E\u0454\u043A\u0442\u0438.")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: m ? '8px 22px' : '12px 36px',
      borderRadius: 28,
      background: 'rgba(255,255,255,.1)',
      border: '1px solid rgba(255,255,255,.2)',
      backdropFilter: 'blur(18px)'
    }
  }, rules.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: r,
    style: {
      display: 'flex',
      gap: 14,
      padding: '18px 0',
      borderTop: i ? '1px solid rgba(255,255,255,.14)' : 'none',
      fontSize: 15,
      lineHeight: 1.5,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: '0 0 auto',
      borderRadius: 99,
      background: 'var(--sun)',
      color: 'var(--graphite)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2.4
  })), r)))));
}
function Team({
  m
}) {
  const team = ['Концепція, бренд, IT', 'Юридичний супровід, нотаріус', 'Стратегічний партнер, Київ'];
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    style: {
      background: '#fff',
      padding: m ? '72px 0 32px' : '128px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    m: m
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      marginBottom: m ? 32 : 56
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430"), /*#__PURE__*/React.createElement(Title, {
    m: m
  }, "\u041B\u044E\u0434\u0438, \u044F\u043A\u0456 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0442\u044C \u0437\u0430 \u0432\u0430\u0448 \u043F\u0440\u043E\u0454\u043A\u0442.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr 1fr' : 'repeat(3,1fr)',
      gap: m ? 16 : 24
    }
  }, team.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      gridColumn: m && i === 2 ? '1 / -1' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: m && i === 2 ? '2/1' : '4/4.6',
      borderRadius: 28,
      background: 'repeating-linear-gradient(135deg,#F4EFE4 0 10px,#FAF7F0 10px 20px)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 12,
      color: 'var(--stone)'
    }
  }, "\u0444\u043E\u0442\u043E"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 400,
      letterSpacing: '-.03em',
      color: 'var(--forest)'
    }
  }, "\u0406\u043C'\u044F \u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--stone)'
    }
  }, r)))))));
}
const FAQS = [['Кому належить земля і будинок?', 'Вам. Ділянка купується у вашу власність, будинок будується на ній для вас. Ми — куратор і управитель.'], ['Що буде, якщо кошторис перевищено?', 'До +10% — резерв на непередбачене, його покриває інвестор. Понад +10% — наш ризик у межах нашої комісії. Економію проти кошторису ділимо 50/50.'], ['Чи гарантуєте ви дохідність?', 'Ні. Ми показуємо фінмодель у трьох сценаріях як прогноз. Дохід залежить від сезону, заповнюваності й ринку.'], ['Як розподіляється прибуток?', 'Ділиться чистий прибуток після операційних витрат. Пропорцію фіксуємо в договорі до старту, звітність — щомісяця, з чеками.'], ['Чи можу я відпочивати у своєму будинку?', 'Так, у погоджені дати поза вже проданими бронюваннями.'], ['Чи можна вийти з управління?', 'Так, за правилами виходу в договорі: завчасне попередження, обслуговування вже проданих бронювань і розрахунок по резервному фонду.']];
function Faq({
  m
}) {
  const [o, setO] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      background: '#fff',
      padding: m ? '56px 0 72px' : '96px 0 128px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    m: m,
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,.85fr) minmax(0,1.15fr)',
      gap: m ? 24 : 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "\u041F\u0438\u0442\u0430\u043D\u043D\u044F"), /*#__PURE__*/React.createElement(Title, {
    m: m
  }, "\u0427\u0435\u0441\u043D\u0456 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456 \u0434\u043E \u043F\u0435\u0440\u0448\u043E\u0457 \u0440\u043E\u0437\u043C\u043E\u0432\u0438.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement(LP.FaqItem, {
    key: q,
    question: q,
    answer: a,
    open: o === i,
    onToggle: () => setO(o === i ? -1 : i)
  })))));
}
function Access({
  m
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "access",
    style: {
      background: 'var(--sun)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    m: m,
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) 280px minmax(0,.9fr)',
      gap: m ? 32 : 40,
      padding: m ? '72px 20px 340px' : '120px 64px',
      position: 'relative',
      zIndex: 2,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    dot: "var(--forest)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--graphite)'
    }
  }, "\u0417\u0430\u043A\u0440\u0438\u0442\u0438\u0439 \u043A\u0430\u0431\u0456\u043D\u0435\u0442 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430")), /*#__PURE__*/React.createElement(Title, {
    m: m,
    style: {
      color: 'var(--graphite)'
    }
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0440\u043E\u0454\u043A\u0442\u0456\u0432."), /*#__PURE__*/React.createElement(Body, {
    style: {
      color: '#3A3626'
    }
  }, "\u041F\u0456\u0441\u043B\u044F \u0441\u0445\u0432\u0430\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u0432\u0438 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0435 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0438 \u0434\u0456\u043B\u044F\u043D\u043E\u043A, \u043C\u043E\u0434\u0435\u043B\u0456 \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432 \u0456 \u0444\u0456\u043D\u043C\u043E\u0434\u0435\u043B\u0456 \u0432 \u0442\u0440\u044C\u043E\u0445 \u0441\u0446\u0435\u043D\u0430\u0440\u0456\u044F\u0445.")), !m && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MASCOT,
    alt: "",
    style: {
      position: 'absolute',
      height: 600,
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: -190,
      filter: 'drop-shadow(0 24px 30px rgba(60,40,0,.3))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 28,
      padding: m ? 24 : 40,
      boxShadow: '0 30px 70px rgba(90,60,0,.18)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 99,
      background: 'var(--leaf)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "check",
    size: 26,
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 400,
      letterSpacing: '-.04em',
      color: 'var(--forest)'
    }
  }, "\u0414\u044F\u043A\u0443\u0454\u043C\u043E. \u0417\u0430\u044F\u0432\u043A\u0443 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--stone)'
    }
  }, "\u041C\u0438 \u0437\u0432'\u044F\u0436\u0435\u043C\u043E\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u0434\u043D\u044F.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(LP.Input, {
    label: "\u0406\u043C'\u044F",
    placeholder: "\u042F\u043A \u0434\u043E \u0432\u0430\u0441 \u0437\u0432\u0435\u0440\u0442\u0430\u0442\u0438\u0441\u044F?"
  }), /*#__PURE__*/React.createElement(LP.Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    type: "tel",
    placeholder: "+380"
  }), /*#__PURE__*/React.createElement(LP.Select, {
    label: "\u0411\u0430\u0436\u0430\u043D\u0438\u0439 \u0431\u044E\u0434\u0436\u0435\u0442",
    placeholder: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D",
    options: ['до $80 000', '$80 000 – $150 000', '$150 000 – $250 000', 'понад $250 000']
  }), /*#__PURE__*/React.createElement(Cta, {
    kind: "forest",
    type: "submit",
    icon: "arrow",
    fullWidth: true,
    style: {
      marginTop: 6
    }
  }, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'var(--stone)'
    }
  }, "\u0414\u0430\u043D\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0434\u043B\u044F \u0437\u0432'\u044F\u0437\u043A\u0443 \u0449\u043E\u0434\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E \u043A\u0430\u0431\u0456\u043D\u0435\u0442\u0443.")))), m && /*#__PURE__*/React.createElement("img", {
    src: MASCOT,
    alt: "",
    style: {
      position: 'absolute',
      zIndex: 1,
      height: 360,
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: -40,
      filter: 'drop-shadow(0 20px 25px rgba(60,40,0,.3))'
    }
  }));
}
function SiteV2({
  m
}) {
  const go = id => {
    const el = document.getElementById(id);
    const sc = document.scrollingElement;
    if (el) sc.scrollTo({
      top: el.getBoundingClientRect().top + sc.scrollTop - (id === 'top' ? 9999 : m ? 60 : 80),
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      color: 'var(--graphite)',
      fontFamily: 'var(--font-body)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    m: m,
    go: go
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    m: m,
    go: go
  }), /*#__PURE__*/React.createElement(Manifest, {
    m: m
  }), /*#__PURE__*/React.createElement(Houses, {
    m: m,
    go: go
  }), /*#__PURE__*/React.createElement(Steps, {
    m: m
  }), /*#__PURE__*/React.createElement(Why, {
    m: m
  }), /*#__PURE__*/React.createElement(Income, {
    m: m
  }), /*#__PURE__*/React.createElement(Club, {
    m: m
  }), /*#__PURE__*/React.createElement(Faq, {
    m: m
  }), /*#__PURE__*/React.createElement(Access, {
    m: m
  })), /*#__PURE__*/React.createElement(Footer, {
    m: m,
    go: go
  }));
}
Object.assign(window, {
  Club,
  Team,
  Faq,
  Access,
  SiteV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/V2End.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/V2Mid.jsx
try { (() => {
const STEPS = [['Вибір проєкту', 'У закритому кабінеті: ділянка після експертизи, модель будинку, фінмодель.'], ['Бронювання ділянки', 'Невеликий депозит закріплює ділянку за вами на 2–4 тижні.'], ['Купівля землі', 'Ділянка оформлюється у вашу власність з нотаріальним супроводом.'], ['Комісія 10%', 'Від кошторису будівництва, частинами 30 / 40 / 30. Без прихованих платежів.'], ['Будівництво', 'Типовий проєкт, фіксований кошторис, гарантовані строки, технагляд.'], ['Запуск', 'Фото, оголошення на нашому сайті, Booking та Airbnb.'], ['Управління', 'Бронювання, персонал на місці, обслуговування, щомісячний звіт.'], ['Розподіл прибутку', 'Чистий прибуток ділиться за договором. Кожна витрата — з чеком.']];
function Steps({
  m
}) {
  const [a, setA] = React.useState(3);
  return /*#__PURE__*/React.createElement("section", {
    id: "steps",
    style: {
      background: 'var(--forest)',
      color: '#fff',
      padding: m ? '72px 0' : '128px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    m: m
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: m ? 'flex-start' : 'flex-end',
      gap: 28,
      marginBottom: m ? 40 : 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    light: true
  }, "\u042F\u043A \u0446\u0435 \u043F\u0440\u0430\u0446\u044E\u0454"), /*#__PURE__*/React.createElement(Title, {
    m: m,
    light: true
  }, "\u0412\u0456\u0441\u0456\u043C \u043A\u0440\u043E\u043A\u0456\u0432 \u2014 \u0432\u0456\u0434 \u0434\u0456\u043B\u044F\u043D\u043A\u0438 \u0434\u043E \u0440\u043E\u0437\u043F\u043E\u0434\u0456\u043B\u0443 \u043F\u0440\u0438\u0431\u0443\u0442\u043A\u0443.")), /*#__PURE__*/React.createElement(Body, {
    light: true,
    style: {
      maxWidth: 380
    }
  }, "\u0412\u0438 \u0443\u0445\u0432\u0430\u043B\u044E\u0454\u0442\u0435 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u043D\u0430 \u043A\u0440\u043E\u043A\u0430\u0445 1\u20134. \u0414\u0430\u043B\u0456 \u2014 \u043D\u0430\u0448\u0430 \u0440\u043E\u0431\u043E\u0442\u0430, \u0430 \u0432\u0438 \u0431\u0430\u0447\u0438\u0442\u0435 \u043A\u043E\u0436\u0435\u043D \u0435\u0442\u0430\u043F \u0443 \u043A\u0430\u0431\u0456\u043D\u0435\u0442\u0456.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(4,1fr)',
      columnGap: 28,
      rowGap: m ? 0 : 56
    }
  }, STEPS.map(([t, d], i) => {
    const on = i <= a;
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      onMouseEnter: () => setA(i),
      onClick: () => setA(i),
      style: {
        cursor: 'default',
        display: 'flex',
        flexDirection: m ? 'row' : 'column',
        gap: m ? 18 : 14,
        padding: m ? '22px 0' : 0,
        borderTop: m ? '1px solid rgba(255,255,255,.14)' : 'none'
      }
    }, !m && /*#__PURE__*/React.createElement("span", {
      style: {
        height: 2,
        borderRadius: 2,
        background: on ? 'var(--sun)' : 'rgba(255,255,255,.16)',
        transition: 'background .3s'
      }
    }), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 200,
        fontSize: m ? 40 : 60,
        letterSpacing: '-.05em',
        lineHeight: 1,
        color: on ? 'var(--sun)' : 'rgba(255,255,255,.38)',
        transition: 'color .3s',
        minWidth: m ? 56 : 0,
        marginTop: m ? 0 : 10
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: '-.01em'
      }
    }, t, i === 3 && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 10,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--sun)'
      }
    }, "\u0432\u0430\u0448\u0456 \u0440\u0456\u0448\u0435\u043D\u043D\u044F")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,.68)'
      }
    }, d)));
  }))));
}
const WHY = [['3', 'експертизи', 'Перевірені ділянки', 'Юридична, технічна і ринкова експертиза до того, як ділянка потрапить у кабінет. На кожну — паспорт проєкту.'], ['+10%', 'ліміт перевищення', 'Фіксований кошторис', 'Усе понад +10% — наш ризик. Економію проти кошторису ділимо 50/50.'], ['100%', 'витрат з чеками', 'Прозора звітність', 'Щомісячний звіт у кабінеті власника: бронювання, витрати, розподіл.'], ['1', 'договір', 'Повне управління', 'Персонал на місці, бронювання, обслуговування, ціни. Ви нічим не займаєтесь.']];
function Why({
  m
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    style: {
      background: '#fff',
      padding: m ? '72px 0' : '128px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    m: m,
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,.85fr) minmax(0,1.15fr)',
      gap: m ? 32 : 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignSelf: 'start',
      position: m ? 'static' : 'sticky',
      top: 120
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "\u0427\u043E\u043C\u0443 \u0437 \u043D\u0430\u043C\u0438"), /*#__PURE__*/React.createElement(Title, {
    m: m
  }, "\u0420\u0438\u0437\u0438\u043A\u0438, \u044F\u043A\u0456 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u043B\u044F\u0433\u0430\u044E\u0442\u044C \u043D\u0430 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430, \u043C\u0438 \u0431\u0435\u0440\u0435\u043C\u043E \u043D\u0430 \u0441\u0435\u0431\u0435.")), /*#__PURE__*/React.createElement("div", null, WHY.map(([v, l, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : '210px 1fr',
      gap: m ? 12 : 32,
      padding: m ? '26px 0' : '38px 0',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: m ? 48 : 68,
      letterSpacing: '-.05em',
      lineHeight: .95,
      color: 'var(--forest)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--stone)'
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: m ? 0 : 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-.015em',
      color: 'var(--forest)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--stone)',
      maxWidth: 480
    }
  }, d)))))));
}
function IncomeChart() {
  const W = 600,
    H = 320,
    n = 8,
    bw = 34;
  const x = i => 44 + i * ((W - 80) / (n - 1));
  const land = Array.from({
    length: n
  }, (_, i) => H - 80 - i * 24 - i * i * 1.3);
  const path = land.map((y, i) => (i ? 'L' : 'M') + x(i) + ' ' + y).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: "20",
    x2: W - 10,
    y1: H - 32 - i * 68,
    y2: H - 32 - i * 68,
    stroke: "#ECE6D9"
  })), Array.from({
    length: n
  }, (_, i) => {
    const h = i === 0 ? 0 : i === 1 ? 30 : 50 + Math.min(i, 4) * 5;
    return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: x(i) - bw / 2,
      y: H - 32 - h,
      width: bw,
      height: h,
      rx: "8",
      fill: "var(--leaf)"
    });
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "var(--sun)",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), land.map((y, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y,
    r: "5",
    fill: "#fff",
    stroke: "var(--sun)",
    strokeWidth: "2.5"
  })), Array.from({
    length: n
  }, (_, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: x(i),
    y: H - 10,
    textAnchor: "middle",
    fontSize: "12",
    fill: "#5C6158",
    fontFamily: "var(--font-body)"
  }, i === 0 ? 'старт' : 'рік ' + i)));
}
function Income({
  m
}) {
  const legend = [['var(--leaf)', 'Дохід від оренди', 'Чистий прибуток після операційних витрат, щорічно.'], ['var(--sun)', 'Вартість землі і будинку', 'Актив, що лишається вашим і може зростати в ціні.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "income",
    style: {
      background: 'var(--linen)',
      padding: m ? '72px 0' : '128px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    m: m,
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,.85fr) minmax(0,1.15fr)',
      gap: m ? 32 : 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "\u042F\u043A \u0437\u0430\u0440\u043E\u0431\u043B\u044F\u0454 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440"), /*#__PURE__*/React.createElement(Title, {
    m: m
  }, "\u0414\u0432\u0430 \u0434\u0436\u0435\u0440\u0435\u043B\u0430 \u0432\u0438\u0433\u043E\u0434\u0438: \u043E\u0440\u0435\u043D\u0434\u0430 \u0456 \u0437\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0437\u0435\u043C\u043B\u0456."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18,
      marginTop: 12
    }
  }, legend.map(([c, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 99,
      background: c,
      marginTop: 3,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--forest)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--stone)',
      lineHeight: 1.6
    }
  }, d)))))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: '#fff',
      borderRadius: 28,
      padding: m ? 18 : 36,
      boxShadow: '0 24px 60px rgba(9,28,19,.08)'
    }
  }, /*#__PURE__*/React.createElement(IncomeChart, null), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 10,
      marginTop: 16,
      fontSize: 13,
      color: 'var(--stone)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 26,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 10px',
      borderRadius: 999,
      background: 'var(--linen)',
      color: 'var(--forest)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, "\u0406\u043B\u044E\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0441\u0445\u0435\u043C\u0430"), "\u041F\u0440\u043E\u0433\u043D\u043E\u0437, \u043D\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u044F. \u0411\u0435\u0437 \u0447\u0438\u0441\u043B\u043E\u0432\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u044C."))));
}
Object.assign(window, {
  Steps,
  Why,
  Income
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/V2Mid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/V2Top.jsx
try { (() => {
function Hero({
  m,
  go
}) {
  const facts = [['3', 'типи вілл під ключ'], ['4', "теми інтер'єру на вибір"], ['+10%', 'максимальне перевищення кошторису'], ['100%', 'управління орендою — на нас']];
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: m ? 980 : 920,
      overflow: 'hidden',
      background: 'var(--forest-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `url(${IMG}) 62% center/cover`,
      filter: 'saturate(1.2) brightness(1.1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: m ? 'linear-gradient(180deg,rgba(9,28,19,.78) 0%,rgba(9,28,19,.45) 60%,rgba(9,28,19,.7) 100%)' : 'linear-gradient(90deg,rgba(9,28,19,.84) 0%,rgba(9,28,19,.52) 40%,rgba(9,28,19,0) 70%),linear-gradient(0deg,rgba(9,28,19,.5),transparent 35%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: MASCOT,
    alt: "\u041B\u0435\u0432 \u2014 \u0430\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u043E\u0440 \u0456 \u0443\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C lev.plus",
    style: {
      position: 'absolute',
      right: m ? -40 : '4%',
      bottom: m ? 96 : -40,
      height: m ? 270 : 800,
      filter: 'drop-shadow(0 30px 40px rgba(0,0,0,.45))'
    }
  }), /*#__PURE__*/React.createElement(Wrap, {
    m: m,
    style: {
      position: 'relative',
      paddingTop: m ? 112 : 184
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      display: 'flex',
      flexDirection: 'column',
      gap: m ? 20 : 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 34,
      padding: '0 14px',
      borderRadius: 999,
      background: 'rgba(255,255,255,.12)',
      border: '1px solid rgba(255,255,255,.28)',
      backdropFilter: 'blur(10px)',
      color: '#fff',
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "mountain",
    size: 15
  }), "VIP-\u0432\u0456\u043B\u043B\u0438 \u0432 \u041A\u0430\u0440\u043F\u0430\u0442\u0430\u0445"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 34,
      padding: '0 14px',
      borderRadius: 999,
      background: 'var(--leaf)',
      color: '#fff',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "leaf",
    size: 15
  }), "\u0415\u043A\u043E-\u0444\u043E\u0440\u043C\u0430\u0442")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: m ? 44 : 92,
      lineHeight: m ? 1.04 : .98,
      letterSpacing: '-.045em',
      color: '#fff',
      textWrap: 'balance'
    }
  }, "\u0412\u0430\u0448 \u043A\u0430\u043F\u0456\u0442\u0430\u043B \u2014 \u0443 \u043A\u0430\u0440\u043F\u0430\u0442\u0441\u044C\u043A\u0456\u0439 \u043D\u0435\u0440\u0443\u0445\u043E\u043C\u043E\u0441\u0442\u0456.", !m && /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sun)',
      fontWeight: 500
    }
  }, "\u041C\u0438 \u0440\u043E\u0431\u0438\u043C\u043E \u0432\u0441\u0435 \u0456\u043D\u0448\u0435.")), /*#__PURE__*/React.createElement(Body, {
    light: true,
    style: {
      fontSize: m ? 16 : 19,
      maxWidth: 560,
      color: 'rgba(255,255,255,.84)'
    }
  }, "\u041F\u0440\u0435\u043C\u0456\u0430\u043B\u044C\u043D\u0456 \u0432\u0456\u043B\u043B\u0438 \u0432 \u043A\u0430\u0440\u043F\u0430\u0442\u0441\u044C\u043A\u043E\u043C\u0443 \u043B\u0456\u0441\u0456 \u2014 \u0437\u0430 \u0431\u044E\u0434\u0436\u0435\u0442, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u043C\u0443 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0443. \u0414\u0456\u043B\u044F\u043D\u043A\u0430, \u0431\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E \u0456 \u043E\u0440\u0435\u043D\u0434\u0430 \u043F\u0456\u0434 \u043A\u043B\u044E\u0447."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: 12,
      marginTop: 4,
      maxWidth: m ? 260 : 'none'
    }
  }, /*#__PURE__*/React.createElement(Cta, {
    icon: "arrow",
    onClick: () => go('access')
  }, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0440\u043E\u0454\u043A\u0442\u0456\u0432"), /*#__PURE__*/React.createElement(Cta, {
    kind: "glass",
    onClick: () => go('steps')
  }, "\u042F\u043A \u0446\u0435 \u043F\u0440\u0430\u0446\u044E\u0454"))))), /*#__PURE__*/React.createElement(Wrap, {
    m: m,
    style: {
      position: 'relative',
      zIndex: 3,
      marginTop: m ? -110 : -66
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,1fr)',
      background: '#fff',
      borderRadius: m ? 22 : 28,
      boxShadow: '0 30px 80px rgba(9,28,19,.16)',
      padding: m ? 6 : 12
    }
  }, facts.map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      padding: m ? '18px 16px' : '24px 32px',
      borderLeft: (m ? i % 2 : i) ? '1px solid var(--line)' : 'none',
      borderTop: m && i > 1 ? '1px solid var(--line)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: m ? 34 : 50,
      letterSpacing: '-.045em',
      lineHeight: 1,
      color: 'var(--forest)'
    }
  }, v), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--stone)'
    }
  }, l))))));
}
function Manifest({
  m
}) {
  const chip = (pos, w) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: m ? w * .5 : w,
      height: m ? 32 : 66,
      borderRadius: 999,
      background: `url(${IMG}) ${pos}/cover`,
      verticalAlign: 'middle',
      margin: '0 .1em',
      transform: 'translateY(-.06em)'
    }
  });
  const eco = [['leaf', 'Еко-формат', 'Дерево, скло і камінь. Будинок вписують у ліс на ділянці, а не розчищають під нього місце.'], ['mountain', 'Попит на тишу', 'Гості їдуть у Карпати по ліс, гори і приватність. На цей попит розраховані наші вілли.'], ['sun', 'Преміум без переплат', 'Типові проєкти і фіксований кошторис замість індивідуальної архітектури за індивідуальною ціною.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "concept",
    style: {
      padding: m ? '72px 0 64px' : '136px 0 120px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    m: m
  }, /*#__PURE__*/React.createElement(Kicker, null, "\u041A\u043E\u043D\u0446\u0435\u043F\u0446\u0456\u044F lev.plus"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: m ? '22px 0 0' : '30px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: m ? 32 : 66,
      lineHeight: 1.12,
      letterSpacing: '-.045em',
      color: 'var(--forest)',
      maxWidth: 1180
    }
  }, "\u041F\u0440\u0435\u043C\u0456\u0430\u043B\u044C\u043D\u0430 \u0432\u0456\u043B\u043B\u0430 ", chip('58% 42%', 150), " \u0443 \u043A\u0430\u0440\u043F\u0430\u0442\u0441\u044C\u043A\u043E\u043C\u0443 \u043B\u0456\u0441\u0456 \u2014 \u0437\u0430 \u0431\u044E\u0434\u0436\u0435\u0442, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--leaf)',
      fontWeight: 400
    }
  }, "\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439"), " ", chip('92% 78%', 120), " \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u043C\u0443 \u0456\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0443. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9AA096'
    }
  }, "\u0412\u0438 \u0432\u043E\u043B\u043E\u0434\u0456\u0454\u0442\u0435 \u0430\u043A\u0442\u0438\u0432\u043E\u043C, \u043C\u0438 \u0440\u043E\u0431\u0438\u043C\u043E \u0440\u0435\u0448\u0442\u0443.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)',
      gap: m ? 28 : 48,
      marginTop: m ? 48 : 88,
      paddingTop: m ? 32 : 40,
      borderTop: '1px solid var(--line)'
    }
  }, eco.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 999,
      background: 'rgba(94,154,75,.12)',
      color: 'var(--leaf)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: i,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 0',
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--forest)',
      letterSpacing: '-.01em'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--stone)',
      maxWidth: 360
    }
  }, d))))));
}
const THEMES = ['Адам і Єва', 'Пікассо', 'Max Royal', 'Ромео і Джульєтта'];
const HOUSES = [{
  n: '01',
  name: 'Для двох',
  kind: 'Одноповерхова студія',
  specs: ['1 рівень', 'для пари', 'панорамне скління'],
  pos: '88% 60%'
}, {
  n: '02',
  name: 'Сімейний',
  kind: 'Два рівні',
  specs: ['2 рівні', "для сім'ї з дітьми", 'тераса'],
  pos: '58% 40%'
}, {
  n: '03',
  name: 'Вілла',
  kind: "Дві спальні, на дві сім'ї",
  specs: ['2 спальні', 'для двох сімей', 'спільна вітальня'],
  pos: '22% 55%'
}];
function Houses({
  m,
  go
}) {
  const [t, setT] = React.useState(0);
  const glass = {
    display: 'inline-flex',
    alignItems: 'center',
    height: 32,
    padding: '0 14px',
    borderRadius: 999,
    background: 'rgba(255,255,255,.16)',
    border: '1px solid rgba(255,255,255,.3)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
    fontSize: 12,
    fontWeight: 600
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "houses",
    style: {
      background: 'var(--linen)',
      padding: m ? '72px 0' : '120px 0 140px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    m: m
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: m ? 'flex-start' : 'flex-end',
      gap: 32,
      marginBottom: m ? 32 : 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "\u041B\u0456\u043D\u0456\u0439\u043A\u0430 \u0432\u0456\u043B\u043B"), /*#__PURE__*/React.createElement(Title, {
    m: m
  }, "\u0422\u0440\u0438 \u0444\u043E\u0440\u043C\u0430\u0442\u0438 \u0432\u0456\u043B\u043B. \u0427\u043E\u0442\u0438\u0440\u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--stone)'
    }
  }, "\u0422\u0435\u043C\u0430 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0443"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, THEMES.map((x, i) => /*#__PURE__*/React.createElement("button", {
    key: x,
    onClick: () => setT(i),
    style: {
      height: 40,
      padding: '0 16px',
      borderRadius: 999,
      cursor: 'pointer',
      font: '500 14px var(--font-body)',
      border: '1px solid ' + (t === i ? 'var(--forest)' : 'rgba(31,58,43,.2)'),
      background: t === i ? 'var(--forest)' : 'transparent',
      color: t === i ? '#fff' : 'var(--forest)',
      transition: 'all .2s'
    }
  }, x))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)',
      gap: m ? 36 : 24,
      alignItems: 'start'
    }
  }, HOUSES.map((h, i) => /*#__PURE__*/React.createElement("article", {
    key: h.n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      marginTop: !m && i === 1 ? 64 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: m ? 420 : 540,
      borderRadius: 28,
      overflow: 'hidden',
      background: `url(${IMG}) ${h.pos}/cover`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg,rgba(9,28,19,.78) 0%,rgba(9,28,19,0) 50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18,
      right: 18,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: glass
  }, h.n), /*#__PURE__*/React.createElement("span", {
    style: glass
  }, THEMES[t])), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 26,
      right: 26,
      bottom: 24,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 42,
      letterSpacing: '-.04em',
      lineHeight: 1
    }
  }, h.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 15,
      color: 'rgba(255,255,255,.82)'
    }
  }, h.kind))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, h.specs.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      height: 30,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 12px',
      borderRadius: 999,
      border: '1px solid rgba(31,58,43,.18)',
      fontSize: 13,
      color: 'var(--forest)'
    }
  }, s))), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('access'),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '14px 0 0',
      border: 0,
      borderTop: '1px solid rgba(31,58,43,.18)',
      background: 'none',
      cursor: 'pointer',
      font: 'inherit',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--stone)'
    }
  }, "\u0426\u0456\u043D\u0430"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--forest)'
    }
  }, "\u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      background: 'var(--sun)',
      color: 'var(--graphite)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LP.Icon, {
    name: "arrow",
    size: 20
  })))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontSize: 12,
      color: 'var(--stone)'
    }
  }, "\u0412\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 \u2014 \u043F\u0440\u0438\u043A\u043B\u0430\u0434. \u0424\u0456\u043D\u0430\u043B\u044C\u043D\u0456 \u0440\u0435\u043D\u0434\u0435\u0440\u0438 \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0443 \u0431\u0443\u0434\u0443\u0442\u044C \u0434\u043E\u0434\u0430\u043D\u0456.")));
}
Object.assign(window, {
  Hero,
  Manifest,
  Houses
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/V2Top.jsx", error: String((e && e.message) || e) }); }

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.FeatureChip = __ds_scope.FeatureChip;

__ds_ns.HouseCard = __ds_scope.HouseCard;

__ds_ns.MetricTile = __ds_scope.MetricTile;

__ds_ns.RoundIcon = __ds_scope.RoundIcon;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
