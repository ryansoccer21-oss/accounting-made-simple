import CtaBand from "../../components/cta-band";
import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";
import SectionHeading from "../../components/section-heading";
import { contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "QuickBooks Tutor",
  description:
    "Beginner-friendly QuickBooks tutoring and support for getting comfortable with the basics, organization, and common workflows."
};

const quickbooksBullets = [
  "Beginner-friendly QuickBooks support",
  "Help with common tasks and everyday organization",
  "Independent tutoring service"
];

const quickbooksTopics = [
  {
    title: "Getting started",
    copy:
      "If QuickBooks feels unfamiliar, sessions can help you get more comfortable with the layout, basic setup, and common starting points."
  },
  {
    title: "Everyday tasks",
    copy:
      "Work through the basic tasks that come up most often so the software feels more manageable and less frustrating."
  },
  {
    title: "Organization",
    copy:
      "Get help keeping things cleaner and easier to track so your workflow makes more sense from one session to the next."
  },
  {
    title: "Learning at your pace",
    copy:
      "Support is designed to be patient and practical, especially if you are newer to bookkeeping tools and accounting software."
  }
];

const quickbooksNotes = [
  "Good for beginners who want a slower walkthrough",
  "Useful if you feel stuck navigating the software",
  "A practical option for small-business basics or school-related learning",
  "Independent support, not affiliated with Intuit or QuickBooks"
];

export default function QuickBooksTutorPage() {
  return (
    <>
      <PageHero
        eyebrow="QuickBooks Tutor"
        title="QuickBooks help that feels more approachable"
        copy="If you want a QuickBooks tutor who can slow things down and help you work through the basics more clearly, support is available in a patient and beginner-friendly way."
        bullets={quickbooksBullets}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <article className="surface-card bg-[radial-gradient(circle_at_top_right,rgba(177,109,59,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,253,249,1))] p-8 md:p-10">
            <p className="eyebrow">Independent Help</p>
            <h1 className="section-title max-w-[14ch] text-4xl md:text-5xl">
              A simple place to start if QuickBooks feels confusing
            </h1>
            <p className="section-copy mt-5 max-w-3xl">
              QuickBooks support can focus on helping you understand what you are looking at,
              what to do next, and how to handle common tasks with less stress and less guesswork.
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
                href={`mailto:${contactInfo.email}?subject=QuickBooks%20Tutoring`}
              >
                Ask About QuickBooks Help
              </a>
            </div>
          </article>

          <aside className="surface-card bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,241,0.5))] p-8">
            <p className="eyebrow">Important Note</p>
            <h2 className="text-2xl font-semibold text-slate-900">Independent tutoring service</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Accounting Made Simple is an independent tutoring service and is not affiliated with,
              sponsored by, or partnered with Intuit or QuickBooks.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {quickbooksNotes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="site-shell">
        <SectionHeading
          eyebrow="Common Support Areas"
          title="QuickBooks help that stays practical"
          copy="Sessions focus on helping you move through the software more comfortably and understand the basics more clearly."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickbooksTopics.map((topic) => (
            <article
              key={topic.title}
              className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,236,0.92))] p-6"
            >
              <h2 className="text-2xl font-semibold text-slate-900">{topic.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{topic.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <PricingBooking />

      <CtaBand />
    </>
  );
}
