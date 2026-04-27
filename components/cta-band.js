import { contactInfo } from "../lib/site-data";

export default function CtaBand() {
  return (
    <section className="site-shell pb-20">
      <div className="surface-card overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(177,109,59,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,238,226,0.98))] p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_auto] md:items-center">
          <div>
            <p className="eyebrow">Get Started</p>
            <h2 className="section-title max-w-[13ch] text-4xl md:text-5xl">
              Ready for tutoring that feels clear and manageable?
            </h2>
            <p className="section-copy mt-5 max-w-2xl">
              First session is 50% off. Reach out by email or phone, or book directly
              through the calendar when you are ready.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              className="cta-primary"
              href={contactInfo.bookingUrl}
              rel="noreferrer"
              target="_blank"
            >
              Schedule Your Session
            </a>
            <a className="text-sm font-semibold text-[color:var(--brand)]" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
            <p className="text-sm text-slate-600">{contactInfo.responseTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
