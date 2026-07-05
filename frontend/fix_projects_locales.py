import re

filepath = 'src/locales/Projects.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

def insert_translations(text, lang, order_project, view, code, live_demo, estimated_price, filter_all):
    pattern = r'(' + lang + r':\s*\{.*?)(\n\s*no_projects:)'
    replacement = r'\1\n    order_project: "' + order_project + '",\n    view: "' + view + '",\n    code: "' + code + '",\n    live_demo: "' + live_demo + '",\n    estimated_price: "' + estimated_price + '",\n    filter_all: "' + filter_all + '",\2'
    return re.sub(pattern, replacement, text, flags=re.DOTALL)

# Let's just append to the end of each lang block.
def append_to_lang(text, lang, string):
    pattern = r'(' + lang + r':\s*\{[^}]*)(\n  \})'
    replacement = r'\1' + string + r'\2'
    return re.sub(pattern, replacement, text, flags=re.DOTALL)

en_str = ',\n    order_project: "Order a Project",\n    view: "View",\n    code: "Code",\n    live_demo: "Live Demo",\n    estimated_price: "Estimated Price"'
de_str = ',\n    order_project: "Projekt bestellen",\n    view: "Ansehen",\n    code: "Code",\n    live_demo: "Live-Demo",\n    estimated_price: "Geschätzter Preis"'
nl_str = ',\n    order_project: "Project bestellen",\n    view: "Bekijken",\n    code: "Code",\n    live_demo: "Live Demo",\n    estimated_price: "Geschatte Prijs"'
fa_str = ',\n    order_project: "سفارش پروژه",\n    view: "مشاهده",\n    code: "کد منبع",\n    live_demo: "نمایش زنده",\n    estimated_price: "قیمت تقریبی"'

content = append_to_lang(content, 'en', en_str)
content = append_to_lang(content, 'de', de_str)
content = append_to_lang(content, 'nl', nl_str)
content = append_to_lang(content, 'fa', fa_str)

with open(filepath, 'w') as f:
    f.write(content)
