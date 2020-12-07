import Image from "next/image";

export default function Hero(): React.ReactElement {
    return(
        <div className="absolute top-0 left-0 h-screen w-full z-0">
            <div className="">
                <Image src="/images/hero.png"
                alt="stylized selfie"
                layout="fill"
                objectFit="cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-300 to-transparent bg-opacity-70 text-center">
                <ul className="flex items-end w-full justify-evenly py-4">
                    <li className="">
                        <Image src="/images/icons/react.svg" 
                        alt="stack logo"
                        height={32}
                        width={32}/>
                    </li>
                    <li className="">
                        <Image src="/images/icons/javascript.svg" 
                            alt="stack logo"
                            height={48}
                            width={48}/>
                    </li>
                    <li className="">
                        <Image src="/images/icons/css-3.svg" 
                        alt="stack logo"
                        height={32}
                        width={32}/>
                    </li>
                </ul>
                <h1 className="text-xl text-dark uppercase py-1">
                    front-end developer
                </h1>
                <p className="text-sm py-2 uppercase">
                    <span className="text-sec mr-1">
                        solving
                    </span>
                    your web related needs
                </p>
            </div>
        </div>
    )
};