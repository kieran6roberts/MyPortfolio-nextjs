import * as React from "react";
import TestRenderer from "react-test-renderer";
import { render, RenderResult } from "@testing-library/react";

import SocialItems from "@/components/SocialItems/SocialItems";

let documentBody: RenderResult;

describe("<SocialItems {...props> />", () => {
    const props = {
        styling: "flex",
        iconColor: "text-pri"
    };

    test("renders", () => {
        documentBody = render(<SocialItems {...props}/>);

        expect(documentBody.getByRole("list")).toBeInTheDocument();
        expect(documentBody.getByRole("link", { name: /to my github page/})).toBeInTheDocument();
        expect(documentBody.getByRole("link", { name: /to my linkedin page/})).toBeInTheDocument();
        expect(documentBody.getByRole("link", { name: /to my twitter profile/})).toBeInTheDocument();
        expect(documentBody.getByRole("link", { name: /send me an email/})).toBeInTheDocument();
    });

    test("props are applied", () => {
        documentBody = render(<SocialItems {...props}/>);

        expect(documentBody.getByRole("list")).toHaveClass("flex");
        expect(documentBody.getByRole("link", { name: /to my github page/ }).firstElementChild).toHaveClass("text-pri");
        expect(documentBody.getByRole("link", { name: /to my linkedin page/ }).firstElementChild).toHaveClass("text-pri");
        expect(documentBody.getByRole("link", { name: /to my twitter profile/ }).firstElementChild).toHaveClass("text-pri");
        expect(documentBody.getByRole("link", { name: /send me an email/ }).firstElementChild).toHaveClass("text-pri");
    });

    test("render snapshot", () => {
        const tree = TestRenderer
        .create(<SocialItems {...props} />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});