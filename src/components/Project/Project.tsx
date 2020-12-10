import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { BiMouse } from "react-icons/bi";
import Button, { ButtonProps }from "../Button/Button";
import SubHeader from "../SubHeader/SubHeader";
import List from "../List/List";

export type ProjectProps = {
    title: string,
    description: string,
    siteLink?: string,
    githubLink?: string,
    captions?: string
    image: string,
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
    image, 
    captions, 
    stackImages, 
    stackNames }: ProjectProps): React.ReactElement {

    return (
        <div className="relative px-4 md:px-8 md:mx-4 lg:px-40 border-l-2 border-r-2 border-gray-200 overflow-hidden">
            <SubHeader title={title}/>
            <Link href={`projects/${title}`}>
                <div className="group relative flex justify-center w-max-40 xl:w-max m-auto p-1 mb-8 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105">
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-70 z-10 transition duration-300 ease-in group-hover:bg-opacity-0"/>
                    <BiMouse className="absolute z-20 h-12 w-12 top-2/4 -mt-6 text-md text-light transition duration-150 ease-in group-hover:text-transparent" />
                    <Image src={`/images/${image}`}
                    alt={captions}
                    width={775}
                    height={350}
                    objectFit="cover"/>
                </div>
            </Link>
            <p className="text-xs italic text-gray-400 text-center mb-8">
                {captions}
            </p>
            <div className="flex">
                <Button link={siteLink}
                color="bg-light text-dark mr-4">
                    visit website
                </Button>
                <Button link={githubLink}
                color="bg-offLight text-dark">
                    github repo
                </Button>
            </div>
            <h4 className="text-md text-acc uppercase border-l-2 border-acc my-8 pl-4">
                project description
            </h4>
            <p className="text-xs text-gray-500 py-2">
                {description}
            </p>
            <h4 className="text-md text-acc uppercase border-l-2 border-acc my-8 pl-4">
                tech stack
            </h4>
            <List images={stackImages} names={stackNames} />
            <div className="my-8">
                <Link href={`/projects/${title}`}>
                    <a className={`group bg-pri w-max flex align-items whitespace-nowrap text-xxs font-bold uppercase py-2 px-3 mr-8 border-2 border-pri cursor-pointer transition duration-50 ease-in hover:bg-green-400`}>
                        <span className="block pr-4">
                            case-study
                        </span>
                        <BsArrowUpRight className="text-xs transition duration-50 ease-in opacity-0 group-hover:opacity-100"/>
                    </a>
                </Link>
            </div>
            <div className="hidden lg:flex bg-white items-end justify-end absolute bottom-0 right-0 transform translate-x-24">
                <Image src={`/images/lg-screen.svg`}
                        alt="man thinking next to laptop"
                        width={450}
                        height={225}/>
            </div>
        </div>
    )
};