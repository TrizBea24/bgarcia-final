import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Stack } from 'react-bootstrap';
import "../styles/footer.scss";


const Footer = () => {
  let copyright = new Date();
  let update = copyright.getFullYear();

  return (
    <>
      <div id="footer" className="footer">
        <h2 className="footer__title">Let's talk!</h2>
        <p className="footer__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis nunc in eros elementum, sed blandit tortor varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam viverra cursus dolor, a semper arcu tempus vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed malesuada metus at neque varius, in pretium erat rhoncus. Nullam quis feugiat turpis. Sed ultrices libero sit amet vehicula aliquam. Nam ut ultricies orci, nec bibendum sem. Etiam eu auctor sem, rutrum varius eros.
        </p>
        <ul as="ul" className="footer__sm">
          <li as="li" className="footer__sm-item">
            <a href="https://www.linkedin.com/in/beatrizgarcmar/">
              <FontAwesomeIcon icon={faLinkedinIn} className="footer__sm-item"/>
            </a>
          </li>
          <li as="li" className="footer__sm-item">
            <a href="https://github.com/TrizBea24">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li as="li" className="footer__sm-item">
            <a href="mailto:beatriz.garcia.martin24@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
        <div className="footer__copyright">
          <p>&copy; {update} Beatriz García Martín</p>
        </div>
      </div>
    </>
  )
}

export default Footer;