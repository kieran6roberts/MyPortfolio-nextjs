import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function Button({ link, children, color }): React.ReactElement {
    return (
        <a href={link}
        className={`group ${color} w-44 flex align-items whitespace-nowrap text-xxs font-bold uppercase py-2 px-3 mr-8 border-2 border-pri cursor-pointer transition duration-50 ease-in hover:bg-pri`} >
            <span className="block pr-4">
                {children}
            </span>
            <BsArrowUpRight className="text-xs transition duration-50 ease-in opacity-0 group-hover:opacity-100"/>
        </a>
    )
};