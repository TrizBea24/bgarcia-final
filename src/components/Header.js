import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Container, Navbar, Stack, Button, Nav } from "react-bootstrap";
import "../styles/header.scss";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import useScrollDirection from "../hooks/scroll";

function Header() {
  const scrollDirection = useScrollDirection();

// const Header = () => {
//   let theEnd = 0;
//   let navbar = document.getElementById("navbar");
//   window.addEventListener("scroll", function () {
//     let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
//     if (scrollTop > theEnd) {
//       navbar.style.top = "-100px";
//     } else {
//       navbar.style.top = "0px";
//     }
//     theEnd = scrollTop;
//   });

  return (
    <>
      <Navbar
        className={`navbar px-5 py-4 
        ${ scrollDirection === "down" ? "down" : "up"}`}
        id="navbar"
        expand="lg"
        variant="dark"
        bg="main"
        collapseOnSelect
      >
        <Container fluid>
          <Stack className="navbar-left">
            <NavLink href="/" className="navbar-left__name">
              <span>Beatriz García</span>
            </NavLink>
          </Stack>
          <NavbarToggle />
          <NavbarCollapse className="justify-content-end">
            <Nav className="navbar-right">
              <NavLink className="navbar-right__item mx-3" smooth to="#aboutme">
                About me
              </NavLink>
              <NavLink className="navbar-right__item mx-3" smooth to="#projects">
                Projects
              </NavLink>
              <NavLink className="navbar-right__item mx-3" smooth to="#contact">
                Contact
              </NavLink>
              <NavLink>
                <a href="Resume_FullStack_Beatriz.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="navbar-right__button mx-3"
                  variant="outline-light">
                    <span>Resume</span>
                  </Button>
                </a>
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;