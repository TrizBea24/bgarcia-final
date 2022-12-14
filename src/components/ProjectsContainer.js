import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from "./ProjectCard";

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
      <h2 className="projects__title">Projects</h2>
      <div className="projects__wrapper">{projectsContainer}</div>
    </section>
  );
}

export default ProjectsContainer