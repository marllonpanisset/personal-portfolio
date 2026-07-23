import { describe, expect, it } from "vitest";

import { skillGroups } from "@/data/skills";

describe("Skills data", () => {
  it("deve possuir grupos de habilidades", () => {
    expect(skillGroups).toBeDefined();
    expect(skillGroups.length).toBeGreaterThan(0);
  });

  it("todos os grupos devem possuir label", () => {
    skillGroups.forEach((group) => {
      expect(group.label).toBeTruthy();
    });
  });

  it("todos os grupos devem possuir habilidades", () => {
    skillGroups.forEach((group) => {
      expect(group.items.length).toBeGreaterThan(0);
    });
  });

  it("não deve possuir habilidades vazias", () => {
    skillGroups.forEach((group) => {
      group.items.forEach((skill) => {
        expect(skill.trim()).not.toBe("");
      });
    });
  });

  it("deve conter as principais competências técnicas", () => {
    const allSkills = skillGroups.flatMap((group) => group.items);

    const requiredSkills = [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Git/GitHub",
      "Linux",
      "Suporte N1/N2",
      "SQL básico",
    ];

    requiredSkills.forEach((skill) => {
      expect(allSkills).toContain(skill);
    });
  });

  it("deve possuir categorias profissionais esperadas", () => {
    const labels = skillGroups.map((group) => group.label);

    expect(labels).toContain("Suporte Técnico");
    expect(labels).toContain("Infraestrutura");
    expect(labels).toContain("Aplicações & Desenvolvimento");
    expect(labels).toContain("Plataformas");
  });
});
