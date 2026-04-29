export default function robots() {
  return {
    host: "https://accounting-made-simple.vercel.app",
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://accounting-made-simple.vercel.app/sitemap.xml"
  };
}
