import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Hero from "./Hero";

let documentBody: RenderResult;

describe("<Hero />", () => {
    beforeEach(() => {
        documentBody = render(<Hero />);
    })
    test("renders", () => {
        expect(documentBody.getByText("front-end developer")).toBeInTheDocument();
        expect(documentBody.getByText(/solving/i)).toBeInTheDocument();
        expect(documentBody.getByText(/your web related needs/i)).toBeInTheDocument();
    });
});