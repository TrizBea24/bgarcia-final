import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Stack } from 'react-bootstrap';


const Footer = () => {
  let copyright = new Date();
  let update = copyright.getFullYear();

  return (
    <>
      <Stack id="footer" className="footer">
        <h2 className="footer__title">Let's talk!</h2>
        <p className="footer__description">
          texto
        </p>
        <Nav as="ul" className="footer__sm">
          <Nav.Item as="li" className="footer__sm-item">
            <Nav.Link href="https://www.linkedin.com/in/beatrizgarcmar/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="footer__sm-item">
            <Nav.Link href="https://github.com/TrizBea24">
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="footer__sm-item">
            <Nav.Link href="mailto:beatriz.garcia.martin24@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="footer__copyright">
          <p>&copy; {update} Beatriz García Martín</p>
        </div>
      </Stack>
    </>
  )
}

export default Footer;