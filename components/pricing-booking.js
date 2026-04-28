import SectionHeading from "./section-heading";
import { contactInfo, packageOptions, policyGroups, pricingOptions } from "../lib/site-data";

export default function PricingBooking() {
  return (
    <section className="site-shell section-gap">
      <SectionHeading
        eyebrow="Pricing and Booking"
        title="Simple pricing and an easy way to book"
        copy="Choose the session length that fits your needs. First session is free."
      />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            {pricingOptions.map((option) => (
              <article
                key={option.length}
                className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(248,244,236,0.94))] p-6"
              >
                <p className="eyebrow">1-on-1 Session</p>
                <h3 className="text-2xl font-semibold text-slate-900">{option.length}</h3>
                <p className="mt-3 text-4xl font-semibold text-[color:var(--brand)]">{option.price}</p>
                <p className="mt-4 leading-7 text-slate-600">{option.note}</p>
              </article>
            ))}
          </div>

          <article className="surface-card overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(177,109,59,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.99),rgba(244,238,226,0.96))] p-8">
            <p className="eyebrow">Session Package</p>
            {packageOptions.map((option) => (
              <div key={option.title} className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <div>
                  <h3 className="text-3xl font-semibold text-slate-900">{option.title}</h3>
                  <p className="mt-3 max-w-2xl leading-8 text-slate-600">{option.note}</p>
                </div>
                <p className="text-4xl font-semibold text-[color:var(--brand)]">{option.price}</p>
              </div>
            ))}
            <div className="mt-6 inline-flex rounded-full bg-[color:var(--brand)] px-5 py-3 text-sm font-bold text-white">
              First session free
            </div>
          </article>

          <article className="surface-card p-8">
            <p className="eyebrow">Policies and Expectations</p>
            <div className="grid gap-4 md:grid-cols-2">
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

        <aside className="surface-card bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.12),transparent_24%),linear-gradient(180deg,rgba(228,237,243,0.88),rgba(255,253,249,0.98))] p-8">
          <p className="eyebrow">Book Your Session</p>
          <h3 className="section-title text-4xl md:text-5xl">Schedule when you are ready</h3>
          <p className="section-copy mt-5">
            Pick a time that works for you and book directly through the calendar link.
          </p>

          <div className="mt-6 rounded-[28px] border border-[var(--line)] bg-white/90 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
              Best For
            </p>
            <ul className="mt-3 space-y-3 text-slate-700">
              <li>Homework support</li>
              <li>Exam review</li>
              <li>Excel help</li>
              <li>Budgeting and financial literacy</li>
            </ul>
          </div>

          <div className="mt-6 rounded-[28px] border border-[var(--line)] bg-white/90 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
              Session Details
            </p>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
              <p>
                <strong>Format:</strong> {contactInfo.format}
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
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a
              className="cta-primary"
              href={contactInfo.bookingUrl}
              rel="noreferrer"
              target="_blank"
            >
              Schedule Your Session
            </a>
            <a
              className="cta-secondary"
              href={`mailto:${contactInfo.email}?subject=Tutoring%20Question`}
            >
              Ask a Question First
            </a>
          </div>

          <div className="mt-8 rounded-[28px] border border-[var(--line)] bg-white/90 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
              Contact
            </p>
            <p className="mt-3 leading-7 text-slate-700">
              {contactInfo.email}
              <br />
              {contactInfo.phone}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
