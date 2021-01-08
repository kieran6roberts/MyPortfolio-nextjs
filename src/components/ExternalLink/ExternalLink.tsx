import { BsBoxArrowUpRight } from "react-icons/bs";

interface EXTERNAL_LINK {
    children: React.ReactNode;
    styling?: string | undefined;
    link: string;
};

export default function ExternalLink({ link, children, styling }: EXTERNAL_LINK): React.ReactElement {
    return (
        <a href={link}
        rel="noopener"
        target="_blank"
        className={`group ${styling ?? null} w-44 2xl:w-80 flex align-items whitespace-nowrap text-xxs text-dark font-bold uppercase py-2 px-3 2xl:py-6 2xl:px-6 border-2 border-pri cursor-pointer transition duration-50 ease-in hover:bg-pri focus:outline-none focus:ring-4 focus:ring-yellow-400 active:bg-sec`} >
            <span className="block pr-4 group-hover:text-light ">
                {children}
            </span>
            <BsBoxArrowUpRight className="text-xs transition ease-in text-pri duration-50 group-hover:text-white"/>
        </a>
    )
};