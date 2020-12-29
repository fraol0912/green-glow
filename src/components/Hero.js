import React from "react";

// Component
import Img from "./PreviewCompatibleImage";

const Links = ({ links }) => {
  return (
    <>
      {links &&
        links.map((link, i) => (
          <a href={link.to} key={i} className="hero__button">
            {link.text ? link.text : <Img imageInfo={{ image: link.image }} />}
          </a>
        ))}
    </>
  );
};

function Hero({ heroTitle, heroDetail, heroImage, links }) {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <section className="hero__content">
          <h3 className="hero__content__title">{heroTitle}</h3>
          <p className="hero__content__description">{heroDetail}</p>
          <Links links={links} />
        </section>
        <section className="hero__image">
          <Img imageInfo={{ image: heroImage, alt: heroTitle }} />
        </section>
      </div>
    </section>
  );
}

export default Hero;
