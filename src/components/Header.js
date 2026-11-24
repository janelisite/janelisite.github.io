import React from "react";
import headerLogo from "../headername.png";
import personalLogo from "../pearlogo.png";

export default function Header() {
  return (
    <header className="header">
      {/* LEFT SIDE: logo + name */}
      <div className="header-left">
        <img src={personalLogo} alt="pear" className="logo" />
        <img src={headerLogo} alt="header" className="headerlogo" />
       {/*  <h1 className="name">JANE HANQI LI</h1>*/}
      </div>

      {/* RIGHT SIDE: link */}
      <a href={`${process.env.PUBLIC_URL}/JHL_CV2025.pdf`}
  target="_blank"
  rel="noopener noreferrer"className="cv-link">
        Link to CV
      </a>
    </header>
  );
}
