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

  //Modale FUMETTI
  const renderComics = () => {
    return (
      <>
        {" "}
        <div>
          {DataComics.slice(0, 4).map((element, index) => (
            <div key={index} className="d-flex mb-2">
              <img src={element.cover} alt="" />
              <h5>{element.titolo}</h5>
            </div>
          ))}{" "}
        </div>
        <p className="text-end d-flex justify-content-end">
          vedi tutti <div>&gt;</div>
        </p>
      </>
    );
  };

  //Modale DISEGNI
  const renderDrawings = () => {
    return (
      <>
        <div>
          {DataDrawings.slice(0, 4).map((element, index) => (
            <div key={index} className="d-flex mb-2">
              <img src={element.img} alt="" />
              <h5>{element.titolo}</h5>
            </div>
          ))}
        </div>
        <p className="text-end d-flex justify-content-end">
          vedi tutti <div>&gt;</div>
        </p>
      </>
    );
  };

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
            {/*  FUMETTI */}
            <Tippy
              className="comics-tooltip"
              content={renderComics()}
              placement="bottom"
              delay={300}
              interactive={true}
              animation="bounce"
              trigger="mouseenter"
              appendTo={document.body}
            >
              <span className="nav2">FUMETTI</span>
            </Tippy>
            <Nav className="nav2" href="#link">
              Personaggi
            </Nav>
            <Tippy
              className="comics-tooltip"
              content={renderDrawings()}
              placement="bottom"
              delay={300}
              interactive={true}
              animation="bounce"
              trigger="mouseenter"
              appendTo={document.body}
            >
              <span className="nav2">DISEGNI</span>
            </Tippy>
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
