import Link from "next/link";
import PageHero from "../../components/page-hero";
import SessionRecapTool from "../../components/session-recap-tool";

export const metadata = {
  title: "AMS Session Recap",
  description:
    "Create a clear Accounting Made Simple tutoring recap with what was covered, what is understood, what needs practice, what to do before next time, and what comes next."
};

const recapParts = [
  "What We Covered",
  "What You Understand",
  "What Needs More Practice",
  "What to Practice Before Next Time",
  "What's Next"
];

export default function SessionRecapPage() {
  return (
    <>
      <PageHero
        eyebrow="AMS Session Recap"
        title="Turn each tutoring session into a clear next step"
        copy="Use the same five-part recap after every session so progress is easier to see, practice is more focused, and the next session starts with context instead of starting over."
        bullets={recapParts.slice(0, 3)}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {recapParts.map((part, index) => (
            <article key={part} className="surface-card p-5">
              <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="text-xl font-semibold text-slate-900">{part}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Reusable Template</p>
          <h2 className="section-title">Build a recap while the session is still fresh</h2>
          <p className="section-copy mt-4">
            Fill in only what is useful. The tool creates a clean recap you can copy into an email, message, notes app, or your own tutoring records.
          </p>
        </div>
        <SessionRecapTool />
      </section>

      <section className="site-shell pb-16">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] md:items-center">
            <div>
              <p className="eyebrow">Keep the System Connected</p>
              <h2 className="section-title max-w-[16ch]">Use the recap to update the Skill Map</h2>
              <p className="section-copy mt-5 max-w-3xl">
                If a topic moved from Needs Work to Developing or from Developing to Strong, update the Skill Map after the session so future tutoring priorities reflect actual progress.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link className="cta-primary" href="/skill-map">Open the AMS Skill Map</Link>
              <Link className="cta-secondary" href="/skill-check">Review the Skill Check</Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
