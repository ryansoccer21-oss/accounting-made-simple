import PageHero from "../../components/page-hero";
import SocialLinks from "../../components/social-links";
import { aboutHighlights } from "../../lib/site-data";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Me"
        copy="Accounting Made Simple is built around clear explanations, organized problem-solving, and helping students feel more confident."
        bullets={aboutHighlights}
      />

      <section className="site-shell section-gap grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        <aside className="surface-card overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,241,0.5))] p-8 md:order-2">
          <div className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-white/90">
            <div className="relative aspect-[4/4.7] w-full">
              <img
                alt="Ryan Parks"
                className="absolute inset-0 h-full w-full object-cover"
                src="/ryan-parks-320.jpg"
              />
            </div>
          </div>
          <div className="mt-6 rounded-[28px] border border-[var(--line)] bg-white/90 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
              Ryan Parks
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">Accounting Tutor</p>
            <p className="mt-3 leading-7 text-slate-600">
              UMass Lowell graduate with an accounting concentration, focused on clear, patient support.
            </p>
          </div>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </aside>

        <article className="surface-card p-8">
          <p className="eyebrow">Why I Chose To Do This</p>
          <h2 className="section-title text-4xl md:text-5xl">Support that matches how students actually learn</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              My name is Ryan Parks. I am a recent grad and earned my bachelor's degree
              with a concentration in accounting from the University of Massachusetts
              Lowell in May 2025, and I tutor because I understand how tedious and
              complex accounting can get.
            </p>
            <p>
              Most students do not need more vague advice. They need a repeatable setup
              and practice that matches what they are tested on. That is what I do in
              sessions. I want to identify what is not clicking, fix the foundation, and
              work through real problems until the steps feel automatic.
            </p>
            <p>
              Accounting Made Simple is built around clear explanations, organized
              problem-solving, and helping you reduce the mistakes that happen when you
              are rushed or unsure.
            </p>
          </div>
        </article>

        <aside className="surface-card bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,241,0.5))] p-8 md:order-3">
          <p className="eyebrow">What I Also Help With</p>
          <blockquote className="font-serif text-3xl font-semibold leading-tight text-slate-900">
            “I keep it practical, clear, and focused on the skills people actually need to use.”
          </blockquote>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
            <p>
              I also offer support with Excel and basic financial literacy. For Excel,
              we can work on formulas, formatting, organizing data, and building simple
              spreadsheets that make work easier.
            </p>
            <p>
              For financial literacy, I keep it practical: budgeting, saving,
              understanding credit, and building better money habits without
              overcomplicating it.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
