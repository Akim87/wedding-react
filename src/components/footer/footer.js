import React from "react";
import "./footer.scss";
import Logo from "../logo/logo";

function Footer() {
  return (
    <footer className="base-section footer d-flex justify-between align-center">
      <Logo />
      <span className="footer__copyright">Copyright © 2019</span>
    </footer>
  );
}

export default Footer;
