import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

vi.mock("@/components/navigation/Nav", () => ({
  Nav: () => <nav>Nav</nav>,
}));

vi.mock("@/components/sections/Hero", () => ({
  Hero: () => <section>Hero</section>,
}));

vi.mock("@/components/sections/About", () => ({
  About: () => <section>About</section>,
}));

vi.mock("@/components/sections/Experience", () => ({
  Experience: () => <section>Experience</section>,
}));

vi.mock("@/components/sections/Skills", () => ({
  Skills: () => <section>Skills</section>,
}));

vi.mock("@/components/sections/Projects", () => ({
  Projects: () => <section>Projects</section>,
}));

vi.mock("@/components/sections/Contact", () => ({
  Contact: () => <section>Contact</section>,
}));

describe("Home Page", () => {
  it("deve renderizar a estrutura principal da home", () => {
    render(<Home />);

    expect(screen.getByText("Nav")).toBeInTheDocument();

    expect(screen.getByText("Hero")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("deve renderizar as seções na ordem correta", () => {
    render(<Home />);

    const main = screen.getByRole("main");

    const sections = Array.from(main.children).map(
      (element) => element.textContent,
    );

    expect(sections).toEqual([
      "Hero",
      "About",
      "Experience",
      "Skills",
      "Projects",
      "Contact",
    ]);
  });

  it("deve conter a navegação fora do main", () => {
    render(<Home />);

    expect(screen.getByText("Nav")).toBeInTheDocument();

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
