import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services — Forged by Growth",
  description:
    "Developmental coaching packages based on Integral Coaching Canada principles. 5, 15, and 30-session packages plus venting sessions.",
};

const coachingPackages = [
  {
    title: "5-Session Package",
    description:
      "A focused engagement for targeted growth. Ideal for addressing a specific challenge or building a single new capacity. We identify your edge and build the muscles to move past it.",
    features: [
      "5 one-on-one coaching sessions",
      "Targeted practices between sessions",
      "Initial assessment of your current way of being",
    ],
  },
  {
    title: "15-Session Package",
    description:
      "A deeper transformation for sustained evolution. Enough time to identify patterns, challenge perspectives, and build lasting new capacities across multiple dimensions of your life.",
    features: [
      "15 one-on-one coaching sessions",
      "Comprehensive practices tailored to your growth edge",
      "Mid-point assessment and recalibration",
      "Support for integrating new capacities",
    ],
    highlighted: true,
  },
  {
    title: "30-Session Package",
    description:
      "The full refinement. A comprehensive coaching journey for those ready to fundamentally evolve how they move through the world. This is where the deepest transformation happens.",
    features: [
      "30 one-on-one coaching sessions",
      "Full developmental coaching arc",
      "Multiple assessment and recalibration points",
      "Deep practice development across all life domains",
      "Ongoing integration support",
    ],
  },
];

const ventingSessions = [
  { duration: "30 minutes", description: "A quick space to decompress and be heard." },
  { duration: "45 minutes", description: "More room to unpack what's weighing on you." },
  { duration: "60 minutes", description: "A full session to process, reflect, and breathe." },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-brand-dark">
          Developmental Coaching
        </h1>
        <p className="text-lg font-semibold text-brand-green">The Refinement</p>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-green" />
      </header>

      {/* Philosophy / Intro */}
      <section className="mb-16 mx-auto max-w-3xl">
        <p className="mb-6 text-lg leading-relaxed text-brand-dark/80">
          Based on Integral Coaching Canada principles. In this process, the
          &ldquo;forging&rdquo; isn&apos;t about fixing something broken &mdash;
          it&apos;s about evolving the architecture of how you move through the
          world. We look at your &ldquo;way of being&rdquo; and build new
          &ldquo;muscles.&rdquo;
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-brand-dark/10 p-5 text-center">
            <h3 className="mb-2 text-lg font-bold text-brand-dark">
              The Heat
            </h3>
            <p className="text-sm text-brand-dark/70">
              The tension between who you are today and the person your future
              requires you to become.
            </p>
          </div>
          <div className="rounded-lg border border-brand-dark/10 p-5 text-center">
            <h3 className="mb-2 text-lg font-bold text-brand-dark">
              The Strike
            </h3>
            <p className="text-sm text-brand-dark/70">
              Targeted &ldquo;practices&rdquo; that challenge your current
              perspectives and build new capacities.
            </p>
          </div>
          <div className="rounded-lg border border-brand-dark/10 p-5 text-center">
            <h3 className="mb-2 text-lg font-bold text-brand-dark">
              The Result
            </h3>
            <p className="text-sm text-brand-dark/70">
              A more complex, capable version of yourself, built to handle higher
              levels of leadership and life.
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm font-semibold tracking-widest text-brand-dark/50 uppercase">
          Precision &middot; Evolution &middot; Transcendence
        </p>
      </section>

      {/* Coaching Packages */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-brand-dark">
          Coaching Packages
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {coachingPackages.map((pkg) => (
            <ServiceCard
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              features={pkg.features}
              ctaHref="/schedule"
              highlighted={pkg.highlighted}
            />
          ))}
        </div>
      </section>

      {/* Venting Sessions */}
      <section className="mb-16">
        <div className="mx-auto max-w-3xl rounded-xl bg-brand-light p-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-brand-dark">
            Venting Sessions
          </h2>
          <p className="mb-6 text-center text-brand-dark/70">
            Sometimes we just need a non-judgmental space where we can be messy.
            If you aren&apos;t sure what you need, but want to vent, add a
            session.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {ventingSessions.map((session) => (
              <div
                key={session.duration}
                className="flex flex-col items-center rounded-lg border border-brand-dark/10 bg-white p-4 text-center"
              >
                <span className="mb-2 text-2xl font-bold text-brand-green">
                  {session.duration}
                </span>
                <p className="mb-4 text-sm text-brand-dark/70">
                  {session.description}
                </p>
                <a
                  href="/schedule"
                  className="text-sm font-semibold text-brand-green hover:underline"
                >
                  Book Now &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="border-t border-brand-dark/10 pt-8 text-center">
        <p className="text-brand-dark/60">
          Ready to begin? Every journey starts with a single conversation.
        </p>
      </footer>
    </div>
  );
}
