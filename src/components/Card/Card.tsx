interface CardProps {
    items: string[],
    header: string
};

export function generateKey(item: string): string {
    return `${item}_${ new Date().getTime() }`;
};
    

export default function Card({ items, header }: CardProps): React.ReactElement {
    
    return (
        <div className="flex flex-col bg-pri md:flex-1 border-l-2 border-r-2 border-t-2 border-gray-200 mx-2">
        <p className="text-sm font-bold bg-pri text-dark text-center py-2">
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