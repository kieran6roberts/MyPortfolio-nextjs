import Image from "next/image";

import { generateKey } from "@/components/Card/Card";

type LIST_IMAGES = { fileName: string }[];
type LIST_NAMES = string[];

export default function List({ names, images }: { names: LIST_NAMES, images: LIST_IMAGES }): React.ReactElement {
    function mapStackToList(arr1: LIST_IMAGES, arr2: LIST_NAMES) {
        const combinedArr = arr1.map((item, index) => ({item, name: arr2[index]}));

        return combinedArr.map((item): React.ReactElement => {
            return (
                <li key={`${generateKey(item.name)}`}
                className="flex items-center justify-start my-4 lg:pb-12 lg:my-0 lg:mr-12 lg:flex-col lg:justify-center">
                    <div className="block mr-4 lg:mr-0">
                        <Image 
                        alt={`${item.name} logo`}
                        height={40}
                        src={`/images/icons/${item.item.fileName}`}
                        width={80} />
                    </div>
                    <span className="block ml-2 text-xs font-bold lg:ml-0 whitespace-nowrap text-dark">
                        {item.name}
                    </span>
                </li>
            )
        }
            )
        };
        
    return (
        <ul className="flex flex-col flex-wrap py-2 lg:flex-row">
            {mapStackToList(images, names)}
        </ul>
    )
};