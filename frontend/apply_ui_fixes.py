import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # RTL Replacements
    # Use word boundaries so we don't accidentally replace within other words
    rtl_patterns = [
        (r'\bpl-([0-9]+|px)\b', r'ps-\1'),
        (r'\bpr-([0-9]+|px)\b', r'pe-\1'),
        (r'\bml-([0-9]+|px|auto)\b', r'ms-\1'),
        (r'\bmr-([0-9]+|px|auto)\b', r'me-\1'),
        (r'\btext-left\b', r'text-start'),
        (r'\btext-right\b', r'text-end'),
        (r'\bborder-l-([0-9]+|px)\b', r'border-s-\1'),
        (r'\bborder-r-([0-9]+|px)\b', r'border-e-\1'),
        (r'\bborder-l\b', r'border-s'),
        (r'\bborder-r\b', r'border-e'),
        (r'\bleft-([0-9]+|px|auto|full|1/2|1/3|1/4|2/3|3/4)\b', r'start-\1'),
        (r'\bright-([0-9]+|px|auto|full|1/2|1/3|1/4|2/3|3/4)\b', r'end-\1'),
        (r'\b-left-([0-9]+|px|auto|full|1/2|1/3|1/4|2/3|3/4)\b', r'-start-\1'),
        (r'\b-right-([0-9]+|px|auto|full|1/2|1/3|1/4|2/3|3/4)\b', r'-end-\1'),
    ]

    for pattern, repl in rtl_patterns:
        content = re.sub(pattern, repl, content)

    # Mobile Responsiveness Replacements
    # We should only replace them if they are not already responsive (i.e. not prefixed by md: or lg: or sm:)
    # Using negative lookbehind to ensure no prefix like `md:` or `-` is directly before the class
    # Actually simpler: if it's already there, it won't hurt to just do simple replacements, but we must be careful not to replace `md:p-12` to `md:p-6 md:p-12`
    
    responsive_patterns = [
        (r'(?<![a-z:-])\bp-12\b', 'p-6 md:p-12'),
        (r'(?<![a-z:-])\bp-8\b', 'p-4 md:p-8'),
        (r'(?<![a-z:-])\bpx-12\b', 'px-6 md:px-12'),
        (r'(?<![a-z:-])\bpx-8\b', 'px-4 md:px-8'),
        (r'(?<![a-z:-])\bpx-6\b', 'px-4 md:px-6'),
        (r'(?<![a-z:-])\bpy-24\b', 'py-12 md:py-24'),
        (r'(?<![a-z:-])\bpy-12\b', 'py-6 md:py-12'),
        (r'(?<![a-z:-])\bpy-8\b', 'py-4 md:py-8'),
        (r'(?<![a-z:-])\bspace-y-24\b', 'space-y-12 md:space-y-24'),
        (r'(?<![a-z:-])\bspace-y-16\b', 'space-y-8 md:space-y-16'),
        (r'(?<![a-z:-])\bspace-y-12\b', 'space-y-6 md:space-y-12'),
        (r'(?<![a-z:-])\bspace-y-8\b', 'space-y-4 md:space-y-8'),
        (r'(?<![a-z:-])\btext-6xl\b', 'text-4xl md:text-6xl'),
        (r'(?<![a-z:-])\btext-5xl\b', 'text-3xl md:text-5xl'),
        (r'(?<![a-z:-])\btext-4xl\b', 'text-2xl md:text-4xl'),
        (r'(?<![a-z:-])\btext-3xl\b', 'text-xl md:text-3xl'),
    ]

    for pattern, repl in responsive_patterns:
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
    print("Done applying UI fixes.")

if __name__ == '__main__':
    main()
