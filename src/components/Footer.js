import React from "react";
import footerIcon from "../pearlogo.png"; // or your chosen image

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <img src={footerIcon} alt="Footer Icon" className="footer-icon" />
        <p>2026 Jane Hanqi Li</p>
      </div>
    </footer>
  );
}
