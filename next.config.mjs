/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/resources/general-personal-finance-tips.html",
        destination: "/resources",
        permanent: true
      },
      {
        source: "/resources/young-adults-college-students-tips.html",
        destination: "/resources",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
