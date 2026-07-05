import re

filepath = 'src/locales/Projects.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

def append_to_lang(text, lang, string):
    pattern = r'(' + lang + r':\s*\{[^}]*)(\n  \})'
    replacement = r'\1' + string + r'\2'
    return re.sub(pattern, replacement, text, flags=re.DOTALL)

en_str = ',\n    back_to_projects: "Back to Projects"'
de_str = ',\n    back_to_projects: "Zurück zu Projekten"'
nl_str = ',\n    back_to_projects: "Terug naar Projecten"'
fa_str = ',\n    back_to_projects: "بازگشت به پروژه‌ها"'

content = append_to_lang(content, 'en', en_str)
content = append_to_lang(content, 'de', de_str)
content = append_to_lang(content, 'nl', nl_str)
content = append_to_lang(content, 'fa', fa_str)

with open(filepath, 'w') as f:
    f.write(content)
