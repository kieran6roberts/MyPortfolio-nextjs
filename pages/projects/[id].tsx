import { GetStaticPaths, GetStaticProps } from "next";
import { request } from "graphql-request";
import Image from "next/image";

import { GET_ALL_PROJECT_TITLES, GET_SINGLE_PROJECT } from "../queries/queries";
import Layout from "../../src/components/Layout/Layout";
import { Projects } from "../index";
import Button, { ButtonProps }from "../../src/components/Button/Button";
import { generateKey } from "../../src/components/Card/Card";

interface FullProjects extends Projects {
  data: {
    overview: string,
    stackDecision: string,
    outcome: string
  }
}


export default function Project({ data: { projects: project} }: FullProjects) {
  console.log(project);
    return (
        <Layout>
            <section className="px-4 md:px-12 py-8 mx-4 border-l-2 border-r-2 border-gray-200">

              <div className="relative w-full h-96 p-8 m-auto">
                <div className="absolute top-0 left-0 right-0 bottom-0 z-0"> 
                  <Image src={`/images/${project[0].images[0].fileName}`}
                      alt={`${project[0].images[0].fileName}`}
                      layout="responsive"
                      width={1400}
                      height={384}
                      objectFit="cover" />
                </div>
                <div className="relative z-10  h-full w-full">
                  <h1 className="text-lg text-center text-txt uppercase">
                      {project[0].title}
                  </h1>
                  <ul className="flex justify-center py-8">
                    {project[0].stackImages.map((image: { fileName: string }): React.ReactElement => 
                      <li key={`${generateKey(image.fileName)}`}
                      className="mr-4 py-2">
                        <Image src={`/images/icons/${image.fileName}`}
                        alt={`${image.fileName}`}
                        height={24}
                        width={24} />
                      </li>
                      )}
                  </ul>
                  <div className="flex justify-center">
                    <Button link={project[0].siteLink}
                    color="bg-light text-dark">
                        visit website
                    </Button>
                    <Button link={project[0].githubLink}
                    color="bg-light text-dark">
                        visit website
                    </Button>
                  </div>

                </div>
              </div>

              <div className="mx-3 md:mx-16 px-3 md:px-16 border-l-2 border-r-2 border-gray-200 overflow-hidden">
                <h2 className="text-md capitalize my-8">
                  project overview
                </h2>
                <div className="flex justify-center">
                  <Image src={`/images/plan.svg`}
                    alt="stack image"
                    height={200}
                    width={200} />
                </div>
                  {project[0].overview.map((paragraph: string) => 
                  <p className="text-sm text-gray-500 py-4">
                    {paragraph}
                  </p>
                    )}
                <h2 className="text-md capitalize my-8">
                  stack choice
                </h2>
                <div className="flex justify-center">
                  <Image src={`/images/stack-brewery.svg`}
                    alt="stack image"
                    height={200}
                    width={200} />
                </div>
                {project[0].stackDecision.map((paragraph: string) => 
                  <p className="text-sm text-gray-500 py-4">
                    {paragraph}
                  </p>
                    )}
                <h2 className="text-md capitalize my-8">
                  outcome
                </h2>
                {project[0].outcome.map((paragraph: string) => 
                  <p className="text-sm text-gray-500 py-4">
                    {paragraph}
                  </p>
                    )}
              </div>
            </section>
        </Layout>
    )
};


export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await request(
    process.env.CMS_API,
    GET_ALL_PROJECT_TITLES
  );

  const paths = projects.map((project) => ({
    params: { id: encodeURIComponent(project.title)}
  }));

    return {
      paths,
      fallback: false
    }
  };

  export const getStaticProps: GetStaticProps = async ({ params }) => {
      const VARIABLE = {
        title: `${params.id}`
      };

      const data = await request(
        process.env.CMS_API,
        GET_SINGLE_PROJECT,
        VARIABLE
      );

      return {
          props: {
            data
          }
      }
  };