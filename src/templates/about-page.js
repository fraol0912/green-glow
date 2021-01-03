import React from "react";
import { graphql } from "gatsby";

// Component
import Layout from "../components/Layout";
import Hero from "../components/Hero";

// Styles
import "../styles/index.scss";

export function AboutPageTemplate({
  aboutHeroTitle,
  aboutHeroImage,
  aboutHeroDetail,
}) {
  return (
    <>
      <Hero
        heroTitle={aboutHeroTitle}
        heroImage={aboutHeroImage}
        heroDetail={aboutHeroDetail}
      />
    </>
  );
}

function AboutPage({ data }) {
  return (
    <Layout>
      <AboutPageTemplate
        {...data.markdownRemark.frontmatter}
        aboutHeroImage={
          data.markdownRemark.frontmatter.aboutHeroImage.publicURL
        }
      />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        aboutHeroTitle
        aboutHeroImage {
          publicURL
        }
        aboutHeroDetail
      }
    }
  }
`;
