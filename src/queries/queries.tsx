import { gql } from "graphql-request";

export const GET_ALL_PROJECT_TITLES = gql`
  query GetProjectTitles {
    projects {
      title
    }
  }
`;

export const GET_SINGLE_PROJECT = gql`
  query GetProjects($title: String!) {
    projects(where: {title: $title}) {
      title
      images {
        fileName
      }
      captions,
      siteLink,
      githubLink
      stackImages {
        fileName
      }
      stackNames
      overview
      stackDecision
      outcome
      publishDate
      fullPageImage {
        fileName
      }
      fullPageImageSize
    }
  }
  `;

  export const GET_HOME_PROJECTS = gql`
  query GetProjects {
    projects {
      title
      description
      images {
        fileName
      }
      captions,
      siteLink,
      githubLink
      stackImages {
        fileName
      }
      stackNames
      publishDate
      fullPageImage {
        fileName
      }
    }
  }
`;