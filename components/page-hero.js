export default function PageHero({ eyebrow, title, copy, bullets = [] }) {
  return (
    <section className="site-shell section-gap">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <article className="surface-card bg-[radial-gradient(circle_at_top_right,rgba(177,109,59,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,253,249,1))] p-8 md:p-10">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="max-w-[12ch] font-serif text-5xl font-semibold leading-none md:text-6xl">
            {title}
          </h1>
          <p className="section-copy mt-5 max-w-2xl">{copy}</p>
        </article>

        <aside className="surface-card bg-[radial-gradient(circle_at_top_left,rgba(29,77,108,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,241,0.5))] p-8">
          <p className="eyebrow">Overview</p>
          <ul className="grid gap-4">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-slate-600">
                <span className="mt-2 size-2 rounded-full bg-[color:var(--brand)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
