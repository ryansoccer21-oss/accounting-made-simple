import "./globals.css";
import { DM_Sans, Fraunces } from "next/font/google";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });

const siteUrl = "https://accounting-made-simple-rho.vercel.app";
const siteDescription =
  "One-on-one accounting and accounting-focused Excel tutoring for college students, adult learners, and career changers. From Classroom to Career.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Accounting Made Simple | Accounting & Excel Tutoring",
    template: "%s | Accounting Made Simple"
  },
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Accounting Made Simple",
    title: "Accounting Made Simple | Accounting & Excel Tutoring",
    description: siteDescription
  },
  twitter: {
    card: "summary",
    title: "Accounting Made Simple | Accounting & Excel Tutoring",
    description: siteDescription
  },
  verification: {
    google: "D2huXCuKLA6FNscmIWlajy08ovtAwP9v9yrp8Zg96RI"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${fraunces.variable} min-h-screen bg-[linear-gradient(180deg,#f7fafc_0%,#eef3f6_100%)] text-slate-900 antialiased`}>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(47,145,160,0.10),transparent_28%)]" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
