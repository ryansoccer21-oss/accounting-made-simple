"use client";

import { useMemo, useState } from "react";

const categories = {
  accountBehavior: {
    title: "Account behavior & normal balances",
    copy: "Recognize how common account types increase, decrease, and normally carry balances."
  },
  routineTransactions: {
    title: "Routine transaction entries",
    copy: "Choose the correct debit and credit for common operating transactions."
  },
  adjustingEntries: {
    title: "Adjusting entries & timing",
    copy: "Record period-end adjustments for accrued, prepaid, unearned, and depreciation items."
  }
};

const questions = [
  {
    id: "q1",
    category: "accountBehavior",
    prompt: "Which pair of account types normally carries a debit balance?",
    choices: [
      "Assets and expenses",
      "Liabilities and revenues",
      "Equity and revenues",
      "Liabilities and equity"
    ],
    answer: 0,
    explanation: "Assets and expenses normally carry debit balances. Liabilities, equity, and revenues normally carry credit balances."
  },
  {
    id: "q2",
    category: "accountBehavior",
    prompt: "A company earns $900 of revenue on account. What happens to Accounts Receivable?",
    choices: [
      "Accounts Receivable is debited for $900",
      "Accounts Receivable is credited for $900",
      "Accounts Receivable is not affected",
      "Accounts Receivable is debited only when cash is collected"
    ],
    answer: 0,
    explanation: "Accounts Receivable is an asset. Earning revenue on account increases the receivable, so Accounts Receivable is debited."
  },
  {
    id: "q3",
    category: "accountBehavior",
    prompt: "An owner invests $10,000 cash into a corporation in exchange for common stock. Which entry is correct?",
    choices: [
      "Debit Common Stock; credit Cash",
      "Debit Cash; credit Common Stock",
      "Debit Cash; credit Service Revenue",
      "Debit Owner Draw; credit Cash"
    ],
    answer: 1,
    explanation: "Cash increases with a debit. Common Stock, an equity account, increases with a credit."
  },
  {
    id: "q4",
    category: "accountBehavior",
    prompt: "A company pays $900 that it previously owed to a supplier. Which entry is correct?",
    choices: [
      "Debit Accounts Payable; credit Cash",
      "Debit Cash; credit Accounts Payable",
      "Debit Supplies Expense; credit Cash",
      "Debit Accounts Receivable; credit Cash"
    ],
    answer: 0,
    explanation: "Paying a liability reduces Accounts Payable with a debit and reduces Cash with a credit."
  },
  {
    id: "q5",
    category: "routineTransactions",
    prompt: "A company buys $1,200 of supplies on account. Which entry is correct?",
    choices: [
      "Debit Supplies; credit Accounts Payable",
      "Debit Accounts Payable; credit Supplies",
      "Debit Supplies Expense; credit Cash",
      "Debit Cash; credit Supplies"
    ],
    answer: 0,
    explanation: "Supplies increase, so Supplies is debited. The unpaid obligation increases Accounts Payable, so Accounts Payable is credited."
  },
  {
    id: "q6",
    category: "routineTransactions",
    prompt: "A company performs $2,500 of services for a customer and will collect the cash later. Which entry is correct?",
    choices: [
      "Debit Cash; credit Service Revenue",
      "Debit Accounts Receivable; credit Service Revenue",
      "Debit Service Revenue; credit Accounts Receivable",
      "Debit Unearned Revenue; credit Cash"
    ],
    answer: 1,
    explanation: "The company has earned revenue and created a receivable. Debit Accounts Receivable and credit Service Revenue."
  },
  {
    id: "q7",
    category: "routineTransactions",
    prompt: "A company receives $1,800 cash before it has performed the service. Which entry is correct on the date cash is received?",
    choices: [
      "Debit Cash; credit Service Revenue",
      "Debit Cash; credit Unearned Revenue",
      "Debit Accounts Receivable; credit Revenue",
      "Debit Unearned Revenue; credit Cash"
    ],
    answer: 1,
    explanation: "Cash increases immediately, but the revenue has not yet been earned. Credit Unearned Revenue, a liability."
  },
  {
    id: "q8",
    category: "routineTransactions",
    prompt: "A company collects $1,400 from a customer that was previously billed. Which entry is correct?",
    choices: [
      "Debit Cash; credit Accounts Receivable",
      "Debit Cash; credit Service Revenue",
      "Debit Accounts Receivable; credit Cash",
      "Debit Service Revenue; credit Cash"
    ],
    answer: 0,
    explanation: "The revenue was recorded when it was earned. Collection now increases Cash and reduces Accounts Receivable; it does not create new revenue."
  },
  {
    id: "q9",
    category: "adjustingEntries",
    prompt: "At month-end, employees have earned $600 of wages that will be paid next month. Which adjusting entry is correct?",
    choices: [
      "Debit Wages Payable; credit Wages Expense",
      "Debit Wages Expense; credit Wages Payable",
      "Debit Cash; credit Wages Payable",
      "Debit Wages Expense; credit Cash"
    ],
    answer: 1,
    explanation: "The wages belong to the current period even though cash will be paid later. Record the expense and the related payable."
  },
  {
    id: "q10",
    category: "adjustingEntries",
    prompt: "A company paid $2,400 for 12 months of insurance in advance. One month has expired. Which adjusting entry is correct?",
    choices: [
      "Debit Prepaid Insurance $200; credit Insurance Expense $200",
      "Debit Insurance Expense $200; credit Prepaid Insurance $200",
      "Debit Insurance Expense $2,400; credit Cash $2,400",
      "Debit Prepaid Insurance $2,200; credit Insurance Expense $2,200"
    ],
    answer: 1,
    explanation: "$2,400 ÷ 12 = $200 per month. One month of the prepaid asset has been used, so debit Insurance Expense and credit Prepaid Insurance for $200."
  },
  {
    id: "q11",
    category: "adjustingEntries",
    prompt: "A company has $3,000 in Unearned Revenue. By month-end, 40% of the related service has been performed. Which adjusting entry is correct?",
    choices: [
      "Debit Service Revenue $1,200; credit Unearned Revenue $1,200",
      "Debit Unearned Revenue $1,200; credit Service Revenue $1,200",
      "Debit Cash $1,200; credit Service Revenue $1,200",
      "Debit Unearned Revenue $3,000; credit Cash $3,000"
    ],
    answer: 1,
    explanation: "Forty percent of $3,000 is $1,200. The liability decreases with a debit and earned revenue increases with a credit."
  },
  {
    id: "q12",
    category: "adjustingEntries",
    prompt: "Which entry records one month of depreciation on equipment?",
    choices: [
      "Debit Equipment; credit Depreciation Expense",
      "Debit Depreciation Expense; credit Accumulated Depreciation",
      "Debit Accumulated Depreciation; credit Equipment",
      "Debit Depreciation Expense; credit Cash"
    ],
    answer: 1,
    explanation: "Depreciation Expense is debited. Accumulated Depreciation, a contra-asset, is credited rather than reducing the Equipment account directly."
  }
];

