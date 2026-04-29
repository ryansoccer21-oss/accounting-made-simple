import "./globals.css";
import { DM_Sans, Fraunces } from "next/font/google";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata = {
  title: {
    default: "Accounting Made Simple",
    template: "%s | Accounting Made Simple"
  },
  description:
    "Beginner-friendly tutoring for accounting, Excel, budgeting, and money basics.",
  verification: {
    google: "D2huXCuKLA6FNscmIWlajy08ovtAwP9v9yrp8Zg96RI"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${fraunces.variable} min-h-screen bg-[linear-gradient(180deg,#fcf9f3_0%,#f5eee2_100%)] text-slate-900 antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(177,109,59,0.12),transparent_28%)]" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
