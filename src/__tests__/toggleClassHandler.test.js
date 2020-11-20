import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';
import { toggleClassHandler } from "../toggleClassHandler.js";

describe("reusable class toggle function", () => {
    document.body.innerHTML = `
    <div data-testid="wrapper" class="wrapper">
        <div data-testid="div">
            home link
        </div>
        <span data-testid="empty"></span>
    </div>
`;
    const wrapperEl = screen.queryByTestId("wrapper");
    const innerDivEl = screen.queryByTestId("div");
    const spanEl = screen.queryByTestId("empty");

    const mockClass = "mock";
    const elementArr = [innerDivEl, spanEl];

    test("toggling classes on dom elements", () => {
        expect(wrapperEl).toBeInTheDocument();
        expect(innerDivEl).not.toBeEmptyDOMElement();
        expect(spanEl).toBeEmptyDOMElement();
    });
    test("providing incorrect args fails toggle", () => {
        toggleClassHandler({b: ""}, elementArr);
        expect(innerDivEl).not.toHaveClass("mock");
        expect(spanEl).not.toHaveClass("mock");

        toggleClassHandler(mockClass, "a");
        expect(innerDivEl).not.toHaveClass("mock");
        expect(spanEl).not.toHaveClass("mock");
    });
    test("array must be html elements", () => {
        toggleClassHandler(mockClass, [5, 7, 8]);
        expect(innerDivEl).not.toHaveClass("mock");
        expect(spanEl).not.toHaveClass("mock");
    });
    test("passing test toggles class", () => {
        toggleClassHandler(mockClass, elementArr);
        expect(innerDivEl).toHaveClass("mock");
        expect(spanEl).toHaveClass("mock");
    });
});