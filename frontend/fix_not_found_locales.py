import re

filepath = 'src/locales/Projects.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

def append_to_lang(text, lang, string):
    pattern = r'(' + lang + r':\s*\{[^}]*)(\n  \})'
    replacement = r'\1' + string + r'\2'
    return re.sub(pattern, replacement, text, flags=re.DOTALL)

en_str = ',\n    project_not_found: "Project Not Found"'
de_str = ',\n    project_not_found: "Projekt nicht gefunden"'
nl_str = ',\n    project_not_found: "Project niet gevonden"'
fa_str = ',\n    project_not_found: "پروژه یافت نشد"'

content = append_to_lang(content, 'en', en_str)
content = append_to_lang(content, 'de', de_str)
content = append_to_lang(content, 'nl', nl_str)
content = append_to_lang(content, 'fa', fa_str)

with open(filepath, 'w') as f:
    f.write(content)
