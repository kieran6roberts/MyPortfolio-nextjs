import * as React from "react";
import { GetStaticProps } from "next";
import { motion as m, useAnimation } from "framer-motion";
import { request } from "graphql-request";
import { useInView } from "react-intersection-observer";
import { VscVmActive, VscChevronDown } from "react-icons/vsc";

import Card from "@/components/Card/Card";
import Hero from "@/components/Hero/Hero";
import PageHead from "@/components/PageHead/PageHead";
import Project from "@/components/Project/Project";
import { GET_HOME_PROJECTS } from "@/queries/projects";
import { regVariant, staggerVariant } from "../src/animations/home";

export type ASSETS = { fileName: string, __typename: string };

export interface PROJECT {
  captions: string[];
  description: string;
  githubLink: string;
  images: ASSETS[];
  siteLink: string,
  stackImages: ASSETS[],
  stackNames: string[],
  title: string;
  __typename: string;
};

export type PROJECTS = { projects: PROJECT[] };

export default function Home({ projects }: PROJECTS): React.ReactElement {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const animation = useAnimation();

  function mapProjectsToElements(projects: PROJECT[]): JSX.Element[] {
    const [ firstProject ] = projects;
    const CHOSEN_FIRST_PROJECT = "upRoar Music App";
    let mapProjects = projects;
    
    if (firstProject.title !== CHOSEN_FIRST_PROJECT) {
      const reorderElement = projects.splice(-1, 1);
      projects.splice(0, 0, reorderElement[0]);
      mapProjects = projects;
    }

    return mapProjects.map((project) => 
        <li key={`${project.__typename}${project.title}`} >
          <Project {...project} />
        </li>
      )
    };

  React.useEffect(() => {
    if (inView) animation.start("visible");
    else animation.start("hidden");
  }, [ animation, inView ]);

  return (
    <>
    <PageHead title="Kierandev | Home" 
    description="Kieran Roberts front-end web developer portfolio showcasing my personal projects. Let's work together!"
    currentURL="https://kieranroberts.dev"
    />
    <div className="">
        <Hero />
        <section className="relative z-10">
            <h2 className="font-bold text-center uppercase text-md text-dark pb-28 2xl:pb-40">
              Welcome to my personal portfolio.
            </h2>
          <m.div className="relative overflow-hidden bg-light"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={staggerVariant}>
              <m.h2 className="pt-4 pb-16 font-bold text-center uppercase text-md text-dark 2xl:pb-36"
              variants={staggerVariant}>
                My name is 
                <m.span className="mx-3 text-acc"
                >
                  Kieran 
                  </m.span>
                  and I develop performant and scalable websites. 
              </m.h2>
              <m.p className="w-3/4 m-auto text-xs text-center text-gray-500"
              variants={regVariant}>
                I enjoy solving problems, seeing the results instantly in the browser.
              </m.p>
              <VscVmActive className="m-auto my-16 text-xxl text-pri"/>
              <m.div className="lg:flex">
                <Card items={["html", "css", "javaScript", "react"]}
                header="My primary skills:"
                parentVariant={staggerVariant}
                childVariant={regVariant} />
                <Card items={["tailwindcss", "sass", "next.js", "webpack", "jest", "testing-library"]}
                header="as well as:"
                parentVariant={staggerVariant}
                childVariant={regVariant}  />
                <Card items={["typeScript", "redux", "apollo/graphql"]}
                header="currently learning:"
                parentVariant={staggerVariant}
                childVariant={regVariant}  />
              </m.div>
              <VscChevronDown className="m-auto my-16 text-xxl text-dark animate-bounce"/>
              <m.p className="mb-16 text-center uppercase text-md text-dark"
              variants={regVariant}>
                Check out my work below
              </m.p>
          </m.div>
        </section>
        <section>
          <ul>
            {projects.length ? mapProjectsToElements(projects) : null}
          </ul>
        </section>
    </div>
    </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const { projects }: PROJECTS = await request(
    process.env.CMS_API, 
    GET_HOME_PROJECTS
    );

  if (!projects) {
    return { notFound: true }
  }

  return {
    props: { projects },
    revalidate: 1
  }
};
