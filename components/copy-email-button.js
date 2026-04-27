"use client";

import { useState } from "react";

export default function CopyEmailButton({ email }) {
  const [label, setLabel] = useState("Copy Email");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Email Copied");
      window.setTimeout(() => setLabel("Copy Email"), 1800);
    } catch {
      setLabel(email);
    }
  }

  return (
    <button className="cta-secondary" type="button" onClick={handleCopy}>
      {label}
    </button>
  );
}
