import * as React from "react";
import TestRenderer from "react-test-renderer";
import { render, RenderResult } from "@testing-library/react";

import SocialItem from "@/components/SocialItems/SocialItem/SocialItem";

let documentBody: RenderResult;

describe("<SocialItems {...props> />", () => {
    const props = {
        path: "/social",
        label: "to my social page",
        children: <h2>child</h2>
    };

    test("renders", () => {
        documentBody = render(<SocialItem {...props}/>);
        
        expect(documentBody.getByRole("link", { name: /to my social page/})).toBeInTheDocument();
    });
    
    test("props are applied", () => {
        documentBody = render(<SocialItem {...props}/>);
        
        expect(documentBody.getByRole("link", { name: /to my social page/})).toHaveAttribute("aria-label", "to my social page");
        expect(documentBody.getByRole("link", { name: /to my social page/})).toHaveAttribute("href", "/social");
        expect(documentBody.getByRole("link", { name: /to my social page/})).toContainElement(documentBody.getByRole("heading"));
    });

    test("render snapshot", () => {
        const tree = TestRenderer
        .create(<SocialItem {...props} />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});