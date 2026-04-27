import PageHero from "../../../components/page-hero";
import { aboutHighlights } from "../../../lib/site-data";

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

        <aside className="surface-card bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,241,0.5))] p-8">
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
