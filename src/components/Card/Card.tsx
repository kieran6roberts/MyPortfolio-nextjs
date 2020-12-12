interface CardProps {
    items: string[],
    header: string
};

export function generateKey(item: string): string {
    return `${item}_${ new Date().getTime() }`;
};
    
export default function Card({ items, header }: CardProps): React.ReactElement {
    
    return (
        <div className="flex flex-col lg:flex-1 mx-2">
            <p className="text-md uppercase font-bold text-acc text-center pt-12 pb-8">
                {header}
            </p>
            <ul className="flex bg-light flex-col justify-start h-full items-center text-xs text-gray-500 pt-4">
                {items && items.map(item =>
                    <li key={generateKey(item)}
                    className="my-2">
                        {item}
                    </li>                    
                )}
            </ul>
        </div>
    )
};