import React from 'react';
export function SectionLabel({index,children,tone='default'}){const light=tone==='light';
return <p style={{margin:0,display:'flex',alignItems:'center',gap:12,fontFamily:'var(--font-body)',fontSize:'var(--fs-label)',fontWeight:800,letterSpacing:'var(--ls-label)',textTransform:'uppercase',color:light?'var(--ochre)':'var(--accent-ink)'}}>{index&&<span>{index}</span>}{index&&<span style={{width:28,height:1,background:'currentColor',opacity:.6}}/>}<span>{children}</span></p>;}
