import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = [
        # Remove text-justify
        (r'\btext-justify\b', ''),
        
        # Shrink headers in page.jsx, skills/page.jsx
        (r'\btext-2xl md:text-3xl lg:text-4xl\b', 'text-lg md:text-3xl lg:text-4xl'),
        (r'\btext-2xl font-bold\b', 'text-lg md:text-2xl font-bold'),
    ]

    for pattern, repl in replacements:
        content = re.sub(pattern, repl, content)
        
    content = re.sub(r' +', ' ', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    root_dirs = ['src/app', 'src/components']
    for root_dir in root_dirs:
        for root, _, files in os.walk(root_dir):
            for file in files:
                if file.endswith('.jsx') or file.endswith('.js'):
                    filepath = os.path.join(root, file)
                    process_file(filepath)
    print("Done applying third UI fixes.")

if __name__ == '__main__':
    main()
