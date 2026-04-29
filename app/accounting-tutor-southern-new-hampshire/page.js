import CtaBand from "../../components/cta-band";
import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";
import SectionHeading from "../../components/section-heading";
import { contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "Accounting Tutor in Southern New Hampshire",
  description:
    "Beginner-friendly accounting tutoring in Southern New Hampshire with support for homework, exam review, Excel, and study help."
};

const nhBullets = [
  "Accounting tutoring in Southern New Hampshire",
  "Beginner-friendly support for classwork and exam review",
  "Online, in person, or both depending on availability"
];

const nhPoints = [
  {
    title: "Homework help",
    copy:
      "Work through assignments with clearer explanations and more structure, especially when the material feels confusing."
  },
  {
    title: "Exam review",
    copy:
      "Use sessions to slow down, review key topics, and get more comfortable before quizzes and tests."
  },
  {
    title: "Excel and study support",
    copy:
      "Get extra help with spreadsheet work, staying organized, and keeping up with class demands."
  }
];

export default function SouthernNewHampshireAccountingTutorPage() {
  return (
    <>
      <PageHero
        eyebrow="Southern New Hampshire"
        title="Accounting tutoring in Southern New Hampshire"
        copy="If you are looking for an accounting tutor in Southern New Hampshire, support is available in a simple, organized, and beginner-friendly way."
        bullets={nhBullets}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <article className="surface-card bg-[radial-gradient(circle_at_top_right,rgba(177,109,59,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,253,249,1))] p-8 md:p-10">
            <p className="eyebrow">Local Support</p>
            <h1 className="section-title max-w-[14ch] text-4xl md:text-5xl">
              Accounting help that feels less stressful and easier to follow
            </h1>
            <p className="section-copy mt-5 max-w-3xl">
              Support is a good fit for students, beginners, and young adults in Southern New
              Hampshire who want extra help with accounting, Excel, study support, or exam review.
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
                href={`mailto:${contactInfo.email}?subject=Southern%20New%20Hampshire%20Accounting%20Tutoring`}
              >
                Contact Ryan
              </a>
            </div>
          </article>

          <aside className="surface-card bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,241,0.5))] p-8">
            <p className="eyebrow">Why People Reach Out</p>
            <h2 className="text-2xl font-semibold text-slate-900">Common reasons to book tutoring</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Most people are not looking for something flashy. They usually just want someone who
              can explain the material clearly and help them stop falling behind.
            </p>
          </aside>
        </div>
      </section>

      <section className="site-shell">
        <SectionHeading
          eyebrow="What Support Can Look Like"
          title="Simple accounting tutoring for Southern New Hampshire students"
          copy="Support can stay focused on the class, assignment, or test that matters most right now."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {nhPoints.map((point) => (
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
