import React from "react";

// Component
import Img from "./PreviewCompatibleImage";

function SingleBlog({ image, caption, title, body, isPreview }) {
  return (
    <article className="article">
      <figure className="article__figure">
        <Img
          imageInfo={{
            image: image,
            alt: caption,
          }}
        />
        <figcaption>{caption}</figcaption>
      </figure>
      <h1 className="article__title">{title}</h1>
      {isPreview ? (
        <div className="article__content">{body}</div>
      ) : (
        <div
          className="article__content"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
      )}
    </article>
  );
}

export default SingleBlog;
