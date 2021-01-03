import React from "react";

// Template
import { AboutPageTemplate } from "../../templates/about-page";

function AboutPagePreview({ entry, getAsset }) {
  const data = entry.getIn(["data"]).toJS();
  const image = getAsset(data.aboutHeroImage);

  return (
    <>
      <AboutPageTemplate {...data} aboutHeroImage={image.url} />
    </>
  );
}

export default AboutPagePreview;
