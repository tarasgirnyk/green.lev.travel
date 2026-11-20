import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function FeatureChip({icon='check',children,style}){return <span style={{display:'inline-flex',alignItems:'center',gap:12,padding:'13px 18px',background:'rgba(251,248,242,.94)',border:'1px solid rgba(31,58,43,.08)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-md)',fontFamily:'var(--font-body)',fontSize:13,fontWeight:700,color:'var(--forest)',backdropFilter:'blur(8px)',whiteSpace:'nowrap',...style}}><span style={{color:'var(--ochre-ink)'}}><Icon name={icon} size={20}/></span>{children}</span>;}
