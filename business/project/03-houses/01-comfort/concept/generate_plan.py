from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from html import escape
import csv, json

root = Path(__file__).resolve().parents[5]
out = root / 'business/project/03-houses/01-comfort/concept'
out.mkdir(parents=True, exist_ok=True)
W,H=2100,1850
im=Image.new('RGB',(W,H),'white'); d=ImageDraw.Draw(im)
svg=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">', '<rect width="100%" height="100%" fill="white"/>']
ink='#25332e'; green='#25624d'; light='#e8f0eb'; blue='#cce8ef'
def rect(box,fill='white',stroke=ink,width=2):
    d.rectangle(box,fill=fill,outline=stroke,width=width)
    x,y,x2,y2=box;svg.append(f'<rect x="{x}" y="{y}" width="{x2-x}" height="{y2-y}" fill="{fill}" stroke="{stroke}" stroke-width="{width}"/>')
def line(points,fill=ink,width=2):
    d.line(points,fill=fill,width=width)
    svg.append(f'<polyline points="{" ".join(f"{x},{y}" for x,y in points)}" fill="none" stroke="{fill}" stroke-width="{width}"/>')
def txt(x,y,s,size=25,bold=False,color=ink):
    font=ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf' if bold else 'C:/Windows/Fonts/arial.ttf',size)
    d.text((x,y),s,font=font,fill=color)
    svg.append(f'<text x="{x}" y="{y}" dominant-baseline="text-before-edge" font-family="Arial,sans-serif" font-size="{size}" font-weight="{700 if bold else 400}" fill="{color}">{escape(s)}</text>')
def ellipse(box,fill='white',stroke=ink,width=2):
    d.ellipse(box,fill=fill,outline=stroke,width=width)
    x,y,x2,y2=box;svg.append(f'<ellipse cx="{(x+x2)/2}" cy="{(y+y2)/2}" rx="{(x2-x)/2}" ry="{(y2-y)/2}" fill="{fill}" stroke="{stroke}" stroke-width="{width}"/>')
X,Y,S=180,300,150
def pt(x,y):return (X+x*S,Y+y*S)
def box(x,y,w,h):return (*pt(x,y),*pt(x+w,y+h))
def mr(x,y,w,h,fill='white',stroke=ink,width=2):rect(box(x,y,w,h),fill,stroke,width)
def ml(a,b,fill=ink,width=2):line([pt(*a),pt(*b)],fill,width)
def mt(x,y,s,size=22,bold=False):txt(*pt(x,y),s,size,bold)
def dimh(x1,x2,y,label):
    line([(x1,y),(x2,y)],green)
    for x in (x1,x2):line([(x-6,y+8),(x+6,y-8)],green,2)
    txt((x1+x2)/2-45,y-33,label,24,True,green)
def dimv(x,y1,y2,label):
    line([(x,y1),(x,y2)],green)
    for y in (y1,y2):line([(x-8,y+6),(x+8,y-6)],green,2)
    txt(x-65,(y1+y2)/2,label,24,True,green)

txt(80,55,'LEV PLUS / COMFORT',44,True)
txt(80,115,'Ескізний план · база «Адам і Єва» · редакція 02',30)
txt(80,160,'Концепцію обрано 09.11.2026 · розміри запропоновано для опрацювання',23)

