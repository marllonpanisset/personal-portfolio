import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Footer } from "@/components/sections/Footer";
import { profile } from "@/data/profile";

describe("Footer", () => {
  it("deve renderizar o footer", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("deve renderizar as informações de copyright", () => {
    render(<Footer />);

    const year = new Date().getFullYear();

    expect(
      screen.getByText((content) =>
        content.includes(`© ${year} ${profile.name}`),
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar a localização", () => {
    render(<Footer />);

    expect(screen.getByText("Rio de Janeiro, Brasil")).toBeInTheDocument();
  });

  it("deve possuir a estrutura de rodapé correta", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toHaveClass(
      "border-t",
      "border-base-border",
    );
  });
});
