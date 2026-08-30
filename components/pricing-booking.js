import Link from "next/link";
import SectionHeading from "./section-heading";
import { contactInfo, policyGroups, pricingOptions } from "../lib/site-data";

export default function PricingBooking() {
  return (
    <section className="site-shell section-gap">
      <SectionHeading
        eyebrow="Pricing and Booking"
        title="Transparent pricing after a free 30-minute Accounting Skill Check"
        copy="Start by identifying where you are strong, where you are getting stuck, and what should come next. Then choose the paid session length that fits your goals."
      />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            {pricingOptions.map((option) => (
              <article key={option.length} className="surface-card bg-white/95 p-6">
                <p className="eyebrow">1-on-1 Tutoring</p>
                <h3 className="text-2xl font-semibold text-slate-900">{option.length}</h3>
                <p className="mt-3 text-4xl font-semibold text-[color:var(--brand)]">{option.price}</p>
                <p className="mt-4 leading-7 text-slate-600">{option.note}</p>
              </article>
            ))}
          </div>

          <article className="surface-card p-8">
            <p className="eyebrow">Policies and Expectations</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {policyGroups.map((group) => (
                <div key={group.title} className="rounded-[28px] border border-[var(--line)] bg-[color:var(--surface)] p-5">
                  <h3 className="text-xl font-semibold text-slate-900">{group.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--brand)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="surface-card bg-[linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,253,249,0.98))] p-8">
          <p className="eyebrow">Free First Session</p>
          <h3 className="section-title text-4xl md:text-5xl">Start with a 30-minute Accounting Skill Check</h3>
          <p className="section-copy mt-5">
            Use the first session to identify your course, current topic, upcoming exams, recurring mistakes, strengths, and the highest-priority areas to improve.
          </p>

          <div className="mt-6 rounded-[28px] border border-[var(--line)] bg-white/90 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">Session Details</p>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
              <p><strong>Format:</strong> {contactInfo.format}</p>
              <p><strong>Availability:</strong> {contactInfo.availabilityNote}</p>
              <p><strong>Response time:</strong> {contactInfo.responseTime}</p>
              <p><strong>Payment:</strong> {contactInfo.paymentNote}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a className="cta-primary" href={contactInfo.bookingUrl} rel="noreferrer" target="_blank">
              Book a Free 30-Minute Session
            </a>
            <Link className="cta-secondary" href="/skill-check">
              See How the Skill Check Works
            </Link>
            <a className="text-center text-sm font-semibold text-[color:var(--brand)]" href={`mailto:${contactInfo.email}?subject=Accounting%20Tutoring%20Question`}>
              Ask a Question First
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
