import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  ctaHref: string;
  ctaLabel?: string;
  highlighted?: boolean;
}

export function ServiceCard({
  title,
  description,
  features,
  ctaHref,
  ctaLabel = "Book a Session",
  highlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col rounded-xl border p-6 transition-shadow hover:shadow-lg ${
        highlighted
          ? "border-brand-green bg-brand-green/5"
          : "border-brand-dark/10 bg-white"
      }`}
    >
      <h3 className="mb-3 text-xl font-bold text-brand-dark">{title}</h3>
      <p className="mb-4 flex-1 text-brand-dark/70">{description}</p>
      {features && features.length > 0 && (
        <ul className="mb-6 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-brand-dark/70"
            >
              <span className="mt-0.5 text-brand-green">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={ctaHref}
        className="mt-auto inline-block rounded-lg bg-brand-green px-5 py-2.5 text-center font-semibold text-white transition-colors hover:bg-brand-green/90"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
