import React from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import ProjectsContainer from "./ProjectsContainer";
import Contact from "./Contact";

const Main = (props) => {
  return (
    <main className="main">
      <Hero />
      <AboutMe />
      <ProjectsContainer data={props.data} />
      <Contact />
    </main>
  );
};

export default Main;
