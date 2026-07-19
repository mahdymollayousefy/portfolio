/**
 * Maps tech stack names (case-insensitive) to devicon CSS classes.
 * Used to display proper icons for tech stacks in project cards and detail pages.
 */
const TECH_ICON_MAP = {
  'react': 'devicon-react-original',
  'reactjs': 'devicon-react-original',
  'react.js': 'devicon-react-original',
  'django': 'devicon-django-plain',
  'python': 'devicon-python-plain',
  'next': 'devicon-nextjs-plain',
  'nextjs': 'devicon-nextjs-plain',
  'next.js': 'devicon-nextjs-plain',
  'postgresql': 'devicon-postgresql-plain',
  'postgres': 'devicon-postgresql-plain',
  'docker': 'devicon-docker-plain',
  'ubuntu': 'devicon-ubuntu-plain',
  'nginx': 'devicon-nginx-original',
  'javascript': 'devicon-javascript-plain',
  'js': 'devicon-javascript-plain',
  'typescript': 'devicon-typescript-plain',
  'ts': 'devicon-typescript-plain',
  'node': 'devicon-nodejs-plain-wordmark',
  'nodejs': 'devicon-nodejs-plain-wordmark',
  'node.js': 'devicon-nodejs-plain-wordmark',
  'html': 'devicon-html5-plain',
  'html5': 'devicon-html5-plain',
  'css': 'devicon-css3-plain',
  'css3': 'devicon-css3-plain',
  'tailwind': 'devicon-tailwindcss-original',
  'tailwindcss': 'devicon-tailwindcss-original',
  'tailwind css': 'devicon-tailwindcss-original',
  'redis': 'devicon-redis-plain',
  'mysql': 'devicon-mysql-plain',
  'aws': 'devicon-amazonwebservices-plain-wordmark',
  'google cloud': 'devicon-googlecloud-plain',
  'gcp': 'devicon-googlecloud-plain',
  'git': 'devicon-git-plain',
  'github': 'devicon-github-original',
  'linux': 'devicon-linux-plain',
  'cloudflare': 'devicon-cloudflare-plain',
};

/**
 * Get the devicon CSS class for a tech stack name.
 * Returns null if no icon mapping is found.
 */
export function getTechIconClass(techName) {
  if (!techName) return null;
  const key = techName.toLowerCase().trim();
  return TECH_ICON_MAP[key] || null;
}

/**
 * Render a tech stack item with its icon (if available).
 * Returns { iconClass, name } for use in React components.
 */
export function getTechStackDisplay(techName) {
  return {
    iconClass: getTechIconClass(techName),
    name: techName,
  };
}
