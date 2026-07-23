import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import ProjectsPage from "@/app/projetos/page";

vi.mock("@/components/navigation/Nav", () => ({
  Nav: () => <nav data-testid="nav">Navigation</nav>,
}));

vi.mock("@/components/sections/Projects", () => ({
  Projects: () => <section data-testid="projects">Projects Section</section>,
}));

vi.mock("@/components/ui/Container", () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  ),
}));

describe("app/projetos/page", () => {
  it("deve renderizar a página de projetos", () => {
    render(<ProjectsPage />);

    expect(screen.getByTestId("nav")).toBeInTheDocument();

    expect(screen.getByTestId("projects")).toBeInTheDocument();
  });

  it("deve renderizar o título da página", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByRole("heading", {
        name: "Projetos desenvolvidos",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a descrição da página", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByText(
        /Uma seleção de projetos desenvolvidos ao longo da minha trajetória/i,
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar a categoria Projetos", () => {
    render(<ProjectsPage />);

    expect(screen.getByText("Projetos")).toBeInTheDocument();
  });

  it("deve renderizar o conteúdo dentro do Container", () => {
    render(<ProjectsPage />);

    expect(screen.getByTestId("container")).toBeInTheDocument();
  });
});
