import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/quotes", label: "Quotes" },
  { href: "/merchandise", label: "Merch" },
];

export function Header() {
  return (
    <header className="border-b border-brand-dark/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-brand-dark">
            Forged by Growth
          </span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-dark/70 transition-colors hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
