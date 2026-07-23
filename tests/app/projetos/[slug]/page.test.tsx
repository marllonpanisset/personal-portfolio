import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import ProjectPage from "@/app/projetos/[slug]/page";

import { projects } from "@/data/projects";

const { mockNotFound } = vi.hoisted(() => ({
  mockNotFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

vi.mock("next/navigation", () => ({
  notFound: mockNotFound,
}));

vi.mock("@/components/navigation/Nav", () => ({
  Nav: () => <nav>Nav</nav>,
}));

vi.mock("@/components/sections/Footer", () => ({
  Footer: () => <footer>Footer</footer>,
}));

vi.mock("next/image", () => ({
  default: ({ fill, priority, ...props }: any) => <img {...props} />,
}));

describe("ProjectPage", () => {
  it("deve renderizar um projeto existente", () => {
    const project = projects[0];

    render(
      <ProjectPage
        params={{
          slug: project.slug,
        }}
      />,
    );

    expect(screen.getByText(project.name)).toBeInTheDocument();

    expect(screen.getByText(project.description)).toBeInTheDocument();
  });

  it("deve renderizar links do GitHub e demo quando existirem", () => {
    const project = projects.find((item) => item.github && item.demo);

    if (!project) {
      throw new Error("Projeto com github e demo não encontrado");
    }

    render(
      <ProjectPage
        params={{
          slug: project.slug,
        }}
      />,
    );

    expect(screen.getByText("GitHub")).toBeInTheDocument();

    expect(screen.getByText("Ver projeto")).toBeInTheDocument();
  });

  it("deve renderizar imagem quando o projeto possui imagem", () => {
    const project = projects.find((item) => item.image);

    if (!project) {
      throw new Error("Projeto com imagem não encontrado");
    }

    render(
      <ProjectPage
        params={{
          slug: project.slug,
        }}
      />,
    );

    const image = screen.getByAltText(project.name);

    expect(image).toBeInTheDocument();
  });

  it("deve chamar notFound quando projeto não existir", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() =>
      render(
        <ProjectPage
          params={{
            slug: "projeto-inexistente",
          }}
        />,
      ),
    ).toThrow("NEXT_NOT_FOUND");

    consoleError.mockRestore();
  });
});
