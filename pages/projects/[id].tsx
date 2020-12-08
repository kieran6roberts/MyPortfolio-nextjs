import { GetStaticPaths, GetStaticProps } from "next";
import { gql } from "@apollo/client";

import { initApolloClient } from "../../src/lib/apolloClient";
import Layout from "../../src/components/Layout/Layout";

export default function project() {
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
    return {
      paths: [
       { params: { id: ""} },
       { params: { id: ""} },
      ],
      fallback: false
    }
  };

  export const getStaticProps: GetStaticProps = async () => {
    const apolloClient = initApolloClient();

    const { data: projects } = await apolloClient.query({
      query: gql`
        query GetProjects {
          projects {
            title
            description
            images {
              fileName
            }
            captions,
            siteLink,
            githubLink
            stackImages {
              fileName
            }
            stackNames
          }
        }
      `
    });
      return {
          props: {}
      }
  };