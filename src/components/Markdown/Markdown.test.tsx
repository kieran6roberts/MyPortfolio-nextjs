import * as React from "react";
import TestRenderer from "react-test-renderer";
import { render, RenderResult } from "@testing-library/react";

import Markdown from "@/components/Markdown/Markdown";

let documentBody: RenderResult;

describe("<Markdown /> converts markdown to html", () => {
    const markdown = `## Markdown`;
    
    test("renders", () => {
        documentBody = render(<Markdown string={markdown} />);

        expect(documentBody.getByRole("heading", { name: /markdown/i })).toBeInTheDocument();
    });

    test("render snapshot", () => {
        const tree = TestRenderer
        .create(<Markdown string={markdown} />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});