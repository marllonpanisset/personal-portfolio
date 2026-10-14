import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getPostBySlug, getPosts } from "@/lib/blog";
import { absoluteUrl, defaultOpenGraphImage } from "@/lib/site-metadata";

import { Container } from "@/components/ui/Container";
import CategoryBadge from "@/components/blog/CategoryBadge";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
    };
  }

  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      images: [defaultOpenGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [defaultOpenGraphImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-32">
      <Container>
        <div className="max-w-5xl mx-auto">
          <CategoryBadge category={post.category} />

          <h1
            className="
            mt-6
            max-w-4xl
            text-4xl
            md:text-5xl
            font-bold
            text-ink
            leading-tight
          "
          >
            {post.title}
          </h1>

          <p
            className="
            mt-6
            max-w-3xl
            text-lg
            text-ink-muted
            leading-relaxed
          "
          >
            {post.excerpt}
          </p>

          <div
            className="
            mt-6
            flex
            flex-wrap
            gap-4
            text-sm
            text-ink-muted
          "
          >
            <span>{post.date}</span>

            {post.readingTime && <span>• {post.readingTime}</span>}
          </div>

          {post.tags?.length > 0 && (
            <div
              className="
              mt-6
              flex
              flex-wrap
              gap-2
            "
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-signal-dim/50
                  text-signal
                  border
                  border-signal/30
                "
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div
            className="
              mt-16
              border-t
              border-base-border
              pt-12

              prose
              prose-invert
              prose-lg
              max-w-4xl

              prose-headings:text-ink
              prose-headings:font-bold

              prose-h1:text-4xl
              prose-h1:mb-8

              prose-h2:text-3xl
              prose-h2:mt-12
              prose-h2:mb-6

              prose-h3:text-2xl
              prose-h3:mt-8
              prose-h3:mb-4

              prose-p:text-ink-muted
              prose-p:leading-relaxed
              prose-p:my-6

              prose-ul:my-6
              prose-li:text-ink-muted
              prose-li:my-2

              prose-code:text-signal
              prose-code:bg-signal-dim/50
              prose-code:px-1
              prose-code:rounded

              prose-pre:bg-black/40
              prose-pre:border
              prose-pre:border-base-border

              prose-blockquote:border-signal/40
              prose-blockquote:text-ink-muted
            "
          >
            <MDXRemote source={post.content} />
          </div>
        </div>
      </Container>
    </article>
  );
}
