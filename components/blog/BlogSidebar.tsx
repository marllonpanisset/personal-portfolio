import type { BlogPost } from "@/types/blog";

type Props = {
  posts: BlogPost[];
};

export default function BlogSidebar({
  posts,
}: Props) {
  return (
    <aside className="space-y-4">

      <h3 className="text-sm font-semibold text-white">
        Categorias
      </h3>

      <ul className="space-y-2">
        {Array.from(
          new Set(posts.map((post) => post.category))
        ).map((category) => (
          <li
            key={category}
            className="text-sm text-muted-foreground"
          >
            {category}
          </li>
        ))}
      </ul>

    </aside>
  );
}