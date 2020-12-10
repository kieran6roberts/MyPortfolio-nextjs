import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Card from "./Card";;

let documentBody: RenderResult;

describe("<Button />", () => {
    const ITEMS = ["javascript", "css"]
    beforeEach(() => {
        documentBody = render(<Card items={ITEMS} header="test header" />);
    })
    test("renders", () => {
        expect(documentBody.getByText("test header")).toBeInTheDocument();
        expect(documentBody.getByText("javascript")).toBeInTheDocument();
        expect(documentBody.getByText("css")).toBeInTheDocument();
    });
});