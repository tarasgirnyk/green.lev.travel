const fs = require('fs');
const path = require('path');
const sharp = require(require.resolve('sharp', {paths: ['C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1112-737-0_26.1112.737.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules']}));
const dir=__dirname;
const S=[];
const c={ink:'#24352c',line:'#3e5146',wood:'#e3c59b',green:'#8f9a69',cream:'#fbf8f0',muted:'#68756b',roof:'#aab8ab'};
const rect=(x,y,w,h,fill,stroke=c.line,sw=1.5,rx=0,extra='')=>S.push('<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+rx+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+sw+'" '+extra+'/>');
const line=(x1,y1,x2,y2,stroke=c.line,sw=1.5,extra='')=>S.push('<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+stroke+'" stroke-width="'+sw+'" '+extra+'/>');
const circ=(x,y,r,fill,stroke=c.line,sw=1.5)=>S.push('<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+sw+'"/>');
const txt=(x,y,t,size=18,fill=c.ink,anchor='start',weight=400)=>S.push('<text x="'+x+'" y="'+y+'" font-size="'+size+'" fill="'+fill+'" text-anchor="'+anchor+'" font-weight="'+weight+'">'+t+'</text>');
const ellipse=(x,y,rx,ry,fill,stroke=c.line)=>S.push('<ellipse cx="'+x+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="1.5"/>');
const chair=(x,y,a=0)=>{S.push('<g transform="translate('+x+' '+y+') rotate('+a+')">');rect(-19,-19,38,38,'#dfe4d0',c.line,1.3,8);line(-17,-15,17,-15,c.line,3);S.push('</g>');};
const leaf=(x,y,w,h)=>{S.push('<g transform="translate('+x+' '+y+') scale('+(w/60)+' '+(h/90)+')">');S.push('<path d="M30 2 C17 1 18 12 8 13 C-1 17 12 28 3 33 C-3 40 12 45 5 52 C-1 61 17 62 13 71 C12 80 25 77 30 88 C35 77 48 80 47 71 C43 62 61 61 55 52 C48 45 63 40 57 33 C48 28 61 17 52 13 C42 12 43 1 30 2Z" fill="#9ca578" stroke="#596c4c" stroke-width="1.3"/>');line(30,13,30,77,'#f7f1de',2);for(const yy of [28,43,58]){line(30,yy,16,yy-8,'#f7f1de',1.2);line(30,yy,44,yy-8,'#f7f1de',1.2);}S.push('</g>');};
S.push('<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1420" viewBox="0 0 1440 1420"><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0 0 L7 4 L0 8" fill="none" stroke="#7b8b74" stroke-width="1.2"/></marker><pattern id="deck" width="700" height="18" patternUnits="userSpaceOnUse"><rect width="700" height="18" fill="#f0e4d0"/><path d="M0 17.5 H700" stroke="#d9c9ae" stroke-width=".7"/></pattern></defs>');
rect(0,0,1440,1420,c.cream,'none');
S.push('<g font-family="Arial,DejaVu Sans,sans-serif">');
txt(70,65,'БДЖІЛКА І ЖОЛУДЬ',34,c.ink,'start',700);
txt(70,101,'План розміщення меблів та входів · вид зверху',21,c.muted);
txt(1370,65,'LEV PLUS',20,c.ink,'end',700);txt(1370,98,'22.11.2026 · схема v04',17,c.muted,'end');
S.push('<g transform="translate(0 60)">');
// Terrace: lines beyond deck are the overhead roof outline, not a fence.
rect(360,100,700,300,'url(#deck)','#d6d3c9',1);
rect(350,90,720,320,'#bac6b0','none',0,0,'fill-opacity=".10"');
rect(350,90,720,320,'none','#83977d',2,0,'stroke-dasharray="10 7"');
for(const [x,y] of [[360,100],[1060,100]])rect(x-6,y-6,12,12,c.line,c.line,1);
circ(535,245,50,c.wood,c.line,2);circ(535,245,10,'#c8a26e',c.line,1);
for(const a of [0,90,180,270]){const rad=a*Math.PI/180;chair(535+82*Math.cos(rad),245+82*Math.sin(rad),a+90);}
txt(713,158,'ТЕРАСА',18,c.ink,'middle',700);
txt(713,187,'відкриті боки й край',14,c.muted,'middle');
txt(535,365,'КРУГЛИЙ СТІЛ · 4 МІСЦЯ',15,c.ink,'middle',700);
circ(940,245,88,c.wood,c.line,2);circ(940,245,77,'#c6d9d1',c.line,1);circ(940,245,64,'none','#a2bab0',1);
rect(907,333,66,30,'#e6d4b6',c.line,1);line(907,348,973,348);txt(940,250,'КУПІЛЬ',16,c.ink,'middle',700);
// Separate side cooking pad: no wall to the terrace.
rect(130,110,185,280,'#e6e8dd','#c5cec0',1);
rect(120,100,205,300,'none','#83977d',1.5,0,'stroke-dasharray="7 6"');
rect(172,150,100,48,'#49564e',c.line,1.5);for(let x=180;x<270;x+=12)line(x,155,x,192,'#c5ccc4',1);
rect(172,250,100,62,c.wood,c.line,1.5);
txt(222,340,'МАНГАЛ',16,c.ink,'middle',700);txt(222,364,'збоку, без перегородки',12,c.muted,'middle');
// Building floor fills, no roof.
rect(360,400,700,700,'#fffdf7',c.line,2);
rect(378,418,350,664,'#f6eee1','none');
rect(750,418,292,446,'#f6eee1','none');
rect(750,887,292,195,'#ecece3','none');
rect(384,435,325,275,'#eae8da','none',0,8);
// Living furniture.
rect(388,450,82,235,c.green,c.line,1.5,9);
rect(393,460,68,55,'#a9b38a',c.line,1,6);rect(393,522,68,70,'#a9b38a',c.line,1,6);rect(393,600,68,70,'#a9b38a',c.line,1,6);
ellipse(568,563,49,30,c.wood);circ(568,563,7,'#c9a872',c.line,1);
rect(712,466,10,155,'#23342c','#23342c');txt(695,550,'TV',13,c.ink,'end',700);
// Kitchen and indoor dining.
rect(380,765,58,304,'#cdd5bd',c.line,1.5);
for(const y of [825,885,945,1005])line(380,y,438,y,c.line,1);
rect(386,1016,46,40,'#e6eadc',c.line,1,4);ellipse(409,1036,15,12,'#f7f9f3');
rect(386,936,46,48,'#4b5b4e',c.line,1,2);for(const x of [397,421])for(const y of [949,971])circ(x,y,7,'none','#e3e9de',1);
ellipse(568,853,66,42,c.wood);circ(568,853,13,'#c2a077',c.line,1);
chair(532,780,0);chair(606,780,0);chair(532,925,180);chair(606,925,180);
txt(552,739,'КУХНЯ-СТУДІЯ',19,c.ink,'middle',700);
txt(414,890,'КУХНЯ',13,c.ink,'middle',700);
// Bedroom: headboard and bed, exactly two small separate leaf rugs.
rect(824,446,162,200,'#ede7d5',c.line,1.8,4);rect(824,441,162,12,c.wood,c.line,1.5,3);
rect(835,458,65,40,'#fffdf5',c.line,1,6);rect(910,458,65,40,'#fffdf5',c.line,1,6);
rect(827,561,156,37,c.green,'none');line(824,521,986,521,'#b6b9a3',1);
rect(772,449,42,40,c.wood,c.line,1.2,3);rect(997,449,39,40,c.wood,c.line,1.2,3);
leaf(756,524,58,90);leaf(990,524,53,90);
rect(941,794,98,62,c.wood,c.line,1.5);line(990,794,990,856);
txt(899,719,'СПАЛЬНЯ',19,c.ink,'middle',700);
txt(899,747,'два малі приліжкові килимки',13,c.muted,'middle');
// Bathroom: shower, sink, WC.
rect(953,897,80,80,'#d5e3dc',c.line,1.5);line(953,977,1033,897,'#8baba0',1);circ(992,937,6,'none',c.line,1);
rect(781,1036,99,44,c.wood,c.line,1.5);ellipse(829,1056,28,13,'#fffdf7');
rect(981,1005,44,69,'#fffdf7',c.line,1.5,18);rect(986,1000,34,20,'#fffdf7',c.line,1.2,4);ellipse(1003,1042,15,22,'none');
txt(849,975,'ДУШОВА / WC',17,c.ink,'middle',700);
// Main walls, interrupted at real doors/windows.
const wall=(x1,y1,x2,y2,sw=16)=>line(x1,y1,x2,y2,c.ink,sw,'stroke-linecap="butt"');
wall(360,400,360,1100);wall(1060,400,1060,1100);
wall(360,400,395,400);wall(650,400,674,400);wall(730,400,814,400);wall(1020,400,1060,400);
wall(360,1100,399,1100);wall(565,1100,620,1100);wall(710,1100,950,1100);wall(1025,1100,1060,1100);
wall(740,400,740,760,13);wall(740,845,740,895,13);wall(740,975,740,1100,13);wall(740,875,1060,875,13);
// Door leaves and swing arcs, always drawn in plan.
line(740,845,825,845,c.line,2);S.push('<path d="M740 760 A85 85 0 0 1 825 845" fill="none" stroke="#8e998e" stroke-width="1.1"/>');
line(740,895,820,895,c.line,2);S.push('<path d="M740 975 A80 80 0 0 0 820 895" fill="none" stroke="#8e998e" stroke-width="1.1"/>');
line(620,1100,620,1190,c.line,2);S.push('<path d="M710 1100 A90 90 0 0 1 620 1190" fill="none" stroke="#8e998e" stroke-width="1.1"/>');
// Clear rear sliding studio door, plus solid-sill bedroom window.
for(const yy of [396,404]){line(395,yy,650,yy,'#6b9d99',2);line(674,yy,730,yy,'#6b9d99',2);line(814,yy,1020,yy,'#6b9d99',2);}
line(650,388,730,388,'#6b9d99',2);line(658,382,712,382,'#6b9d99',1.1,'marker-end="url(#arrow)"');
for(const yy of [1096,1104]){line(399,yy,565,yy,'#6b9d99',2);line(950,yy,1025,yy,'#6b9d99',2);}
rect(695,994,37,88,c.wood,c.line,1.2);line(702,1001,725,1001);
txt(716,988,'ШАФА',11,c.muted,'middle');
// The same open studio aisle connects front entrance to terrace.
S.push('<path d="M672 1078 L680 945 L687 790 L689 680 L690 423" fill="none" stroke="#7b8b74" stroke-width="2" stroke-dasharray="6 7" marker-end="url(#arrow)" opacity=".72"/>');
txt(666,1219,'ОКРЕМИЙ ГОЛОВНИЙ ВХІД',16,c.ink,'middle',700);
txt(690,375,'ВИХІД НА ТЕРАСУ',13,c.ink,'middle',700);
// Technical dimensions are explicitly assumptions, not measurements.
line(360,1143,1060,1143,c.muted,1);for(const x of [360,1060]){line(x,1114,x,1154,c.muted,1);line(x-5,1149,x+5,1137,c.muted,1.5);}
txt(710,1136,'7 000*',16,c.muted,'middle');
line(1105,400,1105,1100,c.muted,1);for(const y of [400,1100]){line(1074,y,1116,y,c.muted,1);line(1099,y+5,1111,y-5,c.muted,1.5);}
S.push('<text x="1129" y="750" font-size="16" fill="'+c.muted+'" transform="rotate(90 1129 750)" text-anchor="middle">7 000*</text>');
line(1105,100,1105,400,c.muted,1);for(const y of [100,400]){line(1074,y,1116,y,c.muted,1);line(1099,y+5,1111,y-5,c.muted,1.5);}
S.push('<text x="1129" y="250" font-size="16" fill="'+c.muted+'" transform="rotate(90 1129 250)" text-anchor="middle">3 000*</text>');
// Right-hand explanatory key.
txt(1170,510,'ЗАФІКСОВАНО',16,c.ink,'start',700);
for(const [i,t] of ['Круглий стіл тераси','4 окремі крісла','Один суцільний дашок','Відкритий передній край','Мангал збоку','2 малі килимки спальні'].entries())txt(1170,545+i*32,t,14,c.ink);
txt(1170,804,'УМОВНІ ПОЗНАЧЕННЯ',13,c.ink,'start',700);
line(1170,830,1220,830,'#83977d',2,'stroke-dasharray="7 5"');txt(1170,852,'контур дашка над терасою',12,c.muted);
line(1170,880,1220,880,'#6b9d99',2);txt(1170,902,'вікна / скляний вихід',12,c.muted);
S.push('</g>');
line(70,1320,1370,1320,'#d0d6ca',1);
txt(70,1353,'* Габарит 7 × 7 м і тераса 7 × 3 м — робочі припущення з попередньої концепції, потребують погодження.',16,c.muted);
txt(70,1381,'Схема розміщення для обговорення. Розміри меблів, проходи й конструктив — уточнити на обмірному плані.',16,c.muted);
S.push('</g></svg>');
const svg=S.join('\n');
fs.writeFileSync(path.join(dir,'00-layout-technical-v04.svg'),svg,'utf8');
sharp(Buffer.from(svg)).resize({width:2400}).png().toFile(path.join(dir,'00-layout-technical-v04.png')).then(info=>console.log(JSON.stringify(info)));
