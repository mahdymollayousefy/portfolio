import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = [
        # Upscale headings on mobile
        (r'\btext-lg md:text-3xl\b', 'text-2xl md:text-3xl'),
        (r'\btext-lg md:text-2xl\b', 'text-xl md:text-2xl'),
        (r'\btext-base md:text-lg md:text-2xl\b', 'text-xl md:text-2xl'),
        (r'\btext-base md:text-3xl\b', 'text-2xl md:text-3xl'),
        (r'\btext-base md:text-4xl\b', 'text-2xl md:text-4xl'),
    ]

    for pattern, repl in replacements:
        content = re.sub(pattern, repl, content)

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
    print("Done upscaling mobile headings.")

if __name__ == '__main__':
    main()
