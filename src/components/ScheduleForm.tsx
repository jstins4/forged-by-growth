"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitScheduleRequest, type ScheduleFormState } from "@/app/schedule/actions";
import { SERVICE_OPTIONS } from "@/app/schedule/constants";

const SERVICE_DROPDOWN = [
  { value: "", label: "Select a service..." },
  ...SERVICE_OPTIONS.map((s) => ({ value: s, label: s })),
];

const initialState: ScheduleFormState = {
  success: false,
  error: null,
  submitted: false,
};

const inputClasses =
  "w-full rounded-lg border border-brand-dark/20 bg-white px-4 py-3 text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-colors";

export function ScheduleForm() {
  const [state, formAction, isPending] = useActionState(submitScheduleRequest, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && state.submitted) {
      formRef.current?.reset();
    }
  }, [state.success, state.submitted]);

  if (state.success && state.submitted) {
    return (
      <div
        className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mb-4 text-4xl">&#10003;</div>
        <h3 className="mb-2 text-xl font-bold text-brand-dark">
          Request Sent
        </h3>
        <p className="text-brand-dark/70">
          Thank you for reaching out. We&apos;ll get back to you shortly to
          confirm your session.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-6" noValidate>
      {/* Honeypot — hidden from real users, visible to bots */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.error && state.submitted && (
        <div
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          role="alert"
        >
          {state.error}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-dark">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-dark">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-dark">
            Phone <span className="text-brand-dark/40">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(555) 123-4567"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-brand-dark">
            Service <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            className={inputClasses}
            defaultValue=""
          >
            {SERVICE_DROPDOWN.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="preferredDate" className="mb-1.5 block text-sm font-semibold text-brand-dark">
          Preferred Date <span className="text-brand-dark/40">(optional)</span>
        </label>
        <input
          type="date"
          id="preferredDate"
          name="preferredDate"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-dark">
          Message <span className="text-brand-dark/40">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Anything you'd like us to know before your session..."
          className={inputClasses + " resize-y"}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        aria-busy={isPending}
        className="w-full rounded-lg bg-brand-green px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-green/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Request a Session"}
      </button>

      <p className="text-center text-xs text-brand-dark/50">
        We&apos;ll respond within 24 hours to confirm your session.
      </p>
    </form>
  );
}