function categoryStatus(score) {
  if (score >= 3) return "Strong";
  if (score === 2) return "Developing";
  return "Needs Work";
}

function overallStatus(score) {
  if (score >= 10) return "Strong foundation";
  if (score >= 7) return "Developing foundation";
  return "Needs targeted review";
}

export default function DebitsCreditsDiagnostic() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copyState, setCopyState] = useState("");

  const answeredCount = Object.keys(answers).length;
  const complete = answeredCount === questions.length;

  const results = useMemo(() => {
    const totalScore = questions.reduce(
      (total, question) => total + (answers[question.id] === question.answer ? 1 : 0),
      0
    );

    const categoryResults = Object.entries(categories).map(([id, category]) => {
      const categoryQuestions = questions.filter((question) => question.category === id);
      const score = categoryQuestions.reduce(
        (total, question) => total + (answers[question.id] === question.answer ? 1 : 0),
        0
      );

      return {
        id,
        ...category,
        score,
        total: categoryQuestions.length,
        status: categoryStatus(score)
      };
    });

    const priority = [...categoryResults].sort((a, b) => a.score - b.score)[0];

    return {
      totalScore,
      categoryResults,
      priority,
      status: overallStatus(totalScore)
    };
  }, [answers]);

  function chooseAnswer(questionId, choiceIndex) {
    if (submitted) return;
    setAnswers((current) => ({ ...current, [questionId]: choiceIndex }));
  }

  function resetDiagnostic() {
    setAnswers({});
    setSubmitted(false);
    setCopyState("");
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function copySummary() {
    const lines = [
      "AMS Debits & Credits Skill Check",
      `${results.totalScore}/${questions.length} correct — ${results.status}`,
      ...results.categoryResults.map(
        (category) => `${category.title}: ${category.score}/${category.total} — ${category.status}`
      ),
      `First review priority: ${results.priority.title}`
    ];

    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopyState("Copied");
    } catch {
      setCopyState("Copy unavailable");
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
      <div className="space-y-5">
        {questions.map((question, index) => {
          const selected = answers[question.id];
          const correct = selected === question.answer;

          return (
            <article key={question.id} className="surface-card p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">Question {index + 1} of {questions.length}</p>
                  <h2 className="mt-2 text-xl font-semibold leading-8 text-slate-900">{question.prompt}</h2>
                </div>
                {submitted && (
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${correct ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
                    {correct ? "Correct" : "Review"}
                  </span>
                )}
              </div>

              <div className="mt-5 grid gap-3">
                {question.choices.map((choice, choiceIndex) => {
                  const checked = selected === choiceIndex;
                  return (
                    <label
                      key={choice}
                      className={`flex cursor-pointer gap-3 rounded-2xl border px-4 py-4 text-sm leading-6 transition ${checked ? "border-[color:var(--brand)] bg-[color:var(--surface-soft)]" : "border-[var(--line)] bg-white hover:border-[color:var(--brand)]"} ${submitted ? "cursor-default" : ""}`}
                    >
                      <input
                        className="mt-1 h-4 w-4 accent-[color:var(--brand)]"
                        type="radio"
                        name={question.id}
                        checked={checked}
                        disabled={submitted}
                        onChange={() => chooseAnswer(question.id, choiceIndex)}
                      />
                      <span className="text-slate-700">{choice}</span>
                    </label>
                  );
                })}
              </div>

              {submitted && (
                <div className={`mt-5 rounded-2xl border p-4 ${correct ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}>
                  <p className="text-sm font-bold text-slate-900">
                    Correct answer: {question.choices[question.answer]}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{question.explanation}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
        {!submitted ? (
          <article className="surface-card bg-[linear-gradient(180deg,rgba(29,77,108,0.98),rgba(18,54,77,0.98))] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Diagnostic Progress</p>
            <p className="mt-3 font-serif text-4xl font-semibold">{answeredCount}/{questions.length}</p>
            <p className="mt-3 leading-7 text-white/75">
              Answer all 12 questions without notes or a worked example. Your score is meant to guide review, not act as a class grade or certification.
            </p>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-white transition-all"
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>
            <button
              className="cta-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-45"
              type="button"
              disabled={!complete}
              onClick={() => setSubmitted(true)}
            >
              Score My Diagnostic
            </button>
            {!complete && (
              <p className="mt-3 text-xs leading-5 text-white/60">
                Complete {questions.length - answeredCount} more question{questions.length - answeredCount === 1 ? "" : "s"} to score your result.
              </p>
            )}
          </article>
        ) : (
          <article className="surface-card bg-[linear-gradient(180deg,rgba(29,77,108,0.98),rgba(18,54,77,0.98))] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Your Result</p>
            <p className="mt-3 font-serif text-5xl font-semibold">{results.totalScore}/{questions.length}</p>
            <p className="mt-2 text-xl font-semibold">{results.status}</p>

            <div className="mt-6 space-y-4">
              {results.categoryResults.map((category) => (
                <div key={category.id} className="rounded-3xl border border-white/15 bg-white/8 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold">{category.title}</p>
                    <span className="text-sm font-bold text-white/75">{category.score}/{category.total}</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-white/75">{category.status}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/15 bg-white/8 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">First Review Priority</p>
              <p className="mt-2 text-lg font-semibold">{results.priority.title}</p>
              <p className="mt-2 text-sm leading-6 text-white/72">{results.priority.copy}</p>
            </div>

            <div className="mt-6 grid gap-3">
              <button className="cta-primary w-full" type="button" onClick={copySummary}>
                {copyState || "Copy Result Summary"}
              </button>
              <button className="rounded-2xl border border-white/25 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10" type="button" onClick={resetDiagnostic}>
                Retake Diagnostic
              </button>
            </div>
          </article>
        )}

        <article className="surface-card p-6 md:p-8">
          <p className="eyebrow">Privacy & Use</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Your answers stay in this browser session and are not submitted or stored by this page. The questions are original AMS practice questions and are not part of a school assignment or exam.
          </p>
        </article>
      </aside>
    </div>
  );
}
