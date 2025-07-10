import React from "react";
import "../styles/navbar.css";

function navbar() {
  return (
    <div>
      <nav className="nav">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          About
        </a>
        <a className="nav-link" href="#">
          Project
        </a>
        <a className="nav-link">Resume</a>
        {/* AMH blood Test for me  */}
      </nav>
    </div>
  );
}

export default navbar;
