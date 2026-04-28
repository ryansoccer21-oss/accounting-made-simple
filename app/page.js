import Link from "next/link";
import CtaBand from "../components/cta-band";
import FaqPreview from "../components/faq-preview";
import HomeHero from "../components/home-hero";
import PricingBooking from "../components/pricing-booking";
import SectionHeading from "../components/section-heading";
import ServiceGrid from "../components/service-grid";
import Testimonials from "../components/testimonials";
import { approachCards, heroBadges, services, trustPoints } from "../lib/site-data";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="site-shell grid gap-4 md:grid-cols-3">
        {trustPoints.map((point, index) => (
          <article
            key={point.title}
            className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,236,0.92))] p-6"
          >
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
          eyebrow="Services"
          title="Practical support that is easy to scan and easy to understand"
          copy="Support is available for school, everyday money skills, and the topics that tend to feel the most confusing."
        />
        <ServiceGrid items={services.slice(0, 4)} />
        <div className="mt-8 flex">
          <Link className="cta-secondary" href="/services">
            See All Services
          </Link>
        </div>
      </section>

      <PricingBooking />

      <section className="site-shell grid gap-4 pb-16 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        <article className="surface-card bg-[radial-gradient(circle_at_top_right,rgba(177,109,59,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,253,249,1))] p-8">
          <p className="eyebrow">What You Can Expect</p>
          <h2 className="section-title max-w-[13ch] text-4xl md:text-5xl">
            Support that feels clear, patient, and easier to keep up with
          </h2>
          <p className="section-copy mt-5 max-w-2xl">
            Sessions are designed to help you understand the material, ask questions comfortably,
            and move forward without feeling rushed or overwhelmed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-[color:var(--brand)]"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {approachCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-[var(--line)] bg-white/80 p-5">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-xs font-bold tracking-[0.18em] text-[color:var(--brand)]">
                  {card.label}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{card.copy}</p>
              </div>
            ))}
          </div>
        </article>

        <FaqPreview />
      </section>

      <Testimonials />

      <CtaBand />
    </>
  );
}
