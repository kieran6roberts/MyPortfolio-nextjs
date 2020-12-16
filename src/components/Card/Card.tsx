import * as React from "react";
import { motion as m } from "framer-motion";

interface CardProps {
    items: string[],
    header: string,
    parentVariant: {
        visible: {},
        hidden: {}
    },
    childVariant: {
        visible: {},
        hidden: {}
    }
};

export function generateKey(item: string): string {
    return `${item}_${ new Date().getTime() }`;
};
    
export default function Card({ items, header, parentVariant, childVariant }: CardProps): React.ReactElement {
    
    return (
        <m.div className="flex flex-col lg:flex-1 mx-2"
        variants={parentVariant}>
            <m.p className="text-md uppercase font-bold text-sec text-center pt-12 pb-8"
            variants={childVariant}>
                {header}
            </m.p>
            <m.ul className="flex bg-light flex-col justify-start h-full items-center text-xs text-gray-600 pt-4"
            variants={parentVariant}>
                {items && items.map(item =>
                    <m.li key={generateKey(item)}
                    className="my-2"
                    variants={childVariant}>
                        {item}
                    </m.li>                    
                )}
            </m.ul>
        </m.div>
    )
};