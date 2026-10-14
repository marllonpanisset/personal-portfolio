import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import ProjectsPage from "@/app/projetos/page";

vi.mock("@/components/sections/Projects", () => ({
  Projects: () => <section data-testid="projects">Projects Section</section>,
}));

vi.mock("@/components/ui/Container", () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  ),
}));

describe("app/projetos/page", () => {
  it("deve renderizar a página de projetos sem duplicar a navegação", () => {
    render(<ProjectsPage />);

    expect(screen.queryByTestId("nav")).not.toBeInTheDocument();

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
      screen.getByText(/Projetos autorais e para clientes/i),
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
