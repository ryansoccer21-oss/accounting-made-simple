import CopyEmailButton from "../../components/copy-email-button";
import PageHero from "../../components/page-hero";
import SocialLinks from "../../components/social-links";
import { contactInfo, contactSteps } from "../../lib/site-data";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you need help with"
        copy="Reach out with questions or share what kind of support you are looking for."
        bullets={["Send a message", "Share the topic or goal", "Get clear next steps"]}
      />

      <section className="site-shell section-gap grid gap-4 md:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)]">
        <article className="surface-card p-8">
          <p className="eyebrow">Contact Details</p>
          <h2 className="section-title text-4xl md:text-5xl">Reach out when you're ready</h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-700">
            <p>
              <strong>Email:</strong> {contactInfo.email}
            </p>
            <p>
              <strong>Phone or text:</strong> {contactInfo.phone}
            </p>
            <p>
              <strong>Format:</strong> {contactInfo.format}
            </p>
            <p>
              <strong>Best first step:</strong> Send a short message explaining what you need help with.
            </p>
            <p>
              <strong>Response time:</strong> {contactInfo.responseTime}
            </p>
            <p>
              <strong>Availability:</strong> {contactInfo.availabilityNote}
            </p>
            <p>
              <strong>Payment:</strong> {contactInfo.paymentNote}
            </p>
          </div>
          <div className="mt-8">
            <SocialLinks />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="cta-primary" href={`mailto:${contactInfo.email}?subject=Tutoring%20Inquiry`}>
              Send Email
            </a>
            <CopyEmailButton email={contactInfo.email} />
          </div>
        </article>

        <aside className="surface-card bg-[radial-gradient(circle_at_top_right,rgba(177,109,59,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,241,0.55))] p-8">
          <p className="eyebrow">How It Works</p>
          <div className="space-y-4">
            {contactSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-[var(--line)] bg-white/80 px-5 py-4 text-slate-700"
              >
                <span className="mr-3 font-bold text-[color:var(--brand)]">
                  {index + 1}.
                </span>
                {step}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[28px] border border-[var(--line)] bg-white/90 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
              Message Idea
            </p>
            <p className="mt-3 text-slate-700">
              Hello, I am looking for help with accounting, Excel, budgeting, or study support.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
