import React from 'react';
import Card from 'react-bootstrap/Card';

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
      <Card bg="light" className="projects__content-imgWrapper">
        <Card.Img variant="top" 
          src={props.projectItem.image}
          alt={
            "Preview of the project " + props.projectItem.title
          }
          title={"Preview of the app " + props.projectItem.title}
        />
        <Card.Body>
          <Card.Title title={props.projectItem.title}></Card.Title>
          <Card.Text>
            {projectSkills}
          </Card.Text>
          <Card.Link href="#">Github Link</Card.Link>
          <Card.Link href="#">Web Link</Card.Link>
        </Card.Body>
      </Card>
    </>          
  );
}

export default ProjectCards;
