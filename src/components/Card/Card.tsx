import * as React from "react";
import { motion as m } from "framer-motion";

type COMBINABLE = number | string;
type ANIMATION_VARIANTS = {
    hidden: { [key: string]: COMBINABLE },
    visible: { 
        transition: { [key: string]: COMBINABLE },
        [key: string]: any
    },
};

interface CARDS {
    items: string[],
    header: string,
    parentVariant: ANIMATION_VARIANTS,
    childVariant: ANIMATION_VARIANTS
};

export function generateKey(item: string): string {
    return `${item}_${ new Date().getTime() }`;
};
    
export default function Card({ items, header, parentVariant, childVariant }: CARDS): React.ReactElement {
    return (
        <m.article className="flex flex-col pb-4 mx-2 shadow-lg lg:flex-1"
        variants={parentVariant}>
            <m.h3 className="pt-12 pb-4 font-bold text-center uppercase text-md text-sec"
            variants={childVariant}>
                {header}
            </m.h3>
            <m.ul className="flex flex-col items-center justify-start h-full pt-4 text-xs text-gray-600 bg-light"
            variants={parentVariant}>
                {items && items.map(item =>
                    <m.li key={generateKey(item)}
                    className="my-2"
                    variants={childVariant}>
                        {item}
                    </m.li>                    
                )}
            </m.ul>
        </m.article>
    )
};