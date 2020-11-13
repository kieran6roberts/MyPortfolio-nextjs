import { toggleClassHandler } from "../toggleClassHandler.js";
import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';

describe("reusable class toggle function", () => {
    test("toggling classes on dom elements", () => {
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

        expect(wrapperEl).toBeInTheDocument();
        expect(innerDivEl).not.toBeEmptyDOMElement();
        expect(spanEl).toBeEmptyDOMElement();
        
        const mockClass = "mock";

        toggleClassHandler({}, innerDivEl, spanEl);
        expect(innerDivEl).not.toHaveClass("mock");
        expect(spanEl).not.toHaveClass("mock");

        toggleClassHandler(mockClass);
        expect(innerDivEl).not.toHaveClass("mock");
        expect(spanEl).not.toHaveClass("mock");

        toggleClassHandler(mockClass, 5, 7, 8);
        expect(innerDivEl).not.toHaveClass("mock");
        expect(spanEl).not.toHaveClass("mock");

        toggleClassHandler(mockClass, innerDivEl, spanEl);
        expect(innerDivEl).toHaveClass("mock");
        expect(spanEl).toHaveClass("mock");
    });
});