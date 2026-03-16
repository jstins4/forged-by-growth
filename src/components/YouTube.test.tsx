import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { YouTube } from "./YouTube";

describe("YouTube", () => {
  it("renders iframe with correct src", () => {
    const { container } = render(<YouTube videoId="dQw4w9WgXcQ" />);
    const iframe = container.querySelector("iframe");
    expect(iframe).not.toBeNull();
    expect(iframe!.getAttribute("src")).toBe(
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    );
  });

  it("renders with 16:9 aspect ratio container", () => {
    const { container } = render(<YouTube videoId="dQw4w9WgXcQ" />);
    const wrapper = container.firstElementChild;
    expect(wrapper?.className).toContain("aspect-video");
  });

  it("renders null for empty videoId", () => {
    const { container } = render(<YouTube videoId="" />);
    expect(container.firstElementChild).toBeNull();
  });

  it("renders null for undefined videoId", () => {
    const { container } = render(<YouTube />);
    expect(container.firstElementChild).toBeNull();
  });
});
