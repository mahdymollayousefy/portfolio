import os
import re

src_dir = '/home/mahdy/My projects/Portflio/frontend/src'

def replace_in_file(filepath, replacements):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    for pattern, repl in replacements:
        new_content = re.sub(pattern, repl, new_content)
        
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

# 1. Fix nav_skills in locales
replace_in_file(f'{src_dir}/components/Header.locales.js', [(r'\bskills:', 'nav_skills:')])
replace_in_file(f'{src_dir}/components/Footer.locales.js', [(r'\bskills:', 'nav_skills:')])

# In Header.jsx, it's `{ key: 'skills', path: '/skills' }` -> `{ key: 'nav_skills', path: '/skills' }`
replace_in_file(f'{src_dir}/components/Header.jsx', [(r"key:\s*'skills',\s*path:\s*'/skills'", "key: 'nav_skills', path: '/skills'")])
replace_in_file(f'{src_dir}/components/Footer.jsx', [(r"t\('skills'\)", "t('nav_skills')")])

# 2. Fix page titles and desc
pages = {
    'Home': 'home',
    'Skills': 'skills',
    'Projects': 'projects',
    'HireMe': 'hireme'
}

for page_file, prefix in pages.items():
    locales_path = f'{src_dir}/locales/{page_file}.locales.js'
    if os.path.exists(locales_path):
        replace_in_file(locales_path, [
            (r'\btitle_part1:', f'{prefix}_title_part1:'),
            (r'\btitle_part2:', f'{prefix}_title_part2:'),
            (r'\bdesc:', f'{prefix}_desc:')
        ])

# Now fix the .jsx files
page_files = {
    'page': 'home', # Home is in app/page.jsx
    'skills/page': 'skills',
    'projects/page': 'projects',
    'hire-me/page': 'hireme'
}

for page_path, prefix in page_files.items():
    jsx_path = f'{src_dir}/app/{page_path}.jsx'
    if os.path.exists(jsx_path):
        replace_in_file(jsx_path, [
            (r"t\('title_part1'\)", f"t('{prefix}_title_part1')"),
            (r"t\('title_part2'\)", f"t('{prefix}_title_part2')"),
            (r"t\('desc'\)", f"t('{prefix}_desc')")
        ])

print("Done")
