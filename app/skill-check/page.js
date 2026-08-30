import PageHero from "../../components/page-hero";
import SkillCheckTool from "../../components/skill-check-tool";
import { contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "Free Accounting Skill Check",
  description:
    "Prepare for a free 30-minute Accounting Skill Check with Accounting Made Simple. Identify strengths, weak areas, current course priorities, and the best place to start tutoring."
};

const sessionFlow = [
  {
    title: "1. Understand your situation",
    copy: "Review your course, current chapter, next exam or deadline, course format, and what feels hardest right now."
  },
  {
    title: "2. Test the weak spots",
    copy: "Use short course-specific questions or examples to separate a concept gap from a setup, calculation, or execution problem."
  },
  {
    title: "3. Identify the priority",
    copy: "Sort the result into strengths, developing areas, and needs-work areas so the next session has a clear starting point."
  },
  {
    title: "4. Recommend the next step",
    copy: "Leave with the first topic to work on, the type of practice that will help most, and whether a 60- or 90-minute follow-up makes sense."
  }
];

export default function SkillCheckPage() {
  return (
    <>
      <PageHero
        eyebrow="Free 30-Minute Accounting Skill Check"
        title="Find the accounting skill that is actually holding you back"
        copy="The first session is used to identify strengths, recurring mistakes, and the highest-priority topic to improve before jumping into regular tutoring."
        bullets={["Free first 30 minutes", "Course-specific diagnostic", "Clear first priority after the session"]}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sessionFlow.map((step) => (
            <article key={step.title} className="surface-card p-6">
              <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Prepare Before You Book</p>
          <h2 className="section-title">Build a quick pre-session summary</h2>
          <p className="section-copy mt-4">
            Use the tool below to organize what you already know about your strengths and weak spots. The tutor-led Skill Check then validates those areas with your actual course material and practice problems.
          </p>
        </div>
        <SkillCheckTool />
      </section>

      <section className="site-shell pb-16">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8 md:p-10">
          <p className="eyebrow">What You Leave With</p>
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] md:items-center">
            <div>
              <h2 className="section-title max-w-[15ch]">A clear starting point instead of a generic tutoring plan</h2>
              <p className="section-copy mt-5 max-w-3xl">
                The Skill Check is designed to produce three simple outputs: <strong>Your Strengths</strong>, <strong>Main Weaknesses</strong>, and <strong>What We Should Work on First</strong>. That becomes the starting point for future sessions and the AMS Skill Map.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a className="cta-primary" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">
                Book a Free 30-Minute Session
              </a>
              <a className="cta-secondary" href={`mailto:${contactInfo.email}?subject=Accounting%20Skill%20Check`}>
                Ask a Question First
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
