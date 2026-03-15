import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Forged by Growth",
  description:
    "The personal journey behind Forged by Growth. A story of evolution, self-discovery, and the return to your true essence.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-brand-dark">My Story</h1>
        <div className="mx-auto h-1 w-16 rounded bg-brand-green" />
      </header>

      <div className="space-y-6 text-lg leading-relaxed text-brand-dark/80">
        <p>
          I&apos;ve lived multiple lives in this body. Not in a spiritual or
          cosmic sense, but in growing to become different versions of myself.
          Each new version improved over the last.
        </p>

        <p>
          In May of 2025, I created another version of myself and I finished
          settling into this new version by the end of that year. The
          breakthrough is that I found a love for myself that I had never
          experienced. I complimented myself, received the compliment, and
          thanked myself for holding the discipline to be a better version of
          myself today than I was yesterday.
        </p>

        <p>
          That moment of finding was a return to my true essence. A return to a
          boy that was free spirited, loved alone time, and enjoyed being with
          friends. A return to a boy that enjoyed riding a bicycle faster and
          farther than my previous session. A return to a boy that had not yet
          been fully covered by the shit and darkness of the world.
        </p>

        <p className="text-xl font-semibold text-brand-dark">
          This is my story.
        </p>
      </div>

      <footer className="mt-16 border-t border-brand-dark/10 pt-8 text-center">
        <p className="text-brand-dark/60">
          Forged by Growth is built on the belief that every person has the
          capacity to evolve — to become a more complex, capable version of
          themselves, built to handle higher levels of leadership and life.
        </p>
      </footer>
    </article>
  );
}
