import * as React from "react";
import userEvent from "@testing-library/user-event";
import { act, fireEvent, render, RenderResult } from "@testing-library/react";

import Form from "@/containers/Form/Form";

let documentBody: RenderResult;

describe("<Button />", () => {
    beforeEach(() => {
        documentBody = render(<Form />);
        const mockFetchPromise = Promise.resolve({
            json: () => Promise.resolve({})
        });
        global.fetch = jest.fn().mockImplementation((): any => mockFetchPromise);
    });
    afterEach(() => {
        global.fetch.mockClear();
    });
    test("renders", () => {
        expect(documentBody.getByText("Name is required")).toBeInTheDocument();
        expect(documentBody.getByText("Valid email is required")).toBeInTheDocument();
        expect(documentBody.getByText("Message must be at least 20 characters")).toBeInTheDocument();
    });
    test("user input", () => {
        const submitBtn = documentBody.getByTestId("submit");
        const nameInput = documentBody.getByLabelText(/Name/);
        userEvent.type(nameInput, "Kieran");
        expect(nameInput).toHaveValue("Kieran");
        expect(submitBtn).toBeDisabled();
        
        const emailInput = documentBody.getByLabelText(/Email/);
        userEvent.type(emailInput, "kieran@test.com");
        expect(emailInput).toHaveValue("kieran@test.com");
        expect(submitBtn).toBeDisabled();
        
        const messageInput = documentBody.getByLabelText(/Message/);
        userEvent.type(messageInput, "test message!");
        expect(messageInput).toHaveValue("test message!");
        expect(submitBtn).toBeDisabled();
        
        userEvent.type(messageInput, "this is a passing test message!");
        expect(submitBtn).not.toBeDisabled();
    });
    test("submission", async () => {
        userEvent.type(documentBody.getByLabelText(/Name/), "Kieran");
        userEvent.type(documentBody.getByLabelText(/Email/), "Kieran@test.com");
        userEvent.type(documentBody.getByLabelText(/Message/), "This is a passing message!");
        await act(() => {
            fireEvent.submit(documentBody.getByTestId("form"));
        });
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(documentBody.getByLabelText(/Name/)).toHaveValue("");
        expect(documentBody.getByLabelText(/Email/)).toHaveValue("");
        expect(documentBody.getByLabelText(/Message/)).toHaveValue("");

    });
});