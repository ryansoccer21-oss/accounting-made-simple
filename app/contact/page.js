import CopyEmailButton from "../../components/copy-email-button";
import PageHero from "../../components/page-hero";
import SocialLinks from "../../components/social-links";
import { contactInfo, contactSteps } from "../../lib/site-data";

export const metadata = {
  title: "Book a Session",
  description:
    "Book a free 30-minute Accounting Skill Check with Accounting Made Simple or contact Ryan with an accounting or Excel tutoring question."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Session"
        title="Start with a free 30-minute Accounting Skill Check"
        copy="Share your course, current topic, upcoming exam, or Excel goal so we can identify the best place to start."
        bullets={["Free first 30 minutes", "Accounting + accounting-focused Excel", "Clear next step after the session"]}
      />

      <section className="site-shell section-gap grid gap-4 md:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)]">
        <article className="surface-card p-8">
          <p className="eyebrow">Book Directly</p>
          <h2 className="section-title text-4xl md:text-5xl">Choose a time that works for you</h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            The booking calendar shows current openings. Standard availability is Monday through Thursday after 5:30 PM, with weekends by appointment and Fridays unavailable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="cta-primary" href={contactInfo.bookingUrl} rel="noopener noreferrer" target="_blank">
              Book a Free 30-Minute Session
            </a>
            <a className="cta-secondary" href={`mailto:${contactInfo.email}?subject=Accounting%20Tutoring%20Inquiry`}>
              Send Email
            </a>
            <CopyEmailButton email={contactInfo.email} />
          </div>

          <div className="mt-8 space-y-3 text-base leading-8 text-slate-700">
            <p><strong>Email:</strong> {contactInfo.email}</p>
            <p><strong>Phone or text:</strong> {contactInfo.phone}</p>
            <p><strong>Format:</strong> {contactInfo.format}</p>
            <p><strong>Response time:</strong> {contactInfo.responseTime}</p>
          </div>
          <div className="mt-8"><SocialLinks /></div>
        </article>

        <aside className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,255,255,0.98))] p-8">
          <p className="eyebrow">How It Works</p>
          <div className="space-y-4">
            {contactSteps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-[var(--line)] bg-white/85 px-5 py-4 text-slate-700">
                <span className="mr-3 font-bold text-[color:var(--brand)]">{index + 1}.</span>
                {step}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[28px] border border-[var(--line)] bg-white/90 p-5">
            <p className="eyebrow">Helpful Message</p>
            <p className="mt-3 leading-7 text-slate-700">
              Include your course, current chapter or topic, next exam date if relevant, and what feels hardest right now.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
