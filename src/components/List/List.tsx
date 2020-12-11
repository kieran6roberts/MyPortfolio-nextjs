import Image from "next/image";
import { generateKey } from "../Card/Card";

interface ImagesProps {
    images: {
        fileName: string,
    }[],
 
}

interface NamesProps {
    names: string[]
}

type ListProps = ImagesProps & NamesProps;


export default function List({ names, images }: ListProps): React.ReactElement {
    function mapStackToList(arr1: { fileName: string}[], arr2: string[]) {
        const combinedArr = arr1.map((item: {fileName: string}, index: any) => [item, arr2[index]]);

        return combinedArr.map((item: any): React.ReactElement => 
                <li key={`${generateKey(item[1])}`}>
                    <Image src={`/images/icons/${item[0].fileName}`}
                    alt={`${item[0]} logo`}
                    height={16}
                    width={16} />
                    <span className="inline-block ml-2 text-xs text-gray-500">
                        {item[1]}
                    </span>
                </li>
            )
        };
        
    return (
        <ul className="">
            {mapStackToList(images, names)}
        </ul>
    )
};