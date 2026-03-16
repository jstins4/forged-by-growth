import { MDXRemote } from "next-mdx-remote/rsc";
import { YouTube } from "@/components/YouTube";
import { SoundCloud } from "@/components/SoundCloud";

const components = {
  YouTube,
  SoundCloud,
};

export function MdxContent({ source }: { source: string }) {
  return (
    <article className="prose prose-lg max-w-none prose-headings:text-brand-dark prose-a:text-brand-green">
      <MDXRemote source={source} components={components} />
    </article>
  );
}
