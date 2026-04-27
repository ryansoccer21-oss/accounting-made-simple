export default function ServiceGrid({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((service) => (
        <article
          key={service.title}
          className="surface-card p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_58px_rgba(15,23,42,0.1)]"
        >
          <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-xs font-bold tracking-[0.18em] text-[color:var(--brand)]">
            {service.label}
          </div>
          <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-3 leading-7 text-slate-600">{service.copy}</p>
        </article>
      ))}
    </div>
  );
}
