import { GetStaticPaths, GetStaticProps } from "next";
import { request } from "graphql-request";
import Image from "next/image";

import { GET_ALL_PROJECT_TITLES, GET_SINGLE_PROJECT } from "../../src/queries/queries";
import { Projects } from "../index";
import Button, { ButtonProps }from "../../src/components/Button/Button";
import { generateKey } from "../../src/components/Card/Card";
import PageHead from "src/components/PageHead/PageHead";

export default function Project({ projects: project }: Projects) {
  console.log(project)
    return (
      <>
      <PageHead title={`kierandev | ${project[0].title}`}
      description="Porfolio case study into personal font-end developer project showcasing project overview, stack decision reasoning and overall outcome."/>
            <section className="mb-32 md:px-20 lg:px-32 md:mx-12 bg-light overflow-hidden shadow">
                <h1 className="text-lg text-center font-bold text-dark capitalize px-1">
                    {project[0].title}
                </h1>
                <p className="text-xxs text-dark text-center mb-2">
                  Kieran Roberts posted: {(project[0].publishDate).substring(0, 10)}
                </p>
                <ul className="text-center">
                  {project[0].stackNames && project[0].stackNames.map(name =>
                    <li key={generateKey(name)}
                    className="inline-block mr-4 text-sm font-bold">
                      {name}
                    </li>
                    )}
                </ul>
                <div className="flex flex-col md:flex-row justify-center items-center mt-8 2xl:my-16">
                    <Button link={project[0].siteLink}
                    color="bg-light text-dark mb-4 md:mb-0 md:mr-2">
                        visit website
                    </Button>
                    <Button link={project[0].githubLink}
                    color="bg-offLight text-dark ">
                        github repo
                    </Button>
                  </div>

              <div className="relative bg-light px-3 py-16 my-8 overflow-hidden">
                <div className="bg-gradient-to-tr pl-1 from-blue-400 via-yellow-400 to green-400">
                  <h2 className="bg-white text-md text-dark capitalize pl-4">
                    project overview
                  </h2>
                </div>
                  {project[0].overview && project[0].overview.map((paragraph: string): React.ReactChild => 
                  <p  key={generateKey(paragraph)}
                  className="text-sm text-gray-500 p-4 xl:p-8 2xl:px-32">
                    {paragraph}
                  </p>
                    )}
                  <div className="bg-gradient-to-tr pl-1 from-blue-400 via-yellow-400 to green-400">
                    <h2 className="bg-white text-md text-dark capitalize pl-4">
                      stack choice
                    </h2>
                  </div>
                {project[0].stackDecision && project[0].stackDecision.map((paragraph: string) => 
                  <p key={generateKey(paragraph)}
                  className="text-sm text-dark p-4 xl:p-8 2xl:px-32">
                    {paragraph}
                  </p>
                    )}
                  <div className="bg-gradient-to-tr pl-1 from-blue-400 via-yellow-400 to green-400">
                    <h2 className="bg-white text-md text-dark capitalize pl-4">
                      outcome
                    </h2>
                  </div>
                {project[0].outcome && project[0].outcome.map((paragraph: string) => 
                  <p key={generateKey(paragraph)}
                  className="text-sm text-dark p-4 xl:p-8 2xl:px-32">
                    {paragraph}
                  </p>
                    )}
              </div>
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
          }
      }
  };