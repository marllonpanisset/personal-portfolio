import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Projects } from "@/components/sections/Projects";
import { projects } from "@/data/projects";

describe("Projects section", () => {
  it("deve renderizar a seção de projetos", () => {
    render(<Projects />);

    expect(screen.getByText("Projetos")).toBeInTheDocument();
  });

  it("deve possuir a seção com id projetos", () => {
    render(<Projects />);

    const section = document.querySelector("#projetos");

    expect(section).toBeInTheDocument();
  });

  it("deve renderizar todos os projetos cadastrados", () => {
    render(<Projects />);

    projects.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    });
  });

  it("deve renderizar categorias dos projetos", () => {
    render(<Projects />);

    projects.forEach((project) => {
      expect(screen.getByText(project.category)).toBeInTheDocument();
    });
  });

  it("deve renderizar descrição dos projetos", () => {
    render(<Projects />);

    projects.forEach((project) => {
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it("deve renderizar tecnologias utilizadas nos projetos", () => {
    render(<Projects />);

    const allTechnologies = [
      ...new Set(projects.flatMap((project) => project.stack)),
    ];

    allTechnologies.forEach((tech) => {
      expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
    });
  });

  it("deve renderizar links de github quando existirem", () => {
    render(<Projects />);

    projects
      .filter((project) => project.github)
      .forEach(() => {
        expect(screen.getAllByText("GitHub").length).toBeGreaterThan(0);
      });
  });

  it("deve renderizar links de demo quando existirem", () => {
    render(<Projects />);

    projects
      .filter((project) => project.demo)
      .forEach(() => {
        expect(screen.getAllByText("Demo").length).toBeGreaterThan(0);
      });
  });

  it("deve criar links externos com nova aba", () => {
    render(<Projects />);

    const externalLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("target") === "_blank");

    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute("rel", "noreferrer");
    });
  });
});
