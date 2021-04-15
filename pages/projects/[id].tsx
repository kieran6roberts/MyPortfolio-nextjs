import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { request } from "graphql-request";
import { motion as m } from "framer-motion";
import { useRouter } from "next/router";
import { VscCalendar, 
  VscFiles, 
  VscLibrary, 
  VscVmActive } from "react-icons/vsc";

import Button from "@/components/ExternalLink/ExternalLink";
import PageHead from "@/components/PageHead/PageHead";
import { GET_ALL_PROJECT_TITLES, GET_SINGLE_PROJECT } from "@/queries/projects";
import { generateKey } from "@/components/Card/Card";
import { ASSETS, PROJECT } from "../index";
import ExternalLink from "@/components/ExternalLink/ExternalLink";

interface PROJECT_STUDY extends PROJECT {
  deploy: ASSETS;
  fullPageImage: ASSETS[];
  fullPageImageSize: string[];
  outcome: string[];
  overview: string[];
  publishDate: string;
  stackDecision: string[];
};

type SINGLE_PROJECT = { projects: PROJECT_STUDY[] };

export default function Project({ projects: project }: SINGLE_PROJECT) {
  const router = useRouter();
  const [ data ] = project;

  function mapItemsToElements(items: string[]) {
    return items.map((item: string) => 
      <p key={generateKey(item)}
      className="px-4 py-3 text-xs text-dark 2xl:p-8 2xl:px-32">
        {item}
      </p>
    )
  };

  return (
    <>
      <PageHead title={`kierandev | ${data.title}`}
      description="Kieran Roberts front-end web-developer porfolio case study into a personal project showcasing project overview, stack decision reasoning and overall outcome."
      currentURL={`https://kieranroberts.dev${router.asPath}`}/>
      <section id="case-study"
      className="mb-20 overflow-hidden md:px-4 lg:px-8 2xl:px-16 md:mx-6 2xl:mt-20 bg-light">
      <m.div layout
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }} >
          <h1 className="px-1 text-lg font-bold text-center capitalize text-dark">
              {data.title ?? "Unable to get title"}
          </h1>
          <p className="mb-4 text-center text-xxs text-sec">
              Kieran Roberts posted: 
              <VscCalendar className="inline-block mr-2"/>
              {(data.publishDate).substring(0, 10) ?? "Unable to get date"}
          </p>
          <ul className="text-center">
              {data.stackNames ? data.stackNames.map(name =>
              <li key={generateKey(name)}
                  className="inline-block mr-4 text-sm font-bold">
                  - {name} - 
              </li>
              ) : null}
          </ul>
      </m.div>
      <div className="flex items-center justify-center">
          <p className="inline-block mr-4 text-sec">
            Deployed to
          </p>
          <Image src={`/images/icons/${data?.deploy.fileName}`}
              alt="hosting site logo"
              height={70}
              width={100}/>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 mb-16 sm:flex-row">
          {data.siteLink ? 
          <ExternalLink link={data.siteLink}
          styling="bg-light text-dark mb-4 sm:mb-0 sm:mr-2">
            visit website
          </ExternalLink> : <p className="text-sm">Unable to find site link</p>}
          {data.githubLink ? 
          <Button link={data.githubLink}
          styling="bg-offLight text-dark">
            github repo
          </Button> : <p className="text-sm">Unable to find github link</p>}
        </div>
        <m.div layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }} 
         className="flex justify-center w-full p-1 m-auto items-top xxxl:w-max h-max">
           <figure>
             <div className="flex w-full">
              <div className="shadow-md xxxl:mr-12">
                <Image src={`/images/${data?.fullPageImage[0]?.fileName}`}
                  alt="full screenshots of project"
                  height={`${data?.fullPageImageSize[1]}`}
                  width={`${data?.fullPageImageSize[0]}`}/>
              </div>
              <div className="hidden shadow-md xxxl:block xxxl:ml-12">
                <Image src={`/images/${data?.fullPageImage[1]?.fileName}`}
                  alt="full screenshots of project"
                  height={`${data?.fullPageImageSize[1]}`}
                  width={`${data?.fullPageImageSize[0]}`} />
              </div>
             </div>
              <figcaption className="mt-4 text-xs italic text-center text-gray-500">
                  full page screenshot of the site
              </figcaption>
           </figure>
        </m.div>
        <div className="relative px-3 py-16 my-8 overflow-hidden bg-light">
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 pb-0.5">
                <h2 className="pl-4 font-bold uppercase bg-white text-md text-dark">
                    <VscFiles className="inline-block mr-4 text-md text-sec"/>
                    project overview
                </h2>
            </div>
            {data.overview ? mapItemsToElements(data.overview) 
            : <p className="text-md">Unable to get project overview</p>}
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 mt-8 pb-0.5">
                <h2 className="pl-4 font-bold uppercase bg-white text-md text-dark">
                    <VscLibrary className="inline-block mr-4 text-md text-sec" />
                      stack choice
                </h2>
            </div>
            {data.stackDecision ? mapItemsToElements(data.stackDecision)
            : <p className="text-md">Unable to get project stack decision</p>}
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 mt-8 pb-0.5">
                <h2 className="pl-4 font-bold uppercase bg-white text-md text-dark">
                    <VscVmActive className="inline-block mr-4 text-md text-sec" />
                    outcome
                </h2>
            </div>
            {data.outcome ? mapItemsToElements(project[0].outcome)
            : <p className="text-md">Unable to get project outcome</p>}
        </div>
        <Link aria-label="top of the page"
        href={`/projects/${data.title.split(" ").join("%20")}`} passHref>
        <a className="block px-4 py-1 m-auto mb-24 text-xs text-center uppercase transition-transform transform border-2 2xl:mb-40 2xl:mt-20 w-max border-pri text-pri hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400">
          Back to the top
        </a>
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

  export const getStaticProps: GetStaticProps = async ({ params }) => {
      const VARIABLE = { title: `${params?.id}`};

      const { projects }: SINGLE_PROJECT = await request(
        process.env.CMS_API,
        GET_SINGLE_PROJECT,
        VARIABLE
      );

      return {
          props: { projects },
          revalidate: 1
      }
  };