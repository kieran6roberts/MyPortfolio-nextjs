import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePhone } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { BiCodeBlock } from "react-icons/bi"
import { FiExternalLink } from "react-icons/fi";

import SocialItems from "@/components/SocialItems/SocialItems";

type LAYOUT = { children: React.ReactNode };
    
export default function Layout({ children }: LAYOUT): React.ReactElement {
    return (
        <div className="flex flex-col justify-between min-h-screen font-mono">
            <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-blue-800"/>
            <nav className="relative z-50 mb-6 shadow-md xl:mb-12 2xl:mb-32">
                <div className="flex flex-col items-center px-6 py-2 md:py-6 md:flex-row md:px-16">
                    <div className="flex p-3 mr-4 cursor-pointer">
                        <Link href="/" passHref>
                            <a className="flex align-center focus:outline-none focus:ring-4 focus:ring-yellow-400"
                            aria-label="Home Kieran Roberts">
                                <span className="text-sm font-bold text-pri hover:text-sec">
                                    Kieran Roberts
                                </span>
                            </a>
                        </Link>
                    </div>
                    <ul className="flex justify-center pt-2 font-bold uppercase md:pt-0 md:ml-auto">
                        <li className="flex-auto p-0.5">
                            <Link href="/#projects" passHref>
                                <a className="relative block px-2 py-2 overflow-hidden transition duration-150 ease-in cursor-pointer md:px-4 group text-xxs lg:text-xs text-sec text-bold lg:py-4 lg:px-8 hover:bg-light hover:text-pri focus:outline-none focus:ring-4 focus:ring-yellow-400">
                                    projects
                                    <RiComputerLine className="absolute top-0 left-0 text-purple-200 transition duration-150 ease-in text-opacity-40 text-md sm:text-lg group-hover:text-purple-400 group-hover:text-opacity-30" />
                                </a>
                            </Link>
                        </li>
                        <li className="flex-auto p-0.5 ml-2 md:ml-4">
                            <a className="relative flex items-center px-2 py-2 overflow-hidden transition duration-150 ease-in cursor-pointer md:px-4 group text-xxs lg:text-xs text-sec lg:py-4 lg:px-8 hover:bg-light hover:text-pri focus:outline-none focus:ring-4 focus:ring-yellow-400"
                            href="https://blog.kieranroberts.dev"
                            rel="noopener"
                            target="_blank"
                            >
                                blog
                                <BiCodeBlock className="absolute top-0 left-0 text-purple-200 transition duration-150 ease-in text-md sm:text-lg text-opacity-30 group-hover:text-purple-400 group-hover:text-opacity-30" />
                                <FiExternalLink className="inline-block mb-1 ml-2" />
                            </a>
                            
                        </li>
                        <li className="flex-auto p-0.5 ml-2 md:ml-4">
                            <Link href="/contact" passHref>
                                <a className="relative block px-2 py-2 overflow-hidden transition duration-150 ease-in cursor-pointer md:px-4 group text-xxs lg:text-xs text-sec lg:py-4 lg:px-8 hover:bg-light hover:text-pri focus:outline-none focus:ring-4 focus:ring-yellow-400">
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
                <SocialItems styling="flex justify-center mb-4 2xl:mb-8" iconColor="text-white" />
                <p className="my-2 text-xs uppercase 2xl:my-6 text-acc">
                    created and designed by Kieran Roberts.
                </p>
                <a 
                aria-label="To GraphCMS website"
                className="block mx-auto mt-4 2xl:my-6 w-max"
                href="https://graphcms.com/?referrer=kieranroberts.dev"
                rel="noopener"
                target="_blank">
                    <Image 
                    alt="graphcms logo"
                    src="/images/icons/Landscape_White.svg"
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