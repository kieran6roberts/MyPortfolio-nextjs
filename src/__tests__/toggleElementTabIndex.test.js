import { getAllByText, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import toggleElementTabIndex from "../focusTrap/toggleElementTabIndex";

describe("toggle elements tab indexes", () => {
  document.body.innerHTML = `
  <div class="bg-el">back</div>
  <div class="bg-el">back</div>
  <div class="fg-el">fore</div>
  <div class="fg-el">fore</div>
  `;
  const foregroundEls = screen.getAllByText("fore");
  const backgroundEls = screen.getAllByText("back");

  test("non array arg throws error", () => {
    expect(() => toggleElementTabIndex(f, "2")).toThrow(Error);
    expect(() => toggleElementTabIndex([])).not.toThrow(Error);
  });

  test("adds tab index attributes", () => {
    toggleElementTabIndex(foregroundEls, "1");

    expect(foregroundEls[0]).toHaveAttribute("tabindex", "1");
    expect(foregroundEls[1]).toHaveAttribute("tabindex", "1");

    toggleElementTabIndex(backgroundEls);

    expect(backgroundEls[0]).toHaveAttribute("tabindex", "0");
    expect(backgroundEls[1]).toHaveAttribute("tabindex", "0");
  });
});