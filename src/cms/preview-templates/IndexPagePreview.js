import React from "react";

// Template
import { IndexPageTemplate } from "../../templates/index-page";

function IndexPagePreview({ entry, getAsset }) {
  const data = entry.getIn(["data"]).toJS();

  return (
    <>
      <IndexPageTemplate
        {...data}
        noQueryJumbo={true}
        heroImage={getAsset(data.heroImage).url}
      />
    </>
  );
}

export default IndexPagePreview;
