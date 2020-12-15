import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlinePhone, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion as m, 
    useViewportScroll, 
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
        <div className="flex flex-col min-h-screen justify-between font-mono">
            <section className="relative z-50">
                <div>
                   <ScrollIcon pathLength={pathLength} complete={isComplete} />
                </div>
                <nav className="">
                    <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-blue-800"/>
                        <div className="flex items-center py-8 px-6 md:px-16">
                            <div className="flex p-2 mr-4 cursor-pointer">
                                <Link href="/" passHref>
                                    <a className="flex align-center focus:outline-none focus:ring-4 focus:ring-yellow-400">
                                        <div className="relative top-1 sm:hidden">
                                            <Image
                                            src="/images/k.svg"
                                            alt="logo of the letter k"
                                            height={24}
                                            width={24} />
                                        </div>
                                        <span className="hidden sm:inline-block text-xs text-pri font-bold">
                                            Kieran Roberts
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        <a href="https://github.com/kieran6roberts"  
                        aria-label="my github page"
                        className="hidden sm:inline-block text-md text-dark ml-3 transform transition duration-150 ease hover:scale-125 focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/kieran-roberts-00517b178/"
                        aria-label="my linked-in page"  
                        className="hidden sm:inline-block text-md text-dark ml-3 transform transition duration-150 ease hover:scale-125 focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <FaLinkedinIn />
                        </a>
                        <ul className="flex ml-auto font-bold capitalize">
                            <li className="flex-auto bg-gradient-to-r from-purple-400 to-purple-600 p-0.5">
                                <Link href="/#projects" passHref>
                                    <a className="group bg-pri block relative text-xxxs sm:text-xxs text-light text-bold py-1 px-2 sm:py-2 sm:px-4 lg:py-4 lg:px-8 overflow-hidden cursor-pointer transition duration-150 ease-in hover:bg-light hover:text-pri focus:outline-none focus:ring-4 focus:ring-yellow-400">
                                        projects
                                        <RiComputerLine className="absolute top-0 left-0 text-md sm:text-lg text-gray-200 text-opacity-30 transition duration-150 ease-in group-hover:text-purple-400 group-hover:text-opacity-30" />
                                    </a>
                                </Link>
                            </li>
                            <li className="flex-auto bg-gradient-to-r from-purple-400 to-purple-600 p-0.5 ml-2 md:ml-4">
                                <Link href="/contact" passHref>
                                    <a className="group bg-pri block relative text-xxxs sm:text-xxs text-light py-1 px-2 sm:py-2 sm:px-4 lg:py-4 lg:px-8 overflow-hidden cursor-pointer transition duration-150 ease-in hover:bg-light hover:text-pri focus:outline-none focus:ring-4 focus:ring-yellow-400">
                                        contact me
                                        <AiOutlinePhone className="absolute top-0 left-0 text-md sm:text-lg text-gray-200 text-opacity-30 transition duration-150 ease-in  group-hover:text-purple-400 group-hover:text-opacity-30" />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
            <main className="mx-3 px-4 md:px-16 border-l-2 border-r-2 border-gray-100 overflow-hidden">
            {children}
            </main>
            <footer className="text-center bg-dark text-light py-8 px-4">
                <ul className="flex flex-col items-center">
                    <li className="mb-4 2xl:mb-8">
                        <a href="https://github.com/kieran6roberts"  
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiFillGithub className="text-md text-light transform transition duration-150 ease hover:scale-125"/>
                        </a>
                    </li>
                    <li className="mb-4 2xl:mb-8">
                        <a href="https://www.linkedin.com/in/kieran-roberts-00517b178/"  
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <FaLinkedinIn className="text-md text-light transform transition duration-150 ease hover:scale-125"/>
                        </a>
                    </li>
                </ul>
                <p className="uppercase text-sm text-acc">
                    created and designed by Kieran Roberts.
                </p>
                <span className="text-xxs text-gray-400">
                    kieran6roberts@gmail.com
                </span>
            </footer>
        </div>
    )
};