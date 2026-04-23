"use client";

import { useState } from "react";
import Link from "next/link";

type Style = "line-work" | "traditional" | "geometric" | "watercolor" | "minimalist" | "tribal";

interface FormState {
  style: Style;
  subject: string;
  size: "small" | "medium" | "large";
}

function MockDesignSVG({ style, subject }: { style: Style; subject: string }) {
  const label = subject.trim() || "your design";

  if (style === "geometric") {
    return (
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <polygon points="150,30 270,240 30,240" fill="none" stroke="#1a1a1a" strokeWidth="2" />
        <polygon points="150,70 240,220 60,220" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="150" y1="30" x2="150" y2="240" stroke="#1a1a1a" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="150" cy="150" r="20" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <text x="150" y="270" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#666">{label}</text>
      </svg>
    );
  }

  if (style === "traditional") {
    return (
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <ellipse cx="150" cy="130" rx="70" ry="80" fill="#fff5e6" stroke="#1a1a1a" strokeWidth="3" />
        <ellipse cx="150" cy="130" rx="50" ry="60" fill="none" stroke="#c0392b" strokeWidth="2" />
        <path d="M 110 80 Q 150 60 190 80" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
        <path d="M 100 120 L 200 120" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M 105 140 L 195 140" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M 115 160 L 185 160" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M 130 180 L 170 180" stroke="#1a1a1a" strokeWidth="1.5" />
        <text x="150" y="240" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#666">{label}</text>
      </svg>
    );
  }

  if (style === "watercolor") {
    return (
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <filter id="blur1">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <ellipse cx="140" cy="140" rx="80" ry="70" fill="#f87171" fillOpacity="0.35" filter="url(#blur1)" />
        <ellipse cx="165" cy="155" rx="65" ry="55" fill="#fb923c" fillOpacity="0.25" filter="url(#blur1)" />
        <ellipse cx="150" cy="130" rx="50" ry="45" fill="#fbbf24" fillOpacity="0.2" filter="url(#blur1)" />
        <circle cx="150" cy="145" r="40" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <text x="150" y="230" textAnchor="middle" fontSize="11" fontFamily="sans-serif" fill="#666">{label}</text>
      </svg>
    );
  }

  if (style === "minimalist") {
    return (
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <line x1="80" y1="150" x2="220" y2="150" stroke="#1a1a1a" strokeWidth="1" />
        <line x1="150" y1="80" x2="150" y2="220" stroke="#1a1a1a" strokeWidth="1" />
        <circle cx="150" cy="150" r="50" fill="none" stroke="#1a1a1a" strokeWidth="1" />
        <circle cx="150" cy="150" r="4" fill="#1a1a1a" />
        <text x="150" y="240" textAnchor="middle" fontSize="11" fontFamily="sans-serif" fill="#666">{label}</text>
      </svg>
    );
  }

  if (style === "tribal") {
    return (
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          d="M 150 40 L 180 90 L 230 80 L 200 120 L 240 150 L 200 160 L 220 210 L 170 190 L 150 240 L 130 190 L 80 210 L 100 160 L 60 150 L 100 120 L 70 80 L 120 90 Z"
          fill="#1a1a1a"
          fillOpacity="0.85"
        />
        <path
          d="M 150 60 L 170 95 L 210 88 L 188 118 L 218 145 L 190 153 L 205 195 L 162 178 L 150 215 L 138 178 L 95 195 L 110 153 L 82 145 L 112 118 L 90 88 L 130 95 Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <text x="150" y="264" textAnchor="middle" fontSize="11" fontFamily="sans-serif" fill="#666">{label}</text>
      </svg>
    );
  }

  // line-work (default)
  return (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="150" cy="130" r="70" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M 115 105 Q 150 80 185 105" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M 115 155 Q 150 175 185 155" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="130" cy="125" r="6" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="170" cy="125" r="6" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M 150 190 L 150 240 M 130 210 L 170 210" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="150" y="268" textAnchor="middle" fontSize="11" fontFamily="monospace" fill="#666">{label}</text>
    </svg>
  );
}

export default function TryPage() {
  const [form, setForm] = useState<FormState>({
    style: "line-work",
    subject: "",
    size: "medium",
  });
  const [result, setResult] = useState<FormState | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.subject.trim()) return;
    setResult({ ...form });
  }

  function handleReset() {
    setResult(null);
    setForm({ style: "line-work", subject: "", size: "medium" });
  }

  const sizeLabel = { small: "Small (3–5 cm)", medium: "Medium (6–12 cm)", large: "Large (13 cm+)" };

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
          Inkwise
        </Link>
        <Link
          href="/#waitlist"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Get early access
        </Link>
      </nav>

      <main className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-600">
            Design preview
          </p>
          <h1 className="text-4xl font-bold tracking-tight">
            Describe your tattoo
          </h1>
          <p className="mt-3 text-neutral-600">
            Pick a style, describe the subject, choose the size. We&apos;ll generate a placeholder sketch.
          </p>
        </div>

        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Style */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Style
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["line-work", "traditional", "geometric", "watercolor", "minimalist", "tribal"] as Style[]).map(
                  (s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, style: s }))}
                      className={`rounded-xl border-2 px-3 py-2.5 text-sm font-medium capitalize transition ${
                        form.style === s
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                      }`}
                    >
                      {s}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-neutral-700 mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="e.g. koi fish, rose, wolf, anchor…"
                required
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/10"
              />
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["small", "medium", "large"] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, size: s }))}
                    className={`rounded-xl border-2 px-3 py-2.5 text-sm font-medium transition ${
                      form.size === s
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    {sizeLabel[s]}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-red-600 py-3.5 font-medium text-white transition hover:bg-red-700"
            >
              Generate design
            </button>
          </form>
        ) : (
          <div className="space-y-8">
            {/* Design card */}
            <div className="rounded-2xl border-2 border-neutral-200 bg-neutral-50 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold capitalize">{result.style} — {result.subject}</h2>
                  <p className="text-sm text-neutral-500 mt-0.5">{sizeLabel[result.size]}</p>
                </div>
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  v0 mock
                </span>
              </div>
              <div
                className="mx-auto"
                style={{
                  width: result.size === "small" ? 180 : result.size === "large" ? 300 : 240,
                  height: result.size === "small" ? 180 : result.size === "large" ? 300 : 240,
                }}
              >
                <MockDesignSVG style={result.style} subject={result.subject} />
              </div>
              <p className="mt-6 text-center text-xs text-neutral-400">
                Placeholder sketch — AI-generated designs coming in v1.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleReset}
                className="flex-1 rounded-full border-2 border-neutral-900 py-3 font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
              >
                Try another design
              </button>
              <Link
                href="/#waitlist"
                className="flex-1 rounded-full bg-red-600 py-3 text-center font-medium text-white transition hover:bg-red-700"
              >
                Join waitlist for the real thing
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
