import Link from "next/link";

import type { BlogPost } from "@/types/blog";

type Props = {
  posts: BlogPost[];
};

export default function BlogSidebar({ posts }: Props) {
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  const tags = Array.from(new Set(posts.flatMap((post) => post.tags))).slice(
    0,
    10,
  );

  return (
    <aside className="space-y-10">
      {/* Categorias */}

      <div>
        <h3
          className="
          text-sm
          font-semibold
          text-white
          mb-4
        "
        >
          Categorias
        </h3>

        <ul className="space-y-2">
          <li>
            <Link
              href="/blog"
              className="
                text-sm
                text-muted-foreground
                hover:text-white
                transition-colors
              "
            >
              Todos
            </Link>
          </li>

          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="
                  text-sm
                  text-muted-foreground
                  hover:text-white
                  transition-colors
                "
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}

      {tags.length > 0 && (
        <div>
          <h3
            className="
            text-sm
            font-semibold
            text-white
            mb-4
          "
          >
            Tags
          </h3>

          <div
            className="
            flex
            flex-wrap
            gap-2
          "
          >
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="
                  rounded-full
                  border
                  border-border
                  px-3
                  py-1
                  text-xs
                  text-muted-foreground
                  hover:text-white
                  hover:border-white/40
                  transition-colors
                "
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
