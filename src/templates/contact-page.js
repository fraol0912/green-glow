import React from "react";
import { graphql } from "gatsby";

// Component
import Hero from "../components/Hero";
import Layout from "../components/Layout";

// Styles
import "../styles/index.scss";

export function ContactPageTemplate({
  heroTitle,
  heroDetail,
  heroImage,
  facebookIcon,
  linkedinIcon,
  telegramIcon,
  facebookURL,
  linkedinURL,
  telegramURL,
}) {
  return (
    <>
      <Hero
        heroTitle={heroTitle}
        heroDetail={heroDetail}
        heroImage={heroImage}
        links={[
          {
            image: facebookIcon,
            to: facebookURL,
          },
          {
            image: linkedinIcon,
            to: linkedinURL,
          },
          {
            image: telegramIcon,
            to: telegramURL,
          },
        ]}
      />
    </>
  );
}

function ContactPage({ data }) {
  return (
    <Layout>
      <ContactPageTemplate
        {...data.markdownRemark.frontmatter}
        heroImage={data.markdownRemark.frontmatter.heroImage.publicURL}
        facebookIcon={data.markdownRemark.frontmatter.facebookIcon.publicURL}
        linkedinIcon={data.markdownRemark.frontmatter.linkedinIcon.publicURL}
        telegramIcon={data.markdownRemark.frontmatter.telegramIcon.publicURL}
      />
    </Layout>
  );
}

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heroTitle
        heroDetail
        facebookURL
        linkedinURL
        telegramURL
        heroImage {
          publicURL
        }
        facebookIcon {
          publicURL
        }
        linkedinIcon {
          publicURL
        }
        telegramIcon {
          publicURL
        }
      }
      id
    }
  }
`;
