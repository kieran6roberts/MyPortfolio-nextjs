import * as React from "react";

interface INPUT_VALUES {
    name: string,
    email: string,
    message: string
}

export default function Form(): React.ReactElement {
    const INIT_FORM_VALUES = {
        name: "",
        email: "",
        message: ""
    };

    let submitDisabled = true;

    const [ inputValues, setInputValues ] = React.useState(INIT_FORM_VALUES);
    const [ submitting, setSubmitting ] = React.useState(false);
    const [ errors, setErrors ] = React.useState({});

    function validateUserInput(values: INPUT_VALUES) {
        let errors: any = {};
        const EMAIL_EXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!values.name || typeof values.name !== "string") {
            errors.name = "Name is required!";
        }

        if (!values.email || typeof values.email !== "string") {
            errors.email = "Email is required!";
        }
            else if (!EMAIL_EXP.test(values.email)) {
            errors.email = "Invalid email address! Please enter a valid address";
        }

        if (!values.message || typeof values.message !== "string") {
            errors.message = "Message is required!";
        }
            else if (values.message.length < 20) {
                errors.message = "Message must be a minimum of 20 characters!"
            }

            return errors;
        };

    function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    function submitHandler(event: React.FormEvent): void {
        event.preventDefault();
    };

    function checkForEmptyObject(obj: any): boolean {
        return Object.keys(obj).length === 0;
    };

    React.useEffect(() => {
        setErrors(validateUserInput(inputValues));

        if (checkForEmptyObject(errors)) submitDisabled = false;
        else submitDisabled = true;
        console.log(errors);
        console.log(submitDisabled)
    }, [ inputValues ]);

    return (
        <form
        method="POST"
        action="https://formspree.io/f/mzbkjarl"
        className="flex flex-col w-full max-w-xl mx-auto mb-24 capitalize"
        data-testid="form"
        >   
            <label
            htmlFor="name"
            className="mb-1">
                name <span className="text-pri">*</span>
            </label>
            <input id="name"
            type="text"
            name="name"
            value={inputValues.name}
            onChange={inputChangeHandler}
            placeholder="kieran"
            className="py-1 px-2 mb-8 text-black ring-2 ring-gray-500 ring-opacity-50 focus:outline-none focus:ring-pri" />
            <label
            htmlFor="email"
            className="mb-1">
                email <span className="text-pri">*</span>
            </label>
            <input id="email"
            type="email"
            name="email"
            value={inputValues.email}
            onChange={inputChangeHandler}
            placeholder="kieran6roberts@gmail.com"
            className="py-1 px-2 mb-8 text-black ring-2 ring-gray-500 ring-opacity-50 focus:outline-none focus:ring-pri" />
            <label
            htmlFor="message"
            className="mb-1">
                message <span className="text-pri">*</span>
            </label>
            <textarea 
            name="message" 
            id="message"
            value={inputValues.message}
            onChange={inputChangeHandler}
            placeholder="..."
            className="py-1 px-2 mb-8 text-black ring-2 ring-gray-500 ring-opacity-50 focus:outline-none focus:ring-pri" />
            <input
            id="submit"
            type="submit"
            name="submit"
            value="send"
            disabled={submitDisabled}
            className={`${!checkForEmptyObject(errors) ? "bg-purple-200 text-purple-400 cursor-not-allowed" : "bg-pri text-light cursor-pointer"} m-auto w-2/4 py-1 px-2 font-bold uppercase`} />
        </form>
    )
};