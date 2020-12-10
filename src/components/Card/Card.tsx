interface CardProps {
    items: string[],
    header: string
};

export function generateKey(item: string): string {
    return `${item}_${ new Date().getTime() }`;
};
    

export default function Card({ items, header }: CardProps): React.ReactElement {
    
    return (
        <div className="group flex flex-col md:flex-1 border-t-2 border-pri mx-2 transition duration-300 ease-in-out md:hover:bg-pri">
        <p className="text-sm text-dark font-bold uppercase text-center py-8 md:group-hover:text-light">
              {header}
        </p>
            <ul className="flex flex-col items-center text-xs text-gray-400 pb-8 md:group-hover:text-light">
                {items && items.map(item =>
                    <li key={generateKey(item)}>
                        {item}
                    </li>                    
                )}
            </ul>
        </div>
    )
};