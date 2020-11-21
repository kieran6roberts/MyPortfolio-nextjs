import { getAllByText, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import findModalTabs from "../focusTrap/findModalTabs";

describe("find the open modal", () => {
  document.body.innerHTML = `
  <div data-testid="open" class="open">
    <div class="bg-el">back</div>
    <div class="bg-el">back</div>
    <div class="fg-el">fore</div>
    <div class="fg-el">fore</div>
  </div>
  <div data-testid="open">
    <div class="bg-el">back</div>
    <div class="bg-el">back</div>
    <div class="fg-el">fore</div>
    <div class="fg-el">fore</div>
  </div>
  `;
  const foregroundEls = screen.getAllByText("fore");
  const openEls = screen.getAllByTestId("open");

  test("non array arg throws error", () => {
    expect(() => findModalTabs("string")).toThrow();
  });

  test("function sets attributes of open modal", () => {
    findModalTabs(openEls);
    expect(foregroundEls[0]).toHaveAttribute("tabindex", "1");
    expect(foregroundEls[1]).toHaveAttribute("tabindex", "1");
    expect(foregroundEls[2]).not.toHaveAttribute("tabindex", "1");
    expect(foregroundEls[3]).not.toHaveAttribute("tabindex", "1");
  });
});