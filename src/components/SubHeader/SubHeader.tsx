export default function SubHeader({ title }: any): React.ReactElement {
    return (
        <div className="relative w-screen text-center">
            <h2 className="text-xxxl text-gray-200">
                {title}
            </h2>
            <h3 className="absolute top-0 left-3 text-lg border-l-4 border-pri pl-4">
                {title}
            </h3>
        </div>
    )
};