import React from "react";
import { graphql } from "gatsby";

// Component
import Layout from "../components/Layout";
import BlogCardJumbo from "../components/BlogCardJumbo";

// Styles
import "../styles/index.scss";

export function BlogsPageTemplate({ title, decription, blogs }) {
  return (
    <>
      <BlogCardJumbo
        jumboTitle={title}
        jumboDecription={decription}
        blogs={blogs}
      />
    </>
  );
}

function BlogsPage({ data }) {
  return (
    <Layout>
      <BlogsPageTemplate
        {...data.markdownRemark.frontmatter}
        blogs={data.allMarkdownRemark.edges}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogsPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        decription
      }
    }
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(fromNow: true)
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(format: HTML, pruneLength: 20)
        }
      }
    }
  }
`;

export default BlogsPage;
