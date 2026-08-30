"use client";

import { useMemo, useState } from "react";
import { contactInfo } from "../lib/site-data";

const skillAreas = [
  {
    id: "concepts",
    title: "Concept understanding",
    prompt: "I can explain why the accounting treatment or rule works instead of only memorizing the steps."
  },
  {
    id: "accounts",
    title: "Account identification",
    prompt: "I can identify the accounts involved and classify them correctly before I start solving."
  },
  {
    id: "entries",
    title: "Journal entries",
    prompt: "I can decide which accounts to debit and credit and explain the reason for the entry."
  },
  {
    id: "calculations",
    title: "Calculations",
    prompt: "I can set up the calculation correctly and tell which information in the problem actually matters."
  },
  {
    id: "statements",
    title: "Financial statement impact",
    prompt: "I can connect a transaction or adjustment to its effect on the financial statements."
  },
  {
    id: "independence",
    title: "Independent problem solving",
    prompt: "After seeing one example, I can solve a similar problem without copying the original setup."
  }
];

const ratingOptions = [
  { value: 3, label: "Strong", helper: "I can usually do this on my own." },
  { value: 2, label: "Developing", helper: "I understand some of it but still need help." },
  { value: 1, label: "Needs Work", helper: "This is a regular source of confusion." }
];

const courseOptions = [
  "Financial Accounting",
  "Managerial Accounting",
  "Intermediate Accounting",
  "Auditing",
  "Advanced Accounting",
  "Accounting-focused Excel",
  "Other accounting course"
];

