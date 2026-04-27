import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";
import ServiceGrid from "../../components/service-grid";
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

      <PricingBooking />

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
