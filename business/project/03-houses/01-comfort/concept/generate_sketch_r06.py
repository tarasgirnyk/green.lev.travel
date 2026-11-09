"""Integrated electric-grill terrace, conditional conceptual placement only."""
from pathlib import Path
folder=Path(__file__).resolve().parent
previous=(folder/'generate_sketch_r04.py').read_text(encoding='utf-8')
scope={'__file__':str(folder/'generate_sketch_r04.py')}
exec(compile(previous.split("exec(compile(source, str(folder/'generate_plan.py')")[0],str(folder/'generate_sketch_r04.py'),'exec'),scope)
source=scope['source'].replace('редакція 04','редакція 06').replace('comfort-base-plan-r04','comfort-base-plan-r06').replace('АР–Е04','АР–Е06')
source=source.replace('W,H=2100,1850','W,H=2100,2070')
source=source.replace("mr(0,6,6.4,2.4,'#f0e5d4')", "mr(0,6,6.4,3.2,'#ecebe5')")
source=source.replace("for y in [6.3,6.6,6.9,7.2,7.5,7.8,8.1]:ml((0,y),(6.4,y),'#d2bea0',1)", "for y in [6.4,6.8,7.2,7.6,8.0,8.4,8.8]:ml((0,y),(6.4,y),'#d3d4cc',1)")
start=source.index('# Terrace loungers')
end=source.index('# Dimension strings')
source=source[:start]+'''# Integrated terrace: noncombustible finish proposed, not a complete fire-rated assembly.
mr(0,6.2,1.1,2.85,'#dce1dc','#83958b',2)
mr(.15,6.35,.65,2.55,'#c4cac2',ink,3)
ml((.15,7.3),(.8,7.3),ink,2)
mt(.9,6.52,'СТІЛЬНИЦЯ',15,True)
# Built-in outdoor electric grill at the open outer end, away from the house facade.
mr(.21,8.2,.53,.58,'#7d8b82',ink,3)
for y in (8.3,8.4,8.5,8.6,8.7):ml((.26,y),(.69,y),ink,2)
mt(.18,8.95,'ЕЛ. ГРИЛЬ*',15,True)
# Dining group: table square, chairs on front/rear sides.
mr(1.7,7.35,.85,.85,'#dfcfb4',ink,3)
for y in (6.45,8.45):
    mr(1.75,y,.75,.65,'#f9f5eb',ink,3)
    mr(1.83,y+.08,.59,.45,'#e6e0d1')
mt(2.75,7.6,'ПРОХІД',17)
ellipse(box(4.15,6.65,1.85,1.85),'#d1edf0',green,3)
mt(4.4,7.32,'SPA',25,True);mt(4.24,7.62,'ОПЦІЯ Ø1850',17)
ml((6.4,6),(6.4,9.2),green,6)
mt(4.15,8.8,'ТЕРАСА 20,48 м²',22,True)
''' + source[end:]
source=source.replace("dimv(110,Y+6*S,Y+8.4*S,'2400')", "dimv(110,Y+6*S,Y+9.2*S,'3200')")
source=source.replace("dimh(X,X+6.4*S,1610,'6400')", "dimh(X,X+6.4*S,1740,'6400')")
source=source.replace('6,40 × 2,40 = 15,36 м²','6,40 × 3,20 = 20,48 м²')
source=source.replace('Ліжко відцентровано в правій ніші.','Зліва — стільниця та електрогриль*.')
source=source.replace('Студія для двох, санвузол і тераса.','Тераса поглиблена: пропозиція 3,20 м.')
source=source.replace('Шафа та кухня — єдиний Г-подібний блок.','Справа — SPA, посередині — прохід.')
source=source.replace('TV на одній осі з центром ліжка.','Квадратний столик і два крісла.')
source=source.replace('Столик із двома кріслами біля кухні.','Внутрішнє планування залишене як у №04.')
a=source.index("notes=['Стіни 250 мм")
b=source.index('for i,n in enumerate(notes):',a)
source=source[:a]+'''notes=['* Тільки модель для вбудовування надворі.','Відступи й вентиляція — за її інструкцією.','Негорючий модуль та відповідна основа.','Електрозахист і сусідство зі SPA — перевірити.','Гриль показано без накриття над ним.','Вугільний мангал тут не передбачено.','Це ескіз; безпеку монтажу не підтверджено.']
''' +source[b:]
source=source.replace('txt(180,1690,','txt(180,1900,').replace('txt(180,1730,','txt(180,1940,')
source=source.replace('(180,1795),(330,1795)','(180,2010),(330,2010)').replace('(180,1786),(180,1804)','(180,2001),(180,2019)').replace('(330,1786),(330,1804)','(330,2001),(330,2019)')
source=source.replace('txt(350,1777,','txt(350,1992,').replace('txt(1260,1777,','txt(1260,1992,')
exec(compile(source,str(folder/'generate_plan.py'),'exec'),{'__file__':str(folder/'generate_plan.py')})
print('Saved sketch revision 06 (PNG and SVG); indoor layout unchanged.')
