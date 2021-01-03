import React from "react";

// Template
import { IndexPageTemplate } from "../../templates/index-page";

function IndexPagePreview({ entry, getAsset }) {
  const data = entry.getIn(["data"]).toJS();

  return (
    <>
      <IndexPageTemplate
        {...data}
        showBlogRoll={false}
        heroImage={getAsset(data.heroImage)}
      />
    </>
  );
}

export default IndexPagePreview;
