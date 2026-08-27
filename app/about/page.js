import PageHero from "../../components/page-hero";
import SocialLinks from "../../components/social-links";
import { aboutHighlights, contactInfo } from "../../lib/site-data";

export const metadata = {
  title: "About",
  description:
    "Learn about Accounting Made Simple, a one-on-one accounting and accounting-focused Excel tutoring service built around practical application and the AMS Method."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Accounting tutoring with a practical point of view"
        copy="Accounting Made Simple is built around clear explanations, structured problem solving, practical Excel skills, and helping students connect classroom concepts to the work accountants actually do."
        bullets={aboutHighlights}
      />

      <section className="site-shell section-gap grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        <article className="surface-card p-8 md:p-10">
          <p className="eyebrow">Why I Built AMS</p>
          <h2 className="section-title text-4xl md:text-5xl">Help students understand accounting, not just get through the assignment</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              My name is Ryan Parks. I earned a bachelor's degree in Accounting from the University of Massachusetts Lowell and work professionally in accounting while continuing on the CPA path.
            </p>
            <p>
              I built Accounting Made Simple because accounting can become frustrating when students are shown a rule or answer without enough explanation of why it works. My goal is to slow down the reasoning, build a repeatable process, and help students become more independent problem solvers.
            </p>
            <p>
              I also bring practical Excel experience into tutoring when it adds value. That can mean connecting an accounting concept to a schedule, reconciliation, analysis, or spreadsheet workflow instead of treating Excel as a completely separate subject.
            </p>
          </div>
        </article>

        <aside className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8">
          <p className="eyebrow">What You Can Expect</p>
          <h2 className="text-3xl font-semibold text-slate-900">Professional, straightforward, and student-focused</h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
            <p>Sessions are designed to be approachable without feeling watered down or overly academic.</p>
            <p>The focus is accounting first, with accounting-specific Excel and practical context added where it genuinely helps the topic make sense.</p>
            <p>The goal is for you to leave with a clearer next step, not just a completed problem.</p>
          </div>
          <div className="mt-6"><SocialLinks /></div>
          <a className="cta-primary mt-6 inline-flex" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">
            Book a Free 30-Minute Session
          </a>
        </aside>
      </section>
    </>
  );
}
