const baseUrl = "https://accounting-made-simple.vercel.app";

export default function sitemap() {
  return [
    "",
    "/about",
    "/services",
    "/accounting-tutor-southern-new-hampshire",
    "/accounting-tutor-massachusetts",
    "/excel-tutor",
    "/local-college-accounting-tutoring",
    "/quickbooks-tutor",
    "/resources",
    "/faq",
    "/contact"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
