import { NextResponse } from "next/server";

import {
  BookLeadPersistenceNotConfiguredError,
} from "@/lib/books/book-lead-repository";
import {
  BookUnavailableForLeadError,
  submitBookLead,
} from "@/lib/books/submit-book-lead";
import { validateBookLeadInput } from "@/lib/books/validate-book-lead";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Não foi possível ler os dados enviados." },
      { status: 400 },
    );
  }

  const validation = validateBookLeadInput(body);

  if (!validation.success) {
    return NextResponse.json(
      {
        message: "Revise os campos informados.",
        fieldErrors: validation.errors,
      },
      { status: 400 },
    );
  }

  try {
    await submitBookLead(validation.data);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    if (error instanceof BookUnavailableForLeadError) {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }

    if (error instanceof BookLeadPersistenceNotConfiguredError) {
      return NextResponse.json(
        {
          message:
            "A liberação ainda não está disponível. Tente novamente mais tarde.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { message: "Não foi possível liberar o livro. Tente novamente." },
      { status: 500 },
    );
  }
}
