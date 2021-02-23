import * as React from "react";
import { GetStaticProps } from "next";
import { request } from "graphql-request";
import { GET_ALL_BLOGS } from "@/queries/blogs";
import BlogCard from "@/components/BlogCard/BlogCard";
import BlogTag from "@/components/BlogTag/BlogTag";
import { generateKey } from "@/components/Card/Card";
import PageHead from "@/components/PageHead/PageHead";
import SocialItem from "@/components/SocialItems/SocialItem/SocialItem";
import { FaDev } from "react-icons/fa";
import Link from "next/link";

export interface BLOG_CARD {
    author: string;
    description: string;
    postDate: string;
    previewImage: {
        fileName: string
    };
    readonly id: string;
    gridSpan?: string;
    imgHeight?: string;
    title: string;
    tags?: string[];
    subTitle?: string;
}

export interface BLOG_MAIN extends BLOG_CARD {
    blogContent: {
        body: string
    };
    previewCaption: string;
}

const tags = ["beginner", "advanced", "tips", "projects", "html", "css", "javaScript/ react", "and more!"];

export default function Blog({ blogs }: { blogs: BLOG_CARD[] }) {

    function mapBlogToCard() {
        return blogs.map((blog: BLOG_CARD, index) => {
            if (!index) {
               return <BlogCard 
                author={blog.author}
                postDate={blog.postDate}
                description={blog.description}
                gridSpan="col-span-2" 
                id={generateKey(blog.title)}
                imgHeight="h-2/4"
                previewImage={blog.previewImage}
                title={blog.title}
                tags={blog.tags}
                />
            } else {
                return <BlogCard 
                author={blog.author}
                postDate={blog.postDate}
                description={blog.description}
                id={generateKey(blog.title)}
                previewImage={blog.previewImage}
                title={blog.title}
                tags={blog.tags}
                />
            }
        });
    }


    return (
        <>
        <PageHead title="kierandev | blog"
        description="My web development blog, a collection of posts aimed at helping other aspiring developers improve their skills"
        currentURL="https://kieranroberts.dev/blog" />
        <h1 className="px-1 mb-8 font-bold text-center capitalize 2xl:mb-16 text-md text-dark">
            Welcome to my personal web development blog!
        </h1>
        <ul className="flex justify-center list-none">
            <span>
                Follow me @ 
            </span>
            <SocialItem label="to my Dev community profile" 
                path="https://dev.to/kieran6roberts">
                <FaDev className={`text-acc transition duration-150 transform text-md ease hover:scale-125`} />
            </SocialItem>
            <Link href="https://dev.to/kieran6roberts">
                <a aria-label="to my dev.to blog profile"
                className="hidden text-sec sm:inline-block"        
                rel="noopener"
                target="_blank">
                    dev.to/kieran6roberts
                </a>
            </Link>
        </ul>
        <p className="mb-12 text-xs text-center 2xl:mb-24">
            You can expect to read articles related to the many different topics covered 
            in the broad spectrum of front-end web development. I am by no means an expert but 
            I would like to give back to the community that helped me when I was first beginning
            my coding journey by sharing some of the things I have learned so far.
        </p>
        <ul className="flex flex-wrap justify-center mb-12 2xl:mb-24">
            {tags.map((tag: string) => <BlogTag tagName={tag} />)}
        </ul>
        <section>
            <ul className="grid grid-cols-1 pt-4 mb-20 2xl:mb-32 gap-x-2 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
                {mapBlogToCard()}
            </ul>
            <footer>
                <Link aria-label="top of the page"
                href="/blog" 
                passHref
                >
                    <a className="block px-4 py-1 m-auto mb-24 text-xs text-center uppercase transition-transform transform border-2 2xl:mb-40 2xl:mt-20 w-max border-pri text-pri hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400">
                    Back to the top
                    </a>
                </Link>
            </footer>
        </section>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const { blogs }: { blogs: BLOG_MAIN} = await request(
      process.env.CMS_API, 
      GET_ALL_BLOGS
      );
  
    if (!blogs) {
      return { notFound: true }
    }
  
    return {
      props: { blogs },
      revalidate: 1
    }
};