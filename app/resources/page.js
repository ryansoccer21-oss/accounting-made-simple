import Link from "next/link";
import PageHero from "../../components/page-hero";
import { resourceLinks } from "../../lib/site-data";

export const metadata = {
  title: "Accounting & Excel Resources",
  description:
    "Free Accounting Made Simple resources for accounting review, Excel shortcuts, practice quizzes, and performance-based skill checks."
};

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
          <p className="eyebrow">Featured Diagnostic</p>
          <h2 className="section-title">Test your debit-and-credit reasoning</h2>
          <p className="section-copy mt-4">
            The Debits & Credits Skill Check uses 12 original questions to score normal balances, routine transaction entries, and adjusting entries, then recommends a first review priority.
          </p>
        </div>
        <Link className="surface-card block bg-white/95 p-7 transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]" href="/debits-credits-skill-check">
          <p className="eyebrow">Free Skill Check</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Debits & Credits Skill Check</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Answer 12 accounting questions without notes, get category-level results, review explanations, and identify what to work on first.
          </p>
          <span className="mt-6 inline-flex text-sm font-bold text-[color:var(--brand)]">Start diagnostic →</span>
        </Link>
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
