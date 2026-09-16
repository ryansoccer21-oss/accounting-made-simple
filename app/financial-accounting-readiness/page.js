import Link from "next/link";
import PageHero from "../../components/page-hero";
import FinancialAccountingReadiness from "../../components/financial-accounting-readiness";
import { contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "Financial Accounting Readiness Check",
  description:
    "Test core financial accounting readiness with 16 original questions covering transactions, reporting, assets, liabilities, equity, and cash flows."
};

export default function FinancialAccountingReadinessPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Accounting Diagnostic"
        title="Financial Accounting Readiness"
        copy="Test whether your foundation is strong enough to move confidently across the core topics of an introductory Financial Accounting course."
        bullets={["16 original questions", "4 core skill areas", "Category-level review priorities"]}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["01", "Transaction Analysis", "Journal entries, account effects, and the accounting equation."],
            ["02", "Adjustments & Reporting", "Accrual accounting, adjusting logic, statements, and retained earnings."],
            ["03", "Assets & Valuation", "Receivables, inventory, routine repairs, and asset measurement."],
            ["04", "Liabilities, Equity & Cash Flows", "Classification, owner transactions, dividends, and cash-flow categories."]
          ].map(([number, title, copy]) => (
            <article key={title} className="surface-card p-6">
              <p className="eyebrow">{number}</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Readiness Check</p>
          <h2 className="section-title">Test the full foundation, not just one chapter</h2>
          <p className="section-copy mt-4">
            Complete all 16 questions without notes if possible. After scoring, use the lowest category as your first review priority and revisit missed explanations before attempting new practice.
          </p>
        </div>
        <FinancialAccountingReadiness />
      </section>

      <section className="site-shell pb-16">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:items-center">
            <div>
              <p className="eyebrow">Next Step</p>
              <h2 className="section-title max-w-[16ch]">Turn the category result into a study priority</h2>
              <p className="section-copy mt-5 max-w-3xl">
                Bring your category scores to tutoring so the next session can focus on the first weak area and confirm improvement with new representative problems.
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
