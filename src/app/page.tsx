import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-8 px-6 text-center">
      <h1 className="text-5xl font-bold text-brand-dark">Forged by Growth</h1>
      <p className="max-w-xl text-lg text-brand-dark/70">
        Developmental coaching for leaders and individuals ready to evolve.
        Precision. Evolution. Transcendence.
      </p>
      <div className="flex gap-4">
        <Link
          href="/about"
          className="rounded-lg bg-brand-green px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-green/90"
        >
          My Story
        </Link>
        <Link
          href="/services"
          className="rounded-lg border-2 border-brand-dark px-6 py-3 font-semibold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
        >
          Services
        </Link>
      </div>
    </div>
  );
}
