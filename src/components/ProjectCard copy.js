import React from 'react';
import Card from 'react-bootstrap/Card';
import "../styles/projectCard.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import {  faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCards = (props) => {
  const projectSkills = props.projectItem.skills.map((skill, index) => {
    return (
      <li className="projects__content-skills-item" key={index}>
        {skill}
      </li>
    );
  });
  return (
    <>
      <Card bg="secondary" className="projects__content-imgWrapper">
        <Card.Img variant="top" 
          src={props.projectItem.image}
          alt={"Preview of the project " + props.projectItem.title}
          title={"Preview of the app " + props.projectItem.title}
        />
        <Card.Body>
          <Card.Title 
            title={props.projectItem.title}>
          </Card.Title>
          <Card.Text>
            {projectSkills}
          </Card.Text>
          <Card.Link href={props.projectItem.githubLink}>
            <FontAwesomeIcon icon={faGithub} />
          </Card.Link>
          <Card.Link href={props.projectItem.webLink}>
            <FontAwesomeIcon icon={faDesktop} />
          </Card.Link>
        </Card.Body>
      </Card>
    </>          
  );
}

export default ProjectCards;
