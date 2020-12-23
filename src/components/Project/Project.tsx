import Image from "next/image";
import Link from "next/link";
import { BiMouse } from "react-icons/bi";
import { VscChevronRight } from "react-icons/vsc";
import { motion as m } from "framer-motion";

import Button from "../Button/Button";
import SubHeader from "../SubHeader/SubHeader";
import List from "../List/List";

export type ProjectProps = {
    title: string,
    description: string,
    siteLink?: string,
    githubLink?: string,
    captions?: string
    images: {
        fileName: string
    }[],
    stackImages: {
        __typename: string,
        fileName: string
    }[],
    __typename?: string,
    stackNames: string[]
};

export default function Project({ 
    siteLink, 
    githubLink, 
    description, 
    title, 
    images, 
    captions, 
    stackImages, 
    stackNames }: ProjectProps): React.ReactElement {

    return (
        <div className="mb-32 overflow-hidden shadow md:px-4 lg:px-12 md:mx-6 bg-light">
            <div className="px-4 bg-light">
                <SubHeader title={title}/>
                <div className="relative w-full max-w-md mx-auto mb-24 2xl:mb-56 md:max-w-7xl h-96 md:h-hero 2xl:h-lgContain">
                    <div className="absolute right-0 z-10 w-2/4 md:-right-20 2xl:-right-56 -bottom-12 2xl:h-full h-4/5">
                        <div className="h-full">
                            <Image src={`/images/${images[2].fileName}`}
                                alt={captions}
                                className="relative block border-2 border-black"
                                layout="fill"
                                objectFit="contain"/>
                        </div>
                    </div>
                    <div className="absolute left-0 w-5/6 md:left-24 bottom-1/2 h-3/6">
                        <div className="w-full h-full">
                            <Image src={`/images/${images[0].fileName}`}
                                alt={captions}
                                layout="fill"
                                objectFit="contain"/>
                        </div>
                    </div>
                    <div className="absolute left-0 w-5/6 2xl:-left-56 -bottom-4 h-3/6">
                        <div className="w-full h-full">
                            <Image src={`/images/${images[1].fileName}`}
                                alt={captions}
                                layout="fill"
                                objectFit="contain"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pb-8 2xl:justify-center sm:flex-row 2xl:pb-32">
                    <Button link={siteLink}
                    color="bg-light text-dark mb-2 2xl:mx-8 sm:mb-0 sm:mr-4">
                        visit website
                    </Button>
                    <Button link={githubLink}
                    color="bg-offLight text-dark 2xl:mx-8">
                        github repo
                    </Button>
                </div>
                <div className="pl-1 bg-gradient-to-b from-purple-400 via-purple-600 to-blue-800">
                    <h4 className="pl-4 my-8 uppercase bg-light text-md text-sec 2xl:my-24">
                        project description
                    </h4>
                </div>
                <p className="py-2 text-xs text-dark">
                    {description}
                </p>
                <div className="pl-1 bg-gradient-to-b from-purple-400 via-purple-600 to-blue-800">
                    <h4 className="pl-4 my-8 uppercase bg-light text-md text-sec 2xl:my-24">
                        tech stack
                    </h4>
                </div>
                <List images={stackImages} names={stackNames} />
                <div className="w-max h-max my-16 bg-gradient-to-r from-purple-400 to-purple-600 p-0.5">
                    <Link href={`/projects/${title}`}>
                        <a className={`group flex items-center bg-pri w-max flex align-items whitespace-nowrap text-xxs text-light font-bold uppercase py-2 px-3 2xl:py-4 2xl:px-6 cursor-pointer transition duration-100 ease-in hover:bg-light hover:text-dark focus:outline-none focus:ring-4 focus:ring-yellow-400`}>
                            <span className="block pr-4">
                                case-study
                            </span>
                            <VscChevronRight className="text-xs transition ease-in opacity-0 duration-50 group-hover:opacity-100"
                            aria-label="top of the page"/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
};