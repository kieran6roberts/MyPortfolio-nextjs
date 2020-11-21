import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

jest
  .mock("../focusTrap/focusTrap.js")
  .mock("../toggleCaseStudy.js");

afterEach( () => {
  jest.clearAllMocks();
});

describe("toggle case study open and close states", () => {
  document.body.innerHTML = `
    <div data-testid="modal" class="modal"></div>
    <section data-testid="wrapper" class="case-studies">
      <div data-testid="caseStudy" id="case" class="case-study">
       <button class="case__btn">
          case btn
       <button>
       </div>

       <div data-testid="caseStudy" id="case" class="case-study">
       <button class="case__btn">
          case btn
       <button>
      </div>
    </section>

    <div class="case"></div>

    <button class="case-toggle">
      close btn
    </button>
    <button class="case-toggle">
      close btn
    </button>
  `;
  require("../toggleCaseStudy.js");
  require("../focusTrap/focusTrap.js");

  const openCaseBtns = screen.queryAllByText("case btn");
  const modalEl = screen.queryByTestId("modal");
  const closeCaseBtns = screen.queryAllByText("close btn");
  const wrapperEl = screen.queryByTestId("wrapper");

  test("toggle open", () => {
    userEvent.click(openCaseBtns[0]);
    expect(document.body).toHaveClass("hidden");
    expect(modalEl).toHaveClass("open");
    expect(wrapperEl).toHaveClass("open");
  });
  test("toggle close", () => {
    userEvent.click(closeCaseBtns[0]);
    expect(document.body).not.toHaveClass("hidden");
    expect(modalEl).not.toHaveClass("open");
    expect(wrapperEl).not.toHaveClass("open");
  });
});