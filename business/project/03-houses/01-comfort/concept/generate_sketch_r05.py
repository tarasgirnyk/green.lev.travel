"""Terrace furniture and BBQ concept only; no cost or engineering updates."""
from pathlib import Path
folder=Path(__file__).resolve().parent
previous=(folder/'generate_sketch_r04.py').read_text(encoding='utf-8')
setup=previous.split("exec(compile(source, str(folder/'generate_plan.py')")[0]
scope={'__file__':str(folder/'generate_sketch_r04.py')}
exec(compile(setup,str(folder/'generate_sketch_r04.py'),'exec'),scope)
source=scope['source'].replace('редакція 04','редакція 05').replace('comfort-base-plan-r04','comfort-base-plan-r05').replace('АР–Е04','АР–Е05')
source=source.replace('W,H=2100,1850','W,H=2100,2230')
start=source.index('# Terrace loungers')
end=source.index('# Dimension strings')
source=source[:start]+'''# Terrace: square dining table with two outdoor armchairs.
mr(1.15,7.0,.85,.85,'#dfcfb4',ink,3)
for x in (.25,2.2):
    mr(x,7.0,.72,.8,'#f9f5eb',ink,3)
    mr(x+.08,7.09,.56,.54,'#e6e0d1')
    ml((x,7.0),(x+.72,7.0),ink,5)
mt(.3,6.45,'2 КРІСЛА + КВАДРАТНИЙ СТІЛ',17,True)
ellipse(box(4.15,6.25,1.85,1.85),'#d1edf0',green,3)
mt(4.4,6.92,'SPA',25,True);mt(4.24,7.22,'ОПЦІЯ Ø1850',17)
ml((0,6),(0,8.4),green,6);ml((6.4,6),(6.4,8.4),green,6)
mt(2.4,8.09,'ТЕРАСА',21,True)
# Separate BBQ concept inset: placement and separation deliberately not to scale.
txt(180,1680,'МАНГАЛЬНИЙ МОДУЛЬ ПОРУЧ ІЗ ТЕРАСОЮ',26,True,color=green)
txt(180,1723,'Окрема вставка без масштабу: місце та відступи ще не визначені.',22)
rect((180,1780,1140,2020),'#f0f0ea','#a0aaa3',2)
rect((220,1820,480,1950),'#b7bdb8',ink,3)
for x in range(240,470,25):line([(x,1840),(x,1928)],ink,2)
txt(250,1960,'ГРИЛЬ / МАНГАЛ',19,True)
rect((510,1820,1080,1950),'#ddd7c9',ink,3)
txt(555,1860,'РОБОЧА ПОВЕРХНЯ',22,True)
txt(1260,1675,'ПРИНЦИП ДЛЯ ЧОТИРЬОХ ТЕМ',27,True,color=green)
txt(1260,1730,'Однакові планування та форми меблів.',23)
txt(1260,1775,'Відрізняються палітра, фасади, матеріали',23)
txt(1260,1815,'оздоблення, текстиль і декор.',23)
txt(1260,1880,'Мангал — частина концепції відпочинку;',23)
txt(1260,1920,'його тип і точна прив’язка ще відкриті.',23)
''' + source[end:]
# Move footer below the BBQ inset, remove terrace dimension string from inset area.
source=source.replace("dimh(X,X+6.4*S,1610,'6400')", "dimh(X,X+6.4*S,1610,'6400')")
source=source.replace('txt(180,1690,','txt(180,2080,').replace('txt(180,1730,','txt(180,2120,')
source=source.replace('(180,1795),(330,1795)','(180,2180),(330,2180)').replace('(180,1786),(180,1804)','(180,2171),(180,2189)').replace('(330,1786),(330,1804)','(330,2171),(330,2189)')
source=source.replace('txt(350,1777,','txt(350,2162,').replace('txt(1260,1777,','txt(1260,2162,')
source=source.replace('Студія для двох, санвузол і тераса.','Тераса: два крісла і квадратний столик.')
source=source.replace('Ліжко відцентровано в правій ніші.','Мангальний модуль — поруч із терасою.')
source=source.replace('Основа SPA, доступ для сервісу й приватність.','Прив’язка мангалу й SPA — ще на уточненні.')
exec(compile(source,str(folder/'generate_plan.py'),'exec'),{'__file__':str(folder/'generate_plan.py')})
print('Saved sketch revision 05 (PNG and SVG).')
