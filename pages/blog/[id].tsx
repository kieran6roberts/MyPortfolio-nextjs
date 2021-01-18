import { GetStaticPaths, GetStaticProps } from "next";
import { request } from "graphql-request";
import { GET_ALL_BLOG_TITLES, GET_SINGLE_BLOG } from "@/queries/blogs";
import { BLOG } from "@/pages/blog";
import Image from "next/image";
import Markdown from "@/components/Markdown/Markdown";

interface SINGLE_BLOG extends BLOG {
    blogs: BLOG[]
}

export default function BlogPost({ blogs }: SINGLE_BLOG) {
    const [ blog ] = blogs;

    return (
      <section>
        <h1 className="px-1 mb-16 font-bold text-center capitalize text-md text-dark">
            {blog.title}
        </h1>
        <figure className="relative w-4/6 mx-auto mb-32 border shadow-md h-hero">
          <Image
          alt="blog post preview"
          layout="fill"
          objectFit="contain"
          src={`/images/${blog.previewImage.fileName}`}
          />
          <figcaption className="absolute bottom-0 left-0 p-2 text-white bg-pri">
            {blog.previewCaption ?? "unable to retrieve image caption"}
          </figcaption>
        </figure>
        <h2 className="mb-8 text-sm font-bold text-center">
          {blog.subTitle ?? "unable to retrieve sub-title"}
        </h2>
        <section className="px-4 mx-3 md:px-24">
          <Markdown string={blog.blogContent.body} />
        </section>
      </section>
    )
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { blogs } = await request(
      process.env.CMS_API,
      GET_ALL_BLOG_TITLES
    );
  
    const paths = blogs.map((blog: { title: string }) => ({
      params: { id: blog.title.split(" ").join("-")}
    }));
  
      return {
        paths,
        fallback: false
      }
    };
  
    export const getStaticProps: GetStaticProps = async ({ params }) => {
        const VARIABLE = { title: `${params?.id?.split("-").join(" ")}`};
  
        const { blogs }: SINGLE_BLOG = await request(
          process.env.CMS_API,
          GET_SINGLE_BLOG,
          VARIABLE
        );
  
        return {
            props: { blogs },
            revalidate: 1
        }
    };