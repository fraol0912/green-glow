import React from "react";
import { graphql } from "gatsby";

// Components
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SectionWithButton from "../components/SectionWithButton";

// Template
import BlogRollTemplate from "./components/BlogRollTemplate";

// Styles
import "../styles/index.scss";

export function IndexPageTemplate({
  heroTitle,
  heroDetail,
  heroImage,
  heroLinkText,
  heroLinkURL,

  aboutSectionText,
  aboutButtonText,
  aboutLinkTo,

  jumboTitle,
  jumboDecription,
  linkText,
  linkHref,

  showBlogRoll,
}) {
  return (
    <Layout>
      <Hero
        heroTitle={heroTitle}
        heroImage={heroImage}
        heroDetail={heroDetail}
        links={[{ text: heroLinkText, to: heroLinkURL }]}
      />
      <SectionWithButton
        sectionText={aboutSectionText}
        buttonText={aboutButtonText}
        linkTo={aboutLinkTo}
      />
      {showBlogRoll && (
        <BlogRollTemplate
          jumboTitle={jumboTitle}
          jumboDecription={jumboDecription}
          linkText={linkText}
          linkHref={linkHref}
        />
      )}
    </Layout>
  );
}

function IndexPage({ data }) {
  return (
    <>
      <IndexPageTemplate
        showBlogRoll={true}
        {...data.markdownRemark.frontmatter}
        heroImage={data.markdownRemark.frontmatter.heroImage.publicURL}
      />
    </>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heroTitle
        heroDetail
        heroImage {
          publicURL
        }
        heroLinkText
        heroLinkURL
        aboutSectionText
        aboutButtonText
        aboutLinkTo
        jumboTitle
        jumboDecription
        linkText
        linkHref
      }
    }
  }
`;
