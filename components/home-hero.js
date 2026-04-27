import Link from "next/link";
import { contactInfo, heroBadges, serviceTopics } from "../lib/site-data";

export default function HomeHero() {
  return (
    <section className="site-shell section-gap pb-10">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
        <article className="surface-card relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(29,77,108,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(177,109,59,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,253,249,1))] p-8 md:p-12">
          <div className="absolute right-6 top-6 hidden h-24 w-24 rounded-full border border-white/60 bg-[radial-gradient(circle,rgba(255,255,255,0.85),rgba(255,255,255,0))] lg:block" />
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
            <span className="size-2 rounded-full bg-[color:var(--mint)]" />
            Made Simple Tutoring
          </div>
          <h1 className="mt-6 max-w-[11ch] font-serif text-5xl font-semibold leading-[0.95] md:text-7xl">
            Clear tutoring for accounting, Excel, and money basics
          </h1>
          <p className="section-copy mt-6 max-w-2xl text-lg md:text-xl">
            Friendly help for students, beginners, and young adults who want less stress,
            clearer explanations, and a better understanding of the material.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[color:var(--line)] bg-white/85 px-4 py-2 text-sm font-semibold text-[color:var(--brand)]"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="cta-primary" href="/contact">
              Book a Conversation
            </Link>
            <Link className="cta-secondary" href="/services">
              Explore Services
            </Link>
          </div>
          <div className="mt-10 grid gap-4 border-t border-[color:var(--line)] pt-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--warm)]">
                Focus
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">Accounting and Excel support</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--warm)]">
                Style
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">Simple, patient, and organized</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--warm)]">
                Contact
              </p>
              <a className="mt-2 block text-base font-semibold text-[color:var(--brand)]" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
            </div>
          </div>
        </article>

        <aside className="grid gap-4">
          <div className="surface-card overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(177,109,59,0.12),transparent_26%),linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,253,249,0.98))] p-6">
            <div className="rounded-[28px] border border-[var(--line)] bg-white/85 p-5">
              <p className="eyebrow">Session Focus</p>
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

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-[var(--line)] bg-white/88 p-5">
                <p className="eyebrow">Best For</p>
                <p className="text-lg font-semibold text-slate-900">
                  Students, beginners, and young adults
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Built for people who want patient support without feeling lost or rushed.
                </p>
              </div>
              <div className="rounded-[28px] border border-slate-800/10 bg-[linear-gradient(180deg,rgba(29,77,108,0.96),rgba(18,54,77,0.96))] p-5 text-white">
                <p className="eyebrow text-white/75">Approach</p>
                <p className="text-lg font-semibold leading-7">
                  Clear explanation first, practice second, confidence after that
                </p>
              </div>
            </div>
          </div>

          <div className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,238,226,0.96))] p-6">
            <p className="eyebrow">How It Works</p>
            <div className="grid gap-3">
              {[
                "Reach out with the topic you need help with",
                "Get a simple plan for where to start",
                "Work through it step by step"
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-[24px] border border-[var(--line)] bg-white/85 px-4 py-4 text-sm leading-7 text-slate-700"
                >
                  <span className="mr-3 font-bold text-[color:var(--brand)]">{index + 1}.</span>
                  {step}
                </div>
              ))}
            </div>
            <Link className="mt-5 inline-flex text-sm font-bold text-[color:var(--brand)]" href="/contact">
              Contact Ryan
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
