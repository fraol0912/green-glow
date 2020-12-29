import React from "react";
import { graphql } from "gatsby";

// Component
import Layout from "../components/Layout";
import SingleBlog from "../components/SingleBlog";

// Styles
import "../styles/index.scss";

function SingleBlogPageTemplate({ data }) {
  return (
    <Layout>
      <SingleBlog
        image={data.markdownRemark.frontmatter.image.publicURL}
        caption={data.markdownRemark.frontmatter.caption}
        title={data.markdownRemark.frontmatter.title}
        body={data.markdownRemark.excerpt}
      />
    </Layout>
  );
}

export default SingleBlogPageTemplate;

export const pageQuery = graphql`
  query SingleBlog($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        caption
        image {
          publicURL
        }
      }
      excerpt(format: HTML)
    }
  }
`;
