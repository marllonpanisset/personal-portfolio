import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CategoryBadge from "@/components/blog/CategoryBadge";

describe("CategoryBadge", () => {
  it("deve renderizar a categoria recebida", () => {
    render(<CategoryBadge category="Tecnologia" />);

    expect(screen.getByText("Tecnologia")).toBeInTheDocument();
  });

  it("deve renderizar diferentes categorias corretamente", () => {
    const { rerender } = render(<CategoryBadge category="Segurança" />);

    expect(screen.getByText("Segurança")).toBeInTheDocument();

    rerender(<CategoryBadge category="Frontend" />);

    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });

  it("deve renderizar o texto exatamente como recebido", () => {
    render(<CategoryBadge category="Cyber Security" />);

    const badge = screen.getByText("Cyber Security");

    expect(badge.textContent).toBe("Cyber Security");
  });

  it("deve possuir as classes visuais principais", () => {
    render(<CategoryBadge category="Tecnologia" />);

    const badge = screen.getByText("Tecnologia");

    expect(badge).toHaveClass("inline-flex", "rounded-full", "text-primary");
  });
});
