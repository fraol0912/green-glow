import React from "react";

// Template
import { ContactPageTemplate } from "../../templates/contact-page";

function ContactPagePreview({ entry, getAsset }) {
  const data = entry.getIn(["data"]).toJS();
  data.heroImage = getAsset(data.heroImage).url;

  console.log(data);

  return (
    <>
      <ContactPageTemplate {...data} />
    </>
  );
}

export default ContactPagePreview;
