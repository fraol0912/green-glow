import React from "react";
import { Link } from "gatsby";

function SectionWithButton({ sectionText, buttonText, linkTo }) {
  return (
    <section className="section-with-button">
      <p className="section-with-button__text">{sectionText}</p>
      <Link className="section-with-button__button" to={linkTo}>
        {buttonText}
      </Link>
    </section>
  );
}

export default SectionWithButton;
