import * as React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { VscSymbolArray } from "react-icons/vsc";

import SocialItems from "@/components/SocialItems/SocialItems";

export default function Hero(): React.ReactElement {
    return(
        <section className="h-screen">
            <div className="absolute opacity-30 lg:opacity-100 top-32 left-3 right-3 bottom-3 md:top-24 lg:top-8 md:left-16 md:right-16">
                <m.div layout id="hero"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 , delay: 0.5 }}
                  layoutId="hero">
                    <Image 
                    src="/images/hero-edit1.webp"
                    alt="stylized selfie in black and white color scheme with a stylized landscape background"
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
                <SocialItems styling="flex bg-white bg-opacity-90 pt-2 shadow" iconColor="text-acc"/>
                <h1 className="pl-2 pr-2 mb-4 font-bold uppercase bg-white rounded shadow-md bg-opacity-90 text-md sm:text-lg 2xl:text-xl">
                    <m.div className="hidden relative sm:inline-block align-middle bottom-0.5 sm:mr-4"
                    whileTap={{ translateX: 10, scale: 1.05 }}>
                        <VscSymbolArray/>
                    </m.div>
                    <span className="text-sec">front-end</span> web developer
                </h1>
                <p className="hidden px-2 m-0 text-xs uppercase bg-white md:block bg-opacity-90 sm:text-sm 2xl:text-md">
                    <span className="mr-2 text-acc">
                        solving
                    </span>
                    your web related needs
                </p>
            </m.div>
        </section>
    )
};