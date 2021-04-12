interface SUB_HEADER {
    title: string
};

export default function SubHeader({ title }: SUB_HEADER): React.ReactElement {
    return (
        <header className="relative w-screen text-left">
            <p className="text-gray-200 text-xxxl w-offScreen whitespace-nowrap">
                {title}
            </p>
            <h3 className="absolute px-4 font-bold bg-white border-l-4 shadow-md bg-opacity-30 top-1/4 text-md md:text-lg border-pri"
            id="projects">
                {title}
            </h3>
        </header>
    )
};