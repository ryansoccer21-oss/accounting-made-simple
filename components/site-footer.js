import Link from "next/link";
import SocialLinks from "./social-links";
import { contactInfo, navLinks } from "../lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="pb-10 pt-4">
      <div className="site-shell border-t border-[var(--line)] pt-6 md:flex md:items-start md:justify-between">
        <div>
          <Link className="font-serif text-xl font-semibold text-slate-900" href="/">
            Accounting Made Simple
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
            Beginner-friendly tutoring with a clear, supportive approach.
          </p>
          <a className="mt-2 inline-flex text-sm font-semibold text-[color:var(--brand)]" href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </a>
          <a className="mt-2 block text-sm font-semibold text-[color:var(--brand)]" href={`tel:${contactInfo.phone.replace(/[^0-9]/g, "")}`}>
            {contactInfo.phone}
          </a>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            <span className="font-semibold text-slate-700">Format:</span> {contactInfo.format}
          </p>
          <p className="text-sm leading-7 text-slate-500">
            <span className="font-semibold text-slate-700">Response time:</span> {contactInfo.responseTime}
          </p>
          <p className="text-sm leading-7 text-slate-500">
            <span className="font-semibold text-slate-700">Payment:</span> {contactInfo.paymentNote}
          </p>
          <div className="mt-4">
            <SocialLinks compact />
          </div>
        </div>
        <nav className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500 md:mt-0" aria-label="Footer">
          {navLinks.map((link) => (
            <Link key={link.href} className="transition hover:text-[color:var(--brand)]" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
