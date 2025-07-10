import React from "react";
import GitHubLogo from "../assets/github-logo.jpg";
import LinkedinLogo from "../assets/LinkedIn_icon.jpg";
import "../styles/footer.css";

function footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/ShraddhaAgale" target="_blank">
          <img src={GitHubLogo} className="github-logo-image" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/shraddha-agale-24b754192/"
          target="_blank"
        >
          <img
            src={LinkedinLogo}
            className="linkedin-logo-image"
            alt="linkedin"
          />
        </a>
      </div>
    </footer>
  );
}

export default footer;