# Complete outer rectangle; conceptual wall thickness 250 mm.
mr(0,0,6.4,6,ink);mr(.25,.25,5.9,5.5,'#fafbf8')
mr(0,6,6.4,2.4,'#f0e5d4')
for y in [6.3,6.6,6.9,7.2,7.5,7.8,8.1]:ml((0,y),(6.4,y),'#d2bea0',1)
mr(3.93,.25,.12,2.32,ink);mr(3.93,2.45,2.22,.12,ink)
mr(4.05,.25,2.1,2.2,'#eaf1f1')
# Entry door: rear wall 900 mm opening, inward leaf.
mr(3,0,.9,.25,'white','white',1)
ml((3,.05),(3,.95),ink,3);ml((3,.95),(3.9,.05),'#a5aea8',1)
mt(2.92,-.55,'ВХІД 900',20,True)
# Bathroom inward door, 800 mm opening.
mr(3.93,1.55,.12,.8,'white','white',1)
ml((4.05,2.35),(4.85,2.35),ink,3);ml((4.85,2.35),(4.05,1.55),'#a5aea8',1)
# Glazing and 1 m terrace door in central position.
mr(.55,5.79,5.3,.12,blue,green,2)
mr(2.75,5.76,1.0,.24,'white','white',1)
ml((2.75,5.82),(2.75,6.82),ink,3);ml((2.75,6.82),(3.75,5.82),'#a5aea8',1)
mt(2.63,5.36,'ВИХІД 1000',18,True)
for x in (1.6,4.8):ml((x,5.78),(x,5.92),green,3)
# Kitchen 2.4 m.
mr(.4,.4,2.4,.6,'#e1e6db')
for x in (1,1.6,2.2):ml((x,.4),(x,1),ink)
mr(.46,.48,.42,.4,'#becfc3');ellipse(box(1.07,.49,.23,.23),'#e9eee8');ellipse(box(1.36,.49,.16,.16),'#e9eee8')
mr(2.23,.44,.52,.52,'#d2dad6');mt(.5,1.08,'КУХНЯ 2400 × 600',19)
# Full bathroom-wall wardrobe, opening toward the window-side seating.
mr(3.93,2.57,2.22,.6,'#e7dfd2')
for x in (4.53,5.13,5.73):ml((x,2.57),(x,3.17))
mt(4.04,2.76,'ШАФА 2220 × 600',19,True)
mt(4.04,3.28,'ОДЯГ / ВАЛІЗИ / ГОСП.',16)
# Bed: mattress 2000x1800, head to left as in reference.
mr(.34,2.45,2.1,2.0,'#d7d2c8');mr(.4,2.55,2,1.8,'#eee9df')
mr(.48,2.65,.4,.65,'white');mr(.48,3.55,.4,.65,'white')
ml((.96,2.55),(.96,4.35),'#b7af9c');mt(1.02,3.25,'1800 × 2000',20,True)
mr(.4,1.98,.45,.45,'#dfd1bb');mr(.4,4.48,.45,.45,'#dfd1bb')
mt(2.5,3.5,'≥ 900*',18)
mt(.65,5.03,'01  СТУДІЯ 27,30 м²',24,True)
# Bathroom fixture outlines and service cupboard boiler.
mr(5.1,.3,1,1,'white');ml((5.1,.3),(6.1,1.3),'#a3bdc0');ml((6.1,.3),(5.1,1.3),'#a3bdc0')
mt(5.18,.73,'ДУШ',18)
mr(4.22,.35,.48,.24,'white');ellipse(box(4.22,.55,.48,.56),'white')
mr(5.5,1.65,.6,.55,'white');ellipse(box(5.58,1.72,.42,.3),'white')
mt(4.15,1.18,'02  4,62 м²',19,True)
# Round table with two chairs. Furniture should not obstruct terrace route.
ellipse(box(4.7,4.55,.75,.75),'#ece1ca')
mr(4.05,4.55,.5,.7,'#e1e6db');mr(5.6,4.55,.5,.7,'#e1e6db')
mt(4.05,5.39,'СТІЛ + 2 КРІСЛА',18)
# Terrace loungers and indicative spa reservation, option only.
for x in (.35,1.15):
    mr(x,6.3,.65,1.8,'#faf7ee');ml((x,6.7),(x+.65,6.7),'#a3a095')
ellipse(box(4.15,6.25,1.85,1.85),'#d1edf0',green,3)
mt(4.4,6.92,'SPA',25,True);mt(4.24,7.22,'ОПЦІЯ Ø1850',17)
ml((0,6),(0,8.4),green,6);ml((6.4,6),(6.4,8.4),green,6)
mt(2.2,7.55,'03  ТЕРАСА',24,True);mt(2.2,7.83,'15,36 м²',25,True)
# Dimension strings in mm.
dimh(X,X+6.4*S,220,'6400')
dimh(X+.25*S,X+6.15*S,270,'5900 — всередині')
dimv(110,Y,Y+6*S,'6000')
dimv(110,Y+6*S,Y+8.4*S,'2400')
dimh(X,X+6.4*S,1610,'6400')

# Legend and schedules.
rx=1260
txt(rx,260,'ПАРАМЕТРИ ЕСКІЗУ',30,True,color=green)
items=[('Місткість','2 дорослих / 1 поверх'),('Зовнішній габарит','6,40 × 6,00 м'),('У зовнішньому контурі','38,40 м²'),('Чиста площа приміщень','31,92 м²'),('01 · Відкрита студія','27,30 м²'),('02 · Санвузол','4,62 м²'),('03 · Тераса','6,40 × 2,40 = 15,36 м²')]
for i,(a,b) in enumerate(items):
    yy=325+i*65;txt(rx,yy,a,22);txt(rx+355,yy,b,23,True)
