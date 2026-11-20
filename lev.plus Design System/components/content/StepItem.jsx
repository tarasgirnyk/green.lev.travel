import React from 'react';
import { RoundIcon } from './RoundIcon.jsx';
export function StepItem({n,icon,title,text,tone='light',active}){const d=tone==='dark';
return <article style={{display:'flex',flexDirection:'column',gap:14,fontFamily:'var(--font-body)'}}><div style={{display:'flex',alignItems:'center',gap:16}}><b style={{fontFamily:'var(--font-num)',fontWeight:500,fontSize:52,lineHeight:1,color:active?'var(--accent)':(d?'rgba(239,232,218,.45)':'var(--moss)'),opacity:active?1:.75}}>{n}</b>{icon&&<RoundIcon name={icon} size={44} tone={d?'dark':'light'}/>}</div>
<h3 style={{margin:0,fontSize:17,fontWeight:700,color:d?'var(--text-inverse)':'var(--text-heading)'}}>{title}</h3>{text&&<p style={{margin:0,fontSize:14,lineHeight:1.6,color:d?'var(--text-inverse-muted)':'var(--text-muted)',textWrap:'pretty'}}>{text}</p>}</article>;}
