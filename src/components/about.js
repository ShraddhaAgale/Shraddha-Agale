import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="about-card">
      <div className="card-body">
        <p>
          I specialize in front-end development using Angular, React, JavaScript, and CSS, and I am dedicated to creating intuitive and visually appealing user interfaces.
        </p>
        <p>
          My strengths include problem-solving, attention to detail, and collaborating effectively within teams to deliver high-quality solutions.
        </p>
        <p>
          I am always eager to learn new technologies and stay updated with industry trends. Outside of coding, I enjoy reading, traveling, and exploring creative pursuits.
        </p>
        <div className="skills-row">
          <span className="skill-badge">🅰️ Angular</span>
          <span className="skill-badge">⚛️ React</span>
          <span className="skill-badge">🟨 JavaScript</span>
          <span className="skill-badge">🎨 CSS</span>
          <span className="skill-badge">🌐 HTML</span>
          
        </div>
      </div>
    </div>
  );
}

export default About;
