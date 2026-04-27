import Link from "next/link";
import { heroBadges, serviceTopics } from "../lib/site-data";

export default function HomeHero() {
  return (
    <section className="site-shell section-gap">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.9fr)]">
        <article className="surface-card bg-[radial-gradient(circle_at_top_right,rgba(29,77,108,0.1),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,253,249,1))] p-8 md:p-12">
          <p className="eyebrow">Made Simple Tutoring</p>
          <h1 className="max-w-[11ch] font-serif text-5xl font-semibold leading-none md:text-7xl">
            Simple, supportive help for accounting, Excel, and money basics
          </h1>
          <p className="section-copy mt-5 max-w-2xl">
            Made Simple Tutoring helps students, beginners, and young adults feel more
            confident with accounting, Excel, budgeting, and study support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-[color:var(--brand)]"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="cta-primary" href="/contact">
              Contact Me
            </Link>
            <Link className="cta-secondary" href="/services">
              View Services
            </Link>
          </div>
        </article>

        <aside className="surface-card overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(177,109,59,0.1),transparent_30%),linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,253,249,0.98))] p-6">
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

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] border border-[var(--line)] bg-white/85 p-5">
              <p className="eyebrow">Learning Style</p>
              <p className="text-lg font-semibold text-slate-900">Simple explanations</p>
              <div className="mt-4 h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[82%] rounded-full bg-[linear-gradient(90deg,#b16d3b,#1d4d6c)]" />
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-800/10 bg-[linear-gradient(180deg,rgba(29,77,108,0.96),rgba(18,54,77,0.96))] p-5 text-white">
              <p className="eyebrow text-white/75">Support</p>
              <p className="text-lg font-semibold leading-7">
                Homework, tests, and everyday money skills
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 md:col-span-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-[20px] border border-[var(--line)] ${
                    index % 3 === 1
                      ? "bg-[linear-gradient(180deg,rgba(177,109,59,0.18),rgba(255,255,255,0.92))]"
                      : "bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(223,234,241,0.95))]"
                  }`}
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
