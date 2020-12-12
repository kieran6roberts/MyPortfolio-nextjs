import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import Form from "src/containers/Form/Form";
import PageHead from "src/components/PageHead/PageHead";

export default function Contact(): React.ReactElement {
    return(
        <>
        <PageHead title="kierandev | contact"
        description="Got any questions or queries. Want to enquire about working together. Whatever it is, let's get in touch!" />
            <section className="mb-32 md:px-20 lg:px-32 md:mx-12 bg-light overflow-hidden">
                <h1 className="text-lg text-center font-bold text-dark capitalize px-1">
                    Get in touch with me.
                </h1>
                <Form />    
            </section>
        </>
    )
};