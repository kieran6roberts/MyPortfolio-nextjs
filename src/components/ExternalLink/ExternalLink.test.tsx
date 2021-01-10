import * as React from "react";
import TestRenderer from "react-test-renderer";
import { render, RenderResult } from "@testing-library/react";

import ExternalLink from "@/components/ExternalLink/ExternalLink";

let documentBody: RenderResult;

describe("<ExternalLink />", () => {
    test("renders", () => {
        documentBody = render(<ExternalLink styling="justify-center" link="/">child</ExternalLink>);
        expect(documentBody.getByRole("link")).toBeInTheDocument();
        expect(documentBody.getByRole("link")).toHaveClass("justify-center");
        expect(documentBody.getByText("child")).toBeInTheDocument();
    });

    test("render snapshot", () => {
        const tree = TestRenderer
        .create(<ExternalLink styling="justify-center" link="/">child</ExternalLink>)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});