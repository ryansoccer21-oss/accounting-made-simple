import CtaBand from "../../components/cta-band";
import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";
import SectionHeading from "../../components/section-heading";
import { accountingSubjects, contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "College Accounting Tutoring in Massachusetts & Southern New Hampshire",
  description:
    "Independent accounting and accounting-focused Excel tutoring for college and community college students in Massachusetts and Southern New Hampshire."
};

const schools = [
  "Southern New Hampshire University",
  "University of Massachusetts Lowell",
  "Middlesex Community College",
  "Northern Essex Community College",
  "Other colleges and community colleges in Massachusetts and Southern New Hampshire"
];

export default function LocalCollegeAccountingTutoringPage() {
  return (
    <>
      <PageHero
        eyebrow="College Accounting Tutoring"
        title="One-on-one accounting support for local college students"
        copy="Independent tutoring for college and community college students in Massachusetts and Southern New Hampshire who want stronger accounting understanding and practical Excel skills."
        bullets={["Course-focused tutoring", "Exam and problem-solving support", "Accounting-focused Excel"]}
      />

      <section className="site-shell section-gap grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <article className="surface-card p-8 md:p-10">
          <p className="eyebrow">Local Students</p>
          <h2 className="section-title max-w-[16ch] text-4xl md:text-5xl">Bring the course you are taking and the topics that are not clicking yet</h2>
          <p className="section-copy mt-5 max-w-3xl">
            Sessions can focus on the exact chapter, exam, assignment concept, or Excel skill you need to understand while keeping the goal on independent problem solving rather than completing graded work for you.
          </p>
          <div className="mt-8 flex">
            <a className="cta-primary" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">
              Book a Free 30-Minute Session
            </a>
          </div>
        </article>

        <aside className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8">
          <p className="eyebrow">Local Schools</p>
          <h2 className="text-2xl font-semibold text-slate-900">Students may come from</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            {schools.map((school) => (
              <li key={school} className="flex gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--brand)]" />
                <span>{school}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-500">
            Accounting Made Simple is an independent tutoring service and is not affiliated with or sponsored by these schools.
          </p>
        </aside>
      </section>

      <section className="site-shell pb-12">
        <SectionHeading
          eyebrow="Accounting Subjects"
          title="Support from foundational through advanced coursework"
          copy="The exact scope depends on the course and topic you bring to the session."
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

      <PricingBooking />
      <CtaBand />
    </>
  );
}
