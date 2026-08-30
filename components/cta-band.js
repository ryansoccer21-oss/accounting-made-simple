import { contactInfo } from "../lib/site-data";

export default function CtaBand() {
  return (
    <section className="site-shell pb-20">
      <div className="surface-card overflow-hidden bg-[linear-gradient(180deg,rgba(29,77,108,0.98),rgba(18,54,77,0.98))] p-8 text-white md:p-10">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Get Started</p>
            <h2 className="mt-3 max-w-[14ch] font-serif text-4xl font-semibold md:text-5xl">
              Start with a free 30-minute Accounting Skill Check
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/78">
              Identify what is working, what is not clicking yet, and the highest-priority topic to improve first.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a className="cta-secondary bg-white text-[color:var(--brand)]" href={contactInfo.bookingUrl} rel="noreferrer" target="_blank">
              Book a Free 30-Minute Session
            </a>
            <a className="text-sm font-semibold text-white/85" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
