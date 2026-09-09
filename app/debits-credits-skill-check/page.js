import Link from "next/link";
import DebitsCreditsDiagnostic from "../../components/debits-credits-diagnostic";
import PageHero from "../../components/page-hero";
import { contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "Debits & Credits Skill Check",
  description:
    "Take a free 12-question Debits & Credits Skill Check covering normal balances, routine journal entries, and adjusting entries with explanations and category-level results."
};

const directions = [
  {
    title: "1. Work without notes",
    copy: "Answer based on what you can do independently so the result reflects your current accounting foundation."
  },
  {
    title: "2. Finish all 12 questions",
    copy: "The diagnostic scores three areas: account behavior, routine transaction entries, and adjusting entries."
  },
  {
    title: "3. Review the reasoning",
    copy: "After scoring, every question shows the correct answer and a short explanation so missed questions become practice."
  }
];

export default function DebitsCreditsSkillCheckPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Accounting Diagnostic"
        title="Can you choose the debit and credit without copying an example?"
        copy="Use this short performance-based diagnostic to test actual debit-and-credit reasoning before deciding what to review next. It uses original AMS practice questions and does not save your answers."
        bullets={["12 original questions", "3 scored skill areas", "Explanations after you submit"]}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-3">
          {directions.map((direction) => (
            <article key={direction.title} className="surface-card p-6">
              <h2 className="text-xl font-semibold text-slate-900">{direction.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{direction.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Performance Check</p>
          <h2 className="section-title">Test the foundation before you rate yourself</h2>
          <p className="section-copy mt-4">
            Self-assessment can help organize what feels difficult, but this diagnostic uses actual accounting decisions to show where your debit-and-credit reasoning is strongest and where it needs more practice.
          </p>
        </div>
        <DebitsCreditsDiagnostic />
      </section>

      <section className="site-shell pb-16">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:items-center">
            <div>
              <p className="eyebrow">What To Do With Your Result</p>
              <h2 className="section-title max-w-[16ch]">Turn the score into a specific review plan</h2>
              <p className="section-copy mt-5 max-w-3xl">
                Use the category breakdown to choose your first review priority, then confirm it with a few fresh practice problems. If you book a Skill Check, bring the copied result summary so the session can start with evidence instead of guessing.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link className="cta-secondary" href="/skill-map">Open the AMS Skill Map</Link>
              <Link className="cta-secondary" href="/skill-check">Open the Full Accounting Skill Check</Link>
              <a className="cta-primary" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">
                Book a Free 30-Minute Session
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
