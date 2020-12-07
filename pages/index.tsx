import * as React from "react";
import { GetStaticProps } from "next";
import { ApolloClient, 
  InMemoryCache,  
  gql } from "@apollo/client";

import Layout from "../src/components/Layout/Layout";
import Hero from "../src/components/Hero/Hero";

export type Projects = {
    projects: {
      projects: {     
        name: string,
        description: string
    }[]
  }
};

export default function Home({ projects: { projects } }: Projects): React.ReactElement {
  console.log(projects);

  return (
    <Layout>
      <h1>home</h1>
      <Hero />
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
