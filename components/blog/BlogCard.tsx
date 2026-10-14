import Link from "next/link";

import type { BlogPost } from "@/types/blog";
import CategoryBadge from "./CategoryBadge";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <article
      className="
        group
        rounded-2xl
        border
        border-base-border
        bg-base-surface/40
        p-6
        transition
        hover:border-signal
      "
    >
      <CategoryBadge category={post.category} />

      <h2
        className="
          mt-5
          font-display
          text-xl
          font-bold
          text-ink
          transition-colors
          group-hover:text-signal
        "
      >
        {post.title}
      </h2>

      <p
        className="
          mt-3
          text-sm
          leading-relaxed
          text-ink-muted
        "
      >
        {post.excerpt}
      </p>

      <div
        className="
          mt-5
          flex
          justify-between
          text-xs
          text-ink-muted
        "
      >
        <span>{post.date}</span>

        {post.readingTime && <span>{post.readingTime}</span>}
      </div>

      {post.tags.length > 0 && (
        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-2
          "
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-base-border
                px-2
                py-1
                text-xs
                text-ink-muted
              "
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Ler artigo: ${post.title}`}
        className="
          mt-6
          inline-block
          text-sm
          font-semibold
          text-signal
          transition-opacity
          hover:opacity-80
        "
      >
        Ler artigo →
      </Link>
    </article>
  );
}
