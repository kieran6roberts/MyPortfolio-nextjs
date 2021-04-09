import Image from "next/image";
import Link from "next/link";
import { VscChevronRight } from "react-icons/vsc";

import ExternalLink from "@/components/ExternalLink/ExternalLink";
import Markdown from "@/components/Markdown/Markdown";
import SubHeader from "@/components/SubHeader/SubHeader";
import List from "@/components/List/List";
import { PROJECT } from "@/pages/index";

export default function Project({ 
    captions, 
    description, 
    githubLink, 
    images, 
    siteLink, 
    stackImages, 
    stackNames,
    title }: PROJECT): React.ReactElement {

    const [ markdownString ] = description;

    return (
        <article className="mb-32 overflow-hidden shadow md:px-4 lg:px-12 md:mx-6 bg-light">
            <div className="px-4 bg-light">
                <SubHeader title={title}/>
                <div className="relative w-full max-w-md mx-auto mb-24 2xl:mb-56 md:max-w-7xl h-hero 2xl:h-lgContain">
                    <div className="absolute z-10 w-2/4 h-full right-6 sm:-right-16 lg:-right-32 2xl:-right-56 -bottom-12 2xl:h-full">
                        <div className="bg-black border-4 border-black shadow-2xl max-h-mobileH h-5/6 rounded-xl w-max">
                            <Image src={`/images/${images[2].fileName}`}
                                alt={captions[2]}
                                height={400}
                                width={200}
                                objectFit="contain"
                                objectPosition="offTop"/>
                        </div>
                    </div>
                    <div className="absolute left-0 w-full shadow-md md:w-4/6 md:left-24 2xl:w-full 2xl:-left-56 bottom-1/2 h-3/6">
                        <div className="w-full h-full">
                            <Image src={`/images/${images[0].fileName}`}
                                alt={captions[0]}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="left top"/>
                        </div>
                    </div>
                    <div className="absolute left-0 w-5/6 shadow-md md:left-24 md:w-4/6 2xl:-right-1/2 2xl:w-full -bottom-4 h-1/2">
                        <div className="w-full h-full">
                            <Image src={`/images/${images[1].fileName}`}
                                alt={captions[1]}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="left top"/>
                        </div>
                        <div className="absolute invisible hidden overflow-hidden bg-black border-4 border-black shadow-2xl bottom-4 2xl:block 2xl:visible max-h-mobileH h-5/6 rounded-xl w-max">
                            <Image src={`/images/${images[3].fileName}`}
                                alt={captions[3]}
                                height={380}
                                width={200}
                                objectFit="contain"
                                objectPosition="offTop"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pb-8 2xl:justify-center sm:flex-row 2xl:pb-32">
                    <ExternalLink link={siteLink}
                    styling="bg-light mb-2 2xl:mx-8 sm:mb-0 sm:mr-4">
                        visit website
                    </ExternalLink>
                    <ExternalLink link={githubLink}
                    styling="bg-offLight 2xl:mx-8">
                        github repo
                    </ExternalLink>
                </div>
                <div className="pl-1 bg-gradient-to-b from-purple-400 via-purple-600 to-blue-800">
                    <p className="pl-4 my-8 uppercase bg-light text-md text-sec 2xl:my-24">
                        project description
                    </p>
                </div>
                <Markdown string={markdownString} />
                <div className="pl-1 bg-gradient-to-b from-purple-400 via-purple-600 to-blue-800">
                    <p className="pl-4 my-8 uppercase bg-light text-md text-sec 2xl:my-24">
                        tech stack
                    </p>
                </div>
                <List images={stackImages} names={stackNames} />
                <div className="my-16 2xl:my-32 py-0.5 px-2">
                    <Link href={`/projects/${title}`}>
                        <a className={`group w-56 flex items-center justify-center bg-pri border-pri border-2 flex align-items whitespace-nowrap text-xxs text-light font-bold uppercase py-2 px-4 2xl:py-4 2xl:px-6 cursor-pointer transition duration-100 ease-in hover:bg-white hover:text-dark focus:outline-none focus:ring-4 focus:ring-yellow-400`}>
                            <span className="block pr-4">
                                case-study
                            </span>
                            <VscChevronRight className="text-xs transition ease-in transform translate-x-0 text-light duration-50 group-hover:translate-x-8 group-hover:text-sec "
                            aria-label="top of the page"/>
                        </a>
                    </Link>
                </div>
            </div>
        </article>
    )
};