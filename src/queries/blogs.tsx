import { gql } from "graphql-request";

export const GET_ALL_BLOG_TITLES = gql`
  query GetBlogTitles {
    blogs {
      title
      subTitle
    }
  }
`;

export const GET_SINGLE_BLOG = gql`
  query GetBlog($title: String!) {
    blogs(where: {title: $title}) {
      blogContent {
        body
      }
      title
      subTitle
      previewImage {
        fileName
      }
      previewCaption
      postDate
      tags
    }
}`;

export const GET_ALL_BLOGS = gql`
    query GetAllBlogs {
        blogs(orderBy: createdAt_DESC) {
            author
            description
            title
            tags
            subTitle
            postDate
            previewImage {
              fileName
            }
        }
    }
`;