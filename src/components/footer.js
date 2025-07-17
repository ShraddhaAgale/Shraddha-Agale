import React from "react";
import GitHubLogo from "../assets/github-logo.jpg";
import LinkedinLogo from "../assets/LinkedIn_icon.jpg";
import EmailLogo from "../assets/email-logo.jpg";
import ContactLogo from "../assets/contact-logo.jpg";
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
        <p>
          <img src={EmailLogo} className="email-logo-image" alt="email" />
          <span> shraddhamagale@gmail.com </span>
        </p>
        <p>
          <img src={ContactLogo} className="contact-logo-image" alt="Contact" />
          <span> +91 8805830664 </span>
        </p>
      </div>
    </footer>
  );
}

export default footer;
