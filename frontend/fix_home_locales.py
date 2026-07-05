import re
filepath = 'src/locales/Home.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

replacements = [
    (r'lines_of_code: "100k\+ Lines",\s*optimized_code: "of optimized code",', 'fullstack_dev: "Full-Stack Developer",'),
    (r'lines_of_code: "100k\+ Zeilen",\s*optimized_code: "optimierter Code",', 'fullstack_dev: "Full-Stack-Entwickler",'),
    (r'lines_of_code: "100k\+ Regels",\s*optimized_code: "geoptimaliseerde code",', 'fullstack_dev: "Full-Stack Ontwikkelaar",'),
    (r'lines_of_code: "100 هزار خط\+",\s*optimized_code: "کد بهینه‌سازی شده",', 'fullstack_dev: "توسعه‌دهنده فول‌استک",')
]

for pat, rep in replacements:
    content = re.sub(pat, rep, content)

with open(filepath, 'w') as f:
    f.write(content)

