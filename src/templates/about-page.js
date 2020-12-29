import React from "react";
import { graphql } from "gatsby";

// Component
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export function AboutPageTemplate({
  aboutHeroTitle,
  aboutHeroImage,
  aboutHeroDetail,
}) {
  return (
    <Layout>
      <Hero
        heroTitle={aboutHeroTitle}
        heroImage={aboutHeroImage}
        heroDetail={aboutHeroDetail}
      />
    </Layout>
  );
}

function AboutPage({ data }) {
  return (
    <AboutPageTemplate
      {...data.markdownRemark.frontmatter}
      aboutHeroImage={data.markdownRemark.frontmatter.aboutHeroImage.publicURL}
    />
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
