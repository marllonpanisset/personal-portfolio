import { describe, expect, it } from "vitest";

import { generateMetadata } from "@/app/livros/[slug]/page";
import { getPublishedBooks } from "@/data/books";

describe("BookPage metadata", () => {
  it("usa URLs absolutas e uma imagem raster pública para compartilhamento", async () => {
    const book = getPublishedBooks()[0];
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: book.slug }),
    });

    expect(metadata.alternates?.canonical).toBe(
      `https://marllon.netlify.app/livros/${book.slug}`,
    );

    expect(metadata.openGraph).toMatchObject({
      url: `https://marllon.netlify.app/livros/${book.slug}`,
      images: ["https://marllon.netlify.app/og-image.png"],
    });

    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      images: ["https://marllon.netlify.app/og-image.png"],
    });
  });
});
