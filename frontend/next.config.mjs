/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Since we are exporting a static site, we can't use Next.js built-in image optimization API
  images: {
    unoptimized: true,
  },
  // Ensure we don't end up with trailing slashes if we don't want them,
  // or set it to true if we do. Default is false.
  trailingSlash: false,
};

export default nextConfig;
