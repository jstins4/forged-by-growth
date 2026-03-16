import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MdxContent } from "@/components/MdxContent";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — Forged by Growth`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm font-medium text-brand-green hover:underline"
      >
        &larr; Back to Blog
      </Link>

      <header className="mb-8">
        <div className="mb-3 flex items-center gap-3 text-sm text-brand-dark/50">
          <time dateTime={post.date}>{post.date}</time>
          {post.category && (
            <>
              <span>&middot;</span>
              <span className="text-brand-green">{post.category}</span>
            </>
          )}
          {post.author && (
            <>
              <span>&middot;</span>
              <span>{post.author}</span>
            </>
          )}
        </div>
        <h1 className="text-4xl font-bold text-brand-dark">{post.title}</h1>
        <div className="mt-4 h-1 w-16 rounded bg-brand-green" />
      </header>

      <MdxContent source={post.content} />
    </div>
  );
}
