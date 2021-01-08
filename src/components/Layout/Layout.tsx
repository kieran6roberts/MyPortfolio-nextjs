import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePhone } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { useViewportScroll, 
    useTransform, 
    useSpring } from "framer-motion";

import ScrollIcon from "@/components/ScrollIcon/ScrollIcon";
import SocialItems from "@/components/SocialItems/SocialItems";

type LAYOUT = { children: JSX.Element | JSX.Element[] };
    
export default function Layout({ children }: LAYOUT): React.ReactElement {
    const { scrollYProgress } = useViewportScroll();
    const [ isComplete, setIsComplete ] = React.useState(false);
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
    
    React.useEffect(() => {
        yRange.onChange(v => setIsComplete(v >= 1));
    }, [yRange, scrollYProgress]);

    return (
        <div className="flex flex-col justify-between min-h-screen font-mono">
            <ScrollIcon pathLength={pathLength} complete={isComplete} />
            <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-blue-800"/>
            <nav className="relative z-50">
                <div className="flex items-center p-8 px-6 md:px-16">
                    <div className="flex p-2 mr-4 cursor-pointer">
                        <Link href="/" passHref>
                            <a className="flex align-center focus:outline-none focus:ring-4 focus:ring-yellow-400"
                            aria-label="home page">
                                <div className="relative top-1 sm:hidden">
                                    <Image
                                    src="/images/k.svg"
                                    alt="logo of the letter k"
                                    height={24}
                                    width={24} />
                                </div>
                                <span className="hidden text-xs font-bold sm:inline-block text-pri hover:text-sec">
                                    Kieran Roberts
                                </span>
                            </a>
                        </Link>
                    </div>
                    <ul className="flex ml-auto font-bold uppercase">
                        <li className="flex-auto p-0.5">
                            <Link href="/#projects" passHref>
                                <a className="relative block px-3 py-2 overflow-hidden transition duration-150 ease-in cursor-pointer group text-xxs lg:text-xs text-sec text-bold lg:py-4 lg:px-8 hover:bg-light hover:text-pri focus:outline-none focus:ring-4 focus:ring-yellow-400">
                                    projects
                                    <RiComputerLine className="absolute top-0 left-0 text-purple-200 transition duration-150 ease-in text-opacity-40 text-md sm:text-lg group-hover:text-purple-400 group-hover:text-opacity-30" />
                                </a>
                            </Link>
                        </li>
                        <li className="flex-auto p-0.5 ml-2 md:ml-4">
                            <Link href="/contact" passHref>
                                <a className="relative block px-3 py-2 overflow-hidden transition duration-150 ease-in cursor-pointer group text-xxs lg:text-xs text-sec lg:py-4 lg:px-8 hover:bg-light hover:text-pri focus:outline-none focus:ring-4 focus:ring-yellow-400">
                                    contact me
                                    <AiOutlinePhone className="absolute top-0 left-0 text-purple-200 transition duration-150 ease-in text-md sm:text-lg text-opacity-30 group-hover:text-purple-400 group-hover:text-opacity-30" />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="px-4 mx-3 overflow-hidden border-l-2 border-r-2 border-gray-100 md:px-16">
            {children}
            </main>
            <footer className="px-4 py-8 text-center 2xl:py-16 2xl:px-8 bg-dark text-light">
                <SocialItems styling="flex justify-center mb-4" iconColor="text-white" />
                <p className="text-xs uppercase text-acc">
                    created and designed by Kieran Roberts.
                </p>
                <a href="https://graphcms.com/?referrer=kieranroberts.dev"
                className="block mx-auto mt-4 w-max"
                rel="noopener"
                target="_blank">
                    <Image src="/images/icons/Landscape_White.svg"
                    alt="graphcms logo"
                    height={40}
                    width={120} />
                </a>
                <span className="text-gray-400 text-xxs">
                    kieran6roberts@gmail.com
                </span>
            </footer>
        </div>
    )
};