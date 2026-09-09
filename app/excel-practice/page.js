import Link from "next/link";
import PageHero from "../../components/page-hero";
import { contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "Accounting Excel Practice Workbooks",
  description:
    "Download fictional Excel workbooks for bank reconciliation, fixed assets, and budget vs. actual accounting practice."
};

const exercises = [
  {
    number: "01",
    title: "Bank Reconciliation",
    level: "Foundation → Working Skills",
    download: "/resources/AMS_Bank_Reconciliation_Practice.xlsx",
    context:
      "Reconcile a fictional month-end cash balance by separating bank-side timing items from book-side adjustments and confirming the adjusted balances agree.",
    tasks: [
      "Review the Instructions and Raw Data tabs before entering formulas.",
      "Complete the reconciliation in the Your Work tab.",
      "Identify the book-side items that require journal entries.",
      "Use the Error Check tab to test whether the adjusted balances agree.",
      "Open the Solution tab only after completing your own work."
    ],
    skills: ["Reconciliation logic", "SUM / arithmetic", "Currency formatting", "Error checking"],
    check: "Target adjusted bank balance and adjusted book balance: $26,525."
  },
  {
    number: "02",
    title: "Fixed Asset Schedule",
    level: "Working Skills → Accounting Application",
    download: "/resources/AMS_Fixed_Asset_Schedule_Practice.xlsx",
    context:
      "Build a straight-line depreciation schedule for fictional assets using a stated monthly depreciation convention and a fixed as-of date.",
    tasks: [
      "Review the depreciation convention in the Instructions tab.",
      "Calculate depreciable base, annual depreciation, and monthly depreciation.",
      "Calculate accumulated depreciation through the stated as-of date.",
      "Calculate net book value and verify your schedule with the Error Check tab.",
      "Compare your completed schedule with the Solution tab."
    ],
    skills: ["Structured schedules", "Date logic", "Straight-line depreciation", "Formula auditing"],
    check: "Target total annual straight-line depreciation: approximately $16,580.95."
  },
  {
    number: "03",
    title: "Budget vs. Actual Analysis",
    level: "Working Skills → Accounting Application",
    download: "/resources/AMS_Budget_vs_Actual_Practice.xlsx",
    context:
      "Analyze fictional departmental expense results, calculate variances, classify performance, and summarize what drove the overall result.",
    tasks: [
      "Calculate dollar variance and variance percentage for each account.",
      "Classify each expense line as Favorable or Unfavorable.",
      "Use the workbook structure to summarize results by department.",
      "Use the Error Check tab to test your totals and classifications.",
      "Review the Solution tab after completing your own analysis."
    ],
    skills: ["IF logic", "Variance formulas", "Percent analysis", "Accounting interpretation"],
    check: "Target totals: Budget $44,300; Actual $44,560; $260 unfavorable overall."
  }
];

export default function ExcelPracticePage() {
  return (
    <>
      <PageHero
        eyebrow="Accounting Excel Practice"
        title="Build the workbook yourself, then check your accounting logic"
        copy="Each download is a real Excel workbook built around fictional accounting data. Work through the instructions, complete the formulas and accounting analysis, use the error checks, and reveal the solution only after you finish."
        bullets={["Fictional data only", "Real .xlsx workbooks", "Built-in error checks and solutions"]}
      />

      <section className="site-shell section-gap space-y-6">
        {exercises.map((exercise) => (
          <article key={exercise.title} className="surface-card overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)]">
              <div className="p-7 md:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[color:var(--brand)] px-3 py-1 text-xs font-bold tracking-[0.15em] text-white">{exercise.number}</span>
                  <span className="text-sm font-semibold text-slate-500">{exercise.level}</span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">{exercise.title}</h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-600">{exercise.context}</p>

                <h3 className="mt-7 text-lg font-semibold text-slate-900">Your tasks</h3>
                <ol className="mt-3 space-y-3 text-slate-600">
                  {exercise.tasks.map((task, index) => (
                    <li key={task} className="flex gap-3">
                      <span className="font-bold text-[color:var(--brand)]">{index + 1}.</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-7 flex flex-wrap gap-2">
                  {exercise.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-[var(--line)] bg-[color:var(--surface-soft)] px-3 py-2 text-xs font-semibold text-slate-600">{skill}</span>
                  ))}
                </div>
              </div>

              <aside className="border-t border-[var(--line)] bg-[color:var(--surface-soft)] p-7 lg:border-l lg:border-t-0 md:p-9">
                <p className="eyebrow">Practice Workbook</p>
                <a className="cta-primary w-full" href={exercise.download} download>
                  Download Excel Workbook
                </a>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Save a working copy before you begin. The workbook includes Instructions, Raw Data, Your Work, Error Check, and Solution tabs.
                </p>

                <details className="mt-7 rounded-3xl border border-[var(--line)] bg-white p-5">
                  <summary className="cursor-pointer font-semibold text-[color:var(--brand)]">Reveal answer target</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{exercise.check}</p>
                </details>
              </aside>
            </div>
          </article>
        ))}
      </section>

      <section className="site-shell pb-16">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:items-center">
            <div>
              <p className="eyebrow">Use Them in Tutoring</p>
              <h2 className="section-title max-w-[16ch]">Bring your workbook and explain how you built it</h2>
              <p className="section-copy mt-5 max-w-3xl">
                The goal is not only to reach the right total. Be ready to explain the accounting logic, your formula choices, how you checked the workbook, and what you would investigate if the error check failed.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a className="cta-primary" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">Book a Free 30-Minute Session</a>
              <Link className="cta-secondary" href="/excel-tutor">Back to Excel for Accounting</Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
