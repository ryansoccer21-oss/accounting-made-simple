const baseUrl = "https://accounting-made-simple.vercel.app";

export default function sitemap() {
  return [
    "",
    "/about",
    "/services",
    "/local-college-accounting-tutoring",
    "/resources",
    "/faq",
    "/contact"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
