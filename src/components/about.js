import React from "react";
import "../styles/about.css";

function about() {
  return (
    // <div className="about-section">
    //   <h1>About Me</h1>
    //   <p>
    //     I am a passionate software developer with a keen interest in building
    //     innovative solutions. My journey in technology began with a fascination
    //     for coding and problem-solving, which has led me to explore various
    //     programming languages and frameworks.
    //   </p>
    //   <p>
    //     I enjoy collaborating on projects that challenge my skills and allow me
    //     to learn new technologies. In my free time, I contribute to open-source
    //     projects and stay updated with the latest trends in the tech industry.
    //   </p>
    // </div>

    <div className="about-card">
      <div className="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
        {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p class="card-text">
          I am a passionate software developer with a keen interest in building
          innovative solutions. My journey in technology began with a
          fascination for coding and problem-solving, which has led me to
          explore various programming languages and frameworks.
        </p>
        <p>
          I enjoy collaborating on projects that challenge my skills and allow
          me to learn new technologies. In my free time, I contribute to
          open-source projects and stay updated with the latest trends in the
          tech industry.
        </p>
      </div>
    </div>
  );
}

export default about;
