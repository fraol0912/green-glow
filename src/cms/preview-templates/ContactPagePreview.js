import React from "react";

// Template
import { ContactPageTemplate } from "../../templates/contact-page";

function ContactPagePreview({ entry, getAsset }) {
  const data = entry.getIn(["data"]).toJS();

  data.heroImage = getAsset(data.heroImage).url;
  data.facebookIcon = getAsset(data.facebookIcon).url;
  data.linkedinIcon = getAsset(data.linkedinIcon).url;
  data.telegramIcon = getAsset(data.telegramIcon).url;

  return (
    <>
      <ContactPageTemplate {...data} />
    </>
  );
}

export default ContactPagePreview;
