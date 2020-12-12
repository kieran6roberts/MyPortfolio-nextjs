import { GetStaticPaths, GetStaticProps } from "next";
import { request } from "graphql-request";
import Image from "next/image";

import { GET_ALL_PROJECT_TITLES, GET_SINGLE_PROJECT } from "../../src/queries/queries";
import { Projects } from "../index";
import Button, { ButtonProps }from "../../src/components/Button/Button";
import { generateKey } from "../../src/components/Card/Card";
import PageHead from "src/components/PageHead/PageHead";

export default function Project({ projects: project }: Projects) {
    return (
      <>
      <PageHead title={`kierandev | ${project[0].title}`}
      description="Porfolio case study into personal font-end developer project showcasing project overview, stack decision reasoning and overall outcome."/>
            <section className="relative px-4 md:px-12 mx-4 border-l-2 border-r-2 border-gray-200 overflow-hidden">
                <h1 className="text-lg text-center font-bold text-dark capitalize">
                    {project[0].title}
                </h1>
                <ul className="flex justify-center py-8">
                  {project[0].stackImages.map((image: { fileName: string }): React.ReactElement => 
                    <li key={`${generateKey(image.fileName)}`}
                    className="mr-4 py-2">
                      <Image src={`/images/icons/${image.fileName}`}
                      alt={`${image.fileName}`}
                      height={30}
                      width={30} />
                    </li>
                    )}
                </ul>
                <div className="relative z-10 flex justify-center mb-8 2xl:my-16">
                    <Button link={project[0].siteLink}
                    color="bg-light text-dark mr-2">
                        visit website
                    </Button>
                    <Button link={project[0].githubLink}
                    color="bg-offLight text-dark ml-2">
                        github repo
                    </Button>
                  </div>
              
              <div className="relative bg-light p-2 md:p-8 w-full h-auto m-auto">
                <div className="border-2"> 
                  <Image src={`/images/${project[0].images[0].fileName}`}
                      alt={`${project[0].images[0].fileName}`}
                      layout="responsive"
                      width={1200}
                      height={450}
                      objectFit="cover"
                      objectPosition="top" />
                </div>
                <div className="flex flex-col justify-end items-center relative z-10 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-30 h-full w-full" />
              </div>

              <div className="relative bg-light px-3 py-16 my-8 md:px-12 border-l-2 border-r-2 border-gray-200 overflow-hidden">
                <h2 className="text-lg text-center text-dark capitalize my-8 xl:my-16">
                  project overview
                </h2>
                <div className="flex justify-center xxl:my-16">
                  <Image src={`/images/plan.svg`}
                    alt="stack image"
                    height={250}
                    width={250} />
                </div>
                  {project[0].overview && project[0].overview.map((paragraph: string): React.ReactChild => 
                  <p  key={generateKey(paragraph)}
                  className="text-sm text-gray-500 p-4 xl:p-8 2xl:px-32">
                    {paragraph}
                  </p>
                    )}
                <h2 className="text-lg text-dark text-center capitalize my-8">
                  stack choice
                </h2>
                <div className="flex justify-center xxl:my-16">
                  <Image src={`/images/${project[0].images[3].fileName}`}
                    alt="stack image"
                    height={250}
                    width={250} />
                </div>
                {project[0].stackDecision && project[0].stackDecision.map((paragraph: string) => 
                  <p key={generateKey(paragraph)}
                  className="text-sm text-gray-500 p-4 xl:p-8 2xl:px-32">
                    {paragraph}
                  </p>
                    )}
                <div className="flex justify-center xxl:my-16">
                  <Image src={"/images/outcome.svg"}
                    alt="computer devices illustration"
                    height={250}
                    width={250} />
                </div>
                <h2 className="text-lg text-center text-dark capitalize my-8">
                  outcome
                </h2>
                {project[0].outcome && project[0].outcome.map((paragraph: string) => 
                  <p key={generateKey(paragraph)}
                  className="text-sm text-gray-500 p-4 xl:p-8 2xl:px-32">
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