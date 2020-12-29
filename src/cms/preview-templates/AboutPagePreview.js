import React from "react";

// Template
import { AboutPageTemplate } from "../../templates/about-page";

function AboutPagePreview({ entry }) {
  const data = entry.getIn(["data"]);

  return (
    <>
      <AboutPageTemplate {...data} />
    </>
  );
}

export default AboutPagePreview;
