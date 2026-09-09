"use client";

import { useMemo, useState } from "react";

const categories = [
  { id: "accruals", title: "Accruals" },
  { id: "deferrals", title: "Deferrals & Allocations" },
  { id: "effects", title: "Error Analysis & Statement Effects" }
];

const questions = [
  {
    id: 1,
    category: "accruals",
    prompt: "Employees earned $2,400 of wages by December 31 that will be paid on January 5. What adjusting entry is needed on December 31?",
    choices: [
      "Debit Wages Payable $2,400; Credit Cash $2,400",
      "Debit Wages Expense $2,400; Credit Wages Payable $2,400",
      "Debit Wages Expense $2,400; Credit Cash $2,400",
      "No entry is needed until the wages are paid"
    ],
    answer: 1,
    explanation: "The expense was incurred in the current period even though cash will be paid later. Record Wages Expense and the related liability, Wages Payable."
  },
  {
    id: 2,
    category: "accruals",
    prompt: "A company performed $1,800 of services in December but will not bill the customer until January. What is the December 31 adjustment?",
    choices: [
      "Debit Cash $1,800; Credit Service Revenue $1,800",
      "Debit Unearned Revenue $1,800; Credit Service Revenue $1,800",
      "Debit Accounts Receivable $1,800; Credit Service Revenue $1,800",
      "No entry is needed until the customer is billed"
    ],
    answer: 2,
    explanation: "Revenue has been earned even though billing and collection occur later. Record Accounts Receivable and Service Revenue in December."
  },
  {
    id: 3,
    category: "accruals",
    prompt: "A $12,000 note payable carries 6% annual interest. One month of interest has accrued by year-end. What amount should be recorded?",
    choices: ["$60", "$120", "$720", "$1,200"],
    answer: 0,
    explanation: "$12,000 × 6% × 1/12 = $60. The adjustment is Debit Interest Expense $60; Credit Interest Payable $60."
  },
  {
    id: 4,
    category: "accruals",
    prompt: "Which situation best describes an accrual?",
    choices: [
      "Cash is paid or received before the related expense or revenue is recognized",
      "Revenue is earned or an expense is incurred before the related cash is received or paid",
      "A long-term asset is purchased for cash",
      "A liability is paid after it was already recorded"
    ],
    answer: 1,
    explanation: "Accruals recognize economic activity before the related cash movement. Common examples are accrued wages, accrued interest, and accrued revenue."
  },
  {
    id: 5,
    category: "deferrals",
    prompt: "On October 1, a company paid $12,000 for 12 months of insurance and recorded Prepaid Insurance. What adjustment is needed on December 31?",
    choices: [
      "Debit Insurance Expense $1,000; Credit Prepaid Insurance $1,000",
      "Debit Insurance Expense $3,000; Credit Prepaid Insurance $3,000",
      "Debit Prepaid Insurance $3,000; Credit Insurance Expense $3,000",
      "Debit Insurance Expense $12,000; Credit Cash $12,000"
    ],
    answer: 1,
    explanation: "Three months have expired: $12,000 ÷ 12 × 3 = $3,000. Reduce Prepaid Insurance and recognize Insurance Expense."
  },
  {
    id: 6,
    category: "deferrals",
    prompt: "Unearned Revenue has a $9,000 balance. By year-end, $3,600 of that amount has been earned. What adjustment is required?",
    choices: [
      "Debit Service Revenue $3,600; Credit Unearned Revenue $3,600",
      "Debit Cash $3,600; Credit Service Revenue $3,600",
      "Debit Unearned Revenue $3,600; Credit Service Revenue $3,600",
      "Debit Accounts Receivable $3,600; Credit Service Revenue $3,600"
    ],
    answer: 2,
    explanation: "The liability decreases as the performance obligation is satisfied. Debit Unearned Revenue and credit Service Revenue for the amount earned."
  },
  {
    id: 7,
    category: "deferrals",
    prompt: "The Supplies account has an unadjusted balance of $4,800. A physical count shows $1,300 of supplies remain. What adjusting entry is needed?",
    choices: [
      "Debit Supplies Expense $1,300; Credit Supplies $1,300",
      "Debit Supplies $3,500; Credit Supplies Expense $3,500",
      "Debit Supplies Expense $3,500; Credit Supplies $3,500",
      "Debit Supplies Expense $4,800; Credit Supplies $4,800"
    ],
    answer: 2,
    explanation: "$4,800 − $1,300 = $3,500 of supplies were used. Recognize Supplies Expense and reduce the Supplies asset by $3,500."
  },
  {
    id: 8,
    category: "deferrals",
    prompt: "Equipment cost $30,000, has a $6,000 salvage value, and a 4-year useful life. Using straight-line depreciation, what annual adjusting entry amount is recorded?",
    choices: ["$6,000", "$7,500", "$9,000", "$24,000"],
    answer: 0,
    explanation: "Straight-line depreciation is ($30,000 − $6,000) ÷ 4 = $6,000 per year. Debit Depreciation Expense and credit Accumulated Depreciation."
  },
  {
    id: 9,
    category: "effects",
    prompt: "If an accrued wage adjustment is omitted at year-end, which effect is correct?",
    choices: [
      "Liabilities overstated; expenses overstated; net income understated",
      "Liabilities understated; expenses understated; net income overstated",
      "Assets understated; revenue understated; net income understated",
      "Assets overstated; liabilities understated; net income unchanged"
    ],
    answer: 1,
    explanation: "Without the adjustment, Wages Payable and Wages Expense are both too low. Because expense is understated, net income is overstated."
  },
  {
    id: 10,
    category: "effects",
    prompt: "If an accrued revenue adjustment is omitted at year-end, which effect is correct?",
    choices: [
      "Assets understated; revenue understated; net income understated",
      "Assets overstated; revenue overstated; net income overstated",
      "Liabilities understated; expenses understated; net income overstated",
      "Liabilities overstated; revenue understated; net income understated"
    ],
    answer: 0,
    explanation: "The omitted adjustment leaves Accounts Receivable and Revenue too low, which also understates net income."
  },
  {
    id: 11,
    category: "effects",
    prompt: "A company has earned part of a previously recorded Unearned Revenue balance but forgets the adjusting entry. What is the effect?",
    choices: [
      "Liabilities understated; revenue overstated; net income overstated",
      "Liabilities overstated; revenue understated; net income understated",
      "Assets understated; expenses overstated; net income understated",
      "Assets overstated; revenue understated; net income overstated"
    ],
    answer: 1,
    explanation: "The liability should have been reduced and revenue recognized. Omitting the entry leaves Unearned Revenue too high and Revenue and net income too low."
  },
  {
    id: 12,
    category: "effects",
    prompt: "If the year-end depreciation adjustment is omitted, which effect is correct?",
    choices: [
      "Assets understated; expenses overstated; net income understated",
      "Assets overstated; expenses understated; net income overstated",
      "Liabilities overstated; expenses understated; net income overstated",
      "Assets and net income are both understated"
    ],
    answer: 1,
    explanation: "Accumulated Depreciation is understated, so net assets are overstated. Depreciation Expense is understated, which overstates net income."
  }
];

