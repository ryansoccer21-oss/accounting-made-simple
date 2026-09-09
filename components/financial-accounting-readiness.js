"use client";

import { useMemo, useState } from "react";

const categories = [
  { id: "transactions", title: "Transaction Analysis" },
  { id: "reporting", title: "Adjustments & Reporting" },
  { id: "assets", title: "Assets & Valuation" },
  { id: "liabilities", title: "Liabilities, Equity & Cash Flows" }
];

const questions = [
  {
    id: 1,
    category: "transactions",
    prompt: "An owner invests $20,000 cash in a corporation in exchange for common stock. Which entry is correct?",
    choices: [
      "Debit Cash $20,000; Credit Common Stock $20,000",
      "Debit Common Stock $20,000; Credit Cash $20,000",
      "Debit Cash $20,000; Credit Service Revenue $20,000",
      "Debit Investment Expense $20,000; Credit Cash $20,000"
    ],
    answer: 0,
    explanation: "Cash increases with a debit, and contributed capital increases with a credit to Common Stock. Owner investment is not revenue."
  },
  {
    id: 2,
    category: "transactions",
    prompt: "A company purchases $1,500 of supplies on account. What is the immediate effect on the accounting equation?",
    choices: [
      "Assets increase $1,500 and liabilities increase $1,500",
      "Assets decrease $1,500 and liabilities decrease $1,500",
      "Assets increase $1,500 and equity increases $1,500",
      "Expenses increase $1,500 and liabilities decrease $1,500"
    ],
    answer: 0,
    explanation: "Supplies is an asset and Accounts Payable is a liability. Both increase by $1,500 when supplies are purchased on account."
  },
  {
    id: 3,
    category: "transactions",
    prompt: "A company collects $3,000 from a customer on an existing Accounts Receivable balance. Which statement is correct?",
    choices: [
      "Total assets increase $3,000 and revenue increases $3,000",
      "Cash increases and Accounts Receivable decreases, with no change in total assets or net income",
      "Cash increases and liabilities increase $3,000",
      "Accounts Receivable decreases and expense increases $3,000"
    ],
    answer: 1,
    explanation: "The collection exchanges one asset for another. Cash rises and Accounts Receivable falls by the same amount, so total assets and net income do not change."
  },
  {
    id: 4,
    category: "transactions",
    prompt: "A company pays $1,200 cash for the current month's office rent. Which entry is correct?",
    choices: [
      "Debit Prepaid Rent $1,200; Credit Cash $1,200",
      "Debit Rent Expense $1,200; Credit Cash $1,200",
      "Debit Cash $1,200; Credit Rent Revenue $1,200",
      "Debit Accounts Payable $1,200; Credit Rent Expense $1,200"
    ],
    answer: 1,
    explanation: "Because the rent relates entirely to the current month, it is recognized as Rent Expense now and Cash decreases."
  },
  {
    id: 5,
    category: "reporting",
    prompt: "During December, a company earns $5,000 of service revenue. It collects $2,000 in cash and bills the remaining $3,000 to customers. Under accrual accounting, how much December revenue is recognized?",
    choices: ["$2,000", "$3,000", "$5,000", "$8,000"],
    answer: 2,
    explanation: "Accrual accounting recognizes revenue when earned, not only when cash is collected. The full $5,000 was earned in December."
  },
  {
    id: 6,
    category: "reporting",
    prompt: "On October 1, a company pays $12,000 for 12 months of insurance and records Prepaid Insurance. How much Insurance Expense should be recognized by December 31?",
    choices: ["$1,000", "$3,000", "$9,000", "$12,000"],
    answer: 1,
    explanation: "Three months have expired: $12,000 ÷ 12 × 3 = $3,000 of insurance expense."
  },
  {
    id: 7,
    category: "reporting",
    prompt: "Which financial statement reports assets, liabilities, and equity at a specific point in time?",
    choices: ["Income Statement", "Balance Sheet", "Statement of Cash Flows", "Statement of Retained Earnings"],
    answer: 1,
    explanation: "The Balance Sheet reports the company's financial position—assets, liabilities, and equity—at a specific date."
  },
  {
    id: 8,
    category: "reporting",
    prompt: "Beginning Retained Earnings is $15,000. Net income is $8,000 and dividends are $2,000. What is ending Retained Earnings?",
    choices: ["$9,000", "$17,000", "$21,000", "$25,000"],
    answer: 2,
    explanation: "$15,000 beginning Retained Earnings + $8,000 net income − $2,000 dividends = $21,000 ending Retained Earnings."
  },
  {
    id: 9,
    category: "assets",
    prompt: "Accounts Receivable is $50,000 and the Allowance for Doubtful Accounts has a $2,000 credit balance. What is net realizable value?",
    choices: ["$48,000", "$50,000", "$52,000", "$2,000"],
    answer: 0,
    explanation: "Net realizable value is Accounts Receivable minus the credit balance in the allowance: $50,000 − $2,000 = $48,000."
  },
  {
    id: 10,
    category: "assets",
    prompt: "Under the allowance method, a specific $700 customer balance is written off as uncollectible. What is the immediate effect on net Accounts Receivable and net income?",
    choices: [
      "Net Accounts Receivable decreases $700 and net income decreases $700",
      "Net Accounts Receivable increases $700 and net income is unchanged",
      "No change in net Accounts Receivable and no change in net income",
      "No change in net Accounts Receivable and net income decreases $700"
    ],
    answer: 2,
    explanation: "The write-off reduces both gross Accounts Receivable and the allowance by $700. Net Accounts Receivable does not change, and the expense was recognized earlier when the allowance was estimated."
  },
  {
    id: 11,
    category: "assets",
    prompt: "Beginning inventory is $18,000, net purchases are $72,000, and ending inventory is $20,000. What is Cost of Goods Sold?",
    choices: ["$54,000", "$70,000", "$74,000", "$110,000"],
    answer: 1,
    explanation: "Cost of Goods Sold = Beginning Inventory + Net Purchases − Ending Inventory = $18,000 + $72,000 − $20,000 = $70,000."
  },
  {
    id: 12,
    category: "assets",
    prompt: "A company pays $800 for a routine repair that keeps existing equipment in normal operating condition but does not extend its useful life or increase capacity. How should the cost generally be recorded?",
    choices: [
      "Capitalize it as Equipment",
      "Record it as Repairs and Maintenance Expense",
      "Record it as a reduction of Accumulated Depreciation",
      "Record it as an intangible asset"
    ],
    answer: 1,
    explanation: "Routine repairs that maintain an asset's existing condition are generally expensed. Costs that provide a significant future benefit may instead be capitalized."
  },
  {
    id: 13,
    category: "liabilities",
    prompt: "A note payable is due nine months after the balance-sheet date, and there is no qualifying refinancing arrangement. How should it generally be classified?",
    choices: ["Current liability", "Long-term liability", "Equity", "Contra asset"],
    answer: 0,
    explanation: "An obligation due within one year of the balance-sheet date is generally classified as current unless specific conditions justify long-term classification."
  },
  {
    id: 14,
    category: "liabilities",
    prompt: "A corporation issues common stock for $10,000 cash. What is the effect?",
    choices: [
      "Assets increase $10,000 and equity increases $10,000; net income is unchanged",
      "Assets increase $10,000 and revenue increases $10,000",
      "Liabilities increase $10,000 and equity decreases $10,000",
      "Expenses increase $10,000 and cash decreases $10,000"
    ],
    answer: 0,
    explanation: "Issuing stock increases Cash and contributed capital. It is an owner transaction, not revenue, so net income does not change."
  },
  {
    id: 15,
    category: "liabilities",
    prompt: "A corporation declares and pays a $2,000 cash dividend on the same day. Which effect is correct?",
    choices: [
      "Cash decreases and Retained Earnings decreases; no expense is recognized",
      "Cash decreases and Dividend Expense increases",
      "Cash increases and Retained Earnings decreases",
      "Liabilities increase and revenue decreases"
    ],
    answer: 0,
    explanation: "Dividends are distributions to owners, not expenses. Paying the dividend reduces Cash and retained earnings/equity."
  },
  {
    id: 16,
    category: "liabilities",
    prompt: "A company purchases equipment for $25,000 cash. How is this transaction generally classified on the statement of cash flows?",
    choices: ["Operating cash outflow", "Investing cash outflow", "Financing cash outflow", "Noncash transaction"],
    answer: 1,
    explanation: "Purchasing long-term productive assets such as equipment is generally an investing activity and is reported as an investing cash outflow."
  }
];

