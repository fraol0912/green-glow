import React from "react";
import { Helmet } from "react-helmet";

// Component
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>The Title</title>
      </Helmet>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
