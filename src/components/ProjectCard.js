import React from 'react';
import Card from 'react-bootstrap/Card';
import "../styles/projectCard.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import {  faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCards = (props) => {
  return (
    <>
      <Card border="dark" bg="secondary" className="card">
        <Card.Img className="card__image"
          variant="top" 
          src={props.projectItem.image}
          alt={"Preview of the project " + props.projectItem.title}
          title={"Preview of the app " + props.projectItem.title}
        />
        <Card.Body className="card__info">
          <div className="card__info-text">
            <Card.Title className="card__info-title" id="card-title">
              {props.projectItem.title}
            </Card.Title>
            <Card.Text className="card__info-skills">
              {props.projectItem.skills}
            </Card.Text>
          </div>
          <div className="card__info-link">
            <Card.Link target="_blank" rel="noopener noreferrer"
            // Please note not all the links are directing to the correct please
              href={props.projectItem.githubLink}>
              <FontAwesomeIcon icon={faGithub} />
            </Card.Link>
            <Card.Link target="_blank" rel="noopener noreferrer"
              href={props.projectItem.webLink}>
              <FontAwesomeIcon icon={faDesktop} />
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </>          
  );
}

export default ProjectCards;
