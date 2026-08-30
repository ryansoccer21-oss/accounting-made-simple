import Link from "next/link";
import { amsMethod, contactInfo, heroBadges, quizCenterUrl, serviceTopics, whoIHelp } from "../lib/site-data";

export default function HomeHero() {
  return (
    <section className="site-shell section-gap pb-10">
      <div className="grid gap-4 lg:items-start lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)]">
        <article className="surface-card relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(29,77,108,0.13),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(47,145,160,0.10),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.99),rgba(247,251,253,1))] p-8 md:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
            <span className="size-2 rounded-full bg-[color:var(--mint)]" />
            Accounting Made Simple
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--warm)]">
            From Classroom to Career.
          </p>
          <h1 className="mt-3 max-w-[11ch] font-serif text-5xl font-semibold leading-[0.96] md:text-7xl">
            Accounting & Excel Tutoring
          </h1>
          <p className="section-copy mt-6 max-w-2xl text-lg md:text-xl">
            Understand accounting. Build practical Excel skills. Learn how classroom concepts connect to real accounting work.
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            One-on-one tutoring for college accounting students, with support for adult learners and career changers who want stronger accounting foundations and practical spreadsheet skills.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-[color:var(--line)] bg-white/90 px-4 py-2 text-sm font-semibold text-[color:var(--brand)]">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="cta-primary" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">
              Book a Free 30-Minute Session
            </a>
            <Link className="cta-secondary" href="/accounting">
              Explore Accounting Tutoring
            </Link>
            <a className="cta-secondary" href={quizCenterUrl} rel="noopener noreferrer" target="_blank">
              Free Quiz Center
            </a>
          </div>

          <div className="mt-10 grid gap-4 border-t border-[color:var(--line)] pt-6 sm:grid-cols-3">
            <div>
              <p className="eyebrow">Accounting</p>
              <p className="mt-2 font-semibold text-slate-900">Financial through Advanced</p>
            </div>
            <div>
              <p className="eyebrow">Excel</p>
              <p className="mt-2 font-semibold text-slate-900">Built around accounting tasks</p>
            </div>
            <div>
              <p className="eyebrow">Availability</p>
              <p className="mt-2 font-semibold text-slate-900">Mon–Thu evenings + weekends</p>
            </div>
          </div>
        </article>

        <aside className="grid gap-4">
          <div className="surface-card bg-[linear-gradient(180deg,rgba(29,77,108,0.98),rgba(18,54,77,0.98))] p-7 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">The AMS Method</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">Understand → Work → Apply → Master</h2>
            <div className="mt-6 grid gap-3">
              {amsMethod.map((step) => (
                <div key={step.title} className="rounded-3xl border border-white/15 bg-white/8 p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-semibold">{step.title}</p>
                    <span className="text-xs font-bold tracking-[0.18em] text-white/55">{step.label}</span>
                  </div>
                  <p className="mt-1 text-sm text-white/78">{step.short}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-white/78">
              The goal is not to solve one problem for you. It is to help you solve the next one yourself.
            </p>
          </div>

          <div className="surface-card p-6">
            <p className="eyebrow">Subjects</p>
            <h2 className="text-2xl font-semibold text-slate-900">What you can get help with</h2>
            <ul className="mt-4 grid gap-3">
              {serviceTopics.map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-2 size-2 rounded-full bg-[color:var(--brand)]" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-6">
            <p className="eyebrow">Who I Help</p>
            <div className="mt-4 grid gap-3">
              {whoIHelp.map((item) => (
                <div key={item} className="rounded-3xl border border-[var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
