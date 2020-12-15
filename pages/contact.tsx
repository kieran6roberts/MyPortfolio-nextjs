import { motion as m } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Form from "src/containers/Form/Form";
import PageHead from "src/components/PageHead/PageHead";

export default function Contact(): React.ReactElement {
    return(
        <>
        <PageHead title="kierandev | contact"
        description="Got any questions or queries. Want to enquire about working together. Whatever it is, let's get in touch!"
        currentURL="https://kieranroberts.dev/contact" />
            <section className="mb-32 md:px-20 lg:px-32 md:mx-12 bg-light overflow-hidden">
                <m.div layout
                initial={{ scale: 0.5}}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut"}}>
                <h1 className="text-lg text-center font-bold text-dark capitalize pb-3">
                    Get in touch with me.
                </h1>
                <ul className="flex sm:hidden items-center justify-center">
                    <li className="">
                        <a href="https://github.com/kieran6roberts"
                        aria-label="my github page"  
                        className="block text-md mx-4 focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <AiFillGithub className="text-pri transform transition duration-150 ease hover:scale-125"/>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://www.linkedin.com/in/kieran-roberts-00517b178/"
                        aria-label="my linked-in page"  
                        className="block text-md mx-4 focus:outline-none focus:ring-4 focus:ring-yellow-400">
                            <FaLinkedinIn className="text-pri transform transition duration-150 ease hover:scale-125"/>
                        </a>
                    </li>
                </ul>
                </m.div>
                <Form />    
            </section>
        </>
    )
};