import React from 'react';
import "../styles/hero.scss";
import TypeWriterEffect from 'react-typewriter-effect';

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero">
        <h1 className="hero__name">Beatriz García Martín</h1>
        <h2 className="hero__title">
          <TypeWriterEffect
            startDelay={2000}
            cursorColor="#F7D2F7"
            multiText={[
              'Welcome to my portfolio.',
              "I'm a Full Stack Developer.",
            ]}
            multiTextDelay={500}
            typeSpeed={100}
          />
        </h2>
      </section> 
    </>
  )
}
