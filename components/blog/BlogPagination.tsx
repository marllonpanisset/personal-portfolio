import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
  category?: string;
  tag?: string;
};

export default function BlogPagination({
  currentPage,
  totalPages,
  category,
  tag,
}: Props) {
  function createUrl(page: number) {
    const params = new URLSearchParams();

    if (category) {
      params.set("category", category);
    }

    if (tag) {
      params.set("tag", tag);
    }

    if (page > 1) {
      params.set("page", String(page));
    }

    const query = params.toString();

    return query ? `/blog?${query}` : "/blog";
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className="
        flex
        items-center
        justify-between
        border-t
        border-border/40
        pt-8
      "
      aria-label="Paginação"
    >
      {currentPage > 1 ? (
        <Link
          href={createUrl(currentPage - 1)}
          className="
            text-sm
            text-muted-foreground
            hover:text-white
            transition-colors
          "
        >
          ← Anterior
        </Link>
      ) : (
        <span />
      )}

      <div
        className="
        flex
        items-center
        gap-2
      "
      >
        {Array.from(
          {
            length: totalPages,
          },
          (_, index) => index + 1,
        ).map((page) => (
          <Link
            key={page}
            href={createUrl(page)}
            className={`
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-md
              text-sm
              transition-colors

              ${
                page === currentPage
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-white"
              }

            `}
          >
            {page}
          </Link>
        ))}
      </div>

      {currentPage < totalPages ? (
        <Link
          href={createUrl(currentPage + 1)}
          className="
            text-sm
            text-muted-foreground
            hover:text-white
            transition-colors
          "
        >
          Próximo →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
