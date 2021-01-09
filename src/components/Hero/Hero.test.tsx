import * as React from "react";
import TestRenderer from "react-test-renderer"; 
import { render, RenderResult } from "@testing-library/react";

import Hero from "@/components/Hero/Hero";

let documentBody: RenderResult;

describe("<Hero />", () => {
    beforeEach(() => {
        documentBody = render(<Hero />);
    })
    test("renders", () => {
        expect(documentBody.getByRole("heading", { name: /web developer/i })).toBeInTheDocument();
        expect(documentBody.getByText(/solving/i)).toBeInTheDocument();
        expect(documentBody.getByText(/your web related needs/i)).toBeInTheDocument();
        expect(documentBody.getByAltText(/stylized selfie/)).toBeInTheDocument();
    });

    test("render snapshot", () => {
        const tree = TestRenderer
        .create(<Hero />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});