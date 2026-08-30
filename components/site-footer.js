import Link from "next/link";
import SocialLinks from "./social-links";
import { contactInfo, navLinks } from "../lib/site-data";

const utilityLinks = [
  { href: "/skill-check", label: "Skill Check" },
  { href: "/skill-map", label: "Skill Map" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export default function SiteFooter() {
  return (
    <footer className="pb-10 pt-4">
      <div className="site-shell border-t border-[var(--line)] pt-6 md:flex md:items-start md:justify-between">
        <div>
          <Link className="font-serif text-xl font-semibold text-slate-900" href="/">
            Accounting Made Simple
          </Link>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--warm)]">From Classroom to Career.</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
            One-on-one accounting and accounting-focused Excel tutoring for college students, adult learners, and career changers.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            <span className="font-semibold text-slate-700">Availability:</span> {contactInfo.availabilityNote}
          </p>
          <a className="mt-2 inline-flex text-sm font-semibold text-[color:var(--brand)]" href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </a>
          <div className="mt-4"><SocialLinks compact /></div>
        </div>

        <div className="mt-6 md:mt-0 md:text-right">
          <nav className="flex flex-wrap gap-5 text-sm text-slate-500 md:justify-end" aria-label="Primary footer navigation">
            {navLinks.map((link) => (
              <Link key={link.href} className="transition hover:text-[color:var(--brand)]" href={link.href}>{link.label}</Link>
            ))}
          </nav>
          <nav className="mt-3 flex flex-wrap gap-5 text-sm text-slate-500 md:justify-end" aria-label="Secondary footer navigation">
            {utilityLinks.map((link) => (
              <Link key={link.href} className="transition hover:text-[color:var(--brand)]" href={link.href}>{link.label}</Link>
            ))}
          </nav>
          <a className="cta-primary mt-5 inline-flex" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">
            Book a Free 30-Minute Session
          </a>
        </div>
      </div>
    </footer>
  );
}
