import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";

export const metadata = {
  title: "Pricing",
  description:
    "Accounting Made Simple tutoring pricing: free first 30-minute Accounting Skill Check, $20 for 60 minutes, and $35 for 90 minutes."
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent tutoring pricing"
        copy="Start with a free 30-minute Accounting Skill Check, then choose a 60- or 90-minute one-on-one session based on what you need."
        bullets={["Free first 30 minutes", "$20 — 60 minutes", "$35 — 90 minutes"]}
      />
      <PricingBooking />
    </>
  );
}
