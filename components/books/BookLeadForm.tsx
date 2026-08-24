"use client";

import { useState, type FormEvent } from "react";
import { Check, Download } from "lucide-react";

type BookLeadFormProps = {
  bookSlug: string;
  pdf: string;
};

type SubmissionState = "idle" | "submitting" | "success" | "error";

type ErrorResponse = {
  message?: string;
};

export function BookLeadForm({ bookSlug, pdf }: BookLeadFormProps) {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const searchParams = new URLSearchParams(window.location.search);

    try {
      const response = await fetch("/api/livros/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          bookSlug,
          utmSource: searchParams.get("utm_source"),
          utmMedium: searchParams.get("utm_medium"),
          utmCampaign: searchParams.get("utm_campaign"),
          marketingConsent: formData.get("marketingConsent") === "on",
        }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => ({}))) as ErrorResponse;
        throw new Error(
          result.message ?? "Não foi possível liberar o livro. Tente novamente.",
        );
      }

      setSubmissionState("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível liberar o livro. Tente novamente.",
      );
      setSubmissionState("error");
    }
  }

  if (submissionState === "success") {
    return (
      <div
        aria-live="polite"
        className="rounded-xl border border-signal/30 bg-signal-dim/30 p-6 md:p-8"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal text-base">
          <Check aria-hidden="true" size={20} />
        </span>
        <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
          Seu livro está liberado.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Use o botão abaixo para baixar o PDF.
        </p>
        <a
          href={pdf}
          download
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-base transition-colors hover:bg-signal"
        >
          <Download aria-hidden="true" size={17} />
          Baixar PDF
        </a>
      </div>
    );
  }

  const isSubmitting = submissionState === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-base-border bg-base-surface/70 p-6 md:p-8"
    >
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
        Acesso gratuito
      </p>
      <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
        Receba o e-book
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        Preencha seus dados para liberar o download.
      </p>

      <div className="mt-7 space-y-5">
        <div>
          <label
            htmlFor="book-lead-name"
            className="font-mono text-[11px] uppercase tracking-widest2 text-ink-muted"
          >
            Nome
          </label>
          <input
            id="book-lead-name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-md border border-base-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-faint disabled:cursor-wait disabled:opacity-60"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label
            htmlFor="book-lead-email"
            className="font-mono text-[11px] uppercase tracking-widest2 text-ink-muted"
          >
            E-mail
          </label>
          <input
            id="book-lead-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            inputMode="email"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-md border border-base-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-faint disabled:cursor-wait disabled:opacity-60"
            placeholder="voce@exemplo.com"
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink-muted">
          <input
            name="marketingConsent"
            type="checkbox"
            disabled={isSubmitting}
            className="mt-1 h-4 w-4 shrink-0 accent-signal"
          />
          <span>
            Quero receber novos conteúdos e materiais do MarllonCode por
            e-mail.
          </span>
        </label>
      </div>

      {submissionState === "error" && (
        <p role="alert" className="mt-5 text-sm text-signal-amber">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-base transition-colors hover:bg-signal disabled:cursor-wait disabled:opacity-60"
      >
        {isSubmitting ? "Liberando..." : "Liberar meu livro"}
      </button>
    </form>
  );
}
