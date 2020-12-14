import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { request } from "graphql-request";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import { VscCalendar, 
  VscFiles, 
  VscLibrary, 
  VscVmActive,
  VscFoldUp } from "react-icons/vsc";

import { GET_ALL_PROJECT_TITLES, GET_SINGLE_PROJECT } from "../../src/queries/queries";
import { Projects } from "../index";
import Button from "../../src/components/Button/Button";
import { generateKey } from "../../src/components/Card/Card";
import PageHead from "src/components/PageHead/PageHead";

export default function Project({ projects: project }: Projects) {
    function mapItemsToElements(items: string[]) {
      return items.map((item: string) => 
        <p key={generateKey(item)}
        className="text-sm text-dark py-3 px-4 2xl:p-8 2xl:px-32">
          {item}
        </p>
      )
    };
    
    const router = useRouter();

    return (
      <>
      <PageHead title={`kierandev | ${project[0].title}`}
      description="Porfolio case study into personal font-end developer project showcasing project overview, stack decision reasoning and overall outcome."
      currentURL={`https://kieranroberts.dev${router.asPath}`}/>
      <section id="case-study"
      className="mb-20 md:px-4 lg:px-8 2xl:px-16 md:mx-6 2xl:mt-20 bg-light overflow-hidden">
      <m.div layout
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }} >
          <h1 className="text-lg text-center font-bold text-dark capitalize px-1">
              {project[0].title}
          </h1>
          <p className="text-xxs text-sec text-center mb-2">
              Kieran Roberts posted: <VscCalendar className="inline-block mr-2"/>{(project[0].publishDate).substring(0, 10)}
          </p>
          <ul className="text-center">
              {project[0].stackNames && project[0].stackNames.map(name =>
              <li key={generateKey(name)}
                  className="inline-block mr-4 text-sm font-bold">
                  {name}
              </li>
              )}
          </ul>
      </m.div>
        <div className="flex flex-col md:flex-row justify-center items-center my-16 2xl:my-16">
            <Button link={project[0].siteLink}
            color="bg-light text-dark mb-4 md:mb-0 md:mr-2">
                visit website
            </Button>
            <Button link={project[0].githubLink}
            color="bg-offLight text-dark">
                github repo
            </Button>
        </div>
        <div className="flex justify-center items-top w-full 2xl:w-max h-max m-auto border-2 border-pri p-1">
          <div className="">
          <Image src={`/images/${project[0].fullPageImage[0].fileName}`}
            alt="full screenshots of project"
            height={`${project[0].fullPageImageSize[1]}`}
            width={`${project[0].fullPageImageSize[0]}`} />
          </div>
          <div className="hidden 2xl:block">
          <Image src={`/images/${project[0].fullPageImage[1].fileName}`}
            alt="full screenshots of project"
            height={`${project[0].fullPageImageSize[1]}`}
            width={`${project[0].fullPageImageSize[0]}`} />
          </div>
        </div>
        <p className="text-xs text-gray-500 italic text-center mt-4">
            full page screenshot of the site
        </p>
        <div className="relative bg-light px-3 py-16 my-8 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 pb-0.5">
                <h2 className="bg-white text-md text-dark uppercase font-bold pl-4">
                    <VscFiles className="inline-block text-md text-sec mr-4"/>
                    project overview
                </h2>
            </div>
            {project[0].overview && mapItemsToElements(project[0].overview)}
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 mt-8 pb-0.5">
                <h2 className="bg-white text-md text-dark uppercase font-bold pl-4">
                    <VscLibrary className="inline-block text-md text-sec mr-4" />
                      stack choice
                </h2>
            </div>
            {project[0].stackDecision && mapItemsToElements(project[0].stackDecision)}
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 mt-8 pb-0.5">
                <h2 className="bg-white text-md text-dark uppercase font-bold pl-4">
                    <VscVmActive className="inline-block text-md text-sec mr-4" />
                    outcome
                </h2>
            </div>
            {project[0].outcome && mapItemsToElements(project[0].outcome)}
        </div>
        <Link href={router.asPath} passHref>
            <m.a className="block mt-16 m-auto w-max"
            whileHover={{ scale: 1.02, translateY: -5 }}
            whileTap={{ translateY: -30 }}
            transition={{ duration: 0.5 }}>
                <VscFoldUp className="text-lg text-pri animate-pulse" />
            </m.a>
        </Link>
      </section>
      </>
    )
};


export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await request(
    process.env.CMS_API,
    GET_ALL_PROJECT_TITLES
  );

  const paths = projects.map((project: { title: string }) => ({
    params: { id: encodeURIComponent(project.title)}
  }));

    return {
      paths,
      fallback: false
    }
  };

  export const getStaticProps: GetStaticProps = async ({ params }: any) => {
      const VARIABLE = {
        title: `${params.id}`
      };

      const { projects } = await request(
        process.env.CMS_API,
        GET_SINGLE_PROJECT,
        VARIABLE
      );

      return {
          props: {
            projects
          },
          revalidate: 1
      }
  };