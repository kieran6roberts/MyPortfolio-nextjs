import * as React from "react";
import { render, RenderResult } from "@testing-library/react";

import SubHeader from "@/components/SubHeader/SubHeader";

let documentBody: RenderResult;

describe("<Layout />", () => {
    beforeEach(() => {
        documentBody = render(<SubHeader title="sub header title" />);
    })
    test("renders", () => {
        expect(documentBody.queryAllByText("sub header title")[0]).toBeInTheDocument();
        expect(documentBody.queryAllByText("sub header title")[1]).toBeInTheDocument();
    });
});