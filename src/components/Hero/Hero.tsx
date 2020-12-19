import Image from "next/image";
import { motion as m } from "framer-motion";
import { VscSymbolNamespace } from "react-icons/vsc";
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
            <m.div className="relative h-3/5 flex flex-col justify-start tall:justify-center items-center lg:justify-end lg:items-end text-center pt-4"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}>
                <ul className="flex items-center sm:hidden">
                    <li className="mb-2 mx-2">
                        <a href="https://github.com/kieran6roberts" 
                        target="_blank"
                        aria-label="to my github page" 
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiFillGithub className="text-md text-pri transform transition duration-150 ease hover:scale-125"/>
                        </a>
                    </li>
                    <li className="mb-2 mx-2">
                        <a href="https://www.linkedin.com/in/kieran-roberts-00517b178/"  
                        target="_blank"
                        aria-label="to my linked in page"
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <FaLinkedinIn className="text-md text-acc transform transition duration-150 ease hover:scale-125"/>
                        </a>
                    </li>
                    <li className="mb-2 mx-2">
                        <a href="mailto:kieran6roberts@gmail.com?subject=Mail%20from%20portfolio"
                        target="_blank"  
                        aria-label="send me an email"
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <SiGmail className="text-md text-pri transform transition duration-150 ease hover:scale-125"/>
                        </a>
                    </li>
                    <li className="mb-2 mx-2">
                        <a href="https://twitter.com/Kieran6dev"
                        target="_blank"
                        aria-label="to my twitter profile"
                        className="text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiOutlineTwitter className="text-md text-acc transform transition duration-150 ease hover:scale-125"/>
                        </a>
                    </li>
                </ul>
                <h1 className="relative z-20 bg-white bg-opacity-90 text-md sm:text-lg 2xl:text-xl text-dark font-bold uppercase pl-2 rounded">
                    <m.div className="hidden relative sm:inline-block align-middle bottom-0.5 sm:mr-4"
                    whileTap={{ translateX: 10, scale: 1.05 }}>
                        <VscSymbolNamespace/>
                    </m.div>
                    front-end developer
                </h1>
                <p className="bg-white bg-opacity-90 text-xs sm:text-sm 2xl:text-md uppercase px-2">
                    <span className="text-acc mr-2">
                        solving
                    </span>
                    your web related needs
                </p>
            </m.div>
        </section>
    )
};