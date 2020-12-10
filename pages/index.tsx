import * as React from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import { IoIosCodeWorking } from "react-icons/io";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { request } from "graphql-request";

import { GET_HOME_PROJECTS } from "./queries/queries";
import Layout from "../src/components/Layout/Layout";
import Hero from "../src/components/Hero/Hero";
import Project from "../src/components/Project/Project";
import PageHead from "../src/components/PageHead/PageHead";
import Card from "../src/components/Card/Card";

export type Projects = {
      projects: {     
        title: string,
        description: string,
        siteLink?: string,
        githubLink?: string,
        captions: string[],
        images: {fileName: string}[],
        stackImages: {
          __typename: string,
          fileName: string}[],
        __typename?: string,
        stackNames: string[],
        overview?: string | string[],
        stackDecision?: string | string[],
        outcome?: string | string[]
    }[]
};

export default function Home({ projects }: Projects): React.ReactElement {

  React.useEffect((): void => {
    const hero: Element | null = document.querySelector("#hero");
    hero?.classList.add("opacity-100");
  }, []);

  return (
    <>
    <PageHead title="home" />
    <Layout>
        <Hero />
        <section className="mx-3 px-3 md:px-16 border-l-2 border-r-2 border-gray-100 overflow-hidden">
          <div className="px-4 md:px-8 md:mx-4 lg:px-36 border-l-2 border-r-2 border-gray-200 overflow-hidden">
            <div className="flex justify-center">
              <Image src="/images/tech.svg"
              alt="mobile phone and laptop illustration"
              height={350}
              width={350} />
            </div>
            <h2 className="text-md font-bold uppercase text-dark text-center pt-4 pb-8">
              Hi there, my name is 
              <span className="text-pri mx-2">
                Kieran 
                </span>
                and I develop performant and scalable websites. 
            </h2>
            <p className="text-sm text-gray-400 text-center w-3/4 m-auto">
              I enjoy solving problems, seeing the results instantly in the browser.
            </p>
            <HiOutlineDesktopComputer className="text-xxl text-pri m-auto my-16"/>
            <div className="lg:flex">
              <Card items={["JavaScript", "reactjs", "css", "html"]}
              header="My primary skills:" />
              <Card items={["nextjs", "tailwindcss", "sass", "webpack", "github"]}
              header="as well as:" />
              <Card items={["TypeScript", "redux", "graphql"]}
              header="currently learning:" />
            </div>
            <IoIosCodeWorking className="text-xxl text-pri m-auto mt-8"/>
            <p className="text-md text-dark uppercase py-16 text-center">
              Check out my work below
            </p>
          </div>
        </section>
        <section className="mx-3 md:ms-16 px-3 md:px-16 border-l-2 border-r-2 border-gray-100 overflow-hidden">
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
