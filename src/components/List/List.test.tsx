import * as React from "react";
import { render, RenderResult } from "@testing-library/react";

import List from "@/components/List/List";

let documentBody: RenderResult;

describe("<Hero />", () => {
    const names = ["html stack caption", "css stack caption"];
    const images = [
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
        documentBody = render(<List images={images} names={names} />);
    })
    test("renders", () => {
        expect(documentBody.getByText("html stack caption")).toBeInTheDocument();
        expect(documentBody.getByText("css stack caption")).toBeInTheDocument();
    });
});