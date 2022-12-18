import React, {useState, useEffect} from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Container, Navbar, Stack, Button, Nav } from "react-bootstrap";
import "../styles/header.scss";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "../assests/Resume_FullStack_Beatriz.pdf";

function Header() {
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
      const handleScroll = () => {
          let moving = window.pageYOffset
          
          setVisible(position > moving);
          setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
          window.removeEventListener("scroll", handleScroll);
      })
  })

  const navbarMoves = visible ? "visible" : "hidden";

  return (
    <>
      <Navbar
        className={`px-5 py-4 navbarmoves ${navbarMoves}`}
        expand="lg"
        variant="dark"
        bg="main"
        collapseOnSelect
      >
        <Container fluid>
          <Stack className="navbar-left">
            <NavLink className="navbar-left__name" smooth to="#hero">
              Beatriz García
            </NavLink>
          </Stack>
          <NavbarToggle />
          <NavbarCollapse className="justify-content-end">
            <Nav className="navbar-right">
              <NavLink className="navbar-right__item mx-3" smooth to="#aboutme">
                about me
              </NavLink>
              <NavLink className="navbar-right__item mx-3" smooth to="#projects">
                projects
              </NavLink>
              <NavLink className="navbar-right__item mx-3" smooth to="#contact">
                contact
              </NavLink>
              {/* <NavLink href="Resume_FullStack_Beatriz.pdf" target="_blank" rel="noopener noreferrer"> */}
                <a href="Resume_FullStack_Beatriz.pdf" target="_blank" rel="noopener noreferrer">
                  <Button id="link" className="navbar-right__button mx-3" variant="outline-light">
                    Resume
                  </Button>
                </a>
              {/* </NavLink> */}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;