import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";

describe("Projects data", () => {
  it("deve possuir projetos cadastrados", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("todos os projetos devem possuir campos obrigatórios", () => {
    projects.forEach((project) => {
      expect(project.slug).toBeTruthy();
      expect(project.name).toBeTruthy();
      expect(project.category).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.longDescription).toBeTruthy();
      expect(project.problem).toBeTruthy();
      expect(project.solution).toBeTruthy();

      expect(Array.isArray(project.highlights)).toBe(true);
      expect(project.highlights.length).toBeGreaterThan(0);

      expect(Array.isArray(project.stack)).toBe(true);
      expect(project.stack.length).toBeGreaterThan(0);
    });
  });

  it("não deve possuir slugs duplicados", () => {
    const slugs = projects.map((project) => project.slug);

    const uniqueSlugs = new Set(slugs);

    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it("todos os projetos devem possuir categoria definida", () => {
    projects.forEach((project) => {
      expect(project.category.trim().length).toBeGreaterThan(0);
    });
  });

  it("imagens devem utilizar caminhos válidos", () => {
    projects.forEach((project) => {
      if (project.image) {
        expect(project.image).toMatch(/^\/projects\/.+\.(png|jpg|jpeg|webp)$/);
      }
    });
  });

  it("links externos devem ser URLs válidas", () => {
    projects.forEach((project) => {
      if (project.github) {
        expect(project.github).toMatch(/^https:\/\/github\.com\//);
      }

      if (project.demo) {
        expect(project.demo).toMatch(/^https?:\/\/.+/);
      }
    });
  });

  it("stack deve conter tecnologias como texto", () => {
    projects.forEach((project) => {
      project.stack.forEach((technology) => {
        expect(typeof technology).toBe("string");

        expect(technology.trim().length).toBeGreaterThan(0);
      });
    });
  });
});
