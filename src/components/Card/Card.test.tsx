import * as React from "react";
import { render, RenderResult } from "@testing-library/react";

import Card from "@/components/Card/Card";

let documentBody: RenderResult;

describe("<Button />", () => {
    const cardProps = {
        items: ["javascript", "css"],
        header: "test header",
        childVariant: {
            hidden: {},
            visible: {}
        },
        parentVariant: {
            hidden: {},
            visible: {}
        }
    };
    beforeEach(() => {
        documentBody = render(<Card {...cardProps} />);
    })
    test("renders", () => {
        expect(documentBody.getByText("test header")).toBeInTheDocument();
        expect(documentBody.getByText("javascript")).toBeInTheDocument();
        expect(documentBody.getByText("css")).toBeInTheDocument();
    });
});