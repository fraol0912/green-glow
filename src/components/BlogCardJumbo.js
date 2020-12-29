import React from "react";
import { Link } from "gatsby";

// Component
import Img from "./PreviewCompatibleImage";

function BlogCard({ blog }) {
  return (
    <Link to={`${blog.fields.slug}`}>
      <article className="blog-card">
        <Img
          className="blog-card__image"
          imageInfo={{
            childImageSharp: blog.frontmatter.image.childImageSharp,
            alt: blog.frontmatter.title,
          }}
        />
        <h1 className="blog-card__title">{blog.frontmatter.title}</h1>
        <time className="blog-card__date">{blog.frontmatter.date}</time>
        <div
          className="blog-card__description"
          dangerouslySetInnerHTML={{ __html: blog.excerpt }}
        ></div>
      </article>
    </Link>
  );
}

function BlogCardList({ blogs }) {
  return (
    <section className="blog-card-jumbo__list">
      {blogs.map(({ node: blog }, i) => (
        <BlogCard key={i} blog={blog} />
      ))}
    </section>
  );
}

function BlogCardJumbo({
  jumboTitle,
  jumboDecription,
  linkText,
  linkHref,
  blogs,
}) {
  return (
    <section className="blog-card-jumbo">
      <section className="blog-card-jumbo__content">
        <h1 className="blog-card-jumbo__text">{jumboTitle}</h1>
        <p className="blog-card-jumbo__description">{jumboDecription}</p>
      </section>

      <BlogCardList blogs={blogs} />

      {linkText && linkHref && (
        <Link to={linkHref} className="blog-card-jumbo__link">
          {linkText}
        </Link>
      )}
    </section>
  );
}

export default BlogCardJumbo;
