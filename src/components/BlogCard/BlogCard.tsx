import Link from "next/link";
import Image from "next/image";
import { BLOG_CARD } from "@/pages/blog";
import BlogTag from "@/components/BlogTag/BlogTag";
import { generateKey } from "../Card/Card";

export default function BlogCard({
    author, 
    description,
    date,
    gridSpan = "col-span-1", 
    previewImage,
    id,
    imgHeight = "h-2/5",
    subTitle,
    tags,
    title,
 }: BLOG_CARD) {
    
    return (
        <article id={id} className={`${gridSpan} w-full mx-auto overflow-hidden text-center border border-gray-300 h-hero`}>
            <Link href={`/blog/${title?.split(" ").join("-")}`} passHref>
                <a className="w-full h-full">
                    <div className={`${imgHeight} relative w-full mb-8 border border-purple-300`}>
                        <Image 
                        alt="blog preview"
                        layout="fill"
                        objectFit="cover"
                        src={`/images/${previewImage}`}
                        />
                    </div>
                    <h3 className="px-3 mb-6 text-xs font-bold">
                        {title ?? "Unable to retrieve title"}
                    </h3>
                    <p className="px-3 mb-3 text-xxs">
                        Posted by {author ?? "Kieran Roberts"}
                    </p>
                    <section className="px-4 py-2">
                        <p className={`${imgHeight !== "h-2/5" ? "hidden" : null} px-3 mb-6 text-xxs`}>
                            {description ?? "Unable to retrieve blog description"}
                        </p>
                        <footer className="flex flex-col items-center justify-between mt-auto md:flex-row">
                            <ul className="flex flex-wrap justify-center mb-3 md:mb-0">
                                {tags?.map((tag: string) => <li key={generateKey(tag)}>
                                    <BlogTag tagName={tag} />
                                </li>)}
                            </ul>
                            <p className="text-xxs">
                                Posted on <time>{date ?? "Unable to retrieve date"}</time>
                            </p>
                        </footer>
                    </section>
                </a>
            </Link>
        </article>
    );
}