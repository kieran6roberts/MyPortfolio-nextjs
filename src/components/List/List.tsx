import Image from "next/image";

import { generateKey } from "@/components/Card/Card";

type LIST_IMAGES = { fileName: string }[];
type LIST_NAMES = string[];

export default function List({ names, images }: { names: LIST_NAMES, images: LIST_IMAGES }): React.ReactElement {
    function mapStackToList(arr1: LIST_IMAGES, arr2: LIST_NAMES) {
        const combinedArr = arr1.map((item, index) => [item, arr2[index]]);

        return combinedArr.map((item): React.ReactElement => 
                <li key={`${typeof item[1] === "string" && generateKey(item[1])}`}
                className="flex items-center justify-start my-4 lg:my-0 lg:mr-12 lg:flex-col lg:justify-center">
                    <div className="block mr-4 lg:mr-0">
                        <Image src={`/images/icons/${typeof item[0] !== "string" && item[0].fileName}`}
                        alt={`${item[0]} logo`}
                        height={40}
                        width={80} />
                    </div>
                    <span className="block ml-2 text-xs font-bold lg:ml-0 whitespace-nowrap text-dark">
                        {item[1]}
                    </span>
                </li>
            )
        };
        
    return (
        <ul className="flex flex-col py-2 lg:flex-row">
            {mapStackToList(images, names)}
        </ul>
    )
};