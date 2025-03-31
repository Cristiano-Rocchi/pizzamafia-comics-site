import React from "react";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DataDrawings from "../../Data/DataDrawings";
import DataComics from "../../Data/DataComics";
//librerie
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { motion } from "framer-motion";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  //---------STATI-------

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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav className="nav2">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
            <Nav className="nav2">
              <Nav.Link as={Link} to="/comics">
                FUMETTI
              </Nav.Link>
            </Nav>
            <Nav className="nav2">
              <Nav.Link as={Link} to="/characters">
                PERSONAGGI
              </Nav.Link>
            </Nav>
            <Nav className="nav2">
              <Nav.Link as={Link} to="/drawings">
                DISEGNI
              </Nav.Link>
            </Nav>

            <Nav className="nav2">
              <Nav.Link as={Link} to="/">
                DOWNLOAD
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>{" "}
      </Navbar>
    </>
  );
};
export default MyNavbar;
