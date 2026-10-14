import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ProjectImageGallery } from "@/components/projects/ProjectImageGallery";

const gallery = [
  { src: "/projects/tais/login.png", alt: "Página de login", caption: "Sobre" },
  { src: "/projects/tais/dashboard-paginas.png", alt: "Lista de páginas", caption: "Páginas" },
  { src: "/projects/tais/dashboard-novo-projeto.png", alt: "Novo projeto" },
];

describe("ProjectImageGallery", () => {
  it("renderiza miniaturas sem abrir modal", () => {
    render(<ProjectImageGallery gallery={gallery} projectName="Demo" />);
    expect(
      screen.getByRole("button", { name: /Ampliar imagem: Página de login/ }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("abre modal ao clicar na imagem", async () => {
    const user = userEvent.setup();
    render(<ProjectImageGallery gallery={gallery} projectName="Demo" />);
    await user.click(
      screen.getByRole("button", { name: /Ampliar imagem: Página de login/ }),
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByTestId("gallery-zoom-level")).toHaveTextContent("100%");
  });

  it("aplica zoom com botões e restaura", async () => {
    const user = userEvent.setup();
    render(<ProjectImageGallery gallery={gallery} projectName="Demo" />);
    await user.click(
      screen.getByRole("button", { name: /Ampliar imagem: Página de login/ }),
    );
    await user.click(screen.getByRole("button", { name: "Ampliar zoom" }));
    expect(screen.getByTestId("gallery-zoom-level")).toHaveTextContent("150%");
    await user.click(screen.getByRole("button", { name: "Restaurar zoom original" }));
    expect(screen.getByTestId("gallery-zoom-level")).toHaveTextContent("100%");
  });

  it("fecha pelo botão X e pelo overlay", async () => {
    const user = userEvent.setup();
    render(<ProjectImageGallery gallery={gallery} projectName="Demo" />);
    await user.click(
      screen.getByRole("button", { name: /Ampliar imagem: Página de login/ }),
    );
    await user.click(
      screen.getByRole("button", { name: "Fechar visualização da imagem" }),
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /Ampliar imagem: Lista de páginas/ }),
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("gallery-overlay"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("fecha com Escape e expõe dialog acessível", async () => {
    const user = userEvent.setup();
    render(<ProjectImageGallery gallery={gallery} projectName="Demo" />);
    await user.click(
      screen.getByRole("button", { name: /Ampliar imagem: Página de login/ }),
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("navega pelas setas e atualiza legenda e posição", async () => {
    const user = userEvent.setup();
    render(<ProjectImageGallery gallery={gallery} projectName="Demo" />);
    await user.click(
      screen.getByRole("button", { name: /Ampliar imagem: Página de login/ }),
    );
    expect(screen.getByTestId("gallery-position")).toHaveTextContent("1 / 3");
    await user.click(screen.getByRole("button", { name: "Próxima imagem" }));
    expect(screen.getByTestId("gallery-position")).toHaveTextContent("2 / 3");
    expect(screen.getAllByText("Páginas").length).toBeGreaterThan(0);
    await user.click(screen.getByRole("button", { name: "Imagem anterior" }));
    expect(screen.getByTestId("gallery-position")).toHaveTextContent("1 / 3");
  });

  it("navega de forma circular pelo teclado", async () => {
    const user = userEvent.setup();
    render(<ProjectImageGallery gallery={gallery} projectName="Demo" />);
    await user.click(
      screen.getByRole("button", { name: /Ampliar imagem: Página de login/ }),
    );
    await user.keyboard("{ArrowLeft}");
    expect(screen.getByTestId("gallery-position")).toHaveTextContent("3 / 3");
    await user.keyboard("{ArrowRight}");
    expect(screen.getByTestId("gallery-position")).toHaveTextContent("1 / 3");
  });

  it("reseta zoom ao trocar de imagem", async () => {
    const user = userEvent.setup();
    render(<ProjectImageGallery gallery={gallery} projectName="Demo" />);
    await user.click(
      screen.getByRole("button", { name: /Ampliar imagem: Página de login/ }),
    );
    await user.click(screen.getByRole("button", { name: "Ampliar zoom" }));
    expect(screen.getByTestId("gallery-zoom-level")).toHaveTextContent("150%");
    await user.click(screen.getByRole("button", { name: "Próxima imagem" }));
    expect(screen.getByTestId("gallery-zoom-level")).toHaveTextContent("100%");
  });

  it("oculta setas com uma única imagem", async () => {
    const user = userEvent.setup();
    render(
      <ProjectImageGallery gallery={[gallery[0]]} projectName="Demo" />,
    );
    await user.click(
      screen.getByRole("button", { name: /Ampliar imagem: Página de login/ }),
    );
    expect(
      screen.queryByRole("button", { name: "Próxima imagem" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Imagem anterior" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("gallery-position")).not.toBeInTheDocument();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
