import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";

const MyNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <>
      <Navbar expand="lg" className="nav-body">
        <div className="title-body">
          <h3 className="logo-navbar">
            <Nav.Link as={Link} to="/">
              PIZZAMAFIA COMICS !
            </Nav.Link>
          </h3>
        </div>

        {/* Toggle per mobile */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />

        {/* Offcanvas laterale */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="offcanvas"
          show={showOffcanvas}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              PIZZAMAFIA COMICS
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="navbar-nav me-auto">
              <Nav className="nav2">
                <Nav.Link as={Link} to="/" onClick={handleClose}>
                  Home
                </Nav.Link>
              </Nav>
              <Nav className="nav2">
                <Nav.Link as={Link} to="/comics" onClick={handleClose}>
                  FUMETTI
                </Nav.Link>
              </Nav>
              <Nav className="nav2">
                <Nav.Link as={Link} to="/characters" onClick={handleClose}>
                  PERSONAGGI
                </Nav.Link>
              </Nav>
              <Nav className="nav2">
                <Nav.Link as={Link} to="/drawings" onClick={handleClose}>
                  DISEGNI
                </Nav.Link>
              </Nav>
              <Nav className="nav2">
                <Nav.Link as={Link} to="/download" onClick={handleClose}>
                  DOWNLOAD
                </Nav.Link>
              </Nav>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
};

export default MyNavbar;
