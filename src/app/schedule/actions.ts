"use server";

import { Resend } from "resend";
import { SERVICE_OPTIONS, type ServiceOption } from "./constants";

export interface ScheduleFormState {
  success: boolean;
  error: string | null;
  submitted: boolean;
}

/** Strip control characters (newlines, tabs, carriage returns) to prevent header injection */
function sanitize(input: string): string {
  return input.replace(/[\r\n\t]/g, " ").trim();
}

export async function submitScheduleRequest(
  _prevState: ScheduleFormState,
  formData: FormData,
): Promise<ScheduleFormState> {
  // Honeypot check — if filled, silently reject
  const honeypot = formData.get("website");
  if (honeypot) {
    return { success: true, error: null, submitted: true };
  }

  const name = sanitize(formData.get("name")?.toString() ?? "");
  const email = sanitize(formData.get("email")?.toString() ?? "");
  const phone = sanitize(formData.get("phone")?.toString() ?? "");
  const service = sanitize(formData.get("service")?.toString() ?? "");
  const preferredDate = sanitize(formData.get("preferredDate")?.toString() ?? "");
  const message = (formData.get("message")?.toString() ?? "").trim();

  // Server-side validation
  const errors: string[] = [];
  if (!name) errors.push("Name is required");
  if (!email) errors.push("Email is required");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.push("Please enter a valid email address");
  }
  if (!service || !SERVICE_OPTIONS.includes(service as ServiceOption)) {
    errors.push("Please select a service");
  }
  if (phone && !/^[\d\s()+-]{7,20}$/.test(phone)) {
    errors.push("Please enter a valid phone number");
  }

  if (errors.length > 0) {
    return { success: false, error: errors.join(". "), submitted: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return {
      success: false,
      error: "Unable to send your request right now. Please try again later.",
      submitted: true,
    };
  }

  const resend = new Resend(apiKey);

  // Sanitize message body — preserve line breaks but strip carriage returns
  const cleanMessage = message.replace(/\r/g, "");

  const emailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Service: ${service}`,
    preferredDate ? `Preferred Date: ${preferredDate}` : null,
    cleanMessage ? `\nMessage:\n${cleanMessage}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await resend.emails.send({
      from: "Forged by Growth <noreply@forgedbygrowth.com>",
      to: "scheduler@forgedbygrowth.com",
      subject: `Scheduling Request: ${service} — ${name}`,
      text: emailBody,
      replyTo: email,
    });

    return { success: true, error: null, submitted: true };
  } catch (err) {
    console.error("Failed to send scheduling email:", err);
    return {
      success: false,
      error: "Unable to send your request right now. Please try again later.",
      submitted: true,
    };
  }
}
