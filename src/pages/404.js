import React from "react";

// Component
import SectionWithButton from "../components/SectionWithButton";

// Styles
import "../styles/index.scss";

function NotFoundPage() {
  const buttonText = "Go To Home";
  const sectionText = "You have been Lost Again...";
  const linkTo = "/";

  return (
    <>
      <SectionWithButton
        buttonText={buttonText}
        sectionText={sectionText}
        linkTo={linkTo}
      />
    </>
  );
}

export default NotFoundPage;
