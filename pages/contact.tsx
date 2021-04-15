import { motion as m } from "framer-motion";

import Form from "@/containers/Form/Form";
import PageHead from "@/components/PageHead/PageHead";
import SocialItems from "@/components/SocialItems/SocialItems";

export default function Contact(): React.ReactElement {
    return(
        <>
        <PageHead title="kierandev | contact"
        description="Contact Kieran Roberts front-end web-developer with any questions or queries. Whatever it is, let's get in touch!"
        currentURL="https://kieranroberts.dev/contact" />
        <section className="mb-32 overflow-hidden md:px-20 lg:px-32 md:mx-12 bg-light">
            <m.div layout
            initial={{ scale: 0.5}}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut"}}>
            <h1 className="pb-3 font-bold text-center capitalize text-md text-dark">
                Get in touch with me.
            </h1>
            <SocialItems styling="flex justify-center mb-8" iconColor="text-acc" />
            </m.div>
            <Form />    
        </section>
        </>
    )
};