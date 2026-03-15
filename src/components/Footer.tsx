export function Footer() {
  return (
    <footer className="border-t border-brand-dark/10 bg-brand-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center">
        <p className="text-lg font-semibold text-brand-green">
          Embrace. Adapt. Thrive.
        </p>
        <p className="text-sm text-white/60">
          &copy; {new Date().getFullYear()} Forged by Growth. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
