import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function RoundIcon({name,size=52,tone='light'}){const d=tone==='dark';return <span style={{width:size,height:size,flex:'0 0 auto',borderRadius:'50%',border:'1px solid '+(d?'rgba(200,162,90,.7)':'var(--accent)'),display:'grid',placeItems:'center',color:d?'var(--ochre)':'var(--accent-ink)'}}><Icon name={name} size={Math.round(size*0.42)}/></span>;}
