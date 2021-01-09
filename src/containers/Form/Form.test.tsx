import * as React from "react";
import "whatwg-fetch";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, RenderResult, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import Form from "@/containers/Form/Form";

let documentBody: RenderResult;

const server = setupServer(
    rest.post("https://formspree.io/f/mzbkjarl", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ message: "submit successful"}));
    })
);

describe("<Button />", () => {
    beforeAll(() => server.listen());
    beforeEach(() => documentBody = render(<Form />));
    afterAll(() => server.close());
    afterEach(() => server.resetHandlers());

    test("renders", () => {
        expect(documentBody.getByText("Name is required")).toBeInTheDocument();
        expect(documentBody.getByText("Valid email is required")).toBeInTheDocument();
        expect(documentBody.getByText("Message must be at least 20 characters")).toBeInTheDocument();
        expect(documentBody.getByPlaceholderText(/kieran6roberts@gmail.com/)).toBeInTheDocument();
        expect(documentBody.getByPlaceholderText("kieran")).toBeInTheDocument();
    });
    test("user input", () => {
        const submitBtn = documentBody.getByDisplayValue(/send/);
        const nameInput = documentBody.getByLabelText(/Name/);
        const emailInput = documentBody.getByLabelText(/Email/);
        const messageInput = documentBody.getByLabelText(/Message/);

        userEvent.type(nameInput, "Kieran");
        expect(nameInput).toHaveValue("Kieran");
        expect(submitBtn).toBeDisabled();
        
        userEvent.type(emailInput, "kieran@test.com");
        expect(emailInput).toHaveValue("kieran@test.com");
        expect(submitBtn).toBeDisabled();
        
        userEvent.type(messageInput, "test message!");
        expect(messageInput).toHaveValue("test message!");
        expect(submitBtn).toBeDisabled();
        
        userEvent.type(messageInput, "this is a passing test message!");
        expect(submitBtn).not.toBeDisabled();
    });
    test("successful submission", async () => {
        userEvent.type(documentBody.getByLabelText(/Name/), "Kieran");
        userEvent.type(documentBody.getByLabelText(/Email/), "Kieran@test.com");
        userEvent.type(documentBody.getByLabelText(/Message/), "This is a passing message!");

        expect(documentBody.queryByText(/Form submit successful! I'll get back to you as soon as possible./)).not.toBeInTheDocument();

        fireEvent.submit(documentBody.getByTestId("form"));

        expect(documentBody.queryByText(/Form submit successful! I'll get back to you as soon as possible./)).toBeInTheDocument();
        await waitFor(() => expect(documentBody.getByLabelText(/Name/)).toHaveValue(""));
        await waitFor(() => expect(documentBody.getByLabelText(/Email/)).toHaveValue(""));
        await waitFor(() => expect(documentBody.getByLabelText(/Message/)).toHaveValue(""));

    });
});