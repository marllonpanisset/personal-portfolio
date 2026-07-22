import Link from "next/link";

import type { BlogPost } from "@/types/blog";
import CategoryBadge from "./CategoryBadge";


type Props = {
  post: BlogPost;
};


export default function BlogCard({
  post,
}: Props) {

  return (
    <article
      className="
        group
        rounded-2xl
        border
        border-border/40
        bg-card/30
        p-6
        transition
        hover:border-primary/30
      "
    >

      <CategoryBadge category={post.category}/>

      <h2
        className="
          mt-5
          font-heading
          text-xl
          font-bold
          text-white
          group-hover:text-primary
          transition-colors
        "
      >
        {post.title}
      </h2>


      <p
        className="
          mt-3
          text-sm
          leading-relaxed
          text-muted-foreground
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
          text-muted-foreground
        "
      >
        <span>
          {post.date}
        </span>

        <span>
          {post.readingTime}
        </span>
      </div>


      <Link
        href={`/blog/${post.slug}`}
        className="
          mt-6
          inline-block
          text-sm
          font-semibold
          text-primary
        "
      >
        Ler artigo →
      </Link>

    </article>
  );
}