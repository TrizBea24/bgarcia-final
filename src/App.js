import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import data from "./server/data";


function App() {
  const [projects] = useState(data);

  return (
    <>
      <Header />
      <Container>
        <Main data={projects} />
        <Footer />
      </Container>
    </>
  );
};

export default App;
