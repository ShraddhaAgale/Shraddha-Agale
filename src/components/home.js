import React from "react";
import ProfileImg from "../assets/profile.jpg";
import "../styles/home.css";

function home() {
  return (
    <main className="home-section container" role="main">
      <header className="mb-4">
        <h1>Welcome to My Portfolio</h1>
      </header>

      <section className="intro-section">
        {/* Text Left */}

        <div className="col-12 col-md-6 text-section">
          <h2 className="home-title">Hi, I'm Shraddha!</h2>
          <p className="home-sub-title">
            I'm a Web UI Developer passionate about building responsive and
            accessible web applications.
          </p>
        </div>

        {/* Image Right */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={ProfileImg}
            alt="Shraddha Agale smiling professionally"
            className="profile-img img-fluid"
          />
        </div>
      </section>
    </main>
  );
}

export default home;
