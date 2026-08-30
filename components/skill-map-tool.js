"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "ams-skill-map-v1";

const tracks = [
  {
    id: "financial",
    title: "Financial Accounting",
    topics: [
      "Accounting equation",
      "Debits and credits",
      "Journal entries",
      "Adjusting entries",
      "Financial statements",
      "Cash and bank reconciliations",
      "Receivables",
      "Inventory",
      "Fixed assets and depreciation",
      "Liabilities",
      "Equity",
      "Statement of cash flows"
    ]
  },
  {
    id: "managerial",
    title: "Managerial Accounting",
    topics: [
      "Cost classification",
      "Cost behavior",
      "Job and process costing",
      "Cost-volume-profit analysis",
      "Contribution margin",
      "Budgeting",
      "Standard costs",
      "Variance analysis",
      "Relevant costs",
      "Segment and performance analysis"
    ]
  },
  {
    id: "intermediate",
    title: "Intermediate Accounting",
    topics: [
      "Revenue recognition",
      "Cash and receivables",
      "Inventory measurement",
      "Property, plant, and equipment",
      "Intangibles",
      "Current liabilities",
      "Long-term debt and bonds",
      "Leases",
      "Income taxes",
      "Pensions and postemployment benefits",
      "Stockholders' equity",
      "Earnings per share",
      "Accounting changes and errors"
    ]
  },
  {
    id: "audit",
    title: "Auditing",
    topics: [
      "Audit objectives and assertions",
      "Audit risk",
      "Materiality",
      "Internal control",
      "Audit evidence",
      "Sampling",
      "Substantive procedures",
      "Tests of controls",
      "Audit reports",
      "Professional ethics and independence"
    ]
  },
  {
    id: "advanced",
    title: "Advanced Accounting",
    topics: [
      "Business combinations",
      "Consolidation basics",
      "Intercompany transactions",
      "Noncontrolling interests",
      "Partnership accounting",
      "Foreign currency transactions",
      "Foreign currency translation",
      "Governmental or nonprofit topics",
      "Advanced reporting applications"
    ]
  },
  {
    id: "excel",
    title: "Accounting-Focused Excel",
    topics: [
      "Workbook organization and formatting",
      "Cell references",
      "SUM, SUMIF, and SUMIFS",
      "IF and logical formulas",
      "COUNTIF and COUNTIFS",
      "XLOOKUP and lookup logic",
      "Text and date functions",
      "Tables, sorting, and filtering",
      "Conditional formatting",
      "PivotTables",
      "Reconciliations and rollforwards",
      "Accounting schedules and variance analysis"
    ]
  }
];

const statusOptions = [
  { value: "strong", label: "Strong" },
  { value: "developing", label: "Developing" },
  { value: "needs-work", label: "Needs Work" }
];

