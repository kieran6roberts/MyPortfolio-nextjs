import Image from "next/image";
import { motion as m } from "framer-motion";
import { VscSymbolNamespace } from "react-icons/vsc";

export default function Hero(): React.ReactElement {
    return(
        <section className="h-screen">
            <div className="absolute top-32 md:top-20 left-3 md:left-16 right-3 bottom-3">
                <m.div layout id="hero"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="hero"
                  layoutId="hero">
                    <Image src="/images/hero.png"
                    alt="stylized selfie"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left bottom"
                    priority />
                </m.div>
            </div>
            <div className="relative h-4/6 flex flex-col justify-start items-center sm:justify-end sm:items-end text-center pt-4">
                <h1 className="bg-white bg-opacity-80 text-lg text-dark font-bold uppercase pl-2 rounded">
                    <VscSymbolNamespace className="relative inline-block align-middle bottom-0.5 mr-4"/>
                    front-end developer
                </h1>
                <p className="bg-white bg-opacity-80 text-sm uppercase px-2">
                    <span className="text-acc mr-1">
                        solving
                    </span>
                    your web related needs
                </p>
            </div>
        </section>
    )
};