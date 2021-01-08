import * as React from "react";
import { VscCheck } from "react-icons/vsc";

type INPUT_TYPES = HTMLInputElement | HTMLTextAreaElement;

interface INPUT_VALUES {
    name: string,
    email: string,
    message: string,
    submit?: string
};


export default function Form(): React.ReactElement {
    const INIT_FORM_VALUES = {
        name: "",
        email: "",
        message: ""
    };

    let submitDisabled = true;

    const [ inputValues, setInputValues ] = React.useState(INIT_FORM_VALUES);
    const [ submitting, setSubmitting ] = React.useState(false);
    const [ disabled, setDisabled ] = React.useState(submitDisabled);
    const [ errors, setErrors ] = React.useState(INIT_FORM_VALUES);

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

    function inputChangeHandler(event: React.ChangeEvent<INPUT_TYPES>): void {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        setSubmitting(submitDisabled);

        if (!disabled) {
            try {
                const response = await fetch("https://formspree.io/f/mzbkjarl", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    mode: "cors",
                    body: JSON.stringify(inputValues)
                });
                const data = response.json();
                
            } catch(error) {
                    console.error(error);
                }
            } 
        setInputValues(INIT_FORM_VALUES);
    };

    function checkForEmptyObject(obj: any): boolean {
        return Object.keys(obj).length === 0;
    };

    React.useEffect(() => {
        setErrors(validateUserInput(inputValues));

        if (checkForEmptyObject(errors)) submitDisabled = false;
        else submitDisabled = true;
        setDisabled(submitDisabled);
    }, [ inputValues ]);

    return (
        <>
        {submitting ?
        <p className="my-4 text-sm text-center bg-pri text-light animate-bounce motion-reduce:animate-none">
            Form submit successful! I'll get back to you as soon as possible.
        </p> : null}
        <form
        onSubmit={submitHandler}
        className="w-full p-1 mx-auto 2xl:mt-20"
        data-testid="form"
        >   
            <div className="lg:flex lg:justify-between lg:items-center">
                <div className="lg:flex-auto lg:mr-2">
                <label
                htmlFor="name"
                className="text-sm text-dark">
                    Name
                    {!submitting && !errors.name && 
                    <VscCheck className="inline-block ml-2 text-sm align-top text-pri"/>
                    }
                    <p className={`${!submitting && errors.name ? "visible" : "invisible"} text-xxs text-pri mb-1`}>
                        Name is required
                    </p>
                </label>
                <input id="name"
                type="text"
                name="name"
                value={inputValues.name}
                onChange={inputChangeHandler}
                placeholder="kieran"
                className="w-full px-2 py-1 mb-8 text-xs text-dark ring-2 ring-gray-500 ring-opacity-50 focus:outline-none focus:ring-3 focus:ring-purple-500" />
                </div>
                <div className="lg:flex-auto lg:ml-2">
                <label
                htmlFor="email"
                className="mb-1 text-sm text-dark">
                    Email
                    {!submitting && !errors.email && 
                    <VscCheck className="inline-block ml-2 text-sm align-top text-pri"/>
                    }
                    <p className={`${!submitting && errors.email ? "visible" : "invisible"} text-xxs text-pri mb-1`}>
                        Valid email is required
                    </p>
                </label>
                <input id="email"
                type="email"
                name="email"
                value={inputValues.email}
                onChange={inputChangeHandler}
                placeholder="kieran6roberts@gmail.com"
                className="w-full px-2 py-1 mb-8 text-xs text-dark ring-2 ring-gray-500 ring-opacity-50 focus:outline-none focus:ring-3 focus:ring-purple-500" />
                </div>
            </div>
            <label
            htmlFor="message"
            className="mb-1 text-sm text-dark">
                Message
                {!submitting && !errors.message && 
                    <VscCheck className="inline-block ml-2 text-sm align-top text-pri"/>
                    }
                <p className={`${!submitting && errors.message ? "visible" : "invisible"} text-xxs text-pri mb-1`}>
                    Message must be at least 20 characters
                </p>
            </label>
            <textarea 
            name="message" 
            id="message"
            value={inputValues.message}
            onChange={inputChangeHandler}
            rows={3}
            placeholder="..."
            className="w-full px-2 py-1 mb-8 text-xs text-dark ring-2 ring-gray-500 ring-opacity-50 focus:outline-none focus:ring-3 focus:ring-purple-500" />
            <input
            id="submit"
            type="submit"
            name="submit"
            value="send"
            data-testid="submit"
            disabled={disabled}
            className={`${!checkForEmptyObject(errors) ? "bg-purple-200 text-purple-400 cursor-not-allowed" : "bg-pri text-light cursor-pointer"} block text-sm m-auto w-2/4 max-w-xl py-1 px-2 font-bold uppercase focus:outline-none focus:ring-3 focus:ring-yellow-400`} />
        </form>
        </>
    )
};