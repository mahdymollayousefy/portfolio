import os
import re

def replace_in_file(filepath, replacements):
    if not os.path.exists(filepath):
        return
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    for pattern, repl in replacements:
        new_content = re.sub(pattern, repl, new_content)
        
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)

src_dir = 'src'

# i18n.js
replace_in_file(f'{src_dir}/i18n.js', [
    (r'HireMe\.locales', 'WorkWithMe.locales'),
    (r'hireMeLocales', 'workWithMeLocales')
])

# Header.jsx
replace_in_file(f'{src_dir}/components/Header.jsx', [
    (r"key: 'hire_me', path: '/hire-me'", "key: 'work_with_me', path: '/work-with-me'")
])

# Footer.jsx
replace_in_file(f'{src_dir}/components/Footer.jsx', [
    (r'href="/hire-me"', 'href="/work-with-me"'),
    (r"t\('hire_me'\)", "t('work_with_me')")
])

# Header.locales.js and Footer.locales.js
# Just replace hire_me: with work_with_me:
replace_in_file(f'{src_dir}/components/Header.locales.js', [
    (r'\bhire_me:', 'work_with_me:')
])
replace_in_file(f'{src_dir}/components/Footer.locales.js', [
    (r'\bhire_me:', 'work_with_me:')
])

# WorkWithMe.locales.js (formerly HireMe.locales.js)
replace_in_file(f'{src_dir}/locales/WorkWithMe.locales.js', [
    (r'hireme_', 'workwithme_')
])

# app/work-with-me/page.jsx
replace_in_file(f'{src_dir}/app/work-with-me/page.jsx', [
    (r"t\('hireme_", "t('workwithme_"),
    (r'HireMe\(\)', 'WorkWithMe()')
])

# projects/page.jsx
# change order a project link to /work-with-me
# "Order a Project" might be t('order_project')? We'll see.
replace_in_file(f'{src_dir}/app/projects/page.jsx', [
    (r'href="/hire-me"', 'href="/work-with-me"')
])

