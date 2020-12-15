import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Project from "./Project";

let documentBody: RenderResult;

describe("<Hero />", () => {
    const testProps = {
            title: "turncoat brewery",
            description: "description of turncoat",
            siteLink: "turncoat.com",
            githubLink: "github-turncoat.com",
            captions: "turncoat caption",
            image: "turncoat-image.webp",
            stackImages: [{ __typename: "turnocat typename", fileName: "stack.png" }],
            stackNames: ["html"]
    };

    beforeEach(() => {
        documentBody = render(<Project {...testProps}/>);
    })
    test("renders", () => {
        expect(documentBody.getByText("description of turncoat")).toBeInTheDocument();
    });
});