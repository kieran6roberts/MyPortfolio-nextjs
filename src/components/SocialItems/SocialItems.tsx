import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import SocialItem from "@/components/SocialItems/SocialItem/SocialItem";

interface SOCIAL_ITEM {
    styling?: string,
    iconColor: string
};

export default function SocialItems({ styling, iconColor }: SOCIAL_ITEM): React.ReactElement {
    return (
        <ul className={`items-center ${styling ?? null}`}>
            <SocialItem label="to my github page" 
            path="https://github.com/kieran6roberts">
                <AiFillGithub className={`${iconColor} transition duration-150 transform text-md ease hover:scale-125`} />
            </SocialItem>
            <SocialItem label="to my linkedin page" 
            path="https://www.linkedin.com/in/kieran-roberts-00517b178/">
                <FaLinkedinIn className={`${iconColor} transition duration-150 transform text-md ease hover:scale-125`} />
            </SocialItem>
            <SocialItem label="send me an email" 
            path="mailto:kieran6roberts@gmail.com?subject=Mail%20from%20portfolio">
                <SiGmail className={`${iconColor} transition duration-150 transform text-md ease hover:scale-125`} />
            </SocialItem>
            <SocialItem label="to my twitter profile" 
            path="https://twitter.com/Kieran6dev">
                <AiOutlineTwitter className={`${iconColor} transition duration-150 transform text-md ease hover:scale-125`} />
            </SocialItem>
    </ul>
    )
};