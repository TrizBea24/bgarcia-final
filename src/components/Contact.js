import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import "../styles/contact.scss";


const Contact = () => {
  return (
    <>
      <div id="contact" className="contact">
        <h3 className="contact__title">Let's talk!</h3>
        <p className="contact__description">
        Hi there! If you have any interest in my work, any recommendations or would like to talk 
        about development, I'd be happy to connect through any of these channels!
        </p>
        <ul as="ul" className="contact__sm">
          <li as="li" className="contact__sm-item">
            <a href="https://www.linkedin.com/in/beatrizgarcmar/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="contact__sm-item"/>
            </a>
          </li>
          <li as="li" className="contact__sm-item">
            <a href="https://github.com/TrizBea24" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li as="li" className="contact__sm-item" target="_blank" rel="noopener noreferrer">
            <a href="mailto:beatriz.garcia.martin24@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contact;