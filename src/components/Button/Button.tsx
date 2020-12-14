import { BsBoxArrowUpRight } from "react-icons/bs";

export type ButtonProps = {
    link: string | undefined,
    children: React.ReactNode,
    color?: string
}

export default function Button({ link, children, color }: ButtonProps): React.ReactElement {
    return (
        <a href={link}
        className={`group ${color} w-44 2xl:w-72 flex align-items whitespace-nowrap text-xxs font-bold uppercase py-2 xxl:py-4 px-3 border-2 border-pri cursor-pointer transition duration-50 ease-in hover:bg-pri focus:outline-none focus:ring-4 focus:ring-yellow-400 active:bg-sec`} >
            <span className="block pr-4 group-hover:text-light ">
                {children}
            </span>
            <BsBoxArrowUpRight className="text-xs text-light transition duration-50 ease-in opacity-0 group-hover:opacity-100"/>
        </a>
    )
};