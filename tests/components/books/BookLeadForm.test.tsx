import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BookLeadForm } from "@/components/books/BookLeadForm";

const pdf = "/livros/programacao-na-era-da-ia/programacao-na-era-da-ia.pdf";

afterEach(() => {
  vi.unstubAllGlobals();
  window.history.replaceState({}, "", "/");
});

describe("BookLeadForm", () => {
  it("não libera o PDF antes do envio", () => {
    render(
      <BookLeadForm
        bookSlug="programacao-na-era-da-ia"
        pdf={pdf}
      />,
    );

    expect(screen.queryByRole("link", { name: "Baixar PDF" })).toBeNull();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("envia UTMs da URL e libera o PDF após uma resposta bem-sucedida", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    window.history.replaceState(
      {},
      "",
      "/livros/programacao-na-era-da-ia?utm_source=instagram&utm_medium=dm&utm_campaign=ebook_programacao_ia",
    );

    render(
      <BookLeadForm
        bookSlug="programacao-na-era-da-ia"
        pdf={pdf}
      />,
    );

    fireEvent.change(screen.getByLabelText("Nome"), {
      target: { value: "Marllon" },
    });
    fireEvent.change(screen.getByLabelText("E-mail"), {
      target: { value: "marllon@example.com" },
    });
    fireEvent.submit(screen.getByRole("button", { name: "Liberar meu livro" }).closest("form")!);

    await waitFor(() => {
      expect(screen.getByText("Seu livro está liberado.")).toBeInTheDocument();
    });

    const request = fetchMock.mock.calls[0][1];
    const body = JSON.parse(request.body as string);

    expect(body).toMatchObject({
      name: "Marllon",
      email: "marllon@example.com",
      bookSlug: "programacao-na-era-da-ia",
      utmSource: "instagram",
      utmMedium: "dm",
      utmCampaign: "ebook_programacao_ia",
      marketingConsent: false,
    });
    expect(screen.getByRole("link", { name: "Baixar PDF" })).toHaveAttribute(
      "href",
      pdf,
    );
  });

  it("envia marketingConsent=true quando marcado", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);

    render(
      <BookLeadForm
        bookSlug="programacao-na-era-da-ia"
        pdf={pdf}
      />,
    );

    fireEvent.change(screen.getByLabelText("Nome"), {
      target: { value: "Marllon" },
    });
    fireEvent.change(screen.getByLabelText("E-mail"), {
      target: { value: "marllon@example.com" },
    });
    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.submit(screen.getByRole("button", { name: "Liberar meu livro" }).closest("form")!);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledOnce();
    });

    expect(JSON.parse(fetchMock.mock.calls[0][1].body as string)).toMatchObject({
      marketingConsent: true,
      utmSource: null,
      utmMedium: null,
      utmCampaign: null,
    });
  });

  it("não libera o PDF quando a persistência falha", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        json: vi.fn().mockResolvedValue({ message: "Falha de persistência." }),
      }),
    );

    render(
      <BookLeadForm
        bookSlug="programacao-na-era-da-ia"
        pdf={pdf}
      />,
    );

    fireEvent.change(screen.getByLabelText("Nome"), {
      target: { value: "Marllon" },
    });
    fireEvent.change(screen.getByLabelText("E-mail"), {
      target: { value: "marllon@example.com" },
    });
    fireEvent.submit(screen.getByRole("button", { name: "Liberar meu livro" }).closest("form")!);

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("Falha de persistência.");
    });

    expect(screen.queryByRole("link", { name: "Baixar PDF" })).toBeNull();
  });
});
