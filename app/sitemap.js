const baseUrl = "https://accounting-made-simple-rho.vercel.app";

export default function sitemap() {
  return [
    "",
    "/accounting",
    "/excel-tutor",
    "/excel-practice",
    "/skill-check",
    "/skill-map",
    "/session-recap",
    "/pricing",
    "/about",
    "/contact",
    "/resources",
    "/faq",
    "/accounting-tutor-southern-new-hampshire",
    "/accounting-tutor-massachusetts",
    "/local-college-accounting-tutoring"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
