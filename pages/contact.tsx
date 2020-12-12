import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import Form from "src/containers/Form/Form";
import PageHead from "src/components/PageHead/PageHead";

export default function Contact(): React.ReactElement {
    return(
        <>
        <PageHead title="kierandev | contact"
        description="Got any questions or queries. Want to enquire about working together. Whatever it is, let's get in touch!" />
            <section className="relative flex bg-light px-2 my-4 md:px-8 md:mx-4 lg:px-16 border-l-2 border-r-2 border-gray-200 overflow-hidden">
                <div>
                    <h1 className="text-md uppercase text-dark text-center pb-8">
                        Get in touch with me.
                    </h1>
                    <p className="text-sm capitalize text-gray-500 text-center">
                        I'm available through the contact form provided or via my social links below.
                    </p>
                    <ul className="flex justify-center items-center">
                        <li className="mb-4">
                            <a href="https://github.com/kieran6roberts"  
                            className="text-md">
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="https://www.linkedin.com/in/kieran-roberts-00517b178/"  
                            className="text-md">
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </div>
                <Form />    
            </section>
        </>
    )
};