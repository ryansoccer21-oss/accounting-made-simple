import Link from "next/link";
import PageHero from "../../components/page-hero";
import { contactInfo } from "../../lib/site-data";

const diagnosticPaths = [
  {
    title: "Financial Accounting Readiness",
    href: "/financial-accounting-readiness",
    copy: "Start here if you want a broad check of your Financial Accounting foundation across transactions, reporting, assets, liabilities, equity, and cash flows."
  },
  {
    title: "Debits & Credits Skill Check",
    href: "/debits-credits-skill-check",
    copy: "Use this if journal entries, normal balances, or deciding what to debit and credit are the main problem."
  },
  {
    title: "Adjusting Entries Skill Check",
    href: "/adjusting-entries-skill-check",
    copy: "Use this if accruals, deferrals, depreciation, or the financial-statement effects of adjustments are giving you trouble."
  },
  {
    title: "Excel Practice Workbooks",
    href: "/excel-practice",
    copy: "Use these if your main goal is accounting-focused Excel practice through reconciliations, fixed assets, and variance analysis."
  }
];

const prepItems = [
  "Your accounting course or Excel goal",
  "The chapter, topic, or skill you are working on now",
  "Your next exam or deadline, if one is coming up",
  "One or two examples of what keeps confusing you",
  "Course materials or practice problems you are allowed to use for tutoring"
];

const sessionSteps = [
  {
    title: "1. Explain what you are working on",
    copy: "We start with your course, current topic, upcoming deadline, and the specific point where the work starts to break down."
  },
  {
    title: "2. Test the skill",
    copy: "We use a short original question, representative example, or your permitted practice material to see whether the issue is concept, setup, calculation, or execution."
  },
  {
    title: "3. Work one problem together",
    copy: "We focus on the reasoning behind the entry, calculation, or spreadsheet step instead of only getting to the final answer."
  },
  {
    title: "4. Leave with a clear next step",
    copy: "You leave knowing the first area to practice next and whether a 60- or 90-minute follow-up session would be useful."
  }
];

export const metadata = {
  title: "Start Here",
  description:
    "New to Accounting Made Simple? Choose a diagnostic, prepare for your free 30-minute Accounting Skill Check, and book your first tutoring session."
};

export default function StartHerePage() {
  return (
    <>
      <PageHero
        eyebrow="New Student Onboarding"
        title="Start here before your first tutoring session"
        copy="Use this page to choose the right starting point, prepare the information that will make the free session useful, and know exactly what to expect."
        bullets={["Choose a starting diagnostic", "Prepare in a few minutes", "Book the free 30-minute Skill Check"]}
      />

      <section className="site-shell section-gap">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Step 1</p>
          <h2 className="section-title">Choose the closest starting point</h2>
          <p className="section-copy mt-4">
            You do not need to complete every diagnostic. Pick the one that best matches what you need right now. If you are in Managerial, Intermediate, Auditing, Advanced Accounting, or you are unsure, you can skip this step and bring your current topic to the free session.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {diagnosticPaths.map((item) => (
            <Link key={item.href} className="surface-card block p-7 transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]" href={item.href}>
              <p className="eyebrow">Optional Preparation</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.copy}</p>
              <span className="mt-6 inline-flex text-sm font-bold text-[color:var(--brand)]">Open →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
          <article className="surface-card p-8 md:p-10">
            <p className="eyebrow">Step 2</p>
            <h2 className="section-title text-4xl md:text-5xl">Prepare a simple session snapshot</h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              You do not need to send a long explanation in advance. Have these details ready so the first 30 minutes can focus on the actual accounting or Excel problem.
            </p>
            <div className="mt-7 grid gap-3">
              {prepItems.map((item, index) => (
                <div key={item} className="rounded-3xl border border-[var(--line)] bg-[color:var(--surface-soft)] px-5 py-4 text-slate-700">
                  <span className="mr-3 font-bold text-[color:var(--brand)]">{index + 1}.</span>
                  {item}
                </div>
              ))}
            </div>
          </article>

          <aside className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8 md:p-10">
            <p className="eyebrow">Step 3</p>
            <h2 className="text-3xl font-semibold text-slate-900">Book the free 30-minute Skill Check</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Choose an available time on the booking calendar. Standard availability is Monday through Thursday after 5:30 PM, with weekends by appointment and Fridays unavailable.
            </p>
            <a className="cta-primary mt-7 w-full" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">
              Book a Free 30-Minute Session
            </a>
            <Link className="cta-secondary mt-3 w-full" href="/contact">
              Contact or Ask a Question
            </Link>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              The free first session is for diagnosis and planning. Regular tutoring is available in 60- and 90-minute sessions after that.
            </p>
          </aside>
        </div>
      </section>

      <section className="site-shell pb-16">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Step 4</p>
          <h2 className="section-title">Know what happens in the first session</h2>
          <p className="section-copy mt-4">
            The first meeting follows a simple structure so you leave with something more useful than a general conversation about the class.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sessionSteps.map((step) => (
            <article key={step.title} className="surface-card p-6">
              <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16">
        <article className="surface-card p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] md:items-center">
            <div>
              <p className="eyebrow">After the Session</p>
              <h2 className="section-title max-w-[16ch]">Keep the next step visible</h2>
              <p className="section-copy mt-5 max-w-3xl">
                Use the AMS Skill Map to track the areas you are building and the Session Recap to record what you learned, what still needs work, and what to practice before the next meeting.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link className="cta-secondary" href="/skill-map">Open the Skill Map</Link>
              <Link className="cta-secondary" href="/session-recap">Open Session Recap</Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