txt(rx,815,'ЩО ЗАФІКСОВАНО',28,True,color=green)
notes=['Студія для двох, санвузол і тераса.','Ліжко 180 × 200 см; без окремої спальні.','Шафа 2220 × 600 уздовж стіни санвузла.','Стіл із кріслами ближче до вікна.','Прохід до тераси — по центру студії.']
for i,n in enumerate(notes):txt(rx,870+i*43,n,23)
txt(rx,1120,'ЩО ЩЕ ПЕРЕВІРИТИ',28,True,color=green)
notes=['Стіни 250 мм і перегородки 120 мм —','умовні; конструкцію визначає проєктант.','* Проходи перевірити з моделями меблів.','Вхід у студію: рішення без окремого тамбура.','Вентиляція, гаряча вода, опалення, дренаж.','Основа SPA, доступ для сервісу й приватність.','Резерв Ø1850 не задає конкретну модель.']
for i,n in enumerate(notes):txt(rx,1175+i*42,n,22)
txt(180,1690,'Розміри в мм. Геометрія побудована в масштабі; при друці використовувати розмірні числа.',24)
txt(180,1730,'Ескіз для погодження та запиту ціни. Робочі креслення, конструкції й інженерія розробляються окремо.',24)
line([(180,1795),(330,1795)],green,5);line([(180,1786),(180,1804)],green,3);line([(330,1786),(330,1804)],green,3)
txt(350,1777,'1 метр',23);txt(1260,1777,'LP–C01 / АР–Е02 / 09.11.2026',23,True)
svg.append('</svg>')
(out/'comfort-base-plan-r02.svg').write_text('\n'.join(svg),encoding='utf-8')
im.save(out/'comfort-base-plan-r02.png')

# All construction rates below are planning allowances, not contractor quotations.
rows=[
('Будинок: конструктив, утеплення, фасад, покрівля, скління, оздоблення, базові внутрішні мережі',38.4,22000,33000),
('Фундамент будинку на простій ділянці',1,80000,140000),
('Сантехнічні прилади, бойлер і комплектація санвузла',1,60000,100000),
('Опалення, охолодження, вентиляція — попередній резерв',1,50000,90000),
('Кухня, побутова техніка, меблі, матрац, текстиль, освітлення й базовий декор',1,160000,260000),
('Тераса: основа, настил, екрани приватності; без повного навісу',1,90000,150000),
('Доставка та монтажна логістика',1,40000,100000),
('Проєктування й уточнення інженерних рішень',1,40000,80000),
('Короткі відводи від готових мереж ділянки до будинку',1,40000,90000),
]
low=sum(q*l for _,q,l,h in rows);high=sum(q*h for _,q,l,h in rows)
with (out/'comfort-budget-r01.csv').open('w',encoding='utf-8-sig',newline='') as f:
    writer=csv.writer(f,delimiter=';');writer.writerow(['Стаття','Кількість','Ставка мін грн','Ставка макс грн','Сума мін грн','Сума макс грн','Статус'])
    for name,q,l,h in rows:writer.writerow([name,q,l,h,round(q*l),round(q*h),'Припущення для планування'])
    writer.writerow(['Разом без SPA',1,'','',round(low),round(high),'Розрахунок'])
    writer.writerow(['Резерв 15% без SPA',1,'','',round(low*.15),round(high*.15),'Припущення'])
    writer.writerow(['Разом без SPA з резервом',1,'','',round(low*1.15),round(high*1.15),'Розрахунок'])
    writer.writerow(['Електричний SPA з основою і підключенням, додатково до бази',1,'','',315000,490000,'Припущення'])
    writer.writerow(['Разом з електричним SPA і резервом 15%',1,'','',round((low+315000)*1.15),round((high+490000)*1.15),'Розрахунок'])
assert abs(5.9*5.5-(2.1*2.2+.12*2.32+.12*2.1)-27.2996)<.000001
assert low==1404800 and high==2277200
print(json.dumps({'net_m2':31.9196,'terrace_m2':15.36,'budget_no_spa_reserve':[round(low*1.15),round(high*1.15)],'budget_spa_reserve':[round((low+315000)*1.15),round((high+490000)*1.15)]}))
