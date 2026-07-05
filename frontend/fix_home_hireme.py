import re
filepath = 'src/locales/Home.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

replacements = [
    (r'hire_me_btn:\s*"Let\'s Talk",', 'hire_me_btn: "Work With Me",'),
    (r'hire_me_btn:\s*"Lass uns zusammenarbeiten",', 'hire_me_btn: "Zusammenarbeiten",'),
    (r'hire_me_btn:\s*"Laten We Praten",', 'hire_me_btn: "Samenwerken",'),
    (r'hire_me_btn:\s*"شروع همکاری",', 'hire_me_btn: "همکاری با من",')
]

for pat, rep in replacements:
    content = re.sub(pat, rep, content)

with open(filepath, 'w') as f:
    f.write(content)

