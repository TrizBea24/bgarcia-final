import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCards from "./ProjectCards"


const ProjectsContainer = (props) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <ProjectCards />
        </Col>
      ))}
    </Row>
  )
}

export default ProjectsContainer