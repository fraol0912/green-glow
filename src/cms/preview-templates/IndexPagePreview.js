import React from "react";

// Template
import { IndexPageTemplate } from "../../templates/index-page";

function IndexPagePreview({ entry }) {
  const data = entry.getIn(["data"]);

  return (
    <>
      <IndexPageTemplate {...data} />
    </>
  );
}

export default IndexPagePreview;
