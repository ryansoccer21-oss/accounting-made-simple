export default function robots() {
  return {
    host: "https://accounting-made-simple-rho.vercel.app",
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://accounting-made-simple-rho.vercel.app/sitemap.xml"
  };
}
