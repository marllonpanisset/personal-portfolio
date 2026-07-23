import "@testing-library/jest-dom/vitest";

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: class IntersectionObserver {
    observe() {}

    unobserve() {}

    disconnect() {}
  },
});
