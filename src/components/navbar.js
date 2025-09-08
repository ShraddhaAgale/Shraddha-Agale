import React from "react";
import "../styles/navbar.css";

function navbar() {
  return (
    <div>
      <nav className="nav">
        <a className="nav-link active" aria-current="page" href="/">
          Home
        </a>
        <a className="nav-link" href="/about">
          About
        </a>
        <a className="nav-link" href="/project">
          Project
        </a>
        <a
          href="/Shraddha_Agale_Resume.pdf"
          download="Shraddha_Agale_Resume.pdf"
          class="glass-download-btn fade-in"
        >
          <i class="bi bi-download"></i> Download Resume
        </a>
      </nav>
    </div>
  );
}

export default navbar;
