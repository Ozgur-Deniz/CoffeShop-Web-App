import React from "react";
import "../css/footer.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footerContainer">
        <img
          className="footerLogo"
          src="/images/coffee-beans.png"
          alt=""
        />
        <h1 className="footerHeading">THE COFFEE CO.</h1>
      </div>
      <p className="copyright">Copyright © {date}. All rights reserved. </p>
    </div>
  );
}

export default Footer;
