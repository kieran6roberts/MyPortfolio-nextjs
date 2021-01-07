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
                <li key={`${generateKey(item[1])}`}
                className="flex items-center justify-start my-4 lg:my-0 lg:mr-12 lg:flex-col lg:justify-center">
                    <div className="block mr-4 lg:mr-0">
                        <Image src={`/images/icons/${item[0].fileName}`}
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