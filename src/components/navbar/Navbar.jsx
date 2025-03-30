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

const MyNavbar = () => {
  //---------STATI-------

  return (
    <>
      <Navbar expand="lg" className="nav-body">
        <div className="title-body">
          <h3 className="logo-navbar">PIZZAMAFIA COMICS !</h3>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav className="nav2" href="#home">
              Home
            </Nav>
            <Nav className="nav2" href="#home">
              FUMETTI
            </Nav>
            <Nav className="nav2" href="#home">
              PERSONAGGI
            </Nav>
            <Nav className="nav2" href="#home">
              DISEGNI
            </Nav>

            <Nav className="nav2" href="#link">
              Download
            </Nav>
          </Nav>
        </Navbar.Collapse>{" "}
      </Navbar>
    </>
  );
};
export default MyNavbar;
