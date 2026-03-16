"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function CategoryFilter({ categories }: { categories: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "";

  function handleFilter(category: string) {
    if (category) {
      router.push(`/blog?category=${encodeURIComponent(category)}`);
    } else {
      router.push("/blog");
    }
  }

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      <button
        onClick={() => handleFilter("")}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          !activeCategory
            ? "bg-brand-green text-white"
            : "bg-brand-light text-brand-dark/70 hover:bg-brand-dark/10"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeCategory === cat
              ? "bg-brand-green text-white"
              : "bg-brand-light text-brand-dark/70 hover:bg-brand-dark/10"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
