import FaqList from "../../components/faq-list";
import PageHero from "../../components/page-hero";
import { faqItems } from "../../lib/site-data";

export const metadata = {
  title: "FAQ"
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers to common questions"
        copy="A simple overview of who this tutoring is for and how to get started."
        bullets={["Students and beginners", "Accounting, Excel, budgeting", "Simple next steps"]}
      />

      <section className="site-shell section-gap">
        <FaqList items={faqItems} />
      </section>
    </>
  );
}
