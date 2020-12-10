import { StringValueNode } from "graphql/language/ast";
import Image from "next/image";
import { generateKey } from "../Card/Card";

interface ImagesProps {
    images: {
        __typename: string,
        fileName: string,
    }[],
    map?: any
}

interface NamesProps {
    names: string[]
}

type ListProps = ImagesProps & NamesProps;


export default function List({ names, images }: ListProps): React.ReactElement {
    function mapStackToList(arr1: ImagesProps, arr2: NamesProps) {
        const combinedArr = arr1.map((item: { __typeName: string, fileName: string}, index: any) => [item, arr2[index]]);
        console.log(combinedArr);

        return combinedArr.map((item: [string, { fileName: string} ]): React.ReactElement => {
            return (
                <li key={`${generateKey(item[0])}`}>
                    <Image src={`/images/icons/${item[1].fileName}`}
                    alt={`${item[0]} logo`}
                    height={16}
                    width={16} />
                    <span className="inline-block ml-2 text-xs text-gray-500">
                        {item[0]}
                    </span>
                </li>
            )
        })
    };
        
    return (
        <ul className="">
            {mapStackToList(names, images)}
        </ul>
    )
};