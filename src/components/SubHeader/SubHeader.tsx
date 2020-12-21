export type SubHeaderProps = {
    title: string
};

export default function SubHeader({ title }: SubHeaderProps): React.ReactElement {
    return (
        <div className="relative w-screen text-left">
            <h2 className="text-gray-200 text-xxxl w-offScreen whitespace-nowrap">
                {title}
            </h2>
            <h3 className="absolute pl-4 font-bold border-l-4 top-1/4 text-md md:text-lg border-pri"
            id="projects">
                {title}
            </h3>
        </div>
    )
};