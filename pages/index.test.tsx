import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Home, { Projects } from "./index";

let documentBody: RenderResult;

describe("<Home />", () => {
    beforeEach(() => {
        const mockProp = {
                name: "mock",
                description: "mock desc"
        }
        documentBody = render(<Home projects={mockProp} />);
    })
    test("renders", () => {
        expect(documentBody.getByText("home")).toBeInTheDocument();
    });
});