import Button from "../Button/Button";
import SubHeader from "../SubHeader/SubHeader";

export default function Project({ liveLink, githubLink, description, title }): React.ReactElement {
    return (
        <div className="px-8 border-l-2 border-r-2 border-gray-200 overflow-hidden">
            <SubHeader title={title}/>
            <div>
                image
            </div>
            <span>
                caption
            </span>
            <div className="flex">
                <Button link={liveLink}
                color="bg-light text-dark">
                    visit website
                </Button>
                <Button link={githubLink}
                color="bg-offLight text-dark">
                    github repo
                </Button>
            </div>
            <h4 className="text-lg text-acc uppercase border-l-2 border-acc my-8 pl-4">
                project description
            </h4>
            <p className="py-2">
                {description}
            </p>
            <h4 className="text-lg text-acc uppercase border-l-2 border-acc my-8 pl-4">
                tech stack
            </h4>
            <ul className="">
                <li className="">
                    stack
                </li>
            </ul>
            <div className="my-8">
                <Button link="/"
                color="bg-pri text-light">
                    case study
                </Button>
            </div>
        </div>
    )
};