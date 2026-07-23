import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Experience } from "@/components/sections/Experience";
import { experience } from "@/data/experience";

describe("Experience section", () => {
  it("deve renderizar a seção de experiência", () => {
    render(<Experience />);

    expect(screen.getByText("Experiência")).toBeInTheDocument();
  });

  it("deve renderizar todas as experiências cadastradas", () => {
    render(<Experience />);

    experience.forEach((item) => {
      expect(screen.getAllByText(item.role).length).toBeGreaterThan(0);

      expect(screen.getAllByText(item.company).length).toBeGreaterThan(0);
    });
  });

  it("deve renderizar os períodos das experiências", () => {
    render(<Experience />);

    experience.forEach((item) => {
      expect(screen.getByText(item.period)).toBeInTheDocument();
    });
  });

  it("deve renderizar localização e descrição", () => {
    render(<Experience />);

    experience.forEach((item) => {
      expect(screen.getAllByText(item.location).length).toBeGreaterThan(0);

      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it("deve renderizar todos os destaques da experiência", () => {
    render(<Experience />);

    experience.forEach((item) => {
      item.highlights.forEach((highlight) => {
        expect(screen.getByText(highlight)).toBeInTheDocument();
      });
    });
  });

  it("deve possuir uma lista de experiências", () => {
    render(<Experience />);

    const lists = screen.getAllByRole("list");

    expect(lists.length).toBeGreaterThan(0);
  });
});
