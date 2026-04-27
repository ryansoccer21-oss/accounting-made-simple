export default function ServiceGrid({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((service) => (
        <article
          key={service.title}
          className="surface-card group relative overflow-hidden p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_58px_rgba(15,23,42,0.1)]"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(29,77,108,0.92),rgba(177,109,59,0.9))] opacity-80" />
          <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-xs font-bold tracking-[0.18em] text-[color:var(--brand)] transition group-hover:bg-[color:var(--brand)] group-hover:text-white">
            {service.label}
          </div>
          <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-3 leading-7 text-slate-600">{service.copy}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[color:var(--brand)]">
            Learn more
            <span aria-hidden="true" className="transition group-hover:translate-x-1">
              →
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
