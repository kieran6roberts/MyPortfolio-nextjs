import * as React from "react";
import { GetStaticProps } from "next";
import { GiHand } from "react-icons/gi";
import { FaGlobeAsia, FaPeopleCarry } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion as m, useAnimation } from "framer-motion";
import { request } from "graphql-request";
import { useInView } from "react-intersection-observer";
import { VscVmActive, 
  VscChevronDown,
  VscCode } from "react-icons/vsc";

import Card from "@/components/Card/Card";
import Hero from "@/components/Hero/Hero";
import PageHead from "@/components/PageHead/PageHead";
import Project from "@/components/Project/Project";
import { GET_HOME_PROJECTS } from "@/queries/projects";
import { regVariant, staggerVariant } from "../src/animations/home";
import Link from "next/link";
import { generateKey } from "@/components/Card/Card";

export type ASSETS = { fileName: string, __typename: string };

export interface PROJECT {
  captions: string[];
  description: string[];
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
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const animation = useAnimation();

  function mapProjectsToElements(projects: PROJECT[]): JSX.Element[] {
    return projects.map((project) => 
        <li key={generateKey(project.title)} >
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
    <PageHead title="kieranroberts.dev | home" 
    description="Kieran Roberts front-end web developer portfolio showcasing my personal projects. Let's work together!"
    currentURL="https://kieranroberts.dev"
    />
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
            <m.span className="mx-3 text-acc">
              Kieran 
            </m.span>
                and I develop performant and scalable websites. 
              </m.h2>
            <m.p className="w-3/4 m-auto text-xs text-center text-gray-500"
            variants={regVariant}>
              I have always been drawn to solving challenging problems which is key to building sites for the web. 
              Being able to write a solution and instantly see the results in the browser is highly rewarding.
            </m.p>
            <VscVmActive className="m-auto my-16 text-xxl text-pri"/>
            <m.p className="w-3/4 m-auto mb-16 text-xs text-center text-gray-500"
            variants={regVariant}>
              My preference is to build simple and clean <abbr className="mr-2 text-acc" title="User Interfaces">UI</abbr>
              that are interactive, responsive and accessible to all users.
            </m.p>
            <m.div className="lg:flex">
              <Card items={["html", "css", "javaScript", "typeScript", "react", "git"]}
              header="My primary skills:"
              parentVariant={staggerVariant}
              childVariant={regVariant} />
              <Card items={["tailwindcss", "sass", "next.js", "webpack", "jest", "testing-library"]}
              header="as well as:"
              parentVariant={staggerVariant}
              childVariant={regVariant}  />
              <Card items={["blogging", "interview prep", "apollo/graphql", "SEO", "Design & Figma"]}
              header="working on:"
              parentVariant={staggerVariant}
              childVariant={regVariant}  />
            </m.div>
            <m.p className="w-3/4 m-auto my-24 text-xs text-center text-gray-500"
            variants={regVariant}>
              I also love to give back by helping aspiring devlopers learn web-development which is why I 
              post regular blog posts focused on various front-end related topics and learning/ writing
              tips.
            </m.p>
            <m.h2 className="pt-4 pb-16 font-bold text-center uppercase text-md text-dark 2xl:pb-36"
            variants={regVariant}>
              Personal Achievements
            </m.h2>
            <m.ul className="text-xs text-center text-gray-700"
            variants={regVariant}>
              <m.li className="mb-8 2xl:mb-16"
              variants={regVariant}>
                Open source contributor to @DefinitelyTyped: 
                <a className="ml-2 text-pri"
                href="https://www.npmjs.com/package/@types/react-select-country-list"
                rel="noopener"
                target="_blank">
                  @types/react-select-country-list <FiExternalLink style={{ display: "inline-block", marginBottom: "4px" }}/>
                </a>
              </m.li>
              <m.li className="mb-8 2xl:mb-16"
              variants={regVariant}>
                3x Featured hashnode article    
                <a className="ml-2 text-pri"
                href="https://blog.kieranroberts.dev/"
                rel="noopener"
                target="_blank">
                  blog.kieranroberts.dev: <FiExternalLink style={{ display: "inline-block", marginBottom: "4px" }}/>
                </a>
              </m.li>
              <m.li className="mb-8 2xl:mb-16"
              variants={regVariant}>
                2x "Must Read" Featured hashnode weekly article
                <a className="ml-2 text-pri"
                href="https://blog.kieranroberts.dev/why-its-awesome-for-new-developers-to-blog-as-they-learn"
                rel="noopener"
                target="_blank">
                  Why it's awesome for new developers to blog as they learn: <FiExternalLink style={{ display: "inline-block", marginBottom: "4px" }}/>
                </a>
              </m.li>
              <m.li className="mb-8 2xl:mb-16"
              variants={regVariant}>
                Over 9000 total post views on Dev.to
                <a className="ml-2 text-pri"
                href="https://dev.to/kieran6roberts"
                rel="noopener"
                target="_blank">
                  dev.to/kieran6roberts: <FiExternalLink style={{ display: "inline-block", marginBottom: "4px" }}/>
                </a>
              </m.li>
            </m.ul>
            <VscChevronDown aria-label="arrow down"
            className="m-auto my-16 text-xxl text-sec"/>
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
    <section className="md:px-4 lg:px-12 md:mx-6 ">
      <article className="w-full">
        <header className="text-center uppercase">
          <h3 className="mb-4 text-md text-txt">
            A little about myself
          </h3>
          <h4 className="text-sm text-pri">
            For making it this far
          </h4>
        </header>
        <div className="w-4/5 h-0.5 bg-gradient-to-r from-purple-600 to-blue-700 m-auto mt-4 mb-8" />
        <section className="grid pb-20 text-center lg:grid-cols-2 gap-y-8 gap-x-4 2xl:gap-x-8">
          <article>
            <h5 className="text-sm font-bold">
              Hi there <GiHand className="inline-block text-md text-pri" />
            </h5>
            <p className="p-2 mb-4 text-xs">
              I am a self taught front-end web developer who decided to change 
              career paths away from electronic engineering in early 2019. I was looking for 
              something to express my creative side in my work.
            </p>
          </article>
          <article>
            <h5 className="text-sm font-bold">
              My time away <FaGlobeAsia className="inline-block text-acc text-md" />
            </h5>
            <p className="p-2 mb-4 text-xs">
              I was taking time out after graduating with my masters degree to travel, leaving the <abbr className="text-acc" title="United Kingdom">UK</abbr> to
              live and work abroad in New Zealand for a year when I found my passion for web development.
            </p>
          </article>
          <article>
            <h5 className="text-sm font-bold">
              Finding web development <VscCode className="inline-block text-acc text-md" />
            </h5>
            <p className="p-2 mb-4 text-xs" >
              After writing my first line of <abbr className="text-acc" title="HyperText Markup Language">html</abbr> I knew I was hooked and so set upon 
              spending most of my free time reading, writing and learning all I could
              about code, specifically front-end web development.
            </p>
          </article>
          <article>
            <h5 className="text-sm font-bold">
              Creative contribution <FaPeopleCarry className="inline-block text-pri text-md" />
            </h5>
            <p className="p-2 text-xs">
              It's a special feeling when you are able to deploy a site to the web for anyone to see and use.
              That feeling of being able to contribute something even from the very beginning is unique and keeps me
              engaged and wanting to improve.
            </p>
          </article>
        </section>
      </article>
      <Link aria-label="top of the page"
       href="/" passHref>
        <a className="block px-4 py-1 m-auto mb-24 text-xs text-center uppercase transition-transform transform border-2 2xl:mb-40 2xl:mt-20 w-max border-pri text-pri hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400">
          Back to the top
        </a>
      </Link>
    </section>
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