function resultLabel(correct) {
  if (correct >= 3) return "Strong";
  if (correct === 2) return "Developing";
  return "Needs Work";
}

export default function AdjustingEntriesDiagnostic() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const complete = answeredCount === questions.length;

  const results = useMemo(() => {
    if (!submitted) return null;

    const categoryResults = categories.map((category) => {
      const items = questions.filter((question) => question.category === category.id);
      const correct = items.filter((question) => answers[question.id] === question.answer).length;
      return { ...category, correct, total: items.length, label: resultLabel(correct) };
    });

    const totalCorrect = questions.filter((question) => answers[question.id] === question.answer).length;
    const firstPriority = [...categoryResults].sort((a, b) => a.correct - b.correct)[0];

    return { categoryResults, totalCorrect, firstPriority };
  }, [answers, submitted]);

  function choose(questionId, choiceIndex) {
    if (submitted) return;
    setAnswers((current) => ({ ...current, [questionId]: choiceIndex }));
  }

  function submit() {
    if (!complete) return;
    setSubmitted(true);
    setCopied(false);
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
    setCopied(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function copySummary() {
    if (!results) return;
    const lines = [
      `Adjusting Entries Skill Check: ${results.totalCorrect}/12`,
      ...results.categoryResults.map((item) => `${item.title}: ${item.correct}/${item.total} — ${item.label}`),
      `First review priority: ${results.firstPriority.title}`
    ];

    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
      <div className="space-y-5">
        {questions.map((question, index) => {
          const selected = answers[question.id];
          const isCorrect = submitted && selected === question.answer;
          return (
            <article key={question.id} className="surface-card p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="rounded-full bg-[color:var(--brand)] px-3 py-1 text-xs font-bold text-white">{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow">{categories.find((category) => category.id === question.category)?.title}</p>
                  <h2 className="mt-2 text-xl font-semibold leading-8 text-slate-900">{question.prompt}</h2>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {question.choices.map((choice, choiceIndex) => {
                  const active = selected === choiceIndex;
                  const correctChoice = submitted && choiceIndex === question.answer;
                  const wrongChoice = submitted && active && choiceIndex !== question.answer;
                  const stateClass = correctChoice
                    ? "border-emerald-500 bg-emerald-50 text-emerald-950"
                    : wrongChoice
                      ? "border-rose-400 bg-rose-50 text-rose-950"
                      : active
                        ? "border-[color:var(--brand)] bg-[color:var(--surface-soft)] text-slate-900"
                        : "border-[var(--line)] bg-white text-slate-700 hover:border-[color:var(--brand)]";

                  return (
                    <button
                      key={choice}
                      aria-pressed={active}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm leading-6 transition ${stateClass}`}
                      disabled={submitted}
                      onClick={() => choose(question.id, choiceIndex)}
                      type="button"
                    >
                      <span className="mr-2 font-bold">{String.fromCharCode(65 + choiceIndex)}.</span>{choice}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className={`mt-5 rounded-2xl border p-4 ${isCorrect ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}>
                  <p className="font-semibold text-slate-900">{isCorrect ? "Correct" : "Review this one"}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{question.explanation}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
        <article className="surface-card p-6 md:p-8">
          <p className="eyebrow">Progress</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">{answeredCount}/12 answered</h2>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full bg-[color:var(--brand)] transition-all" style={{ width: `${(answeredCount / 12) * 100}%` }} />
          </div>
          {!submitted && (
            <>
              <p className="mt-4 text-sm leading-6 text-slate-600">Answer every question before scoring. Try to work without notes or a solution key.</p>
              <button className="cta-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50" disabled={!complete} onClick={submit} type="button">
                Score My Diagnostic
              </button>
            </>
          )}
        </article>

        {results && (
          <article className="surface-card bg-[linear-gradient(180deg,rgba(29,77,108,0.98),rgba(18,54,77,0.98))] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Your Result</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">{results.totalCorrect}/12</h2>
            <div className="mt-6 space-y-4">
              {results.categoryResults.map((item) => (
                <div key={item.id} className="rounded-2xl border border-white/15 bg-white/8 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-sm font-bold">{item.correct}/{item.total}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-white/15 bg-white/8 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">First Review Priority</p>
              <p className="mt-2 text-lg font-semibold">{results.firstPriority.title}</p>
              <p className="mt-2 text-sm leading-6 text-white/72">Start here, then retake the diagnostic later with a fresh set of problems to confirm improvement.</p>
            </div>
            <div className="mt-6 grid gap-3">
              <button className="cta-primary" onClick={copySummary} type="button">{copied ? "Summary Copied" : "Copy Result Summary"}</button>
              <button className="rounded-2xl border border-white/25 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10" onClick={reset} type="button">Retake Diagnostic</button>
            </div>
          </article>
        )}

        <article className="surface-card p-6 md:p-8">
          <p className="eyebrow">Privacy</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">Your answers stay in this browser session. This tool does not submit or store your responses.</p>
        </article>
      </aside>
    </div>
  );
}
