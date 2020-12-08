import * as React from "react";
import { GetStaticProps } from "next";
import { ApolloClient, 
  InMemoryCache,  
  gql } from "@apollo/client";

import Layout from "../src/components/Layout/Layout";
import Hero from "../src/components/Hero/Hero";
import Project from "../src/components/Project/Project";
import PageHead from "../src/components/PageHead/PageHead";

export type Projects = {
    projects: {
      projects: {     
        title: string,
        description: string,
        siteLink?: string,
        githubLink?: string,
        captions: string,
        images: string[],
        stackImages: {
          __typename: string,
          fileName: string}[],
        __typename?: string,
        stackNames: string[]
    }[]
  }
};

export default function Home({ projects: { projects } }: Projects): React.ReactElement {
  console.log(projects);

  return (
    <>
    <PageHead title="home" />
    <Layout>
        <Hero />
        <section className="mx-3 md:ms-16 px-3 md:px-16 border-l-2 border-r-2 border-gray-100 overflow-hidden">
          <h2 className="text-xl text-pri uppercase pt-20 pb-8">
            take a look at my work
          </h2>
          <ul className="list-none">
            {projects && projects.map(project => 
            <li key={`${project.__typename}${project.title}`} >
              <Project
              title={project.title} 
              image={project.images[0].fileName}
              captions={project.captions[0]}
              description={project.description}
              siteLink={project.siteLink}
              githubLink={project.githubLink}
              stackImages={project.stackImages}
              stackNames={project.stackNames} />
            </li>
            )}
          </ul>
      </section>
    </Layout>
    </>
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
    props: {
      projects: projects
    }
  }
};
