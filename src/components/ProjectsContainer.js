import React from 'react';
import ProjectCard from "./ProjectCard";
import "../styles/projectsContainer.scss"

const ProjectsContainer = (props) => {
  const projectsContainer = props.data.map((projectItem)  => {
    return (
      <article className="projects__content" key={projectItem.id}>
        <ProjectCard projectItem={projectItem} />
      </article>
    )
  });
  
  return (
    <section className="projects" id="projects">
      <h3 className="projects__title">projects.</h3>
      <div className="projects__wrapper">{projectsContainer}</div>
    </section>
  );
}

export default ProjectsContainer