import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
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
        <Projects />
        <Pruebas />
        <Footer />
      </Container>
    </>
  );
};

export default App;
