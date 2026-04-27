import Link from "next/link";
import { faqItems } from "../lib/site-data";

export default function FaqPreview() {
  return (
    <aside className="surface-card bg-[radial-gradient(circle_at_top_right,rgba(177,109,59,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,238,226,0.95))] p-8">
      <p className="eyebrow">FAQ</p>
      <h2 className="section-title text-3xl md:text-4xl">Good fit for students who want patient support</h2>
      <div className="mt-6 space-y-4">
        {faqItems.slice(0, 3).map((item) => (
          <div key={item.question} className="rounded-[24px] border border-[var(--line)] bg-white/85 p-5">
            <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
            <p className="mt-2 leading-7 text-slate-600">{item.answer}</p>
          </div>
        ))}
      </div>
      <Link className="mt-6 inline-flex text-sm font-bold text-[color:var(--brand)]" href="/faq">
        View Full FAQ
      </Link>
    </aside>
  );
}
