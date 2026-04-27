export default function FaqList({ items }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="surface-card rounded-[24px] px-6 py-5"
          open={index === 0}
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
            {item.question}
          </summary>
          <p className="mt-3 leading-8 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
