import PageHero from "../../components/page-hero";
import { resourceLinks } from "../../lib/site-data";

export const metadata = {
  title: "Accounting & Excel Resources",
  description:
    "Free Accounting Made Simple resources for accounting review, Excel shortcuts, and practice quizzes."
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Focused accounting and Excel resources"
        copy="Use these free guides and quizzes for quick review while the AMS diagnostic library continues to expand."
        bullets={["Accounting review", "Excel support", "Free practice quizzes"]}
      />

      <section className="site-shell section-gap">
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
