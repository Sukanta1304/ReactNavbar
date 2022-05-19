import React from "react";
import "../styles.css";
const NavbarLinks = ({ title }) => {
  return (
    <div className="container">
      <div className="link">{title}</div>
    </div>
  );
};
export default NavbarLinks;
