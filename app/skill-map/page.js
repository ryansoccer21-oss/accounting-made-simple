import Link from "next/link";
import PageHero from "../../components/page-hero";
import SkillMapTool from "../../components/skill-map-tool";
import { contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "AMS Accounting Skill Map",
  description:
    "Track accounting and accounting-focused Excel skills with the AMS Skill Map using Strong, Developing, and Needs Work ratings."
};

const mapSteps = [
  {
    title: "Start from the Skill Check",
    copy: "Use the first session to identify the areas that deserve the most attention instead of trying to improve everything at once."
  },
  {
    title: "Rate the topic honestly",
    copy: "Mark a topic Strong, Developing, or Needs Work based on what you can do independently without copying a worked example."
  },
  {
    title: "Update it over time",
    copy: "Move topics as your understanding improves so the map stays useful instead of becoming a one-time checklist."
  },
  {
    title: "Use it to plan sessions",
    copy: "Let the weakest and developing areas guide what to practice next and what to revisit in future tutoring sessions."
  }
];

export default function SkillMapPage() {
  return (
    <>
      <PageHero
        eyebrow="AMS Skill Map"
        title="See what you know, what is developing, and what needs work"
        copy="Turn accounting progress into a visible map instead of relying on a vague feeling that you are either good or bad at the whole course."
        bullets={["Strong / Developing / Needs Work", "Course-by-course tracking", "Built to guide future sessions"]}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {mapSteps.map((step) => (
            <article key={step.title} className="surface-card p-6">
              <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Your Skill Map</p>
          <h2 className="section-title">Build the working record for your accounting progress</h2>
          <p className="section-copy mt-4">
            Start with the subject you are taking now. You do not need to rate every topic at once. The map becomes more useful as it is updated after diagnostics, practice, and tutoring sessions.
          </p>
        </div>
        <SkillMapTool />
      </section>

      <section className="site-shell pb-16">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] md:items-center">
            <div>
              <p className="eyebrow">Connect the System</p>
              <h2 className="section-title max-w-[16ch]">Use the Skill Check to decide where your map should start</h2>
              <p className="section-copy mt-5 max-w-3xl">
                The Skill Check identifies the first priority. The Skill Map keeps that priority visible and gives future sessions a consistent way to show progress.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link className="cta-secondary" href="/skill-check">Start with the Free Skill Check</Link>
              <a className="cta-primary" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">
                Book a Free 30-Minute Session
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
