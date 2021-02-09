import { GetStaticPaths, GetStaticProps } from "next";
import { request } from "graphql-request";
import { GET_ALL_BLOG_TITLES, GET_SINGLE_BLOG } from "@/queries/blogs";
import { BLOG_MAIN } from "@/pages/blog";
import Link from "next/link";
import Image from "next/image";
import Markdown from "@/components/Markdown/Markdown";
import PageHead from "@/components/PageHead/PageHead";

interface SINGLE_BLOG extends BLOG_MAIN {
    blogs: BLOG_MAIN[]
}

export default function BlogPost({ blogs }: SINGLE_BLOG) {
    const [ blog ] = blogs;

    return (
      <section>
        <PageHead title={`kierandev | ${blog.title}`}
        description={blog.description}
        currentURL={`https://kieranroberts.dev/blog/${blog.title}`} />
        <h1 className="px-1 font-bold text-center text-md text-dark">
            {blog.title}
        </h1>
        <div>
          <p className="mr-1 font-bold text-center text-xxs">
              Posted by {blog.author ?? "Kieran Roberts"} on
              <span className="block ml-1 font-bold sm:inline-block text-xxs text-pri">
                <time>{blog.postDate ?? "Unable to retrieve date"}</time>
              </span>
          </p>
        </div>
        <figure className="relative w-full h-56 mx-auto mb-20 border border-purple-300 shadow-md 2xl:mb-32 lg:w-5/6 lg:h-hero">
          <Image
          alt="blog post preview"
          layout="fill"
          objectFit="cover"
          src={`/images/${blog.previewImage.fileName}`}
          />
          <figcaption className="absolute bottom-0 left-0 p-1 text-white bg-pri">
            {blog.previewCaption ?? "unable to retrieve image caption"}
          </figcaption>
        </figure>
        <h2 className="mb-8 text-sm font-bold text-center text-sec">
          {blog.subTitle ?? "unable to retrieve sub-title"}
        </h2>
        <section className="px-1 mx-1 md:mx-3 md:px-24">
          <Markdown string={blog.blogContent.body} />
        </section>
        <Link aria-label="top of the page"
         href="/" passHref>
        <a className="block px-4 py-1 m-auto mb-24 text-xs text-center uppercase transition-transform transform border-2 2xl:mb-40 2xl:mt-20 w-max border-pri text-pri hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400">
          Back to the top
        </a>
      </Link>
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
      let variable;

      if (typeof params?.id === "string") {
        variable = { title: `${params?.id?.split("-").join(" ")}`};
      }
  
        const { blogs }: SINGLE_BLOG = await request(
          process.env.CMS_API,
          GET_SINGLE_BLOG,
          variable
        );
  
        return {
            props: { blogs },
            revalidate: 1
        }
    };