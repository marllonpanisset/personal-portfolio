import { describe, expect, it } from "vitest";

import {
  absoluteUrl,
  defaultOpenGraphImage,
  siteUrl,
} from "@/lib/site-metadata";

describe("site metadata", () => {
  it("centraliza a URL canônica e a imagem Open Graph pública", () => {
    expect(siteUrl).toBe("https://marllon.netlify.app");
    expect(defaultOpenGraphImage).toBe(
      "https://marllon.netlify.app/og-image.png",
    );
    expect(absoluteUrl("/blog")).toBe("https://marllon.netlify.app/blog");
  });
});
