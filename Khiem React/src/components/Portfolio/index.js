import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'NFL-Calculator',
      description: 'NFL live updates',
      link: "https://phungxkhiem.github.io/UCBCS_FFCalculator/",
      repo: "https://github.com/phungxkhiem/UCBCS_FFCalculator"
    },
    {
      name: 'Safespace',
      description: 'Free to post whatever you want!',
      link: "https://the-safer-space.herokuapp.com/",
      repo: "https://github.com/phungxkhiem/UCBC_SafeSpace"
    },
    
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
