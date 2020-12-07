import * as React from "react";
import { GetStaticProps } from "next";
import { ApolloClient, 
  InMemoryCache,  
  gql } from "@apollo/client";

import Layout from "../src/components/Layout/Layout";
import Hero from "../src/components/Hero/Hero";
import SubHeader from "../src/components/SubHeader/SubHeader";

export type Projects = {
    projects: {
      projects: {     
        title: string,
        description: string,
        __typename?: string
    }[]
  }
};

export default function Home({ projects: { projects } }: Projects): React.ReactElement {
  console.log(projects);

  return (
    <Layout>
        <Hero />
        <section className="mx-3 md:ms-16 border-l-2 border-r-2 border-gray-100 overflow-hidden">
          <h2 className="text-md text-pri uppercase py-20 pl-4">
            take a look at my work
          </h2>
          <SubHeader title={projects[0].title}/>
          <SubHeader title={projects[1].title}/>
      </section>
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: process.env.CMS_API,
    cache: new InMemoryCache()
  });

  const { data: projects } = await client.query({
    query: gql`
      query GetProjects {
        projects {
          title
          description
        }
      }
    `
  });

  return {
    props: {
      projects: projects
    }
  }
};
