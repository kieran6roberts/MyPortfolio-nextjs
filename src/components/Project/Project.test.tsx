import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Project from "./Project";

let documentBody: RenderResult;

describe("<Hero />", () => {
    beforeEach(() => {
        documentBody = render(<Project />);
    })
    test("renders", () => {
        expect(documentBody.getByText("html stack caption")).toBeInTheDocument();
    });
});