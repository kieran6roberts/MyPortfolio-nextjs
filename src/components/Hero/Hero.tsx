import Image from "next/image";
import { motion as m } from "framer-motion";
import { VscSymbolNamespace } from "react-icons/vsc";

export default function Hero(): React.ReactElement {
    return(
        <section className="h-screen">
            <div className="absolute top-32 md:top-20 lg:top-8 left-3 md:left-16 right-3 bottom-3">
                <m.div layout id="hero"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 , delay: 0.5 }}
                  className="hero"
                  layoutId="hero">
                    <Image 
                    src="/images/hero.webp"
                    alt="stylized selfie"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left bottom"
                    priority={true}
                    loading="eager" />
                </m.div>
            </div>
            <m.div className="relative h-4/6 flex flex-col justify-start items-center xl:justify-end xl:items-end text-center pt-4"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}>
                <h1 className="relative z-20 bg-white bg-opacity-80 text-lg 2xl:text-xl text-dark font-bold uppercase pl-2 rounded">
                    <m.div className="relative inline-block align-middle bottom-0.5 mr-4"
                    whileTap={{ translateX: 10, scale: 1.05 }}>
                        <VscSymbolNamespace/>
                    </m.div>
                    front-end developer
                </h1>
                <p className="bg-white bg-opacity-80 text-sm 2xl:text-md uppercase px-2">
                    <span className="text-acc mr-1">
                        solving
                    </span>
                    your web related needs
                </p>
            </m.div>
        </section>
    )
};