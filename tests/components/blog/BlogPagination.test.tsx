import { render, screen } from "@testing-library/react";
import BlogPagination from "@/components/blog/BlogPagination";

describe("BlogPagination", () => {
  it("não deve renderizar quando existir apenas uma página", () => {
    const { container } = render(
      <BlogPagination currentPage={1} totalPages={1} />,
    );

    expect(container.firstChild).toBeNull();
  });

  it("deve renderizar a paginação quando existir mais de uma página", () => {
    render(<BlogPagination currentPage={1} totalPages={3} />);

    expect(screen.getByLabelText("Paginação")).toBeInTheDocument();

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("deve renderizar link anterior quando não estiver na primeira página", () => {
    render(<BlogPagination currentPage={2} totalPages={3} />);

    const previous = screen.getByRole("link", {
      name: /Anterior/i,
    });

    expect(previous).toHaveAttribute("href", "/blog");
  });

  it("não deve renderizar link anterior na primeira página", () => {
    render(<BlogPagination currentPage={1} totalPages={3} />);

    expect(
      screen.queryByRole("link", {
        name: /Anterior/i,
      }),
    ).not.toBeInTheDocument();
  });

  it("deve renderizar link próximo quando não estiver na última página", () => {
    render(<BlogPagination currentPage={2} totalPages={3} />);

    const next = screen.getByRole("link", {
      name: /Próximo/i,
    });

    expect(next).toHaveAttribute("href", "/blog?page=3");
  });

  it("não deve renderizar link próximo na última página", () => {
    render(<BlogPagination currentPage={3} totalPages={3} />);

    expect(
      screen.queryByRole("link", {
        name: /Próximo/i,
      }),
    ).not.toBeInTheDocument();
  });

  it("deve criar URLs mantendo categoria", () => {
    render(
      <BlogPagination
        currentPage={1}
        totalPages={3}
        category="cyber-security"
      />,
    );

    const pageTwo = screen.getByRole("link", {
      name: "2",
    });

    expect(pageTwo).toHaveAttribute(
      "href",
      "/blog?category=cyber-security&page=2",
    );
  });

  it("deve criar URLs mantendo tag", () => {
    render(<BlogPagination currentPage={1} totalPages={3} tag="linux" />);

    const pageTwo = screen.getByRole("link", {
      name: "2",
    });

    expect(pageTwo).toHaveAttribute("href", "/blog?tag=linux&page=2");
  });

  it("deve combinar categoria e tag na URL", () => {
    render(
      <BlogPagination
        currentPage={2}
        totalPages={4}
        category="security"
        tag="network"
      />,
    );

    const next = screen.getByRole("link", {
      name: /Próximo/i,
    });

    expect(next).toHaveAttribute(
      "href",
      "/blog?category=security&tag=network&page=3",
    );
  });

  it("deve marcar a página atual corretamente", () => {
    render(<BlogPagination currentPage={2} totalPages={3} />);

    const currentPage = screen.getByRole("link", {
      name: "2",
    });

    expect(currentPage.className).toContain("bg-primary");
  });
});
