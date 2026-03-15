import type { Metadata } from "next";
import { ScheduleForm } from "@/components/ScheduleForm";

export const metadata: Metadata = {
  title: "Schedule a Session — Forged by Growth",
  description:
    "Request a coaching session with Forged by Growth. Choose from coaching packages or venting sessions.",
};

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-brand-dark">
          Schedule a Session
        </h1>
        <p className="text-lg text-brand-dark/70">
          Ready to begin your journey? Fill out the form below and we&apos;ll
          get back to you within 24 hours to confirm your session.
        </p>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-green" />
      </header>

      <ScheduleForm />
    </div>
  );
}
