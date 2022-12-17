import React from 'react'
import "../styles/aboutme.scss"

export default function AboutMe() {
  return (
    <>
      <section id="aboutme" className="about">
        <h3 className="about__title">about me.</h3>
        <p className="about__description">
          Hello! I am Beatriz García, <span>full stack developer</span>. 
          I invite you to check my projects bellow and all the technologies I have applied to them.<br /> 
          <br />
          Recently I have finished my studies as a developer at Bottega University and General Assembly School.
          Previously I worked in Communication & Marketing and Social Services. My <span>curiosity</span> motivated me to designed and build an <span>online shop</span> with WooCommerce which I have been managing for more than 5 years.
          My <span>social values</span> drove me to work as a diversity consultant and cooperation officer.<br /> 
          <br />
          Now it is time to merge <span>social impact</span> with <span>technology</span> and continue developing my IT skills.
        </p>
        <div className="about__technologies">iconos de las tecnologías</div>
      </section>  
    </>
  )
}
