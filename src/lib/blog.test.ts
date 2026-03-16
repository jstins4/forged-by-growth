import { describe, it, expect, vi, beforeEach } from "vitest";

const mockExistsSync = vi.fn();
const mockReaddirSync = vi.fn();
const mockReadFileSync = vi.fn();

vi.mock("fs", () => ({
  default: {
    existsSync: (...args: unknown[]) => mockExistsSync(...args),
    readdirSync: (...args: unknown[]) => mockReaddirSync(...args),
    readFileSync: (...args: unknown[]) => mockReadFileSync(...args),
  },
  existsSync: (...args: unknown[]) => mockExistsSync(...args),
  readdirSync: (...args: unknown[]) => mockReaddirSync(...args),
  readFileSync: (...args: unknown[]) => mockReadFileSync(...args),
}));

const SAMPLE_MDX_1 = `---
title: "Post One"
date: "2026-03-10"
author: "Author A"
category: "Growth"
excerpt: "Excerpt one"
---
Content one`;

const SAMPLE_MDX_2 = `---
title: "Post Two"
date: "2026-02-15"
author: "Author B"
category: "Coaching"
excerpt: "Excerpt two"
---
Content two`;

const SAMPLE_MDX_3 = `---
title: "Post Three"
date: "2026-01-01"
author: "Author C"
category: "Growth"
excerpt: "Excerpt three"
---
Content three`;

const SAMPLE_MDX_NO_EXCERPT = `---
title: "No Excerpt Post"
date: "2026-01-15"
author: "Author D"
category: "Mindset"
---
Content without excerpt`;

const SAMPLE_MDX_SPECIAL_CHARS = `---
title: "What's Next? — A Coach's Perspective"
date: "2026-02-01"
author: "Author E"
category: "Coaching"
excerpt: "A special post"
---
Content with special chars`;

beforeEach(() => {
  vi.resetAllMocks();
  mockExistsSync.mockReturnValue(true);
});

describe("getAllPosts", () => {
  it("returns posts sorted by date descending", async () => {
    mockReaddirSync.mockReturnValue([
      "post-one.mdx",
      "post-two.mdx",
      "post-three.mdx",
    ]);
    mockReadFileSync.mockImplementation((filePath: string) => {
      const p = String(filePath);
      if (p.includes("post-one")) return SAMPLE_MDX_1;
      if (p.includes("post-two")) return SAMPLE_MDX_2;
      if (p.includes("post-three")) return SAMPLE_MDX_3;
      return "";
    });

    const { getAllPosts } = await import("./blog");
    const posts = getAllPosts();
    expect(posts).toHaveLength(3);
    expect(posts[0].date).toBe("2026-03-10");
    expect(posts[1].date).toBe("2026-02-15");
    expect(posts[2].date).toBe("2026-01-01");
  });

  it("filters posts by category", async () => {
    mockReaddirSync.mockReturnValue([
      "post-one.mdx",
      "post-two.mdx",
      "post-three.mdx",
    ]);
    mockReadFileSync.mockImplementation((filePath: string) => {
      const p = String(filePath);
      if (p.includes("post-one")) return SAMPLE_MDX_1;
      if (p.includes("post-two")) return SAMPLE_MDX_2;
      if (p.includes("post-three")) return SAMPLE_MDX_3;
      return "";
    });

    const { getAllPosts } = await import("./blog");
    const posts = getAllPosts("Coaching");
    expect(posts).toHaveLength(1);
    expect(posts[0].title).toBe("Post Two");
    expect(posts[0].category).toBe("Coaching");
  });

  it("returns empty array when no posts", async () => {
    mockExistsSync.mockReturnValue(false);
    const { getAllPosts } = await import("./blog");
    const posts = getAllPosts();
    expect(posts).toEqual([]);
  });

  it("returns empty array for nonexistent category", async () => {
    mockReaddirSync.mockReturnValue(["post-one.mdx"]);
    mockReadFileSync.mockReturnValue(SAMPLE_MDX_1);

    const { getAllPosts } = await import("./blog");
    const posts = getAllPosts("Nonexistent");
    expect(posts).toEqual([]);
  });

  it("defaults missing excerpt to empty string", async () => {
    mockReaddirSync.mockReturnValue(["no-excerpt.mdx"]);
    mockReadFileSync.mockReturnValue(SAMPLE_MDX_NO_EXCERPT);

    const { getAllPosts } = await import("./blog");
    const posts = getAllPosts();
    expect(posts).toHaveLength(1);
    expect(posts[0].excerpt).toBe("");
    expect(posts[0].title).toBe("No Excerpt Post");
  });

  it("preserves special characters in title", async () => {
    mockReaddirSync.mockReturnValue(["special.mdx"]);
    mockReadFileSync.mockReturnValue(SAMPLE_MDX_SPECIAL_CHARS);

    const { getAllPosts } = await import("./blog");
    const posts = getAllPosts();
    expect(posts[0].title).toBe("What's Next? — A Coach's Perspective");
  });

  it("reads .mdx files from content/blog", async () => {
    mockReaddirSync.mockReturnValue([
      "post.mdx",
      "readme.txt",
      "draft.mdx",
    ]);
    mockReadFileSync.mockReturnValue(SAMPLE_MDX_1);

    const { getAllPosts } = await import("./blog");
    const posts = getAllPosts();
    expect(posts).toHaveLength(2);
  });
});

describe("getPostBySlug", () => {
  it("returns post content by slug", async () => {
    mockReadFileSync.mockReturnValue(SAMPLE_MDX_1);

    const { getPostBySlug } = await import("./blog");
    const post = getPostBySlug("post-one");
    expect(post).not.toBeNull();
    expect(post!.title).toBe("Post One");
    expect(post!.slug).toBe("post-one");
    expect(post!.content).toContain("Content one");
  });

  it("returns null for nonexistent slug", async () => {
    mockExistsSync.mockReturnValue(false);

    const { getPostBySlug } = await import("./blog");
    const post = getPostBySlug("nonexistent-post");
    expect(post).toBeNull();
  });
});

describe("getCategories", () => {
  it("returns unique sorted categories", async () => {
    mockReaddirSync.mockReturnValue([
      "post-one.mdx",
      "post-two.mdx",
      "post-three.mdx",
    ]);
    mockReadFileSync.mockImplementation((filePath: string) => {
      const p = String(filePath);
      if (p.includes("post-one")) return SAMPLE_MDX_1;
      if (p.includes("post-two")) return SAMPLE_MDX_2;
      if (p.includes("post-three")) return SAMPLE_MDX_3;
      return "";
    });

    const { getCategories } = await import("./blog");
    const categories = getCategories();
    expect(categories).toEqual(["Coaching", "Growth"]);
  });
});
