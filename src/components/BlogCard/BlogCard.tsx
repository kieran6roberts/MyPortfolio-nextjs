import Link from "next/link";
import Image from "next/image";
import { BLOG } from "@/pages/blog";
import BlogTag from "@/components/BlogTag/BlogTag";

export default function BlogCard({
    author, 
    description,
    date,
    gridSpan = "col-span-1", 
    imageSrc,
    imgHeight = "h-2/5",
    subTitle,
    tags,
    title,
 }: BLOG) {
    
    return (
        <article className={`${gridSpan} w-full mx-auto overflow-hidden text-center border border-gray-300 h-hero`}>
            <Link href={`/blog/${title.split(" ").join("-")}`} passHref>
                <a className="w-full h-full">
                    <div className={`${imgHeight} mb-8 border border-purple-300`}>
                        <Image 
                        alt="blog preview"
                        height={150}
                        width={100}
                        objectFit="cover"
                        src={`/images/${imageSrc ?? "img.png"}`}
                        />
                    </div>
                    <h3 className="px-3 mb-6 text-xs font-bold">
                        {title ?? "Unable to retrieve title"}
                    </h3>
                    <p className="px-3 mb-3 text-xxs">
                        Posted by {author ?? "Kieran Roberts"}
                    </p>
                    <section className="px-4 py-2">
                        <p className={`${imgHeight !== "h-2/5" ? "hidden" : null} px-3 mb-8 text-xxs`}>
                            {description ?? "unable to retireve blog description"}
                        </p>
                        <footer className="flex items-center justify-between mt-auto">
                            <div>
                                {tags?.map((tag: string) => <BlogTag tagName={tag} />)}
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