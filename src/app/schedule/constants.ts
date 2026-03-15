export const SERVICE_OPTIONS = [
  "5-Session Package",
  "15-Session Package",
  "30-Session Package",
  "30-Min Venting Session",
  "45-Min Venting Session",
  "60-Min Venting Session",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
