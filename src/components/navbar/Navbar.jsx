import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../navbar/Navbar.css";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="nav-body">
      <h3 className="logo-navbar">PIZZAMAFIA COMICS !</h3>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Info</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Download</Nav.Link>
          <Nav.Link href="#link">Shop</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNavbar;
