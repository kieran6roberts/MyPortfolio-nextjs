import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Form from "./Form";

let documentBody: RenderResult;

describe("<Button />", () => {
    beforeEach(() => {
        documentBody = render(<Form />);
    })
    test("renders", () => {
        expect(documentBody.getByText("submit")).toBeInTheDocument();
    });
});