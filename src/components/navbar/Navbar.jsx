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
          <Nav className="nav2" href="#home">
            Home
          </Nav>
          <Nav className="nav2" href="#link">
            Info
          </Nav>
          <Nav className="nav2" href="#link">
            Link
          </Nav>
          <Nav className="nav2" href="#link">
            Download
          </Nav>
          <Nav className="nav2" href="#link">
            Shop
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNavbar;
