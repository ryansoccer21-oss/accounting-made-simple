import Link from "next/link";
import CtaBand from "../../components/cta-band";
import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";
import SectionHeading from "../../components/section-heading";
import { contactInfo, excelPathway, excelWorkbooks } from "../../lib/site-data";

export const metadata = {
  title: "Excel for Accounting",
  description:
    "Accounting-focused Excel tutoring for formulas, lookups, PivotTables, reconciliations, schedules, variance analysis, cleanup, and practical accounting workflows."
};

const excelSkills = [
  "SUM, SUMIF, and SUMIFS",
  "COUNTIF and COUNTIFS",
  "IF and logical formulas",
  "XLOOKUP and lookup logic",
  "Text and date functions",
  "PivotTables",
  "Conditional formatting",
  "Tables, sorting, and filtering",
  "Cell references and clean workbook structure",
  "Keyboard shortcuts and efficient workflows"
];

export default function ExcelTutorPage() {
  return (
    <>
      <PageHero
        eyebrow="Excel for Accounting"
        title="Learn Excel through the work accountants actually do"
        copy="Build practical spreadsheet skills through fictional accounting examples instead of isolated formulas whenever the accounting context makes the skill easier to understand and remember."
        bullets={["Accounting-specific examples", "Formulas and functions", "Practical schedules and reconciliations"]}
      />

      <section className="site-shell section-gap">
        <SectionHeading
          eyebrow="Learning Pathway"
          title="Build from spreadsheet foundations to practical accounting application"
          copy="The pathway can be used as a structured progression or as a menu of skills based on what you need for class, an internship, or early accounting work."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {excelPathway.map((level) => (
            <article key={level.title} className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-slate-900">{level.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{level.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16">
        <SectionHeading
          eyebrow="Accounting Workbooks"
          title="Practice Excel through realistic accounting tasks"
          copy="Examples use fictional or synthetic company data so the focus stays on learning without using confidential employer information."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {excelWorkbooks.map((item) => (
            <article key={item} className="surface-card p-6">
              <p className="eyebrow">Practice Example</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{item}</h3>
            </article>
          ))}
        </div>
        <div className="mt-8 flex">
          <Link className="cta-primary" href="/excel-practice">Open the First 3 Excel Practice Exercises</Link>
        </div>
      </section>

      <section className="site-shell pb-12">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <article className="surface-card p-8">
            <p className="eyebrow">Skills You Can Build</p>
            <h2 className="section-title text-4xl md:text-5xl">Excel tools that show up repeatedly in accounting work</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {excelSkills.map((skill) => (
                <div key={skill} className="rounded-3xl border border-[var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm font-medium text-slate-700">
                  {skill}
                </div>
              ))}
            </div>
          </article>

          <aside className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8">
            <p className="eyebrow">Get Started</p>
            <h2 className="text-3xl font-semibold text-slate-900">Bring an Excel skill you want to strengthen</h2>
            <p className="mt-4 leading-8 text-slate-600">
              We can start with the spreadsheet skills you need now, then connect them to accounting examples that make the technique more useful and easier to retain.
            </p>
            <a className="cta-primary mt-6 inline-flex" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">
              Book a Free 30-Minute Session
            </a>
          </aside>
        </div>
      </section>

      <PricingBooking />
      <CtaBand />
    </>
  );
}
