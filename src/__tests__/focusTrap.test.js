import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import focusTrapHandler from "../focusTrap/focusTrap";

jest.mock("../focusTrap/toggleElementTabIndex")
    .mock("../focusTrap/findModalTabs");

import findModalTabs from "../focusTrap/findModalTabs.js";
import toggleElementTabIndex from "../focusTrap/toggleElementTabIndex";

beforeEach(() => {
  findModalTabs.mockImplementation(() => jest.fn());
  toggleElementTabIndex.mockImplementation(() => jest.fn());
});

afterEach(() => {
  jest.clearAllMocks();
});

  describe("handle which elements are tabable based on active modal", () => {
    document.body.innerHTML = `
    <div class="bg-el">back</div>
    <div class="bg-el">back</div>
    <div class="fg-el">fore</div>
    <div class="fg-el">fore</div>
    `;
    const foregroundEls = screen.getAllByText("fore");
    const backgroundEls = screen.getAllByText("back");

    test("focus trap handler function", () => {
      expect(foregroundEls[0]).toBeInTheDocument();
      expect(foregroundEls[1]).toBeInTheDocument();
      expect(backgroundEls[1]).toBeInTheDocument();
      expect(backgroundEls[1]).toBeInTheDocument();


      focusTrapHandler();
      expect(toggleElementTabIndex).toHaveBeenCalledTimes(2);
      
      document.body.classList.add("open");
      focusTrapHandler();
      expect(findModalTabs).toHaveBeenCalledTimes(1);
      expect(toggleElementTabIndex).toHaveBeenCalledTimes(3);
    });
  });