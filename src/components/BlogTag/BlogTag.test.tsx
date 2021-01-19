import * as React from "react";
import TestRenderer from "react-test-renderer";
import { render, RenderResult } from "@testing-library/react";

import BlogTag from "@/components/BlogTag/BlogTag";

let documentBody: RenderResult;

describe("<BlogTag {...props} />", () => {

    test("renders", () => {
        documentBody = render(<BlogTag  tagName="beginner" />);
        
        expect(documentBody.getByText(/beginner/i)).toBeInTheDocument();
    });

    test("renders fallback option", () => {
        documentBody = render(<BlogTag />);
        
        expect(documentBody.getByText(/unable to retrieve tag name/i)).toBeInTheDocument();
    });

    test("render snapshot", () => {
        const tree = TestRenderer
        .create(<BlogTag tagName="beginner" />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});