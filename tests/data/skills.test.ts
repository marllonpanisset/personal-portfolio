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
      "JavaScript",
      "Next.js",
      "TypeScript",
      "VTEX IO",
      "VTEX Legacy",
      "jQuery",
      "MDX",
      "Supabase",
      "Git",
      "GitHub",
      "Vitest",
      "React Testing Library",
      "ESLint",
      "SEO",
    ];

    requiredSkills.forEach((skill) => {
      expect(allSkills).toContain(skill);
    });
  });

  it("deve possuir categorias profissionais esperadas", () => {
    const labels = skillGroups.map((group) => group.label);

    expect(labels).toContain("Front-End");
    expect(labels).toContain("E-commerce e CMS");
    expect(labels).toContain("Qualidade e Ferramentas");
  });
});
