import * as React from "react";
import TestRenderer from "react-test-renderer";
import { render, RenderResult } from "@testing-library/react";

import BlogCard from "@/components/BlogCard/BlogCard";

let documentBody: RenderResult;

describe("<BlogCard {...props} />", () => {
    const props = {
        author: "Kieran Roberts",
        description: "This is my first blog post",
        date: "19/01/2021",
        id: "post id",
        previewImage: {
            fileName: "/image.webp"
        },
        subTitle: "subTitle",
        tags: ["test-tag", "blog-tag"],
        title: "Blog Title"
    };

    test("renders", () => {
        documentBody = render(<BlogCard {...props} />);
        
        expect(documentBody.getByRole("article")).toHaveAttribute("id", "post id");
        expect(documentBody.getByAltText("blog preview")).toBeInTheDocument();
        expect(documentBody.getByRole("heading")).toHaveTextContent(/Blog Title/i);
        expect(documentBody.getByText(/kieran roberts/i)).toBeInTheDocument();
        expect(documentBody.getByText(/this is my first blog post/i)).toBeInTheDocument();
    });
    test("renders fallback options ", () => {
        documentBody = render(<BlogCard />);
        
        expect(documentBody.getByRole("heading")).toHaveTextContent("Unable to retrieve title");
        expect(documentBody.getByText("Unable to retrieve date")).toBeInTheDocument();
        expect(documentBody.getByText("Unable to retrieve blog description")).toBeInTheDocument();
        expect(documentBody.getByText("Posted by Kieran Roberts")).toBeInTheDocument();
        expect(documentBody.queryByText("test-tag")).not.toBeInTheDocument();
        expect(documentBody.queryByText("blog-tag")).not.toBeInTheDocument();
    });

    test("render snapshot", () => {
        const tree = TestRenderer
        .create(<BlogCard {...props} />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});