/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "accounting-made-simple-rho.vercel.app"
          }
        ],
        destination: "https://accounting-made-simple.vercel.app/:path*",
        permanent: true
      },
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
