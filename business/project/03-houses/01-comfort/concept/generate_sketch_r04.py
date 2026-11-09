"""Furniture layout revision only. Previous sketches remain intact."""
from pathlib import Path
folder = Path(__file__).resolve().parent
previous = (folder / 'generate_sketch_r03.py').read_text(encoding='utf-8')
setup = previous.split('exec(compile(source,')[0]
scope = {'__file__': str(folder / 'generate_sketch_r03.py')}
exec(compile(setup, str(folder / 'generate_sketch_r03.py'), 'exec'), scope)
source = scope['source'].replace('редакція 03','редакція 04').replace('comfort-base-plan-r03','comfort-base-plan-r04').replace('АР–Е03','АР–Е04')
start=source.index('# Wardrobe at entrance')
end=source.index('# Bathroom fixture outlines')
source=source[:start]+'''# Unified L-shaped cabinet group: wardrobe, corner service unit, fridge, kitchen.
mr(.25,.25,.6,.6,'#d8cebd')
mr(.85,.25,1.8,.6,'#e7dfd2')
for x in (1.45,2.05):ml((x,.25),(x,.85))
mt(1.0,.38,'ШАФА',20,True)
mt(1.0,.64,'ОДЯГ / РЕЧІ',15)
mr(.25,.85,.6,2.4,'#e1e6db')
for y in (1.45,2.05,2.65):ml((.25,y),(.85,y))
# Tall fridge continues the tall storage volume around the corner.
mr(.3,.9,.5,.5,'#d8cebd')
mt(.36,1.08,'Х',20,True)
ellipse(box(.33,1.53,.22,.22),'#e9eee8')
ellipse(box(.59,1.79,.16,.16),'#e9eee8')
mr(.32,2.72,.44,.46,'#becfc3')
mt(.98,2.81,'КУХНЯ',19,True)
# Bed centered in niche: midpoint (2.57 + 5.75)/2 = 4.16 m.
mr(3.96,3.16,2.1,2.0,'#d7d2c8');mr(4.0,3.26,2,1.8,'#eee9df')
mr(5.52,3.36,.4,.65,'white');mr(5.52,4.26,.4,.65,'white')
ml((5.45,3.26),(5.45,5.06),'#b7af9c')
mt(4.12,4.06,'1800 × 2000',19,True)
mr(5.55,2.66,.45,.4,'#dfd1bb');mr(5.55,5.26,.45,.4,'#dfd1bb')
# TV shares the exact same y centerline as bed.
mr(.25,3.66,.09,1.0,ink)
mt(.45,3.95,'TV',23,True)
for x in [1.0,1.4,1.8,2.2,2.6,3.0,3.4]:
    ml((x,4.16),(x+.18,4.16),'#b6c5bd',1)
mt(1.75,3.86,'ВІСЬ TV / ЛІЖКО',16)
''' + source[end:]
start=source.index('# Window-side table')
end=source.index('# Terrace loungers')
source=source[:start]+'''# Table next to kitchen; chairs do not occupy the main route or TV axis.
ellipse(box(1.65,2.1,.75,.75),'#ece1ca')
mr(1.72,1.45,.6,.5,'#e1e6db');mr(1.72,3.0,.6,.5,'#e1e6db')
mt(1.38,1.16,'СТІЛ НА ДВОХ',17,True)
mt(2.8,4.8,'ПРОХІД',17)
''' + source[end:]
source=source.replace('Ліжко праворуч, між санвузлом і вікном.','Ліжко відцентровано в правій ніші.')
source=source.replace('Шафа при вході на колишньому місці кухні.','Шафа та кухня — єдиний Г-подібний блок.')
source=source.replace('Кухня ліворуч; TV навпроти ліжка.','TV на одній осі з центром ліжка.')
source=source.replace('Столик із кріслами ліворуч біля вікна.','Столик із двома кріслами біля кухні.')
exec(compile(source, str(folder/'generate_plan.py'), 'exec'), {'__file__':str(folder/'generate_plan.py')})
print('Saved sketch revision 04 (PNG and SVG).')
