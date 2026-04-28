import PageHero from "../../components/page-hero";
import { resourceLinks } from "../../lib/site-data";

export const metadata = {
  title: "Resources"
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Helpful guides you can open anytime"
        copy="Browse simple PDF resources for Excel, accounting, and personal finance."
        bullets={["Open in one click", "Simple reference guides", "Made for students and beginners"]}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-2">
          {resourceLinks.map((resource) => (
            <a
              key={resource.href}
              className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(248,244,236,0.94))] p-7 transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
              href={resource.href}
              rel="noreferrer"
              target="_blank"
            >
              <p className="eyebrow">PDF Resource</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">{resource.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{resource.copy}</p>
              <span className="mt-6 inline-flex text-sm font-bold text-[color:var(--brand)]">
                Open PDF
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
