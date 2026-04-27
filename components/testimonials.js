import SectionHeading from "./section-heading";
import { testimonials } from "../lib/site-data";

export default function Testimonials() {
  return (
    <section className="site-shell pb-16">
      <SectionHeading
        eyebrow="Testimonials"
        title="What students are saying"
        copy="Real feedback helps new visitors feel more comfortable reaching out for support."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,238,226,0.92))] p-6"
          >
            <p className="text-lg leading-8 text-slate-700">{item.quote}</p>
            <div className="mt-6">
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
