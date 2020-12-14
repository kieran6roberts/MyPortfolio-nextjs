export type SubHeaderProps = {
    title: string
};

export default function SubHeader({ title }: SubHeaderProps): React.ReactElement {
    return (
        <div className="relative w-screen text-left">
            <h2 className="text-xxxl text-gray-200 w-offScreen whitespace-nowrap">
                {title}
            </h2>
            <h3 className="absolute top-1/4 text-md md:text-lg border-l-4 border-pri pl-4"
            id="projects">
                {title}
            </h3>
        </div>
    )
};