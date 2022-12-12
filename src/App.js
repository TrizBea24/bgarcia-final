import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectsContainer from "./components/ProjectsContainer";
import Footer from "./components/Footer";
import Pruebas from "./components/pruebas";
import { Container } from "react-bootstrap";


function App() {

  return (
    <>
      <Header />
      <Container>
        <Hero />
        <AboutMe />
        <ProjectsContainer />
        <Pruebas />
        <Footer />
      </Container>
    </>
  );
};

export default App;
