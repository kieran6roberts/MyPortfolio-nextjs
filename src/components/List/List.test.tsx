import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import List from "./List";

let documentBody: RenderResult;

describe("<Hero />", () => {
    const NAMES = ["html stack caption", "css stack caption"];
    const IMAGES = [
        {
        __typename: "type",
        fileName: "html.svg"
     },
        {
        __typename: "type",
        fileName: "css.svg"
     }
    ];
    beforeEach(() => {
        documentBody = render(<List images={IMAGES} names={NAMES} />);
    })
    test("renders", () => {
        expect(documentBody.getByText("html stack caption")).toBeInTheDocument();
        expect(documentBody.getByText("css stack caption")).toBeInTheDocument();
    });
});