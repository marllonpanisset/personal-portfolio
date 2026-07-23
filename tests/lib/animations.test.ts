import { describe, expect, it } from "vitest";

import { fadeUp, fadeIn, stagger, viewportOnce } from "@/lib/animations";

describe("animations", () => {
  it("deve exportar fadeUp com estados hidden e visible", () => {
    expect(fadeUp).toHaveProperty("hidden");
    expect(fadeUp).toHaveProperty("visible");

    expect(fadeUp.hidden).toEqual({
      opacity: 0,
      y: 18,
    });
  });

  it("deve retornar animação visible do fadeUp com delay personalizado", () => {
    const visible = fadeUp.visible(0.5);

    expect(visible).toMatchObject({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    });
  });

  it("deve exportar fadeIn com estados hidden e visible", () => {
    expect(fadeIn).toHaveProperty("hidden");
    expect(fadeIn).toHaveProperty("visible");

    expect(fadeIn.hidden).toEqual({
      opacity: 0,
    });
  });

  it("deve retornar animação fadeIn com delay personalizado", () => {
    const visible = fadeIn.visible(0.3);

    expect(visible).toMatchObject({
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    });
  });

  it("deve criar configuração de stagger com valores padrão", () => {
    const animation = stagger();

    expect(animation).toEqual({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0,
        },
      },
    });
  });

  it("deve aceitar valores personalizados no stagger", () => {
    const animation = stagger(0.2, 0.5);

    expect(animation.visible).toEqual({
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    });
  });

  it("deve possuir configuração de viewport uma vez", () => {
    expect(viewportOnce).toEqual({
      once: true,
      margin: "-80px",
    });
  });
});
