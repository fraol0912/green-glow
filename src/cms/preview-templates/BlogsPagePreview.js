import React from "react";

// Template
import { BlogsPageTemplate } from "../../templates/blogs-page";

function BlogsPagePreview({ entry }) {
  const data = entry.getIn(["data"]).toJS();

  return (
    <>
      <BlogsPageTemplate {...data} blogs={[]} />
    </>
  );
}

export default BlogsPagePreview;
