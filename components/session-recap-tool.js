"use client";

import { useMemo, useState } from "react";

const emptyRecap = {
  student: "",
  course: "",
  date: "",
  topic: "",
  covered: "",
  understand: "",
  practice: "",
  beforeNext: "",
  next: "",
  skillMapUpdate: ""
};

export default function SessionRecapTool() {
  const [recap, setRecap] = useState(emptyRecap);
  const [copied, setCopied] = useState(false);

  const recapText = useMemo(() => buildRecapText(recap), [recap]);

  function update(field, value) {
    setRecap((current) => ({ ...current, [field]: value }));
    setCopied(false);
  }

  async function copyRecap() {
    try {
      await navigator.clipboard.writeText(recapText);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  function clearRecap() {
    setRecap(emptyRecap);
    setCopied(false);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
      <div className="space-y-6">
        <article className="surface-card p-6 md:p-8">
          <p className="eyebrow">Session Details</p>
          <h2 className="text-3xl font-semibold text-slate-900">Set the context</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Field label="Student name" value={recap.student} onChange={(value) => update("student", value)} placeholder="Optional" />
            <Field label="Course" value={recap.course} onChange={(value) => update("course", value)} placeholder="Example: Financial Accounting" />
            <Field label="Session date" value={recap.date} onChange={(value) => update("date", value)} type="date" />
            <Field label="Main topic" value={recap.topic} onChange={(value) => update("topic", value)} placeholder="Example: adjusting entries" />
          </div>
        </article>

        <article className="surface-card p-6 md:p-8">
          <p className="eyebrow">Five-Part Recap</p>
          <h2 className="text-3xl font-semibold text-slate-900">Capture what matters from the session</h2>
          <div className="mt-6 space-y-5">
            <TextArea label="What We Covered" value={recap.covered} onChange={(value) => update("covered", value)} placeholder="Topics, examples, problems, or Excel skills worked on." />
            <TextArea label="What You Understand" value={recap.understand} onChange={(value) => update("understand", value)} placeholder="What now makes sense or can be done more independently." />
            <TextArea label="What Needs More Practice" value={recap.practice} onChange={(value) => update("practice", value)} placeholder="Remaining weak spots, repeated mistakes, or areas that still need guidance." />
            <TextArea label="What to Practice Before Next Time" value={recap.beforeNext} onChange={(value) => update("beforeNext", value)} placeholder="Specific practice problems, review tasks, or Excel exercises." />
            <TextArea label="What's Next" value={recap.next} onChange={(value) => update("next", value)} placeholder="Next topic, exam priority, or plan for the following session." />
          </div>
        </article>

        <article className="surface-card p-6 md:p-8">
          <p className="eyebrow">Skill Map Connection</p>
          <TextArea label="Skill Map Update" value={recap.skillMapUpdate} onChange={(value) => update("skillMapUpdate", value)} placeholder="Example: Adjusting entries moved from Needs Work to Developing." />
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Use this only when the session provides enough evidence to change a Skill Map rating.
          </p>
        </article>
      </div>

      <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(29,77,108,0.98),rgba(18,54,77,0.98))] p-6 text-white md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Generated Recap</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">Ready to copy and send</h2>
          <pre className="mt-6 whitespace-pre-wrap font-sans text-sm leading-7 text-white/82">{recapText}</pre>
        </article>

        <article className="surface-card p-6 md:p-8">
          <div className="grid gap-3">
            <button className="cta-primary w-full" onClick={copyRecap} type="button">
              {copied ? "Copied" : "Copy Session Recap"}
            </button>
            <button className="cta-secondary w-full" onClick={clearRecap} type="button">Clear Recap</button>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            This tool does not submit or store the recap. The information remains in this page only until you clear it or leave the page.
          </p>
        </article>
      </aside>
    </div>
  );
}

function Field({ label, value, onChange, placeholder = "", type = "text" }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700">
      {label}
      <input
        className="min-h-12 rounded-2xl border border-[var(--line)] bg-white px-4 text-base font-normal text-slate-800 outline-none placeholder:text-slate-400 focus:border-[color:var(--brand)]"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextArea({ label, value, onChange, placeholder }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700">
      {label}
      <textarea
        className="min-h-28 rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-base font-normal leading-7 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[color:var(--brand)]"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function buildRecapText(recap) {
  const heading = [recap.student || "Student", recap.course, recap.date].filter(Boolean).join(" | ");
  const topic = recap.topic ? `\nTopic: ${recap.topic}` : "";

  return `${heading || "AMS Session Recap"}${topic}\n\nWHAT WE COVERED\n${recap.covered || "—"}\n\nWHAT YOU UNDERSTAND\n${recap.understand || "—"}\n\nWHAT NEEDS MORE PRACTICE\n${recap.practice || "—"}\n\nWHAT TO PRACTICE BEFORE NEXT TIME\n${recap.beforeNext || "—"}\n\nWHAT'S NEXT\n${recap.next || "—"}\n\nSKILL MAP UPDATE\n${recap.skillMapUpdate || "No update noted."}`;
}
