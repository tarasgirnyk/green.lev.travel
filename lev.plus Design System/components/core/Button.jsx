import React from 'react';
import { Icon } from './Icon.jsx';
const V={
primary:{background:'var(--btn-primary-bg)',color:'var(--btn-primary-fg)',border:'1px solid transparent',boxShadow:'0 10px 24px rgba(22,43,31,.16)'},
accent:{background:'var(--btn-accent-bg)',color:'var(--btn-accent-fg)',border:'1px solid transparent',boxShadow:'0 10px 24px rgba(200,162,90,.22)'},
outline:{background:'transparent',color:'var(--text-heading)',border:'1px solid var(--border-strong)'},
inverse:{background:'transparent',color:'var(--text-inverse)',border:'1px solid rgba(200,162,90,.7)'},
ghost:{background:'transparent',color:'var(--text-heading)',border:'1px solid transparent',textDecoration:'underline',textUnderlineOffset:'5px',textDecorationColor:'var(--accent)'}};
export function Button({variant='primary',size='md',icon,iconLeft,children,disabled,fullWidth,onClick,type='button',style}){
const [h,setH]=React.useState(false);const sm=size==='sm';
return <button type={type} disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:sm?10:14,minHeight:sm?'var(--btn-h-sm)':'var(--btn-h)',padding:variant==='ghost'?'0 4px':(sm?'0 18px':'0 24px'),borderRadius:'var(--radius-sm)',fontFamily:'var(--font-body)',fontSize:sm?13:15,fontWeight:700,letterSpacing:'.005em',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,width:fullWidth?'100%':undefined,transition:'transform var(--dur-fast) var(--ease),box-shadow var(--dur-fast),background var(--dur-fast)',transform:h&&!disabled?'translateY(-2px)':'none',...V[variant],...style}}>
{iconLeft&&<Icon name={iconLeft} size={sm?16:18}/>}<span>{children}</span>{icon&&<Icon name={icon} size={sm?16:18}/>}</button>;}
