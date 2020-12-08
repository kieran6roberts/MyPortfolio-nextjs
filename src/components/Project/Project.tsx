import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
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
        <div className="px-8 md:px-16 lg:px-32 border-l-2 border-r-2 border-gray-200 overflow-hidden">
            <SubHeader title={title}/>
            <div className="flex justify-center rounded bg-gradient-to-b from-green-400 to-green-0 w-max-40 lg:w-max m-auto p-1 mb-8">
                <Image src={`/images/${image}`}
                alt={captions}
                width={775}
                height={350}/>
            </div>
            <p className="text-xs italic text-dark text-center mb-8">
                {captions}
            </p>
            <div className="flex">
                <Button link={siteLink}
                color="bg-light text-dark">
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
            <p className="text-sm py-2">
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
        </div>
    )
};