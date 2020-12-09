import { GetStaticPaths, GetStaticProps } from "next";
import { request } from "graphql-request";

import { GET_ALL_PROJECT_TITLES, GET_SINGLE_PROJECT } from "../queries/queries";
import Layout from "../../src/components/Layout/Layout";
import { Projects } from "../index";

interface FullProjects extends Projects {
  overview: string,
  stackDecision: string,
  outcome: string
}


export default function Project({ data }) {
  console.log(data);
    return (
        <Layout>
            <section className="px-8 md:px-16 lg:px-32 py-8">
                <h1 className="text-md text-txt uppercase">
                    project
                </h1>
            </section>
        </Layout>
    )
};


export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await request(
    process.env.CMS_API,
    GET_ALL_PROJECT_TITLES
  );

  const paths = projects.map((project) => ({
    params: { id: encodeURIComponent(project.title)}
  }));

    return {
      paths,
      fallback: false
    }
  };

  export const getStaticProps: GetStaticProps = async ({ params }) => {
      const VARIABLE = {
        title: `${params.id}`
      };

      const data = await request(
        process.env.CMS_API,
        GET_SINGLE_PROJECT,
        VARIABLE
      );

      return {
          props: {
            data
          }
      }
  };