import React from "react";
import user from "../data/user";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
       {projects.map((projects)=>(<p key={projects.id}>
        {projects.name} 
        {projects.about}
      <ProjectItem technologies={user.technologies} />
       </p>
       ))}
        
        
        </div>
    </div>
  );
}

export default ProjectList;
