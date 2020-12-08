import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Button, { ButtonProps } from "./Button";

let documentBody: RenderResult;

describe("<Button />", () => {
    beforeEach(() => {
        documentBody = render(<Button link="/">child</Button>);
    })
    test("renders", () => {
        expect(documentBody.getByText("child")).toBeInTheDocument();
    });
});