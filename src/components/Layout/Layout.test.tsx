import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Layout, { LayoutProps } from "./Layout";

let documentBody: RenderResult;

describe("<Layout />", () => {
    beforeEach(() => {
        documentBody = render(<Layout><h1>test child</h1></Layout>);
    })
    test("renders", () => {
        expect(documentBody.getByText("test child")).toBeInTheDocument();
    });
});