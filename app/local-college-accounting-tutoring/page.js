import Link from "next/link";
import CtaBand from "../../components/cta-band";
import PageHero from "../../components/page-hero";
import PricingBooking from "../../components/pricing-booking";
import SectionHeading from "../../components/section-heading";
import ServiceGrid from "../../components/service-grid";
import { contactInfo, services } from "../../lib/site-data";

export const metadata = {
  title: "Accounting Tutoring for Local College & Community College Students",
  description:
    "Independent accounting tutoring for college and community college students in Southern New Hampshire and Massachusetts, with help for accounting, Excel, study support, and exam review."
};

const localSchoolSections = [
  {
    title: "SNHU Students",
    copy:
      "If you are taking accounting classes through SNHU and want clearer support outside of class, sessions can focus on the topics, assignments, and practice problems that are slowing you down."
  },
  {
    title: "UMass Lowell Students",
    copy:
      "For UMass Lowell students, tutoring can help with class review, homework, exam prep, and breaking down accounting concepts in a more manageable way."
  },
  {
    title: "Middlesex Community College Students",
    copy:
      "Students at Middlesex Community College can use sessions for steady weekly support, quick check-ins before assignments are due, or extra review before tests."
  },
  {
    title: "Northern Essex Community College Students",
    copy:
      "If you are at Northern Essex Community College and want accounting help that feels organized and beginner-friendly, sessions can be built around the exact areas where you need more clarity."
  },
  {
    title: "Community College Students in Southern New Hampshire and Massachusetts",
    copy:
      "This tutoring is also a good fit for community college students across Southern New Hampshire and Massachusetts who want patient guidance with accounting, Excel, study support, and everyday money basics."
  }
];

const pageBullets = [
  "Accounting help for local college and community college students",
  "Support for assignments, exam review, and confusing topics",
  "Online, in person, or both depending on availability"
];

const localFitPoints = [
  "Accounting tutoring for classwork, homework, and exam review",
  "Excel support for spreadsheets, formulas, and organizing work",
  "Study support when you need help keeping up with assignments",
  "A calmer way to work through material that feels confusing"
];

export default function LocalCollegeAccountingTutoringPage() {
  return (
    <>
      <PageHero
        eyebrow="Local College Support"
        title="Accounting Tutoring for Local College & Community College Students"
        copy="Independent tutoring support for students in Southern New Hampshire and Massachusetts who want clearer accounting help, better study support, and a simpler way to work through difficult material."
        bullets={pageBullets}
      />

      <section className="site-shell section-gap">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <article className="surface-card bg-[radial-gradient(circle_at_top_right,rgba(177,109,59,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,253,249,1))] p-8 md:p-10">
            <p className="eyebrow">Who This Page Is For</p>
            <h2 className="section-title max-w-[16ch] text-4xl md:text-5xl">
              College and community college support that feels practical and easy to follow
            </h2>
            <p className="section-copy mt-5 max-w-3xl">
              This page is for students looking for extra accounting help outside of class. Sessions
              can focus on homework, review, exam prep, Excel support, or simply getting more
              comfortable with the material one step at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="cta-primary"
                href={contactInfo.bookingUrl}
                rel="noreferrer"
                target="_blank"
              >
                Book Your Free Session
              </a>
              <a
                className="cta-secondary"
                href={`mailto:${contactInfo.email}?subject=Local%20College%20Tutoring`}
              >
                Contact Ryan
              </a>
            </div>
          </article>

          <aside className="surface-card bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,241,0.5))] p-8">
            <p className="eyebrow">Independent Service</p>
            <h2 className="text-2xl font-semibold text-slate-900">A quick note</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Accounting Made Simple is an independent tutoring service. It is not affiliated with,
              sponsored by, or partnered with SNHU, UMass Lowell, Middlesex Community College,
              Northern Essex Community College, or any other school.
            </p>
            <div className="mt-6 rounded-[28px] border border-[var(--line)] bg-white/90 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--brand)]">
                Good Fit For
              </p>
              <ul className="mt-3 space-y-3 text-slate-700">
                {localFitPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--brand)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="site-shell">
        <SectionHeading
          eyebrow="Local Schools"
          title="Support for students across Southern New Hampshire and Massachusetts"
          copy="Tutoring is built around the class or topic you are actually working on, without trying to make every school sound the same."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {localSchoolSections.map((section) => (
            <article
              key={section.title}
              className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,236,0.92))] p-6"
            >
              <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{section.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section-gap">
        <SectionHeading
          eyebrow="Services"
          title="What you can get help with"
          copy="Support can stay focused on one class, one exam, or the exact topics that need the most attention."
        />
        <ServiceGrid items={services.slice(0, 5)} />
        <div className="mt-8 flex">
          <Link className="cta-secondary" href="/services">
            View All Services
          </Link>
        </div>
      </section>

      <PricingBooking />

      <section className="site-shell pb-16">
        <article className="surface-card overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(177,109,59,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,238,226,0.98))] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_auto] md:items-center">
            <div>
              <p className="eyebrow">Get Started</p>
              <h2 className="section-title max-w-[14ch] text-4xl md:text-5xl">
                Book a free first session or ask a question first
              </h2>
              <p className="section-copy mt-5 max-w-2xl">
                If you are a local college or community college student who wants accounting help
                that feels clear and approachable, reach out or book a time that works for you.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                className="cta-primary"
                href={contactInfo.bookingUrl}
                rel="noreferrer"
                target="_blank"
              >
                Book Free Session
              </a>
              <a
                className="cta-secondary"
                href={`mailto:${contactInfo.email}?subject=College%20Accounting%20Tutoring`}
              >
                Contact by Email
              </a>
            </div>
          </div>
        </article>
      </section>

      <CtaBand />
    </>
  );
}
