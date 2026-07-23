import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Contact } from "@/components/sections/Contact";
import { profile } from "@/data/profile";

describe("Contact section", () => {
  it("deve renderizar a seção de contato", () => {
    render(<Contact />);

    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("deve possuir a seção com id contato", () => {
    render(<Contact />);

    const section = document.querySelector("#contato");

    expect(section).toBeInTheDocument();
  });

  it("deve renderizar a mensagem principal de contato", () => {
    render(<Contact />);

    expect(
      screen.getByText(
        /Aberto a conversar sobre oportunidades em suporte técnico e sustentação de aplicações/i,
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar o texto de prazo de resposta", () => {
    render(<Contact />);

    expect(
      screen.getByText(/Respondo em até 24h nos canais abaixo/i),
    ).toBeInTheDocument();
  });

  it("deve renderizar todos os canais de contato", () => {
    render(<Contact />);

    expect(screen.getByText("E-mail")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
  });

  it("deve renderizar os valores dos canais", () => {
    render(<Contact />);

    expect(screen.getByText("Enviar mensagem")).toBeInTheDocument();
    expect(screen.getByText("/in/marllon-panisset")).toBeInTheDocument();
    expect(screen.getByText("@marllonpanisset")).toBeInTheDocument();
    expect(screen.getByText("Falar agora")).toBeInTheDocument();
  });

  it("deve possuir os links corretos dos canais", () => {
    render(<Contact />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(4);

    expect(links[0]).toHaveAttribute("href", profile.links.email);
    expect(links[1]).toHaveAttribute("href", profile.links.linkedin);
    expect(links[2]).toHaveAttribute("href", profile.links.github);
    expect(links[3]).toHaveAttribute("href", profile.links.whatsapp);
  });

  it("deve abrir os canais externos em nova aba", () => {
    render(<Contact />);

    const links = screen.getAllByRole("link");

    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    });
  });
});
