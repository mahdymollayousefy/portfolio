import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Smaller text sizes for mobile
    replacements = [
        # Make mobile headings much smaller if they are currently text-3xl md:text-5xl etc.
        (r'\btext-4xl md:text-6xl\b', 'text-2xl md:text-6xl'),
        (r'\btext-3xl md:text-5xl\b', 'text-xl md:text-5xl'),
        (r'\btext-2xl md:text-4xl\b', 'text-lg md:text-4xl'),
        (r'\btext-xl md:text-3xl\b', 'text-base md:text-3xl'),
        (r'\btext-xl md:text-2xl\b', 'text-base md:text-2xl'),
        
        # Paragraphs sizes
        (r'(?<![a-z:-])\btext-lg\b(?!\s*md:text-)', 'text-sm md:text-lg'),
        (r'(?<![a-z:-])\btext-xl\b(?!\s*md:text-)', 'text-base md:text-xl'),
        
        # Add text-justify
        (r'\bleading-relaxed\b(?!\s*text-justify)', 'leading-relaxed text-justify'),
        (r'\btext-start rtl:text-end\b', ''), # Clean up old alignments that contradict text-justify
    ]

    for pattern, repl in replacements:
        content = re.sub(pattern, repl, content)
        
    # Clean up double spaces if any
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
    print("Done applying second UI fixes.")

if __name__ == '__main__':
    main()
