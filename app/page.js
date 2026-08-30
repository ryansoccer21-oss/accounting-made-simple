import Link from "next/link";
import CtaBand from "../components/cta-band";
import FaqPreview from "../components/faq-preview";
import HomeHero from "../components/home-hero";
import PricingBooking from "../components/pricing-booking";
import SectionHeading from "../components/section-heading";
import ServiceGrid from "../components/service-grid";
import { amsMethod, excelWorkbooks, landingPages, services, trustPoints } from "../lib/site-data";

export const metadata = {
  title: "Accounting & Excel Tutoring",
  description:
    "Accounting and accounting-focused Excel tutoring for college students, adult learners, and career changers. Learn concepts, solve problems independently, and connect classwork to practical accounting skills."
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="site-shell grid gap-4 md:grid-cols-3">
        {trustPoints.map((point, index) => (
          <article key={point.title} className="surface-card bg-white/95 p-6">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--warm)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">{point.title}</h2>
            <p className="leading-7 text-slate-600">{point.copy}</p>
          </article>
        ))}
      </section>

      <section className="site-shell section-gap">
        <SectionHeading
          eyebrow="Focused Support"
          title="Accounting first. Excel built around accounting."
          copy="AMS is intentionally focused on accounting learning and practical spreadsheet skills instead of trying to cover every business or personal-finance topic."
        />
        <ServiceGrid items={services} />
      </section>

      <section className="site-shell pb-16">
        <div className="surface-card p-8 md:p-10">
          <SectionHeading
            eyebrow="The AMS Method"
            title="A repeatable way to move from confusion to independent problem solving"
            copy="Every stage has a purpose, so tutoring is more than watching someone else solve the problem."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {amsMethod.map((step) => (
              <article key={step.title} className="rounded-[28px] border border-[var(--line)] bg-[color:var(--surface)] p-6">
                <p className="eyebrow">{step.label}</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 font-semibold text-[color:var(--brand)]">{step.short}</p>
                <p className="mt-4 leading-7 text-slate-600">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell pb-16">
        <SectionHeading
          eyebrow="Accounting Excel"
          title="Learn Excel through realistic accounting tasks"
          copy="Instead of isolated formulas, practice spreadsheet skills through fictional accounting examples that show how the tools are actually used."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {excelWorkbooks.map((item) => (
            <div key={item} className="surface-card p-6">
              <p className="eyebrow">Practice Workbook</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{item}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8 flex">
          <Link className="cta-secondary" href="/excel-tutor">Explore Excel for Accounting</Link>
        </div>
      </section>

      <section className="site-shell pb-16">
        <SectionHeading
          eyebrow="Explore"
          title="Find the tutoring path that fits what you need"
          copy="Start with accounting, Excel, or a local tutoring page if location matters."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {landingPages.map((page) => (
            <Link key={page.href} className="surface-card p-6 transition hover:-translate-y-1" href={page.href}>
              <p className="eyebrow mb-3">{page.label}</p>
              <h2 className="text-2xl font-semibold text-slate-900">{page.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{page.copy}</p>
              <span className="mt-6 inline-flex text-sm font-bold text-[color:var(--brand)]">Open page →</span>
            </Link>
          ))}
        </div>
      </section>

      <PricingBooking />

      <section className="site-shell pb-16">
        <FaqPreview />
      </section>

      <CtaBand />
    </>
  );
}
