import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import TestRenderer from "react-test-renderer";

import Layout from "@/components/Layout/Layout";

let documentBody: RenderResult;


describe("<Layout />", () => {
    test("renders", () => {
        documentBody = render(<Layout><h1>mock layout header</h1></Layout>);

        expect(documentBody.getByRole("navigation")).toBeInTheDocument();
        expect(documentBody.getByRole("main")).toBeInTheDocument();
        expect(documentBody.getByText(/created and designed by kieran roberts/i)).toBeInTheDocument();

        expect(documentBody.getByRole("link", { name: /Home Kieran Roberts/ })).toBeInTheDocument();
        expect(documentBody.getByRole("link", { name: /projects/ })).toBeInTheDocument();
        expect(documentBody.getByRole("link", { name: /contact me/ })).toBeInTheDocument();
        expect(documentBody.getByRole("heading", { name: /mock layout header/ })).toBeInTheDocument();
    });

    test("render snpashot", () => {
        const tree = TestRenderer
        .create(<Layout><h1>mock layout header</h1></Layout>)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});