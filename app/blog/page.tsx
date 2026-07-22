import type { Metadata } from "next";

import { getPosts } from "@/lib/blog";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogPagination from "@/components/blog/BlogPagination";

export const metadata: Metadata = {
  title: "Blog | Marllon Panisset",
  description:
    "Artigos sobre tecnologia, desenvolvimento, cyber security, carreira e aprendizados durante minha evolução profissional.",
};

type Props = {
  searchParams: Promise<{
    category?: string;
    tag?: string;
    page?: string;
  }>;
};

const POSTS_PER_PAGE = 6;

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;

  const category = params.category;

  const tag = params.tag;

  const currentPage = Number(params.page ?? "1");

  const posts = getPosts();

  const filteredPosts = posts.filter((post) => {
    if (category) {
      return post.category === category;
    }

    if (tag) {
      return post.tags.includes(tag);
    }

    return true;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,

    currentPage * POSTS_PER_PAGE,
  );

  return (
    <main className="py-32">
      <Container>
        <SectionLabel index="04" label="Blog" />

        <div className="mt-6 max-w-3xl">
          <h1
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
          "
          >
            Tecnologia, carreira e construção de projetos.
          </h1>

          <p
            className="
            mt-5
            text-muted-foreground
            leading-relaxed
          "
          >
            Um espaço para documentar minha evolução em tecnologia, estudos,
            projetos pessoais e aprendizados durante minha transição
            profissional.
          </p>
        </div>

        <div
          className="
          mt-16
          grid
          lg:grid-cols-[260px_1fr]
          gap-10
        "
        >
          {/* SIDEBAR */}

          <aside>
            <BlogSidebar posts={posts} />
          </aside>

          {/* POSTS */}

          <section aria-label="Lista de artigos" className="space-y-8">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))
            ) : (
              <p
                className="
                text-muted-foreground
              "
              >
                Nenhum artigo encontrado.
              </p>
            )}

            {totalPages > 1 && (
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                category={category}
                tag={tag}
              />
            )}
          </section>
        </div>
      </Container>
    </main>
  );
}
