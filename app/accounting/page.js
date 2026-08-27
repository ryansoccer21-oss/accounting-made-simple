import CtaBand from "../../components/cta-band";
import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";
import SectionHeading from "../../components/section-heading";
import { accountingSubjects, amsMethod, contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "Accounting Tutoring",
  description:
    "One-on-one tutoring for Financial, Managerial, Intermediate, Auditing, and Advanced Accounting with a practical class-to-career approach."
};

export default function AccountingPage() {
  return (
    <>
      <PageHero
        eyebrow="Accounting Tutoring"
        title="Understand accounting beyond the answer key"
        copy="Work through the reasoning behind accounting concepts, solve representative problems, and connect what you learn to financial statements, Excel, and practical accounting situations when useful."
        bullets={["Financial Accounting", "Managerial Accounting", "Intermediate Accounting", "Auditing", "Advanced Accounting"]}
      />

      <section className="site-shell section-gap">
        <SectionHeading
          eyebrow="Subjects"
          title="Focused support across core accounting courses"
          copy="Sessions can stay tightly focused on one chapter or build a broader plan around the topics you need to strengthen over the semester."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {accountingSubjects.map((subject) => (
            <article key={subject.title} className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-slate-900">{subject.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{subject.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16">
        <div className="surface-card p-8 md:p-10">
          <SectionHeading
            eyebrow="How Tutoring Works"
            title="The AMS Method"
            copy="Understand → Work → Apply → Master gives each session a repeatable structure without forcing every topic into the same exact format."
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

      <section className="site-shell pb-12">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8 md:p-10">
          <p className="eyebrow">Free First Session</p>
          <h2 className="section-title max-w-[15ch] text-4xl md:text-5xl">Start with an Accounting Skill Check</h2>
          <p className="section-copy mt-5 max-w-3xl">
            Use the free 30 minutes to identify your current course, chapter, exam timeline, repeated mistakes, strengths, and the best topic to tackle first.
          </p>
          <div className="mt-8 flex">
            <a className="cta-primary" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">
              Book a Free 30-Minute Session
            </a>
          </div>
        </article>
      </section>

      <PricingBooking />
      <CtaBand />
    </>
  );
}
