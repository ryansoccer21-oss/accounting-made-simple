"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "../lib/site-data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-white/80 backdrop-blur">
      <div className="site-shell">
        <div className="relative flex min-h-[76px] items-center justify-between gap-4">
          <Link className="font-serif text-xl font-semibold text-slate-900" href="/">
            Accounting Made Simple
          </Link>

          <button
            aria-controls="site-nav"
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex size-12 items-center justify-center rounded-2xl border border-[var(--line)] bg-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 rounded-full bg-[color:var(--brand)] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-[color:var(--brand)] transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-[color:var(--brand)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>

          <nav
            className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[calc(100%+0.5rem)] flex-col gap-3 rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:static md:flex md:flex-row md:items-center md:gap-6 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            id="site-nav"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  className={`text-sm font-semibold transition ${
                    active ? "text-[color:var(--brand)]" : "text-slate-500 hover:text-[color:var(--brand)]"
                  }`}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
