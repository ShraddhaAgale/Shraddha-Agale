import React from "react";
import "../styles/project.css";

function project() {
  return (
  <div className="project-section">
  <h2>My Projects</h2>

  {/* Professional Project */}
  <div className="project-card">
    <h3>💼 Professional Project</h3>
    <h4>Patent Management Applications</h4>
    <ul>
      <li>Developed responsive web applications using <strong>Angular 8</strong>, later migrated to <strong>Angular 17</strong>.</li>
      <li>Implemented role-based access control for multiple user types (Inventor, Searcher, Drafter, Coordinator).</li>
      <li>Integrated REST APIs for dynamic data handling and seamless UI interaction.</li>
      <li>Built reusable components with <strong>PrimeNG</strong> for consistent UI experience.</li>
      <li>Participated in code reviews, Git version control, deployments, and Agile sprint planning.</li>
    </ul>
  </div>

  {/* Personal Project */}
  <div className="project-card">
    <h3>👩‍💻 Personal Project</h3>
    <h4>Portfolio Website</h4>
    <ul>
      <li>Designed and developed a responsive portfolio website using <strong>React.js</strong> and <strong>Bootstrap</strong>.</li>
      <li>Implemented smooth navigation with React Router and interactive UI elements.</li>
      <li>Deployed the application on <strong>Vercel</strong> with a custom domain.</li>
      <li>Highlights my skills in React, modern frontend practices, and web deployment.</li>
    </ul>
  </div>
</div>

  );
}

export default project;
