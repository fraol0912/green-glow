import React from "react";
import { useStaticQuery } from "gatsby";

// Component
import BlogCardJumbo from "../../components/BlogCardJumbo";

const blogRollQuery = graphql`
  {
    allMarkdownRemark(
      limit: 3
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

function BlogRollTemplate({ jumboTitle, jumboDecription, linkText, linkHref }) {
  const {
    allMarkdownRemark: { edges: blogs },
  } = useStaticQuery(blogRollQuery);

  return (
    <>
      <BlogCardJumbo
        jumboTitle={jumboTitle}
        jumboDecription={jumboDecription}
        linkText={linkText}
        linkHref={linkHref}
        blogs={blogs}
      />
    </>
  );
}

export default BlogRollTemplate;
