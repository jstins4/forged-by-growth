import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-lg border border-brand-dark/10 bg-white p-6 transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="mb-2 flex items-center gap-3 text-sm text-brand-dark/50">
          <time dateTime={post.date}>{post.date}</time>
          {post.category && (
            <>
              <span>&middot;</span>
              <span className="text-brand-green">{post.category}</span>
            </>
          )}
        </div>
        <h2 className="mb-2 text-xl font-bold text-brand-dark">
          {post.title}
        </h2>
        <p className="text-brand-dark/70">{post.excerpt}</p>
      </Link>
    </article>
  );
}
