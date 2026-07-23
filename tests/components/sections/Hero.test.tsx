import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Hero } from "@/components/sections/Hero";
import { profile } from "@/data/profile";

describe("Hero section", () => {
  it("deve renderizar a seção principal", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: profile.name,
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar informações principais do perfil", () => {
    render(<Hero />);

    expect(
      screen.getByText(profile.role, {
        exact: false,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(profile.roleSecondary, {
        exact: false,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(profile.tagline)).toBeInTheDocument();
  });

  it("deve renderizar o status profissional", () => {
    render(<Hero />);

    expect(
      screen.getByText(`status: ${profile.status.toLowerCase()}`),
    ).toBeInTheDocument();
  });

  it("deve possuir links profissionais", () => {
    render(<Hero />);

    const linkedin = screen.getByRole("link", {
      name: /linkedin/i,
    });

    const github = screen.getByRole("link", {
      name: /github/i,
    });

    const resume = screen.getByRole("link", {
      name: /currículo/i,
    });

    const contact = screen.getByRole("link", {
      name: /contato/i,
    });

    expect(linkedin).toHaveAttribute("href", profile.links.linkedin);

    expect(github).toHaveAttribute("href", profile.links.github);

    expect(resume).toHaveAttribute("href", profile.links.resume);

    expect(contact).toHaveAttribute("href", "#contato");
  });

  it("deve abrir links externos em nova aba", () => {
    render(<Hero />);

    const linkedin = screen.getByRole("link", {
      name: /linkedin/i,
    });

    const github = screen.getByRole("link", {
      name: /github/i,
    });

    expect(linkedin).toHaveAttribute("target", "_blank");

    expect(github).toHaveAttribute("target", "_blank");
  });

  it("deve renderizar as métricas profissionais", () => {
    render(<Hero />);

    expect(
      screen.getByText(`${profile.yearsOfExperience}`),
    ).toBeInTheDocument();

    expect(screen.getByText("Anos em Tecnologia")).toBeInTheDocument();

    expect(screen.getByText("React")).toBeInTheDocument();

    expect(screen.getByText("N1 / N2")).toBeInTheDocument();

    expect(screen.getByText("Web")).toBeInTheDocument();
  });

  it("deve possuir a seção com id top", () => {
    render(<Hero />);

    const section = document.querySelector("#top");

    expect(section).toBeInTheDocument();
  });
});
