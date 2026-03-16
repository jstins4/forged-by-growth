import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { BlogPostCard } from "./BlogPostCard";
import type { BlogPost } from "@/lib/blog";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

afterEach(cleanup);

const mockPost: BlogPost = {
  slug: "test-post",
  title: "Test Post",
  date: "2026-03-10",
  author: "Author",
  category: "Growth",
  excerpt: "A summary",
  content: "Full content",
};

describe("BlogPostCard", () => {
  it("renders title, excerpt, and date", () => {
    render(<BlogPostCard post={mockPost} />);

    expect(screen.getByText("Test Post")).toBeInTheDocument();
    expect(screen.getByText("A summary")).toBeInTheDocument();
    expect(screen.getByText("2026-03-10")).toBeInTheDocument();
  });

  it("renders category when present", () => {
    render(<BlogPostCard post={mockPost} />);
    expect(screen.getByText("Growth")).toBeInTheDocument();
  });

  it("links to the correct post page", () => {
    render(<BlogPostCard post={mockPost} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/blog/test-post");
  });
});