function categoryLabel(correct) {
  if (correct >= 3) return "Strong";
  if (correct === 2) return "Developing";
  return "Needs Work";
}

function overallLabel(correct) {
  if (correct >= 13) return "Strong Foundation";
  if (correct >= 9) return "Developing Foundation";
  return "Build the Foundation";
}

export default function FinancialAccountingReadiness() {
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
      return { ...category, correct, total: items.length, label: categoryLabel(correct) };
    });

    const totalCorrect = questions.filter((question) => answers[question.id] === question.answer).length;
    const firstPriority = [...categoryResults].sort((a, b) => a.correct - b.correct)[0];

    return {
      categoryResults,
      totalCorrect,
      overall: overallLabel(totalCorrect),
      firstPriority
    };
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
      `Financial Accounting Readiness: ${results.totalCorrect}/16 — ${results.overall}`,
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
          const category = categories.find((item) => item.id === question.category);

          return (
            <article key={question.id} className="surface-card p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="rounded-full bg-[color:var(--brand)] px-3 py-1 text-xs font-bold text-white">{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow">{category?.title}</p>
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
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">{answeredCount}/16 answered</h2>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full bg-[color:var(--brand)] transition-all" style={{ width: `${(answeredCount / 16) * 100}%` }} />
          </div>
          {!submitted && (
            <>
              <p className="mt-4 text-sm leading-6 text-slate-600">Answer all 16 questions before scoring. Work without notes if possible so the result reflects your current foundation.</p>
              <button className="cta-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50" disabled={!complete} onClick={submit} type="button">
                Score My Readiness Check
              </button>
            </>
          )}
        </article>

        {results && (
          <article className="surface-card bg-[linear-gradient(180deg,rgba(29,77,108,0.98),rgba(18,54,77,0.98))] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Your Result</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">{results.totalCorrect}/16</h2>
            <p className="mt-2 text-lg font-semibold text-white/90">{results.overall}</p>

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
              <p className="mt-2 text-sm leading-6 text-white/72">Use this as the first topic area to strengthen before retaking the readiness check with a fresh set of questions.</p>
            </div>

            <div className="mt-6 grid gap-3">
              <button className="cta-primary" onClick={copySummary} type="button">{copied ? "Summary Copied" : "Copy Result Summary"}</button>
              <button className="rounded-2xl border border-white/25 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10" onClick={reset} type="button">Retake Readiness Check</button>
            </div>
          </article>
        )}

        <article className="surface-card p-6 md:p-8">
          <p className="eyebrow">How to Use the Result</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">This is a learning diagnostic, not a course placement exam. Use the category scores to decide what to review first and validate weak areas with new practice problems.</p>
        </article>

        <article className="surface-card p-6 md:p-8">
          <p className="eyebrow">Privacy</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">Your answers stay in this browser session. This tool does not submit or store your responses.</p>
        </article>
      </aside>
    </div>
  );
}
