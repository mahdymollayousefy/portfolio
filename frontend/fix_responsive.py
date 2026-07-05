import os
import re

def replace_in_file(filepath, replacements):
    if not os.path.exists(filepath): return
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w') as f:
        f.write(content)

# 1. src/app/page.jsx (Home Page)
home_replacements = [
    # General layout & text sizes
    ('py-12', 'py-6 md:py-12'),
    ('py-24', 'py-10 md:py-24'),
    ('space-y-24', 'space-y-12 md:space-y-24'),
    ('px-4', 'px-0 md:px-4'),
    ('px-6', 'px-0 md:px-6'),
    ('px-8', 'px-0 md:px-8'),
    ('text-5xl', 'text-3xl md:text-5xl'),
    ('text-4xl', 'text-2xl md:text-4xl'),
    ('text-6xl', 'text-4xl md:text-6xl'),
    
    # Hero section text box
    ('px-4 py-2 bg-blue-50', 'px-3 py-1.5 md:px-4 md:py-2 bg-blue-50'),
    
    # Justify texts
    ('text-lg text-slate-600', 'text-lg text-slate-600 text-justify'),
    ('text-slate-600 dark:text-slate-400 max-w-2xl mx-auto', 'text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-justify'),
    ('text-slate-600 dark:text-slate-400 mb-6', 'text-slate-600 dark:text-slate-400 mb-6 text-justify'),
    ('text-slate-600 dark:text-slate-400 leading-relaxed', 'text-slate-600 dark:text-slate-400 leading-relaxed text-justify'),
    
    # About me specifically requested to remove px
    ('className="glass-card p-8 md:p-12', 'className="glass-card p-4 md:p-12'),
    ('max-w-4xl mx-auto"', 'max-w-4xl mx-auto px-0 md:px-4"'),
]
replace_in_file('src/app/page.jsx', home_replacements)

# 2. src/app/legal/page.jsx (Legal Page)
legal_replacements = [
    ('py-12', 'py-6 md:py-12'),
    ('px-8', 'px-4 md:px-8'),
    ('space-y-24', 'space-y-12 md:space-y-24'),
    ('text-4xl', 'text-2xl md:text-4xl'),
    ('text-3xl', 'text-xl md:text-3xl'),
    
    # Icons smaller
    ('w-12 h-12', 'w-8 h-8 md:w-12 md:h-12'),
    ('w-8 h-8', 'w-6 h-6 md:w-8 md:h-8'),
    ('text-slate-600 dark:text-slate-400 leading-relaxed', 'text-slate-600 dark:text-slate-400 leading-relaxed text-justify'),
]
replace_in_file('src/app/legal/page.jsx', legal_replacements)

# 3. src/app/work-with-me/page.jsx (Contact/Work With Me)
contact_replacements = [
    ('py-12', 'py-6 md:py-12'),
    ('space-y-16', 'space-y-8 md:space-y-16'),
    ('px-8', 'px-4 md:px-8'), # We want slightly smaller px, not necessarily 0 inside cards
    ('p-8', 'p-4 md:p-8'),
    ('text-4xl md:text-5xl', 'text-3xl md:text-5xl'),
    ('text-2xl', 'text-xl md:text-2xl'),
    ('text-lg text-slate-600', 'text-lg text-slate-600 text-justify'),
    
    # FAQs remove px
    ('p-6 bg-white', 'p-4 md:p-6 bg-white'),
    ('px-4 text-slate-600', 'px-2 md:px-4 text-slate-600 text-justify'),
    
    # Email out of box fix
    ('<p className="font-medium text-slate-900', '<p className="font-medium text-slate-900 dark:text-white break-all text-sm md:text-base'),
]
replace_in_file('src/app/work-with-me/page.jsx', contact_replacements)

# 4. src/app/projects/page.jsx
projects_replacements = [
    ('py-12', 'py-6 md:py-12'),
    ('text-5xl', 'text-3xl md:text-5xl'),
    ('text-lg text-slate-600', 'text-lg text-slate-600 text-justify'),
    ('p-6', 'p-4 md:p-6'),
    ('px-4 py-2 text-sm', 'px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm'),
]
replace_in_file('src/app/projects/page.jsx', projects_replacements)

