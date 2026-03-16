import type { Metadata } from "next";
import { getAllPosts, getCategories } from "@/lib/blog";
import { BlogPostCard } from "@/components/BlogPostCard";
import { CategoryFilter } from "@/components/CategoryFilter";

export const metadata: Metadata = {
  title: "Blog — Forged by Growth",
  description:
    "Articles on coaching, growth, mindset, and the journey of becoming. Read, watch, and listen.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const posts = getAllPosts(category);
  const categories = getCategories();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-brand-dark">Blog</h1>
        <p className="text-lg text-brand-dark/70">
          Thoughts on coaching, growth, and the journey of becoming.
        </p>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-green" />
      </header>

      <CategoryFilter categories={categories} />

      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-brand-dark/50">No posts yet.</p>
      )}
    </div>
  );
}
