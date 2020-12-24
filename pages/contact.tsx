import { motion as m } from "framer-motion";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

import Form from "src/containers/Form/Form";
import PageHead from "src/components/PageHead/PageHead";

export default function Contact(): React.ReactElement {
    return(
        <>
        <PageHead title="kierandev | contact"
        description="Got any questions or queries. Want to enquire about working together. Whatever it is, let's get in touch!"
        currentURL="https://kieranroberts.dev/contact" />
            <section className="mb-32 overflow-hidden md:px-20 lg:px-32 md:mx-12 bg-light">
                <m.div layout
                initial={{ scale: 0.5}}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut"}}>
                <h1 className="pb-3 text-lg font-bold text-center capitalize text-dark">
                    Get in touch with me.
                </h1>
                <ul className="flex items-center justify-center mb-8 sm:hidden">
                    <li>
                        <a href="https://github.com/kieran6roberts"
                        target="_blank"
                        aria-label="my github page"  
                        className="block mx-4 text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiFillGithub className="transition duration-150 transform text-pri ease hover:scale-125"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kieran-roberts-00517b178/"
                        target="_blank"
                        aria-label="my linked-in page"  
                        className="block mx-4 text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <FaLinkedinIn className="transition duration-150 transform text-acc ease hover:scale-125"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:kieran6roberts@gmail.com?subject=Mail%20from%20portfolio"
                        target="_blank"  
                        aria-label="send me an email"
                        className="block mx-4 text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <SiGmail className="transition duration-150 transform text-md text-pri ease hover:scale-125"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/Kieran6dev"
                        target="_blank"
                        aria-label="to my twitter profile"
                        className="block mx-4 text-md focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiOutlineTwitter className="transition duration-150 transform text-md text-acc ease hover:scale-125"/>
                        </a>
                    </li>
                </ul>
                </m.div>
                <Form />    
            </section>
        </>
    )
};