export default function SkillMapTool() {
  const [activeTrack, setActiveTrack] = useState(tracks[0].id);
  const [statuses, setStatuses] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setStatuses(JSON.parse(saved));
    } catch {
      // The map still works if local storage is unavailable.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(statuses));
    } catch {
      // Keep the in-memory map usable if local storage is unavailable.
    }
  }, [statuses, loaded]);

  const track = tracks.find((item) => item.id === activeTrack) || tracks[0];

  const summary = useMemo(() => {
    const values = Object.values(statuses);
    return {
      strong: values.filter((value) => value === "strong").length,
      developing: values.filter((value) => value === "developing").length,
      needsWork: values.filter((value) => value === "needs-work").length,
      rated: values.length,
      total: tracks.reduce((sum, item) => sum + item.topics.length, 0)
    };
  }, [statuses]);

  const trackSummary = useMemo(() => {
    const values = track.topics.map((topic) => statuses[keyFor(track.id, topic)]).filter(Boolean);
    return {
      strong: values.filter((value) => value === "strong").length,
      developing: values.filter((value) => value === "developing").length,
      needsWork: values.filter((value) => value === "needs-work").length,
      rated: values.length
    };
  }, [statuses, track]);

  const priorityTopics = useMemo(() => {
    const needsWork = [];
    const developing = [];

    tracks.forEach((item) => {
      item.topics.forEach((topic) => {
        const status = statuses[keyFor(item.id, topic)];
        const entry = { track: item.title, topic };
        if (status === "needs-work") needsWork.push(entry);
        if (status === "developing") developing.push(entry);
      });
    });

    return [...needsWork, ...developing].slice(0, 6);
  }, [statuses]);

  function setStatus(trackId, topic, status) {
    const key = keyFor(trackId, topic);
    setStatuses((current) => ({ ...current, [key]: status }));
  }

  function clearStatus(trackId, topic) {
    const key = keyFor(trackId, topic);
    setStatuses((current) => {
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function resetMap() {
    setStatuses({});
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
      <div className="space-y-6">
        <article className="surface-card p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Choose a Skill Map</p>
              <h2 className="text-3xl font-semibold text-slate-900">Track progress by course</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Use one course at a time or build a broader map across accounting and Excel. Ratings are meant to change as you improve.
              </p>
            </div>
            <button className="text-sm font-semibold text-slate-500 underline decoration-slate-300 underline-offset-4 hover:text-[color:var(--brand)]" onClick={resetMap} type="button">
              Reset entire map
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {tracks.map((item) => (
              <button
                key={item.id}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeTrack === item.id ? "bg-[color:var(--brand)] text-white" : "border border-[var(--line)] bg-white text-slate-600 hover:border-[color:var(--brand)]"}`}
                onClick={() => setActiveTrack(item.id)}
                type="button"
              >
                {item.title}
              </button>
            ))}
          </div>
        </article>

        <article className="surface-card p-6 md:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{track.title}</p>
              <h2 className="text-3xl font-semibold text-slate-900">Rate each topic based on what you can do independently</h2>
            </div>
            <p className="text-sm font-semibold text-slate-500">{trackSummary.rated}/{track.topics.length} rated</p>
          </div>

          <div className="mt-6 space-y-3">
            {track.topics.map((topic) => {
              const key = keyFor(track.id, topic);
              const current = statuses[key];

              return (
                <div key={topic} className="rounded-[26px] border border-[var(--line)] bg-[color:var(--surface-soft)] p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">{topic}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">Rate the skill you can demonstrate without copying a worked example.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {statusOptions.map((option) => (
                        <button
                          key={option.value}
                          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${current === option.value ? "border-[color:var(--brand)] bg-[color:var(--brand)] text-white" : "border-[var(--line)] bg-white text-slate-600 hover:border-[color:var(--brand)]"}`}
                          onClick={() => setStatus(track.id, topic, option.value)}
                          type="button"
                        >
                          {option.label}
                        </button>
                      ))}
                      {current && (
                        <button className="rounded-full px-3 py-2 text-xs font-semibold text-slate-400 hover:text-slate-700" onClick={() => clearStatus(track.id, topic)} type="button">
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>

      <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
        <article className="surface-card bg-[linear-gradient(180deg,rgba(29,77,108,0.98),rgba(18,54,77,0.98))] p-6 text-white md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">AMS Skill Map</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">Your progress at a glance</h2>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Stat label="Strong" value={summary.strong} />
            <Stat label="Developing" value={summary.developing} />
            <Stat label="Needs Work" value={summary.needsWork} />
            <Stat label="Rated" value={`${summary.rated}/${summary.total}`} />
          </div>

          <div className="mt-6 rounded-3xl border border-white/15 bg-white/[0.08] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Current Course</p>
            <p className="mt-2 text-lg font-semibold">{track.title}</p>
            <p className="mt-2 text-sm leading-6 text-white/72">
              {trackSummary.strong} Strong · {trackSummary.developing} Developing · {trackSummary.needsWork} Needs Work
            </p>
          </div>
        </article>

        <article className="surface-card p-6 md:p-8">
          <p className="eyebrow">Next Priorities</p>
          <h2 className="text-2xl font-semibold text-slate-900">What to work on next</h2>
          {priorityTopics.length ? (
            <ol className="mt-5 space-y-3">
              {priorityTopics.map((item, index) => (
                <li key={`${item.track}-${item.topic}`} className="rounded-2xl border border-[var(--line)] bg-[color:var(--surface-soft)] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--brand)]">Priority {index + 1}</p>
                  <p className="mt-1 font-semibold text-slate-900">{item.topic}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.track}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-4 leading-7 text-slate-600">Rate topics as Developing or Needs Work to create a working priority list.</p>
          )}
        </article>

        <article className="surface-card p-6">
          <p className="eyebrow">Privacy</p>
          <p className="text-sm leading-7 text-slate-600">
            Your ratings are saved only in this browser so you can return to the map later. They are not sent to Accounting Made Simple or stored on a server.
          </p>
        </article>
      </aside>
    </div>
  );
}

function keyFor(trackId, topic) {
  return `${trackId}::${topic}`;
}

function Stat({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-4">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/60">{label}</p>
    </div>
  );
}
