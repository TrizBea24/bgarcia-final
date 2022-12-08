import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Container, Navbar, Stack, Button, Nav } from "react-bootstrap";
import "../styles/header.scss";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Header = () => {
  let theEnd = 0;
  let navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > theEnd) {
      navbar.style.top = "-100px";
    } else {
      navbar.style.top = "0px";
    }
    theEnd = scrollTop;
  });

  return (
    <>
      <Navbar
        fixed="top"
        className="navbar px-5 py-4"
        id="navbar"
        expand="lg"
        variant="dark"
        bg="main"
        collapseOnSelect
      >
        <Container fluid>
          <Stack className="navbar-left">
            <Navbar.Brand href="/" className="navbar-left__name fs-4">
              Beatriz García
            </Navbar.Brand>
          </Stack>
          <NavbarToggle />
          <NavbarCollapse className="justify-content-end">
            <Nav className="navbar-right">
              <Button className="navbar-right__themecolor">
                Cambio de contraste
              </Button>
              <NavLink className="navbar-right__item mx-3 text-decoration-none" smooth to="#aboutme">
                About me
              </NavLink>
              <NavLink className="navbar-right__item mx-3 text-decoration-none" smooth to="#projects">
                Projects
              </NavLink>
              <NavLink className="navbar-right__item mx-3 text-decoration-none" smooth to="#footer">
                Contact
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;