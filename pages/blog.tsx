import * as React from "react";
import { GetStaticProps } from "next";
import { request } from "graphql-request";
import { GET_ALL_BLOGS } from "@/queries/blogs";
import BlogCard from "@/components/BlogCard/BlogCard";
import BlogTag from "@/components/BlogTag/BlogTag";
import { generateKey } from "@/components/Card/Card";

export interface BLOG {
    author: string;
    description?: string;
    date: string;
    previewImage: {
        fileName: string
    };
    id?: string;
    gridSpan?: string;
    imgHeight?: string;
    title: string;
    tags?: string[];
    subTitle?: string;
}

const tags = ["beginner", "advanced", "tips", "projects", "html", "css", "javaScript/ react", "and more!"];

export default function Blog({ blogs }: { blogs: BLOG[] }) {

    function mapBlogToCard() {
        return blogs.map((blog: BLOG, index) => {
            if (!index) {
               return <BlogCard 
                author={blog.author}
                date={blog.date}
                gridSpan="col-span-2" 
                id={generateKey(blog.title)}
                imgHeight="h-3/5"
                title={blog.title}
                tags={blog.tags}
                />
            } else {
                return <BlogCard 
                author={blog.author}
                date={blog.date}
                id={generateKey(blog.title)}
                previewImage={blog?.previewImage?.fileName}
                title={blog.title}
                tags={blog.tags}
                />
            }
        });
    }


    return (
        <>
        <h1 className="px-1 mb-8 font-bold text-center capitalize text-md text-dark">
            Welcome to my personal web development blog!
        </h1>
        <p className="mb-12 text-xs text-center">
            You can expect to read articles related to the many different topics covered 
            in the broad spectrum of front-end web development. I am by no means an expert but 
            I would like to give back to the community that helped me when I was first beginning
            my coding journey by sharing some the things I have learned so far.
        </p>
        <ul className="flex flex-wrap justify-center mb-12">
            {tags.map((tag: string) => <BlogTag id={generateKey(tag)} tagName={tag} />)}
        </ul>
        <section>
            <ul className="grid grid-cols-1 pt-4 gap-x-2 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
                {mapBlogToCard()}
            </ul>
            <footer>
                <p className="my-24 text-center text-sec text-txt">
                    End of content.
                </p>
            </footer>
        </section>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const { blogs }: { blogs: BLOG} = await request(
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