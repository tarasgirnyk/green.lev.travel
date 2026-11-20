import React from 'react';
const TONES={
forest:{mark:'var(--forest)',plus:'var(--ochre)',plusFg:'var(--forest)',inner:'var(--linen)',word:'var(--forest)',dot:'var(--ochre)'},
linen:{mark:'var(--linen)',plus:'var(--ochre)',plusFg:'var(--forest)',inner:'var(--forest)',word:'var(--linen)',dot:'var(--ochre)'},
night:{mark:'var(--night-gold)',plus:'var(--night-gold)',plusFg:'var(--night-bg)',inner:'var(--night-bg)',word:'var(--night-text)',dot:'var(--night-gold)'},
'mono-dark':{mark:'var(--graphite)',plus:'var(--graphite)',plusFg:'var(--linen)',inner:'var(--linen)',word:'var(--graphite)',dot:'var(--graphite)'},
'mono-light':{mark:'#FFFFFF',plus:'#FFFFFF',plusFg:'var(--graphite)',inner:'var(--graphite)',word:'#FFFFFF',dot:'#FFFFFF'}};
function PlusGlyph({size,color}){const t=Math.max(2,size*0.16);return <span style={{position:'relative',width:size,height:size,display:'block'}}><span style={{position:'absolute',left:(size-t)/2,top:0,width:t,height:size,background:color,borderRadius:t/2}}/><span style={{position:'absolute',top:(size-t)/2,left:0,height:t,width:size,background:color,borderRadius:t/2}}/></span>;}
export function LogoMark({mark='seal',tone='forest',size=48,ring='var(--surface-page)'}){
const c=TONES[tone]||TONES.forest;
if(mark==='cross'){return <span aria-label="lev.plus" style={{position:'relative',display:'inline-block',width:size,height:size,background:c.mark,clipPath:'polygon(30% 0,70% 0,70% 30%,100% 30%,100% 70%,70% 70%,70% 100%,30% 100%,30% 70%,0 70%,0 30%,30% 30%)',flex:'0 0 auto'}}><span className="lp-lion" style={{position:'absolute',inset:'22%',color:c.inner}}/></span>;}
if(mark==='arch'){return <span aria-label="lev.plus" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:size*0.02,width:size*0.82,height:size,background:c.mark,borderRadius:'50% 50% 10% 10% / 40% 40% 10% 10%',paddingTop:size*0.14,boxSizing:'border-box',flex:'0 0 auto'}}><span style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:size*0.58,lineHeight:1,color:c.inner,marginTop:-size*0.06}}>l</span><PlusGlyph size={size*0.26} color={c.plus}/></span>;}
const b=size*0.4;
return <span aria-label="lev.plus" style={{position:'relative',display:'inline-block',width:size,height:size,flex:'0 0 auto'}}><span className="lp-lion" style={{position:'absolute',inset:0,color:c.mark}}/><span style={{position:'absolute',right:-size*0.06,bottom:-size*0.02,width:b,height:b,borderRadius:'50%',background:c.plus,boxShadow:'0 0 0 '+Math.max(2,size*0.05)+'px '+ring,display:'grid',placeItems:'center'}}><PlusGlyph size={b*0.48} color={c.plusFg}/></span></span>;}
export function Wordmark({tone='forest',size=32}){const c=TONES[tone]||TONES.forest;return <span style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-display)',fontSize:size,lineHeight:1,letterSpacing:'var(--ls-display)',color:c.word,whiteSpace:'nowrap'}}>lev<span style={{color:c.dot}}>.</span>plus</span>;}
const LIGHT={linen:1,night:1,'mono-light':1};
export function Logo({variant='full',mark='seal',tone='forest',size=40,ring}){
if(variant==='full')return <span role="img" aria-label="lev.plus" className={'lp-logo '+(LIGHT[tone]?'lp-logo-light':'lp-logo-primary')} style={{height:size,width:size*506.625/130,alignSelf:'flex-start'}}/>;
if(variant==='mark')return <LogoMark mark={mark} tone={tone} size={size} ring={ring}/>;
if(variant==='wordmark')return <Wordmark tone={tone} size={size}/>;
return <span style={{display:'inline-flex',alignItems:'center',gap:size*0.32}}><LogoMark mark={mark} tone={tone} size={size} ring={ring}/><Wordmark tone={tone} size={size*0.82}/></span>;}
