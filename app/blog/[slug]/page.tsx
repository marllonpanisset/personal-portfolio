import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getPostBySlug, getPosts } from "@/lib/blog";

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

  return {
    title: post.title,
    description: post.excerpt,
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
            text-white
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
            text-muted-foreground
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
            text-muted-foreground
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
                  bg-primary/10
                  text-primary
                  border
                  border-primary/20
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
              border-border/40
              pt-12

              prose
              prose-invert
              prose-lg
              max-w-4xl

              prose-headings:text-white
              prose-headings:font-bold

              prose-h1:text-4xl
              prose-h1:mb-8

              prose-h2:text-3xl
              prose-h2:mt-12
              prose-h2:mb-6

              prose-h3:text-2xl
              prose-h3:mt-8
              prose-h3:mb-4

              prose-p:text-muted-foreground
              prose-p:leading-relaxed
              prose-p:my-6

              prose-ul:my-6
              prose-li:text-muted-foreground
              prose-li:my-2

              prose-code:text-primary
              prose-code:bg-primary/10
              prose-code:px-1
              prose-code:rounded

              prose-pre:bg-black/40
              prose-pre:border
              prose-pre:border-border/40

              prose-blockquote:border-primary/40
              prose-blockquote:text-muted-foreground
            "
          >
            <MDXRemote source={post.content} />
          </div>
        </div>
      </Container>
    </article>
  );
}
