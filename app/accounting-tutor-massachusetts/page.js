import CtaBand from "../../components/cta-band";
import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";
import SectionHeading from "../../components/section-heading";
import { accountingSubjects, contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "Accounting Tutor in Massachusetts",
  description:
    "Specialized accounting and accounting-focused Excel tutoring for college students in Massachusetts, with online and local options depending on availability."
};

export default function MassachusettsAccountingTutorPage() {
  return (
    <>
      <PageHero
        eyebrow="Massachusetts"
        title="Accounting tutoring in Massachusetts"
        copy="One-on-one accounting support for college students who want clearer explanations, stronger problem-solving skills, and practical Excel connections when they add value."
        bullets={["Financial through Advanced Accounting", "Accounting-focused Excel", "Online or local depending on availability"]}
      />

      <section className="site-shell section-gap">
        <SectionHeading
          eyebrow="Subjects"
          title="Focused tutoring across core accounting courses"
          copy="Use sessions for one difficult topic, an upcoming exam, or ongoing support through the semester."
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

      <section className="site-shell pb-12">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8 md:p-10">
          <p className="eyebrow">From Classroom to Career</p>
          <h2 className="section-title max-w-[15ch] text-4xl md:text-5xl">Build understanding that carries into practical accounting work</h2>
          <p className="section-copy mt-5 max-w-3xl">
            When useful, connect the topic to financial statements, Excel schedules, reconciliations, or other realistic accounting situations so the material has practical context.
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
