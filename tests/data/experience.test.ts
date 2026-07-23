import { describe, expect, it } from "vitest";

import { experience } from "@/data/experience";

describe("Experience data", () => {
  it("deve possuir experiências cadastradas", () => {
    expect(experience.length).toBeGreaterThan(0);
  });

  it("todas as experiências devem possuir campos obrigatórios", () => {
    experience.forEach((item) => {
      expect(item.company).toBeTruthy();
      expect(item.role).toBeTruthy();
      expect(item.period).toBeTruthy();
      expect(item.location).toBeTruthy();
      expect(item.description).toBeTruthy();

      expect(Array.isArray(item.highlights)).toBe(true);
    });
  });

  it("todas as experiências devem possuir pelo menos um destaque", () => {
    experience.forEach((item) => {
      expect(item.highlights.length).toBeGreaterThan(0);
    });
  });

  it("não deve possuir empresas duplicadas", () => {
    const companies = experience.map((item) => item.company);

    const uniqueCompanies = new Set(companies);

    expect(uniqueCompanies.size).toBe(companies.length);
  });

  it("deve estar ordenado da experiência mais recente para a mais antiga", () => {
    expect(experience[0].period).toBe("Jun 2022 — Dez 2022");

    expect(experience[experience.length - 1].period).toBe(
      "Ago 2011 — Jan 2016",
    );
  });

  it("deve conter experiências de desenvolvimento e suporte", () => {
    const roles = experience.map((item) => item.role);

    expect(roles.some((role) => role.includes("Desenvolvedor"))).toBe(true);

    expect(roles.some((role) => role.includes("Suporte"))).toBe(true);
  });

  it("todos os destaques devem ser textos válidos", () => {
    experience.forEach((item) => {
      item.highlights.forEach((highlight) => {
        expect(typeof highlight).toBe("string");
        expect(highlight.length).toBeGreaterThan(5);
      });
    });
  });
});