export default function SkillCheckTool() {
  const [course, setCourse] = useState("");
  const [topic, setTopic] = useState("");
  const [goal, setGoal] = useState("");
  const [examDate, setExamDate] = useState("");
  const [ratings, setRatings] = useState({});

  const completedCount = Object.keys(ratings).length;

  const results = useMemo(() => {
    const rated = skillAreas
      .filter((skill) => ratings[skill.id])
      .map((skill) => ({ ...skill, rating: ratings[skill.id] }));

    return {
      strong: rated.filter((skill) => skill.rating === 3),
      developing: rated.filter((skill) => skill.rating === 2),
      needsWork: rated.filter((skill) => skill.rating === 1)
    };
  }, [ratings]);

  const firstPriority = results.needsWork[0] || results.developing[0] || null;
  const isComplete = completedCount === skillAreas.length;

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
      <div className="space-y-6">
        <article className="surface-card p-6 md:p-8">
          <p className="eyebrow">Step 1 — Your Situation</p>
          <h2 className="text-3xl font-semibold text-slate-900">Tell AMS what you are working on</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            This information helps make the free session specific to your class instead of starting with generic questions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Course
              <select
                className="min-h-12 rounded-2xl border border-[var(--line)] bg-white px-4 text-base font-normal text-slate-800 outline-none focus:border-[color:var(--brand)]"
                value={course}
                onChange={(event) => setCourse(event.target.value)}
              >
                <option value="">Choose your course</option>
                {courseOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Current chapter or topic
              <input
                className="min-h-12 rounded-2xl border border-[var(--line)] bg-white px-4 text-base font-normal text-slate-800 outline-none placeholder:text-slate-400 focus:border-[color:var(--brand)]"
                placeholder="Example: adjusting entries"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Next exam or deadline
              <input
                className="min-h-12 rounded-2xl border border-[var(--line)] bg-white px-4 text-base font-normal text-slate-800 outline-none focus:border-[color:var(--brand)]"
                type="date"
                value={examDate}
                onChange={(event) => setExamDate(event.target.value)}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Main goal
              <input
                className="min-h-12 rounded-2xl border border-[var(--line)] bg-white px-4 text-base font-normal text-slate-800 outline-none placeholder:text-slate-400 focus:border-[color:var(--brand)]"
                placeholder="Example: prepare for Exam 2"
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
              />
            </label>
          </div>
        </article>

        <article className="surface-card p-6 md:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Step 2 — Quick Self-Assessment</p>
              <h2 className="text-3xl font-semibold text-slate-900">Where do you feel strongest and weakest?</h2>
            </div>
            <p className="text-sm font-semibold text-slate-500">{completedCount}/{skillAreas.length} rated</p>
          </div>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Rate yourself based on how you perform without looking at a worked example. This is preparation for the tutor-led Skill Check, not a final diagnosis.
          </p>

          <div className="mt-6 space-y-4">
            {skillAreas.map((skill) => (
              <div key={skill.id} className="rounded-[28px] border border-[var(--line)] bg-[color:var(--surface-soft)] p-5">
                <h3 className="text-lg font-semibold text-slate-900">{skill.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{skill.prompt}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {ratingOptions.map((option) => {
                    const selected = ratings[skill.id] === option.value;
                    return (
                      <button
                        key={option.value}
                        className={`rounded-2xl border px-4 py-3 text-left transition ${selected ? "border-[color:var(--brand)] bg-[color:var(--brand)] text-white" : "border-[var(--line)] bg-white text-slate-700 hover:border-[color:var(--brand)]"}`}
                        onClick={() => setRatings((current) => ({ ...current, [skill.id]: option.value }))}
                        type="button"
                      >
                        <span className="block text-sm font-bold">{option.label}</span>
                        <span className={`mt-1 block text-xs leading-5 ${selected ? "text-white/75" : "text-slate-500"}`}>{option.helper}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(29,77,108,0.98),rgba(18,54,77,0.98))] p-6 text-white md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Your Self-Assessment</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">A starting point for your free session</h2>

          {!isComplete ? (
            <p className="mt-5 leading-7 text-white/78">
              Rate all six skill areas to generate your pre-session summary.
            </p>
          ) : (
            <div className="mt-6 space-y-5">
              <ResultGroup title="Your Strengths" items={results.strong} emptyText="No areas marked Strong yet." />
              <ResultGroup title="Developing" items={results.developing} emptyText="No areas marked Developing." />
              <ResultGroup title="Main Weaknesses" items={results.needsWork} emptyText="No areas marked Needs Work." />

              <div className="rounded-3xl border border-white/15 bg-white/8 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">What We Should Work on First</p>
                <p className="mt-2 text-lg font-semibold">{firstPriority ? firstPriority.title : "Confirm your strongest areas with a practice problem"}</p>
                <p className="mt-2 text-sm leading-6 text-white/72">
                  Your tutor will validate this with course-specific questions before deciding the first tutoring priority.
                </p>
              </div>
            </div>
          )}
        </article>

        <article className="surface-card p-6 md:p-8">
          <p className="eyebrow">Step 3 — Book the Skill Check</p>
          <h2 className="text-2xl font-semibold text-slate-900">Use this summary to start the conversation</h2>
          <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            {course && <p><strong>Course:</strong> {course}</p>}
            {topic && <p><strong>Topic:</strong> {topic}</p>}
            {examDate && <p><strong>Exam/deadline:</strong> {examDate}</p>}
            {goal && <p><strong>Goal:</strong> {goal}</p>}
            {!course && !topic && !examDate && !goal && <p>Add your course information above so you know what to bring to the session.</p>}
          </div>
          <a
            className="cta-primary mt-6 w-full"
            href={contactInfo.bookingUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Book a Free 30-Minute Session
          </a>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            This page does not submit or store your answers. Bring the summary with you or use it to describe what you need help with.
          </p>
        </article>
      </aside>
    </div>
  );
}

function ResultGroup({ title, items, emptyText }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">{title}</p>
      {items.length ? (
        <ul className="mt-2 space-y-2 text-sm text-white/85">
          {items.map((item) => <li key={item.id}>• {item.title}</li>)}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-white/55">{emptyText}</p>
      )}
    </div>
  );
}
