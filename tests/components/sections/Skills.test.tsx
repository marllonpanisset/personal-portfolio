import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Skills } from "@/components/sections/Skills";
import { skillGroups } from "@/data/skills";

describe("Skills section", () => {
  it("deve renderizar a seção de competências", () => {
    render(<Skills />);

    expect(screen.getByText("Competências")).toBeInTheDocument();
  });

  it("deve renderizar todos os grupos de habilidades", () => {
    render(<Skills />);

    skillGroups.forEach((group) => {
      expect(screen.getByText(group.label)).toBeInTheDocument();
    });
  });

  it("deve renderizar todas as habilidades cadastradas", () => {
    render(<Skills />);

    skillGroups.forEach((group) => {
      group.items.forEach((skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument();
      });
    });
  });

  it("deve possuir todas as habilidades dentro da estrutura de grupos", () => {
    render(<Skills />);

    const skills = skillGroups.flatMap((group) => group.items);

    skills.forEach((skill) => {
      expect(screen.getAllByText(skill).length).toBeGreaterThan(0);
    });
  });

  it("deve possuir a seção com id competencias", () => {
    render(<Skills />);

    const section = document.querySelector("#competencias");

    expect(section).toBeInTheDocument();
  });
});
