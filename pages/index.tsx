import * as React from "react";
import { GetStaticProps } from "next";
import { request } from "graphql-request";
import { motion as m, useAnimation } from "framer-motion";
import { VscVmActive, VscChevronDown } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";

import { GET_HOME_PROJECTS } from "../src/queries/queries";
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
        overview?: string[],
        stackDecision?: string[],
        outcome?: string[],
        publishDate: string
    }[]
};

export default function Home({ projects }: Projects): React.ReactElement {
  const { ref, inView, entry } = useInView({ threshold: 0.1, triggerOnce: true });
  const animation = useAnimation();

  const regVariant = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    hidden: {
      opacity: 0
    }
  };

  const staggerVariant = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    },
    hidden: {
      opacity: 0,
    }
  };

  React.useEffect(() => {
    if (inView) animation.start("visible");
    else animation.start("hidden");
  }, [ animation, inView ]);

  return (
    <>
    <PageHead title="Kierandev | Home" 
    description="Kieran Roberts front-end web developer portfolio showcasing my personal projects. Let's work together!"/>
    <div className="">
        <Hero />
        <section className="relative z-10">
            <h2 className="text-md font-bold uppercase text-dark text-center pb-28">
              Welcome to my personal portfolio.
            </h2>
          <m.div className="relative bg-light overflow-hidden"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={staggerVariant}>
              <m.h2 className="text-md font-bold uppercase text-dark text-center pt-4 pb-16"
              variants={staggerVariant}>
                My name is 
                <m.span className="text-acc mx-3"
                >
                  Kieran 
                  </m.span>
                  and I develop performant and scalable websites. 
              </m.h2>
              <m.p className="text-sm text-gray-500 text-center w-3/4 m-auto"
              variants={regVariant}>
                I enjoy solving problems, seeing the results instantly in the browser.
              </m.p>
              <VscVmActive className="text-xxl text-pri m-auto my-16"/>
              <m.div className="lg:flex">
                <Card items={["JavaScript", "reactjs", "css", "html"]}
                header="My primary skills:"
                parentVariant={staggerVariant}
                childVariant={regVariant} />
                <Card items={["nextjs", "tailwindcss", "sass", "webpack", "github"]}
                header="as well as:"
                parentVariant={staggerVariant}
                childVariant={regVariant}  />
                <Card items={["TypeScript", "redux", "graphql"]}
                header="currently learning:"
                parentVariant={staggerVariant}
                childVariant={regVariant}  />
              </m.div>
              <VscChevronDown className="text-xxl text-dark m-auto my-16 animate-bounce"/>
              <m.p className="text-md text-dark uppercase mb-16 text-center"
              variants={regVariant}>
                Check out my work below
              </m.p>
          </m.div>
        </section>
        <section className="">
          <ul className="">
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
    </div>
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
