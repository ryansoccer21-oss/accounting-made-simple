import Link from "next/link";
import PageHero from "../../components/page-hero";
import { resourceLinks } from "../../lib/site-data";

export const metadata = {
  title: "Accounting & Excel Resources",
  description:
    "Free Accounting Made Simple resources for accounting review, Excel shortcuts, practice quizzes, and performance-based skill checks."
};

const diagnostics = [
  {
    title: "Debits & Credits Skill Check",
    href: "/debits-credits-skill-check",
    copy: "Answer 12 accounting questions without notes, get category-level results, review explanations, and identify what to work on first."
  },
  {
    title: "Adjusting Entries Skill Check",
    href: "/adjusting-entries-skill-check",
    copy: "Test accruals, deferrals, depreciation, and financial-statement effects with 12 original performance-based questions."
  },
  {
    title: "Financial Accounting Readiness",
    href: "/financial-accounting-readiness",
    copy: "Test your overall Financial Accounting foundation with 16 questions across transactions, reporting, assets, liabilities, equity, and cash flows."
  }
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Focused accounting and Excel resources"
        copy="Use free diagnostics, guides, and quizzes for quick review while the AMS resource library continues to expand."
        bullets={["Performance-based accounting checks", "Accounting review", "Excel support"]}
      />

      <section className="site-shell section-gap">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Accounting Diagnostics</p>
          <h2 className="section-title">Test the skill instead of only rating your confidence</h2>
          <p className="section-copy mt-4">
            These original diagnostics score actual answers by topic, explain missed questions, and give you a clear first review priority.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {diagnostics.map((diagnostic) => (
            <Link key={diagnostic.href} className="surface-card block bg-white/95 p-7 transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]" href={diagnostic.href}>
              <p className="eyebrow">Free Skill Check</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">{diagnostic.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{diagnostic.copy}</p>
              <span className="mt-6 inline-flex text-sm font-bold text-[color:var(--brand)]">Start diagnostic →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resourceLinks.map((resource) => (
            <a key={resource.href} className="surface-card bg-white/95 p-7 transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]" href={resource.href} rel="noreferrer" target="_blank">
              <p className="eyebrow">Free Resource</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">{resource.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{resource.copy}</p>
              <span className="mt-6 inline-flex text-sm font-bold text-[color:var(--brand)]">Open resource →</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
