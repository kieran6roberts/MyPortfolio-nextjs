import * as React from "react";
import { GetStaticProps } from "next";
import { request } from "graphql-request";

import { GET_HOME_PROJECTS } from "./queries/queries";
import Layout from "../src/components/Layout/Layout";
import Hero from "../src/components/Hero/Hero";
import Project from "../src/components/Project/Project";
import PageHead from "../src/components/PageHead/PageHead";

export type Projects = {
      projects: {     
        title: string,
        description: string,
        siteLink?: string,
        githubLink?: string,
        captions: string,
        images: {fileName: string}[],
        stackImages: {
          __typename: string,
          fileName: string}[],
        __typename?: string,
        stackNames: string[]
    }[]
};

export default function Home({ projects }: Projects): React.ReactElement {

  React.useEffect(() => {
    const hero: Element | null = document.querySelector("#hero");
    hero?.classList.add("opacity-100");
  }, []);

  return (
    <>
    <PageHead title="home" />
    <Layout>
        <Hero />
        <section className="mx-3 md:ms-16 px-3 md:px-16 border-l-2 border-r-2 border-gray-100 overflow-hidden">
          <h2 className="text-xl text-pri uppercase pt-4 pb-8">
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
  const { projects }: Projects = await request(
    process.env.CMS_API, 
    GET_HOME_PROJECTS
    );

  if (!projects) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      projects
    },
  }
};
