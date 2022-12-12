import Card from 'react-bootstrap/Card';

function ProjectCards() {
  return (
          <Card bg="light">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Technologies
              </Card.Text>
              <Card.Link href="#">Github Link</Card.Link>
              <Card.Link href="#">Web Link</Card.Link>
            </Card.Body>
          </Card>
  );
}

export default ProjectCards;
