import Image from "next/image";
import Link from "next/link";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlinePhone, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export type LayoutProps = {
    children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: LayoutProps): React.ReactElement {
    return (
        <div className="flex flex-col justify-between font-mono">
            <section className="relative z-10">
                <nav className="">
                    <div className="h-1 w-full bg-gradient-to-r from-green-400 via-blue-400 to-pink-400"
                    id="style-bar"/>
                        <div className="flex items-center py-8 px-6 md:px-16">
                            <div className="flex p-2 bg-pri mr-4 cursor-pointer">
                                <Link href="/" passHref>
                                    <a className="flex align-center">
                                        <Image
                                        src="/images/k.svg"
                                        alt="logo of the letter k"
                                        height={24}
                                        width={24} />
                                    </a>
                                </Link>
                            </div>
                        <span className="hidden sm:inline-block text-xs text-pri font-bold">
                            Kieran Roberts
                        </span>
                        <a href="https://github.com/kieran6roberts"  
                        className="inline-block text-md text-dark ml-3 transform transition duration-100 ease hover:scale-105">
                            <AiFillGithub />
                        </a>
                        <ul className="flex ml-auto font-bold capitalize">
                            <li className="flex-auto bg-light">
                                <Link href="/#projects" passHref>
                                    <a className="group block relative text-xxs text-sec py-2 px-4 md:py-3 md:px-6 border-2 border-pri overflow-hidden cursor-pointer transition duration-150 ease-in hover:bg-pri hover:text-light">
                                        projects
                                        <RiComputerLine className="absolute top-0 left-0 text-lg text-gray-400 text-opacity-30 transition duration-150 ease-in group-hover:text-white group-hover:text-opacity-20" />
                                    </a>
                                </Link>
                            </li>
                            <li className="flex-auto bg-light ml-4 ml:mx-8">
                                <Link href="/contact" passHref>
                                    <a className="group block relative text-xxs text-sec py-2 px-4 md:py-3 md:px-6 border-2 border-pri overflow-hidden cursor-pointer transition duration-150 ease-in hover:bg-pri hover:text-light">
                                        contact me
                                        <AiOutlinePhone className="absolute top-0 left-0 text-lg text-gray-400 text-opacity-30 transition duration-150 ease-in  group-hover:text-white group-hover:text-opacity-20" />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
            <main className="mx-3 px-4 md:px-16 border-l-2 border-r-2 border-gray-100 overflow-hidden">
            {children}
            </main>
            <footer className="text-center bg-dark text-light p-4">
                <ul className="flex flex-col items-center">
                    <li className="mb-4">
                        <a href="https://github.com/kieran6roberts"  
                        className="text-md">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="https://www.linkedin.com/in/kieran-roberts-00517b178/"  
                        className="text-md">
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
                <p className="capitalize text-sm text-pri">
                    created and designed by Kieran Roberts.
                </p>
                <span className="text-xxs text-gray-400">
                    kieran6roberts@gmail.com
                </span>
            </footer>
        </div>
    )
};