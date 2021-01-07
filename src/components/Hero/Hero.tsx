import * as React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { VscSymbolArray } from "react-icons/vsc";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Hero(): React.ReactElement {
    return(
        <section className="h-screen">
            <div className="absolute top-32 left-3 right-3 bottom-3 md:top-24 lg:top-8 md:left-16 md:right-16">
                <m.div layout id="hero"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 , delay: 0.5 }}
                  layoutId="hero">
                    <Image 
                    src="/images/hero-edit1.webp"
                    alt="stylized selfie"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left bottom"
                    priority={true}
                    loading="eager" />
                </m.div>
            </div>
            <m.div className="relative flex flex-col items-center justify-start pt-4 text-center h-3/5 tall:justify-center lg:justify-end lg:items-end"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}>
                <ul className="flex items-center sm:hidden">
                    <li className="mx-2 mb-2">
                        <a href="https://github.com/kieran6roberts" 
                        target="_blank"
                        aria-label="to my github page" 
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiFillGithub className="transition duration-150 transform text-md text-pri ease hover:scale-125"/>
                        </a>
                    </li>
                    <li className="mx-2 mb-2">
                        <a href="https://www.linkedin.com/in/kieran-roberts-00517b178/"  
                        target="_blank"
                        aria-label="to my linked in page"
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <FaLinkedinIn className="transition duration-150 transform text-md text-acc ease hover:scale-125"/>
                        </a>
                    </li>
                    <li className="mx-2 mb-2">
                        <a href="mailto:kieran6roberts@gmail.com?subject=Mail%20from%20portfolio"
                        target="_blank"  
                        aria-label="send me an email"
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <SiGmail className="transition duration-150 transform text-md text-pri ease hover:scale-125"/>
                        </a>
                    </li>
                    <li className="mx-2 mb-2">
                        <a href="https://twitter.com/Kieran6dev"
                        target="_blank"
                        aria-label="to my twitter profile"
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiOutlineTwitter className="transition duration-150 transform text-md text-acc ease hover:scale-125"/>
                        </a>
                    </li>
                </ul>
                <h1 className="relative z-20 pl-2 pr-2 mb-4 font-bold uppercase bg-white rounded shadow-md bg-opacity-90 text-md sm:text-lg 2xl:text-xl">
                    <m.div className="hidden relative sm:inline-block align-middle bottom-0.5 sm:mr-4"
                    whileTap={{ translateX: 10, scale: 1.05 }}>
                        <VscSymbolArray/>
                    </m.div>
                    <span className="text-sec">front-end </span>developer
                </h1>
                <p className="px-2 text-xs uppercase bg-white bg-opacity-90 sm:text-sm 2xl:text-md">
                    <span className="mr-2 text-acc">
                        solving
                    </span>
                    your web related needs
                </p>
            </m.div>
        </section>
    )
};