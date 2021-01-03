import React from "react";

// Component
import SingleBlog from "../../components/SingleBlog";

function BlogPostPreview({ entry, getAsset, widgetFor }) {
  const data = entry.getIn(["data"]).toJS();
  data.image = getAsset(data.image).url;
  data.body = widgetFor("body");

  return (
    <>
      <SingleBlog isPreview={true} {...data} />
    </>
  );
}

export default BlogPostPreview;
