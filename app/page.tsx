"use client";

import { useState } from "react";
import Link from "next/link";

const DEMO_ITEMS = [
  { emoji: "🐉", label: "Dragon" },
  { emoji: "🌹", label: "Rose" },
  { emoji: "⚓", label: "Anchor" },
  { emoji: "🐍", label: "Snake" },
  { emoji: "🦋", label: "Butterfly" },
  { emoji: "🗡️", label: "Dagger" },
  { emoji: "🌙", label: "Moon" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setSubmitted(true);
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Non-fatal: UX stays happy even if network fails.
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
          Inkwise
        </a>
        <div className="flex items-center gap-4 text-sm">
          <a href="#demo" className="hidden sm:inline hover:opacity-70">
            See a demo
          </a>
          <Link
            href="/try"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            Try it now
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-red-100 via-red-50 to-transparent opacity-60" />
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-20 text-center sm:pt-28">
          <p className="mb-5 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-700">
            Consumer AI
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-7xl">
            Design your tattoo. Before the needle.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
            AI tattoo designer with flash from actual shops. See it on your skin before you commit.
          </p>

          {submitted ? (
            <p className="mt-12 text-sm font-medium text-red-700">
              Thanks. We will ping you the day we launch.
            </p>
          ) : (
            <form
              id="waitlist"
              onSubmit={handleWaitlist}
              className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                placeholder="you@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3.5 text-base placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/10 sm:w-80"
              />
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-neutral-900 px-7 py-3.5 font-medium text-white transition hover:bg-neutral-700 disabled:opacity-60"
              >
                Join the waitlist
              </button>
            </form>
          )}

          <p className="mt-6 text-xs text-neutral-400">
            Early access list is open. First 100 get in free forever.
          </p>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="border-y border-neutral-200 bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-600">
              Live preview
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See it in action</h2>
          </div>
          <div className="mt-12">
            <div className="mx-auto max-w-3xl grid grid-cols-4 gap-3">
              {DEMO_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="aspect-square rounded-2xl border-2 border-neutral-800 bg-white p-4 flex items-center justify-center text-4xl"
                  title={item.label}
                >
                  {item.emoji}
                </div>
              ))}
              <div className="aspect-square rounded-2xl border-2 border-dashed border-neutral-400 p-4 flex items-center justify-center text-sm text-neutral-500">
                + 32 more
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-neutral-500">
              Prompt: &ldquo;A line-work koi fish, minimal, Japanese-style&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What you get</h2>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-3">
            <div>
              <div className="text-3xl">✏️</div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">Describe the idea</h3>
              <p className="mt-2 leading-relaxed text-neutral-600">
                A koi fish. A line-work wolf. A memorial for your grandma. We sketch it.
              </p>
            </div>
            <div>
              <div className="text-3xl">🔍</div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">Try it on your skin</h3>
              <p className="mt-2 leading-relaxed text-neutral-600">
                AR preview on your arm, shoulder, back. See it at scale before the chair.
              </p>
            </div>
            <div>
              <div className="text-3xl">📍</div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">Book a nearby shop</h3>
              <p className="mt-2 leading-relaxed text-neutral-600">
                Connect with artists in your city who can execute the design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-600">
              How it works
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Three steps. No learning curve.
            </h2>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-3">
            <div>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                1
              </div>
              <h3 className="text-lg font-semibold tracking-tight">Sign up in seconds</h3>
              <p className="mt-2 leading-relaxed text-neutral-600">
                Email only. No credit card. You&apos;re in before you can overthink it.
              </p>
            </div>
            <div>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                2
              </div>
              <h3 className="text-lg font-semibold tracking-tight">Describe your tattoo</h3>
              <p className="mt-2 leading-relaxed text-neutral-600">
                Style, subject, size. The more specific, the better the sketch.
              </p>
            </div>
            <div>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                3
              </div>
              <h3 className="text-lg font-semibold tracking-tight">See it on your skin</h3>
              <p className="mt-2 leading-relaxed text-neutral-600">
                Not week two. Day one. That&apos;s how fast you&apos;ll know it&apos;s working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Be the first in line.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600">
          Early access starts soon. Get on the list and we will reach out the moment we open the doors.
        </p>
        <a
          href="#waitlist"
          className="mt-8 inline-block rounded-full bg-red-600 px-7 py-3.5 font-medium text-white transition hover:bg-red-700"
        >
          Reserve my spot
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-neutral-500">
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
            Inkwise
          </p>
          <p>© 2026</p>
        </div>
      </footer>
    </>
  );
}
