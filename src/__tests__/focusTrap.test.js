import { getAllByText, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

  describe("handle which elements are tabable based on active modal", () => {
    document.body.innerHTML = `
    <div class="bg-el">back</div>
    <div class="bg-el">back</div>
    <div class="fg-el">fore</div>
    <div class="fg-el">fore</div>
    `;
    const foregroundEls = screen.getAllByText("fore");
    const backgroundEls = screen.getAllByText("back");

    test("page load focus init", () => {
      const tab = require("../focusTrap.js");

      expect(foregroundEls[0]).toBeInTheDocument();
      expect(foregroundEls[1]).toBeInTheDocument();
      expect(backgroundEls[1]).toBeInTheDocument();
      expect(backgroundEls[1]).toBeInTheDocument();

      tab.focusTrapHandler();
      expect(foregroundEls[0]).toHaveAttribute("tabindex", "-1");
      expect(backgroundEls[0]).toHaveAttribute("tabindex", "1");
    });
    test("toggles tab index for given modal", () => {
      const tab = require("../focusTrap.js");
      const elementArr = [...foregroundEls, ...backgroundEls];

      document.body.classList.toggle("open");
      tab.focusTrapHandler(elementArr);
    });
  });