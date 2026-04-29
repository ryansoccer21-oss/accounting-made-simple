import CtaBand from "../../components/cta-band";
import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";
import SectionHeading from "../../components/section-heading";
import { contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "Accounting Tutor in Massachusetts",
  description:
    "Beginner-friendly accounting tutoring in Massachusetts with support for classwork, exam review, Excel help, and practical study support."
};

const maBullets = [
  "Accounting tutoring in Massachusetts",
  "Support for students, beginners, and young adults",
  "Clear help with classwork, exam review, and Excel"
];

const maPoints = [
  {
    title: "Class support",
    copy:
      "Get help with the accounting topics that feel the hardest to follow, with explanations that are simpler and more direct."
  },
  {
    title: "Exam prep",
    copy:
      "Use tutoring sessions to review key ideas, go over practice problems, and feel more ready before an exam."
  },
  {
    title: "Practical learning",
    copy:
      "Support can also include Excel help, study organization, and money basics when those skills connect to what you need."
  }
];

export default function MassachusettsAccountingTutorPage() {
  return (
    <>
      <PageHero
        eyebrow="Massachusetts"
        title="Accounting tutoring in Massachusetts"
        copy="If you are looking for an accounting tutor in Massachusetts, support is available for students and beginners who want clearer explanations and more confidence with the material."
        bullets={maBullets}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <article className="surface-card bg-[radial-gradient(circle_at_top_right,rgba(177,109,59,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,253,249,1))] p-8 md:p-10">
            <p className="eyebrow">Massachusetts Tutoring</p>
            <h1 className="section-title max-w-[14ch] text-4xl md:text-5xl">
              Friendly accounting help for students who want things explained more clearly
            </h1>
            <p className="section-copy mt-5 max-w-3xl">
              This support is built for people who want less stress, more structure, and a better
              understanding of what they are actually doing in accounting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="cta-primary"
                href={contactInfo.bookingUrl}
                rel="noreferrer"
                target="_blank"
              >
                Book Your Free Session
              </a>
              <a
                className="cta-secondary"
                href={`mailto:${contactInfo.email}?subject=Massachusetts%20Accounting%20Tutoring`}
              >
                Contact Ryan
              </a>
            </div>
          </article>

          <aside className="surface-card bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,241,0.5))] p-8">
            <p className="eyebrow">Who This Fits</p>
            <h2 className="text-2xl font-semibold text-slate-900">A strong fit for</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--brand)]" />
                <span>College students in accounting classes</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--brand)]" />
                <span>High school students who want extra support</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--brand)]" />
                <span>Beginners who want more patient explanations</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="site-shell">
        <SectionHeading
          eyebrow="Support Areas"
          title="What accounting tutoring in Massachusetts can include"
          copy="The goal is to keep things practical and focused on the work or class in front of you."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {maPoints.map((point) => (
            <article
              key={point.title}
              className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,236,0.92))] p-6"
            >
              <h2 className="text-2xl font-semibold text-slate-900">{point.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{point.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <PricingBooking />

      <CtaBand />
    </>
  );
}
