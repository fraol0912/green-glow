import React from "react";
import { Link } from "gatsby";

const menus = [
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "/contact" },
  { name: "About", link: "/about" },
];
const logoText = "Hello";

function Menu({ menus }) {
  return (
    <ol className="navbar__menu menu">
      {menus.map((menu, i) => (
        <Link to={menu.link} key={i}>
          <li className="menu__item">{menu.name}</li>
        </Link>
      ))}
    </ol>
  );
}

function Logo({ text }) {
  return (
    <Link className="navbar__logo" to="/">
      {text}
    </Link>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <Logo text={logoText} />
      <Menu menus={menus} />
    </nav>
  );
}

export default NavBar;
