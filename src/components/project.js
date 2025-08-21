import React from "react";
import "../styles/project.css";

function project() {
  return (
    <div className="project-section">
      <h1>My Projects</h1>
      <p>Here are some of the projects I have worked on:</p>
      <ul>
        <li>Project : Patent Management Applications </li>
      </ul>
      <ul>
        <li>Developed responsive web applications (Patent Search Enabler, Patent Tagger Tool) using Angular 8.</li>
        <li>Migrated UI from Angular 8 → Angular 17, focusing on CSS fixes and preserving existing layouts.</li>
        <li>Implemented role-based access control (Inventor, Searcher, Drafter, Office Coordinator) 
            with different menus & submenus.</li>
        <li>Integrated REST APIs for dynamic data handling and seamless UI interaction.</li>
        <li>Built reusable components with PrimeNG for consistent UI experience.</li>
        <li>Participated in code reviews, Git version control, deployments, and sprint planning in an Agile environment.</li>

      </ul>
    </div>
  );
}

export default project;
