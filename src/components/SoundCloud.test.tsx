import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { SoundCloud } from "./SoundCloud";

describe("SoundCloud", () => {
  it("renders iframe with correct src", () => {
    const trackUrl = "https://soundcloud.com/artist/track";
    const { container } = render(<SoundCloud trackUrl={trackUrl} />);
    const iframe = container.querySelector("iframe");
    expect(iframe).not.toBeNull();
    expect(iframe!.getAttribute("src")).toContain(
      encodeURIComponent(trackUrl)
    );
  });

  it("renders null for empty trackUrl", () => {
    const { container } = render(<SoundCloud trackUrl="" />);
    expect(container.firstElementChild).toBeNull();
  });

  it("renders null for undefined trackUrl", () => {
    const { container } = render(<SoundCloud />);
    expect(container.firstElementChild).toBeNull();
  });
});
