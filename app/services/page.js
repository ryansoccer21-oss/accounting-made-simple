import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";
import ServiceGrid from "../../components/service-grid";
import Link from "next/link";
import { serviceTopics, services } from "../../lib/site-data";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Support for school, money basics, and everyday learning"
        copy="Each service is designed to be clear, practical, and easier to understand."
        bullets={serviceTopics}
      />

      <section className="site-shell section-gap">
        <ServiceGrid items={services} />
      </section>

      <section className="site-shell pb-12">
        <article className="surface-card p-8 md:p-10">
          <p className="eyebrow">More Ways To Find Help</p>
          <h2 className="section-title max-w-[15ch] text-4xl md:text-5xl">
            Dedicated pages for local and subject-specific tutoring
          </h2>
          <p className="section-copy mt-5 max-w-3xl">
            If you are looking for something more specific, these pages make it easier to find the
            kind of support that fits what you need.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link
              className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,236,0.92))] p-6 transition hover:-translate-y-1"
              href="/accounting-tutor-southern-new-hampshire"
            >
              <p className="eyebrow mb-2">Region</p>
              <h3 className="text-xl font-semibold text-slate-900">Accounting Tutor in Southern New Hampshire</h3>
            </Link>
            <Link
              className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,236,0.92))] p-6 transition hover:-translate-y-1"
              href="/accounting-tutor-massachusetts"
            >
              <p className="eyebrow mb-2">Region</p>
              <h3 className="text-xl font-semibold text-slate-900">Accounting Tutor in Massachusetts</h3>
            </Link>
            <Link
              className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,236,0.92))] p-6 transition hover:-translate-y-1"
              href="/excel-tutor"
            >
              <p className="eyebrow mb-2">Subject</p>
              <h3 className="text-xl font-semibold text-slate-900">Excel Tutor</h3>
            </Link>
            <Link
              className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,236,0.92))] p-6 transition hover:-translate-y-1"
              href="/quickbooks-tutor"
            >
              <p className="eyebrow mb-2">Subject</p>
              <h3 className="text-xl font-semibold text-slate-900">QuickBooks Tutor</h3>
            </Link>
          </div>
        </article>
      </section>

      <PricingBooking />

      <section className="site-shell pb-12">
        <article className="surface-card bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.99),rgba(223,234,241,0.55))] p-8 md:p-10">
          <p className="eyebrow">Local College Tutoring</p>
          <h2 className="section-title max-w-[15ch] text-4xl md:text-5xl">
            Accounting support for local college and community college students
          </h2>
          <p className="section-copy mt-5 max-w-3xl">
            If you want a page built specifically for college students in Southern New Hampshire
            and Massachusetts, there is now a dedicated local tutoring page with school-specific
            details, pricing, and booking information.
          </p>
          <div className="mt-8 flex">
            <Link className="cta-primary" href="/local-college-accounting-tutoring">
              View Local College Tutoring Page
            </Link>
          </div>
        </article>
      </section>

      <section className="site-shell pb-16">
        <article className="surface-card overflow-hidden md:grid md:grid-cols-[minmax(0,1fr)_300px]">
          <div className="p-8">
            <p className="eyebrow">Who This Is For</p>
            <h2 className="section-title text-4xl md:text-5xl">Students, beginners, and young adults who want less confusion</h2>
            <p className="section-copy mt-5 max-w-3xl">
              This support is built for people who want patient guidance, simple
              explanations, and practice that helps things finally click.
            </p>
          </div>
          <div className="min-h-64 bg-[radial-gradient(circle_at_28%_30%,rgba(255,255,255,0.78),transparent_18%),linear-gradient(135deg,rgba(95,124,89,0.95),rgba(235,243,232,0.95))]" />
        </article>
      </section>
    </>
  );
}
