import React from "react";

// Template
import { ContactPageTemplate } from "../../templates/contact-page";

function ContactPagePreview({ entry }) {
  const data = entry.getIn(["data"]);

  return (
    <>
      <ContactPageTemplate {...data} />
    </>
  );
}

export default ContactPagePreview;
