import Link from "next/link";
import PageHero from "../../components/page-hero";
import { contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "Accounting Excel Practice",
  description:
    "Download fictional accounting datasets and practice Bank Reconciliation, Fixed Asset Schedule, and Budget vs. Actual analysis in Excel."
};

const exercises = [
  {
    number: "01",
    title: "Bank Reconciliation",
    level: "Foundation → Working Skills",
    download: "/resources/bank-reconciliation-practice.csv",
    context:
      "Reconcile the fictional August cash balance by separating bank-side timing items from book-side adjustments.",
    tasks: [
      "Import the CSV into Excel and format the Amount column as currency.",
      "Separate Bank Items and Book Items using filtering or SUMIF/SUMIFS.",
      "Calculate the adjusted bank balance and adjusted book balance.",
      "Confirm that both adjusted balances agree.",
      "Identify which book-side items would require journal entries."
    ],
    skills: ["SUMIF / SUMIFS", "Filtering", "Currency formatting", "Reconciliation logic"],
    check: "Adjusted bank balance = $26,525 and adjusted book balance = $26,525."
  },
  {
    number: "02",
    title: "Fixed Asset Schedule",
    level: "Working Skills → Accounting Application",
    download: "/resources/fixed-asset-schedule-practice.csv",
    context:
      "Build a straight-line depreciation schedule for a fictional group of assets and calculate useful accounting rollforward fields.",
    tasks: [
      "Convert the imported data to an Excel Table.",
      "Add Depreciable Base = Cost - Salvage Value.",
      "Add Annual Depreciation = Depreciable Base / Useful Life Years.",
      "Add a Monthly Depreciation column and apply consistent number formatting.",
      "Add columns for Accumulated Depreciation and Net Book Value using an as-of date chosen by your tutor or class."
    ],
    skills: ["Excel Tables", "Structured formulas", "Date logic", "Accounting schedules"],
    check: "Total annual straight-line depreciation across all five assets = approximately $16,580.95."
  },
  {
    number: "03",
    title: "Budget vs. Actual Analysis",
    level: "Working Skills → Accounting Application",
    download: "/resources/budget-vs-actual-practice.csv",
    context:
      "Analyze fictional departmental spending, calculate variances, and identify the accounts driving the overall result.",
    tasks: [
      "Import the dataset and convert it to an Excel Table.",
      "Add Variance = Actual - Budget and Variance % = Variance / Budget.",
      "Use IF to label each line Favorable or Unfavorable based on expense performance.",
      "Use conditional formatting to highlight larger unfavorable variances.",
      "Create a PivotTable or SUMIFS summary by Department."
    ],
    skills: ["IF", "Variance formulas", "Conditional formatting", "PivotTables / SUMIFS"],
    check: "Total Budget = $44,300; Total Actual = $44,560; overall expense variance = $260 unfavorable."
  }
];

export default function ExcelPracticePage() {
  return (
    <>
      <PageHero
        eyebrow="Accounting Excel Practice"
        title="Practice Excel through accounting work, not random spreadsheet drills"
        copy="Download fictional datasets, build the workbook yourself in Excel, and use the answer checks only after you have worked through the accounting logic."
        bullets={["Fictional data only", "Accounting-focused formulas", "Built for independent practice"]}
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
                <p className="eyebrow">Practice File</p>
                <a className="cta-primary w-full" href={exercise.download} download>
                  Download Fictional CSV
                </a>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Open the CSV in Excel, then save your working copy as an Excel workbook before adding formulas, formatting, or PivotTables.
                </p>

                <details className="mt-7 rounded-3xl border border-[var(--line)] bg-white p-5">
                  <summary className="cursor-pointer font-semibold text-[color:var(--brand)]">Reveal answer check</summary>
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
                The goal is not only to get the right total. Be ready to explain the accounting logic, the formula choice, and how you would check the workbook for mistakes.
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
