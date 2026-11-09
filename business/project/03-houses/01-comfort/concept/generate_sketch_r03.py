"""Generate only the furniture sketch; leave budgets and specifications untouched."""
from pathlib import Path

folder = Path(__file__).resolve().parent
source = (folder / 'generate_plan.py').read_text(encoding='utf-8').split('# All construction rates below')[0]
source = source.replace('редакція 02', 'редакція 03').replace('comfort-base-plan-r02', 'comfort-base-plan-r03').replace('АР–Е02', 'АР–Е03')
start = source.index('# Kitchen 2.4 m.')
end = source.index('# Bathroom fixture outlines')
source = source[:start] + '''# Wardrobe at entrance, in the former kitchen position.
mr(.4,.4,2.4,.6,'#e7dfd2')
for x in (1,1.6,2.2):ml((x,.4),(x,1))
mt(.52,.6,'ШАФА ДЛЯ ОДЯГУ ТА РЕЧЕЙ',17,True)
# Kitchen follows the long left wall; TV occupies its front section.
mr(.25,1.15,.6,2.4,'#e1e6db')
for y in (1.75,2.35,2.95):ml((.25,y),(.85,y))
mr(.3,1.2,.5,.5,'#d2dad6')
ellipse(box(.33,1.86,.22,.22),'#e9eee8');ellipse(box(.59,2.08,.16,.16),'#e9eee8')
mr(.32,2.99,.44,.48,'#becfc3')
mt(.98,2.1,'КУХНЯ',22,True)
mt(.98,2.36,'2400 × 600',18)
# Bed mirrored horizontally: headboard against right wall, foot toward TV.
mr(3.96,2.95,2.1,2.0,'#d7d2c8');mr(4.0,3.05,2,1.8,'#eee9df')
mr(5.52,3.15,.4,.65,'white');mr(5.52,4.05,.4,.65,'white')
ml((5.45,3.05),(5.45,4.85),'#b7af9c');mt(4.12,3.88,'1800 × 2000',19,True)
mr(5.55,2.58,.45,.35,'#dfd1bb');mr(5.55,5.05,.45,.4,'#dfd1bb')
# Wall-mounted TV, facing the bed across the open room.
mr(.25,3.9,.09,1.0,ink)
mt(.45,3.88,'TV',23,True)
mt(2.7,3.83,'ПРОХІД',17)
mt(1.0,3.5,'СТУДІЯ',23,True)
''' + source[end:]
start = source.index('# Round table with two chairs.')
end = source.index('# Terrace loungers')
source = source[:start] + '''# Window-side table and two chairs, leaving the central terrace exit free.
ellipse(box(1.3,4.7,.75,.75),'#ece1ca')
mr(.65,4.72,.5,.6,'#e1e6db');mr(2.2,4.72,.5,.6,'#e1e6db')
mt(.65,5.5,'СТІЛ + 2 КРІСЛА',17)
''' + source[end:]
source = source.replace("'Шафа 2220 × 600 уздовж стіни санвузла.'", "'Шафа при вході на колишньому місці кухні.'")
source = source.replace("'Ліжко 180 × 200 см; без окремої спальні.'", "'Ліжко праворуч, між санвузлом і вікном.'")
source = source.replace("'Стіл із кріслами ближче до вікна.'", "'Кухня ліворуч; TV навпроти ліжка.'")
source = source.replace("'Прохід до тераси — по центру студії.'", "'Столик із кріслами ліворуч біля вікна.'")
source = source.replace("'ЩО ЗАФІКСОВАНО'", "'ПРОПОЗИЦІЯ РОЗТАШУВАННЯ'")
source = source.replace("'Ескіз для погодження та запиту ціни. Робочі креслення, конструкції й інженерія розробляються окремо.'", "'Погоджуємо тільки ескіз і розташування меблів. Деталізація та розрахунки — наступним етапом.'")
exec(compile(source, str(folder / 'generate_plan.py'), 'exec'), {'__file__': str(folder / 'generate_plan.py')})
print('Saved sketch revision 03 (PNG and SVG).')
