import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import SubHeader from "./SubHeader";

let documentBody: RenderResult;

describe("<Layout />", () => {
    beforeEach(() => {
        documentBody = render(<SubHeader title="title" />);
    })
    test("renders", () => {
        expect(documentBody.getByText("title")).toBeInTheDocument();
    });
});