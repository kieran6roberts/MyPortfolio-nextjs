import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlinePhone,
     AiFillGithub, 
     AiOutlineTwitter } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { useViewportScroll, 
    useTransform, 
    useSpring } from "framer-motion";
import ScrollIcon from "../ScrollIcon/ScrollIcon";

export type LayoutProps = {
    children: JSX.Element | JSX.Element[]
}
    
export default function Layout({ children }: LayoutProps): React.ReactElement {
    const { scrollYProgress } = useViewportScroll();
    const [ isComplete, setIsComplete ] = React.useState(false);
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
    
    React.useEffect(() => {
        yRange.onChange(v => setIsComplete(v >= 1));
    }, [yRange, scrollYProgress]);

    return (
        <div className="flex flex-col justify-between min-h-screen font-mono">
            <section className="relative z-50">
                <div>
                   <ScrollIcon pathLength={pathLength} 
                   complete={isComplete} />
                </div>
                <nav>
                    <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-blue-800"/>
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
                                        <span className="hidden text-xs font-bold sm:inline-block text-pri">
                                            Kieran Roberts
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        <a href="https://github.com/kieran6roberts"  
                        target="_blank"
                        aria-label="my github page"
                        className="hidden ml-3 text-sm transition duration-150 transform 2xl:ml-6 sm:inline-block text-acc ease hover:scale-125 focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/kieran-roberts-00517b178/"
                        target="_blank"
                        aria-label="my linked-in page"  
                        className="hidden ml-3 text-sm transition duration-150 transform 2xl:ml-6 sm:inline-block text-pri ease hover:scale-125 focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <FaLinkedinIn />
                        </a>
                        <a href="mailto:kieran6roberts@gmail.com?subject=Mail%20from%20portfolio"
                        target="_blank"  
                        aria-label="send me an email"
                        className="hidden ml-3 text-sm transition duration-150 transform 2xl:ml-6 sm:inline-block text-acc ease hover:scale-125 focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <SiGmail />
                        </a>
                        <a href="https://twitter.com/Kieran6dev"
                        target="_blank"
                        aria-label="to my twitter profile"
                        className="hidden ml-3 text-sm transition duration-150 transform 2xl:ml-6 sm:inline-block text-pri ease hover:scale-125 focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiOutlineTwitter />
                        </a>
                        <ul className="flex ml-auto font-bold uppercase">
                            <li className="flex-auto p-0.5">
                                <Link href="/#projects" passHref>
                                    <a className="relative block px-3 py-2 overflow-hidden transition duration-150 ease-in cursor-pointer group text-xxxs lg:text-xs text-pri text-bold lg:py-4 lg:px-8 hover:bg-light hover:text-pri focus:outline-none focus:ring-4 focus:ring-yellow-400">
                                        projects
                                        <RiComputerLine className="absolute top-0 left-0 text-purple-200 transition duration-150 ease-in text-opacity-40 text-md sm:text-lg group-hover:text-purple-400 group-hover:text-opacity-30" />
                                    </a>
                                </Link>
                            </li>
                            <li className="flex-auto p-0.5 ml-2 md:ml-4">
                                <Link href="/contact" passHref>
                                    <a className="relative block px-3 py-2 overflow-hidden transition duration-150 ease-in cursor-pointer group text-xxxs lg:text-xs text-pri lg:py-4 lg:px-8 hover:bg-light hover:text-pri focus:outline-none focus:ring-4 focus:ring-yellow-400">
                                        contact me
                                        <AiOutlinePhone className="absolute top-0 left-0 text-purple-200 transition duration-150 ease-in text-md sm:text-lg text-opacity-30 group-hover:text-purple-400 group-hover:text-opacity-30" />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
            <main className="px-4 mx-3 overflow-hidden border-l-2 border-r-2 border-gray-100 md:px-16">
            {children}
            </main>
            <footer className="px-4 py-8 text-center 2xl:py-16 2xl:px-8 bg-dark text-light">
                <ul className="flex items-center w-2/5 m-auto mb-6 justify-evenly 2xl:mb-8">
                    <li className="">
                        <a href="https://github.com/kieran6roberts"  
                        target="_blank"
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiFillGithub className="transition duration-150 transform ease hover:scale-125"/>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://www.linkedin.com/in/kieran-roberts-00517b178/" 
                        target="_blank" 
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <FaLinkedinIn className="transition duration-150 transform ease hover:scale-125"/>
                        </a>
                    </li>
                    <li className="">
                        <a href="mailto:kieran6roberts@gmail.com?subject=Mail%20from%20portfolio"
                        target="_blank"  
                        aria-label="send me an email"
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <SiGmail className="transition duration-150 transform ease hover:scale-125"/>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://twitter.com/Kieran6dev"
                        target="_blank"
                        aria-label="to my twitter profile"
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiOutlineTwitter className="transition duration-150 transform ease hover:scale-125"/>
                        </a>
                    </li>
                </ul>
                <p className="text-xs uppercase text-acc">
                    created and designed by Kieran Roberts.
                </p>
                <a href="https://graphcms.com/?referrer=kieranroberts.dev"
                className="block mx-auto mt-4"
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