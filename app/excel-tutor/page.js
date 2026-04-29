import CtaBand from "../../components/cta-band";
import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";
import SectionHeading from "../../components/section-heading";
import { contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "Excel Tutor",
  description:
    "Beginner-friendly Excel tutoring with support for spreadsheets, formulas, formatting, charts, and school or work projects."
};

const excelBullets = [
  "Beginner-friendly Excel help",
  "Support for formulas, formatting, and spreadsheets",
  "Good for students, young adults, and practical everyday use"
];

const excelTopics = [
  {
    title: "Excel basics",
    copy:
      "Get comfortable with rows, columns, tabs, simple organization, and building cleaner spreadsheets from the start."
  },
  {
    title: "Formulas and functions",
    copy:
      "Work through the formulas that show up most often and learn how to use them without guessing."
  },
  {
    title: "Formatting and cleanup",
    copy:
      "Learn how to make spreadsheets easier to read with better formatting, labels, spacing, and structure."
  },
  {
    title: "Charts and practical use",
    copy:
      "Get help turning data into something more useful for class, work, budgeting, or personal organization."
  }
];

const excelUseCases = [
  "School assignments and spreadsheet projects",
  "Basic spreadsheet help for internships or work",
  "Budget tracking and personal organization",
  "Learning Excel without feeling overwhelmed"
];

export default function ExcelTutorPage() {
  return (
    <>
      <PageHero
        eyebrow="Excel Tutor"
        title="Excel help that feels simple, clear, and practical"
        copy="If you want an Excel tutor who explains things in a calmer and easier-to-follow way, support is available for school, work, budgeting, and everyday spreadsheet use."
        bullets={excelBullets}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <article className="surface-card bg-[radial-gradient(circle_at_top_right,rgba(177,109,59,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,253,249,1))] p-8 md:p-10">
            <p className="eyebrow">Excel Support</p>
            <h1 className="section-title max-w-[14ch] text-4xl md:text-5xl">
              A good fit if you want less confusion and more confidence with spreadsheets
            </h1>
            <p className="section-copy mt-5 max-w-3xl">
              Excel tutoring can stay focused on exactly what you need help with, whether that is
              learning the basics, fixing a spreadsheet, understanding formulas, or getting more
              comfortable using Excel on your own.
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
                href={`mailto:${contactInfo.email}?subject=Excel%20Tutoring`}
              >
                Ask About Excel Help
              </a>
            </div>
          </article>

          <aside className="surface-card bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,241,0.5))] p-8">
            <p className="eyebrow">Common Reasons</p>
            <h2 className="text-2xl font-semibold text-slate-900">People usually reach out for help with</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              {excelUseCases.map((item) => (
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
          eyebrow="What You Can Work On"
          title="Excel tutoring that stays focused on the real task in front of you"
          copy="The goal is to make Excel feel more usable, not more intimidating."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {excelTopics.map((topic) => (
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
