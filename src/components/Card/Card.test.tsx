import * as React from "react";
import TestRenderer from "react-test-renderer";
import { render, RenderResult } from "@testing-library/react";

import Card from "@/components/Card/Card";
import { regVariant, staggerVariant } from "@/animations/home";

let documentBody: RenderResult;

describe("<Button />", () => {
    const props = {
        items: [ "javascript", "css" ],
        header: "my skills",
        childVariant: regVariant,
        parentVariant: staggerVariant
    };

    test("renders", () => {
        documentBody = render(<Card {...props} />);
        
        expect(documentBody.getByRole("heading", { name: "my skills" })).toBeInTheDocument();
        expect(documentBody.getByRole("list")).toContainElement(documentBody.getAllByRole("listitem")[0]);
        expect(documentBody.getByRole("list")).toContainElement(documentBody.getAllByRole("listitem")[1]);
    });

    test("render snapshot", () => {
        const tree = TestRenderer
        .create(<Card {...props} />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});