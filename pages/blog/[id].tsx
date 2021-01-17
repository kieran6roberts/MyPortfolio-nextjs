import { GetStaticPaths, GetStaticProps } from "next";
import { request } from "graphql-request";
import { GET_ALL_BLOG_TITLES, GET_SINGLE_BLOG } from "@/queries/blogs";
import { BLOG } from "@/pages/blog";

interface SINGLE_BLOG extends BLOG {
    blogs: BLOG[]
}

export default function BlogPost({ blogs }) {
    const [ blog ] = blogs;

    return (
        <h1 className="px-1 mb-8 font-bold text-center capitalize text-md text-dark">
            {blog.title}
        </h1>
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