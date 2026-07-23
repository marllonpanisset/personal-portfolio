import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Nav } from "@/components/navigation/Nav";

describe("Nav", () => {
  it("deve renderizar a navegação", () => {
    render(<Nav />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("deve renderizar a logo com as iniciais do nome", () => {
    render(<Nav />);

    expect(screen.getByText("MP")).toBeInTheDocument();
  });

  it("deve renderizar os links principais de navegação", () => {
    render(<Nav />);

    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Experiência")).toBeInTheDocument();
    expect(screen.getByText("Competências")).toBeInTheDocument();
    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("deve renderizar o botão de menu mobile", () => {
    render(<Nav />);

    expect(screen.getByLabelText("Abrir menu")).toBeInTheDocument();
  });

  it("deve abrir o menu mobile ao clicar no botão", () => {
    render(<Nav />);

    fireEvent.click(screen.getByLabelText("Abrir menu"));

    expect(
      screen.getByRole("dialog", {
        name: "Menu de navegação",
      }),
    ).toBeInTheDocument();

    expect(screen.getAllByLabelText("Fechar menu")).toHaveLength(2);
  });

  it("deve fechar o menu ao clicar no botão fechar", async () => {
    render(<Nav />);

    fireEvent.click(screen.getByLabelText("Abrir menu"));

    const closeButtons = screen.getAllByLabelText("Fechar menu");

    fireEvent.click(closeButtons[1]);

    await waitFor(() => {
      expect(
        screen.queryByRole("dialog", {
          name: "Menu de navegação",
        }),
      ).not.toBeInTheDocument();
    });
  });

  it("deve fechar o menu ao pressionar Escape", async () => {
    render(<Nav />);

    fireEvent.click(screen.getByLabelText("Abrir menu"));

    fireEvent.keyDown(window, {
      key: "Escape",
    });

    await waitFor(() => {
      expect(
        screen.queryByRole("dialog", {
          name: "Menu de navegação",
        }),
      ).not.toBeInTheDocument();
    });
  });

  it("deve bloquear scroll quando menu estiver aberto", () => {
    render(<Nav />);

    fireEvent.click(screen.getByLabelText("Abrir menu"));

    expect(document.body.style.overflow).toBe("hidden");
  });

  it("deve renderizar links sociais externos no menu", () => {
    render(<Nav />);

    fireEvent.click(screen.getByLabelText("Abrir menu"));

    expect(screen.getByText("GitHub")).toBeInTheDocument();

    expect(screen.getByText("LinkedIn")).toBeInTheDocument();

    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
