import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { motion as m } from "framer-motion";

import Form from "src/containers/Form/Form";
import PageHead from "src/components/PageHead/PageHead";

export default function Contact(): React.ReactElement {
    return(
        <>
        <PageHead title="kierandev | contact"
        description="Got any questions or queries. Want to enquire about working together. Whatever it is, let's get in touch!" />
            <section className="mb-32 md:px-20 lg:px-32 md:mx-12 bg-light overflow-hidden">
                <m.div layout
                initial={{ scale: 0.5}}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5}}>
                <h1 className="text-lg text-center font-bold text-dark capitalize px-1">
                    Get in touch with me.
                </h1>
                </m.div>
                <Form />    
            </section>
        </>
    )
};