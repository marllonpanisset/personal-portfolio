import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { About } from "@/components/sections/About";
import { about } from "@/data/profile";

describe("About section", () => {
  it("deve renderizar a seção sobre", () => {
    render(<About />);

    expect(screen.getByText("Sobre")).toBeInTheDocument();
  });

  it("deve renderizar todos os parágrafos do perfil", () => {
    render(<About />);

    about.paragraphs.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
  });

  it("deve renderizar a imagem de perfil", () => {
    render(<About />);

    const image = screen.getByAltText("Marllon Panisset");

    expect(image).toBeInTheDocument();
  });

  it("deve renderizar todas as áreas de atuação", () => {
    render(<About />);

    about.focusAreas.forEach((area) => {
      expect(screen.getByText(area)).toBeInTheDocument();
    });
  });

  it("deve possuir lista de áreas de atuação", () => {
    render(<About />);

    const lists = screen.getAllByRole("list");

    expect(lists.length).toBeGreaterThan(0);
  });
});
