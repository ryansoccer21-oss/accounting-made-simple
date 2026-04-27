import { contactInfo } from "../lib/site-data";

const socialItems = [
  {
    label: "Gmail",
    href: `mailto:${contactInfo.email}?subject=Tutoring%20Inquiry`,
    external: false,
    icon: (
      <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 6.75 12 13.5l9-6.75"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M4.5 5.25h15A1.5 1.5 0 0 1 21 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.25V6.75a1.5 1.5 0 0 1 1.5-1.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: contactInfo.linkedinUrl,
    external: true,
    icon: (
      <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.96 1.96 0 0 0 5.22 3a1.97 1.97 0 1 0 0 3.94c1.1 0 1.94-.83 1.94-1.99ZM20.44 13.02c0-3.44-1.83-5.04-4.28-5.04-1.97 0-2.85 1.08-3.34 1.84V8.5H9.44c.04.88 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.87-1.39 1.88-1.39 1.32 0 1.85 1.01 1.85 2.49V20h3.38v-6.98Z" />
      </svg>
    )
  },
  {
    label: "Facebook",
    href: contactInfo.facebookUrl,
    external: true,
    icon: (
      <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.35 20v-7.06h2.38l.36-2.75h-2.74V8.43c0-.8.22-1.34 1.37-1.34h1.46V4.63c-.25-.03-1.12-.11-2.13-.11-2.11 0-3.56 1.29-3.56 3.66v2.01H8.1v2.75h2.39V20h2.86Z" />
      </svg>
    )
  }
];

export default function SocialLinks({ compact = false }) {
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "text-sm font-semibold"}`}>
      {socialItems.map((item) => (
        <a
          key={item.label}
          className={`inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/88 px-4 py-2 text-sm font-semibold text-[color:var(--brand)] transition hover:-translate-y-0.5 hover:bg-slate-50 ${
            compact ? "px-3 py-2" : ""
          }`}
          href={item.href}
          rel={item.external ? "noreferrer" : undefined}
          target={item.external ? "_blank" : undefined}
        >
          {item.icon}
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}
