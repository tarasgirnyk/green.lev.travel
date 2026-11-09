"""Presentation sketch: compact terrace, separate barbecue zone, no costing."""
from pathlib import Path
folder=Path(__file__).resolve().parent
previous=(folder/'generate_sketch_r05.py').read_text(encoding='utf-8')
scope={'__file__':str(folder/'generate_sketch_r05.py')}
exec(compile(previous.split("exec(compile(source,str(folder/'generate_plan.py')")[0],str(folder/'generate_sketch_r05.py'),'exec'),scope)
source=scope['source']
source=source.replace('comfort-base-plan-r05','comfort-concept-sketch').replace('АР–Е05','ЕСКІЗ–07')
source=source.replace('Ескізний план · база «Адам і Єва» · редакція 05','Концепт будинку · ескіз планування')
source=source.replace('Концепцію обрано 09.11.2026 · розміри запропоновано для опрацювання','Одноповерховий будинок для двох · 09.11.2026')
# Restore balanced terrace furniture positions: table and two chairs share one centerline.
source=source.replace("mt(.3,6.45,'2 КРІСЛА + КВАДРАТНИЙ СТІЛ',17,True)","mt(.45,6.43,'ДВА КРІСЛА ТА СТІЛ',19,True)")
source=source.replace('МАНГАЛЬНИЙ МОДУЛЬ ПОРУЧ ІЗ ТЕРАСОЮ','ОКРЕМИЙ МАЙДАНЧИК ДЛЯ МАНГАЛА')
source=source.replace('Окрема вставка без масштабу: місце та відступи ще не визначені.','Схема складу зони без масштабу. Розташування визначаємо на ділянці.')
source=source.replace('Мангальний модуль — поруч із терасою.','Мангал на окремому майданчику.')
source=source.replace('ПРОПОЗИЦІЯ РОЗТАШУВАННЯ','ПЛАНУВАЛЬНЕ РІШЕННЯ')
source=source.replace("'ЩО ЩЕ ПЕРЕВІРИТИ'","'МЕЖІ ЦЬОГО ЕСКІЗУ'")
start=source.index("notes=['Стіни 250 мм")
end=source.index('for i,n in enumerate(notes):',start)
source=source[:start]+'''notes=['Габарит будинку: 6,40 × 6,00 м.','Тераса: 6,40 × 2,40 м, без збільшення.','Ширини проходів і моделі меблів уточнюються.','Точна модель SPA поки не обрана.','Мангал розміщується окремо на ділянці.','Його місце й відступи уточнюються окремо.','Ескіз не є робочим проєктом будівництва.']
''' + source[end:]
source=source.replace('Погоджуємо тільки ескіз і розташування меблів. Деталізація та розрахунки — наступним етапом.','Ескіз концепції. Архітектурна, конструктивна й інженерна деталізація — наступний етап.')
# Finish dining seats as armchairs rather than plain blocks, preserving their clear routes.
source=source.replace("mr(1.72,1.45,.6,.5,'#e1e6db');mr(1.72,3.0,.6,.5,'#e1e6db')", "mr(1.72,1.45,.6,.5,'#e1e6db');mr(1.72,3.0,.6,.5,'#e1e6db')\nml((1.72,1.45),(2.32,1.45),ink,5);ml((1.72,3.5),(2.32,3.5),ink,5)")
exec(compile(source,str(folder/'generate_plan.py'),'exec'),{'__file__':str(folder/'generate_plan.py')})
print('Saved comfort-concept-sketch.png and .svg')
