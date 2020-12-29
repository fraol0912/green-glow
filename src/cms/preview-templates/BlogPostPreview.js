import React from "react";

// Component
import SingleBlog from "../../components/SingleBlog";

function BlogPostPreview({ entry }) {
  const data = entry.getIn("data");

  return (
    <>
      <SingleBlog {...data} />
    </>
  );
}

export default BlogPostPreview;
