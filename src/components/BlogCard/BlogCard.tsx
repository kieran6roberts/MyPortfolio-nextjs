import Link from "next/link";
import Image from "next/image";
import { BLOG_CARD } from "@/pages/blog";
import BlogTag from "@/components/BlogTag/BlogTag";
import { generateKey } from "../Card/Card";

export default function BlogCard({
    author, 
    description,
    postDate,
    gridSpan = "col-span-1", 
    previewImage,
    id,
    imgHeight = "h-2/5",
    tags,
    title,
 }: BLOG_CARD) {
    
    return (
        <article id={id} className={`${gridSpan} w-full mx-auto shadow-md overflow-hidden text-center border border-purple-300 h-blogCard 2xl:h-lgContain`}>
            <Link href={`/blog/${title?.split(" ").join("-")}`} passHref>
                <a className="w-full h-full">
                    <div className={`${imgHeight} relative w-full mb-8 border-b border-purple-300 transform transition-all hover:scale-105`}>
                        <Image 
                        alt="blog preview"
                        layout="fill"
                        objectFit="cover"
                        src={`/images/${previewImage.fileName}`}
                        />
                    </div>
                    <h3 className="px-6 mb-3 text-xs font-bold text-sec">
                        {title ?? "Unable to retrieve title"}
                    </h3>
                    <span className="mr-1 font-bold text-xxs">
                        Posted by {author ?? "Kieran Roberts"}
                    </span>
                    <span className="block ml-1 font-bold sm:inline-block text-xxs text-pri">
                        on <time>{postDate ?? "Unable to retrieve date"}</time>
                    </span>
                    <section className="px-4 py-2">
                        <p className="px-3 mt-2 mb-6 lg:px-16 text-xxxs">
                            {description ?? "Unable to retrieve blog description"}
                        </p>
                        <footer className="flex items-center justify-center mt-4 lg:mt-8">
                            <ul className="flex flex-wrap justify-center mb-4">
                                {tags?.map((tag: string) => <li key={generateKey(tag)}>
                                    <BlogTag tagName={tag} />
                                </li>)}
                            </ul>
                        </footer>
                    </section>
                </a>
            </Link>
        </article>
    );
}