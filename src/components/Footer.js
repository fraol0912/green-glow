import React from "react";

const footerText =
  "The content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License.";
const maker = "Fraol Lemecha";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">{footerText}</p>
      <p className="footer__maker">Made By {maker}</p>
    </footer>
  );
}

export default Footer;
