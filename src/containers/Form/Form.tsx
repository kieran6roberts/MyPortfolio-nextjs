export default function Form() {
    return (
        <form
        method="POST"
        action=""
        className="flex flex-col w-full max-w-xl mx-auto mb-24 capitalize"
        data-testid="form"
        >   
            <label
            htmlFor="name"
            className="mb-1">
                name *
            </label>
            <input id="name"
            type="text"
            name="name"
            className="py-1 px-2 mb-8 text-black ring-2 ring-gray-500 ring-opacity-50 focus:outline-none focus:ring-pri" />
            <label
            htmlFor="email"
            className="mb-1">
                email *
            </label>
            <input id="email"
            type="email"
            name="email"
            className="py-1 px-2 mb-8 text-black ring-2 ring-gray-500 ring-opacity-50 focus:outline-none focus:ring-pri" />
            <label
            htmlFor="message"
            className="mb-1">
                message
            </label>
            <textarea 
            name="message" 
            id="message"
            className="py-1 px-2 mb-8 text-black ring-2 ring-gray-500 ring-opacity-50 focus:outline-none focus:ring-pri" />
            <input
            id="submit"
            type="submit"
            name="submit"
            value="send"
            className="m-auto w-2/4 py-1 px-2 font-bold uppercase bg-pri cursor-pointer" />
        </form>
    )
};