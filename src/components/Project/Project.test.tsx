import * as React from "react";
import TestRenderer from "react-test-renderer";
import { render, RenderResult } from "@testing-library/react";

import Project from "@/components/Project/Project";

let documentBody: RenderResult;

describe("<Hero />", () => {
    const props = {
            title: "turncoat brewery",
            description: ["description of turncoat"],
            siteLink: "turncoat.com",
            githubLink: "github-turncoat.com",
            captions: ["cap1", "cap2", "cap3", "cap4"],
            stackImages: [{ __typename: "turnocat typename", fileName: "stack.png" }],
            stackNames: ["html"],
            images: [{ fileName: "img1", __typename: "img1" } , 
            { fileName: "img2", __typename: "img1" }, 
            { fileName: "img3", __typename: "img1" }, 
            { fileName: "img4", __typename: "img1" }],
            __typename: "typename"
    };

    test("renders", () => {
        documentBody = render(<Project {...props}/>);
        expect(documentBody.getAllByRole("article")[0]).toBeInTheDocument();
    });
    
    test("renders with props", () => {
        documentBody = render(<Project {...props}/>);
        
        expect(documentBody.getAllByRole("heading", { name: "turncoat brewery" })[0]).toBeInTheDocument();
        expect(documentBody.getAllByRole("heading", { name: "turncoat brewery" })[1]).toBeInTheDocument();
        expect(documentBody.getAllByAltText("cap1")[0]).toBeInTheDocument();
        expect(documentBody.getByAltText("cap2")).toBeInTheDocument();
        expect(documentBody.getByAltText("cap3")).toBeInTheDocument();
        expect(documentBody.getByAltText("cap4")).toBeInTheDocument();
        expect(documentBody.getAllByRole("link")[0]).toBeInTheDocument();
        expect(documentBody.getAllByRole("link")[1]).toBeInTheDocument();
        expect(documentBody.getByText(/html/)).toBeInTheDocument();
    });

    test("renders snapshot", () => {
        const tree = TestRenderer
        .create(<Project {...props} />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});