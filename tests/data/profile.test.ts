import { describe, expect, it } from "vitest";

import { profile, about } from "@/data/profile";

describe("Profile data", () => {
  it("deve possuir informações básicas do perfil", () => {
    expect(profile.name).toBe("Marllon Panisset");
    expect(profile.role).toBeDefined();
    expect(profile.roleSecondary).toBeDefined();
    expect(profile.tagline).toBeDefined();
    expect(profile.location).toBeDefined();
  });

  it("deve possuir anos de experiência válidos", () => {
    expect(profile.yearsOfExperience).toBeGreaterThan(0);
  });

  it("deve possuir status profissional definido", () => {
    expect(profile.status).toBe("open_to_work");
  });

  it("deve possuir todos os links profissionais", () => {
    expect(profile.links.linkedin).toContain("linkedin.com");
    expect(profile.links.github).toContain("github.com");
    expect(profile.links.resume).toContain(".pdf");
    expect(profile.links.email).toContain("mailto:");
    expect(profile.links.whatsapp).toContain("wa.me");
  });
});

describe("About data", () => {
  it("deve possuir parágrafos sobre o perfil", () => {
    expect(about.paragraphs.length).toBeGreaterThan(0);

    about.paragraphs.forEach((paragraph) => {
      expect(typeof paragraph).toBe("string");
      expect(paragraph.length).toBeGreaterThan(20);
    });
  });

  it("deve possuir áreas de atuação", () => {
    expect(about.focusAreas.length).toBeGreaterThan(0);

    about.focusAreas.forEach((area) => {
      expect(typeof area).toBe("string");
      expect(area.length).toBeGreaterThan(5);
    });
  });
});
