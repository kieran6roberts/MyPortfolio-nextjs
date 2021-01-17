import Link from "next/link";
import Image from "next/image";

interface BLOG_CARD {
    gridSpan?: string
    imgHeight?: string
}

export default function BlogCard({ gridSpan = "col-span-1", imgHeight = "h-2/5" }: BLOG_CARD) {
    return (
        <article className={`${gridSpan} w-full mx-auto overflow-hidden text-center border border-gray-300 h-hero`}>
            <Link href="/blog">
                <a className="w-full h-full">
                    <div className={`${imgHeight} mb-2 border border-purple-300`}>
                        <Image alt="image"
                        height={150}
                        width={100}
                        objectFit="cover"
                        src="/img.png"
                        />
                    </div>
                    <h3 className="mb-2 text-sm font-bold uppercase">
                        Blog Title
                    </h3>
                    <p className="mb-1 text-xxs">
                        Posted by Kieran Roberts
                    </p>
                    <section className="px-4 py-2">
                        <p className="mb-8 text-xxs">
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s. sfvs sdg sd g g gs
                        </p>
                        <footer className="flex items-center justify-between">
                            <div>
                                <span className="mx-4 text-xxs">
                                    Tags
                                </span>
                                <span className="mx-4 text-xxs">
                                    Tags
                                </span>
                            </div>
                            <p className="text-xxs">
                                Posted on <time>time</time>
                            </p>
                        </footer>
                    </section>
                </a>
            </Link>
        </article>
    );
}