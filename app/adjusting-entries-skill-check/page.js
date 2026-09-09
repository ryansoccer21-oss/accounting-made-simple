import Link from "next/link";
import PageHero from "../../components/page-hero";
import AdjustingEntriesDiagnostic from "../../components/adjusting-entries-diagnostic";
import { contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "Adjusting Entries Skill Check",
  description:
    "Test accruals, deferrals, depreciation, and adjusting-entry financial statement effects with a free 12-question performance-based diagnostic."
};

export default function AdjustingEntriesSkillCheckPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Accounting Diagnostic"
        title="Adjusting Entries Skill Check"
        copy="Test whether you can identify, calculate, and explain common year-end adjustments without relying on a worked example."
        bullets={["12 original questions", "Accruals and deferrals", "Error analysis and statement effects"]}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="surface-card p-6">
            <p className="eyebrow">01</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Accruals</h2>
            <p className="mt-3 leading-7 text-slate-600">Accrued wages, accrued revenue, interest, and recognizing activity before cash moves.</p>
          </article>
          <article className="surface-card p-6">
            <p className="eyebrow">02</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Deferrals & Allocations</h2>
            <p className="mt-3 leading-7 text-slate-600">Prepaids, unearned revenue, supplies, and straight-line depreciation.</p>
          </article>
          <article className="surface-card p-6">
            <p className="eyebrow">03</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Error Analysis</h2>
            <p className="mt-3 leading-7 text-slate-600">Determine how omitted adjustments affect assets, liabilities, revenue, expenses, and net income.</p>
          </article>
        </div>
      </section>

      <section className="site-shell pb-16">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Performance Check</p>
          <h2 className="section-title">Work the adjustment before you look at the explanation</h2>
          <p className="section-copy mt-4">
            Complete all 12 questions without notes if possible. After scoring, review every explanation and use your lowest category as the first study priority.
          </p>
        </div>
        <AdjustingEntriesDiagnostic />
      </section>

      <section className="site-shell pb-16">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:items-center">
            <div>
              <p className="eyebrow">Next Step</p>
              <h2 className="section-title max-w-[16ch]">Use the result to focus your next practice session</h2>
              <p className="section-copy mt-5 max-w-3xl">
                Bring your category scores and missed questions to tutoring so the next session can target the reasoning pattern behind the errors instead of repeating random problems.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a className="cta-primary" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">Book a Free 30-Minute Session</a>
              <Link className="cta-secondary" href="/resources">Back to Resources</Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
