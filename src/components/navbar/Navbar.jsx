import React from "react";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TitleArrow from "../../assets/icons/titlearrow.svg";
import DataComics from "../../Data/DataComics";

import "../navbar/Navbar.css";

const MyNavbar = () => {
  //---------STATI-------
  const [showModalTitle, setShowModalTitle] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="nav-body">
        <div
          className="title-body"
          onClick={() => setShowModalTitle(!showModalTitle)}
        >
          <h3 className="logo-navbar">PIZZAMAFIA COMICS !</h3>
          <img src={TitleArrow} alt="" />
        </div>
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
        </Navbar.Collapse>{" "}
      </Navbar>

      {/* -----MODALE----- */}
      {showModalTitle && (
        <div className="custom-modal">
          <div className="modal-comics">
            <h4>Fumetti</h4>
            <div className="modal-style">
              <img
                src={DataComics[0].cover}
                alt="Cover{DataComics[0].titolo}"
              />
              <p>{DataComics[0].titolo}</p>
            </div>
            <div className="modal-style">
              <img
                src={DataComics[1].cover}
                alt="Cover{DataComics[0].titolo}"
              />
              <p>{DataComics[1].titolo}</p>
            </div>
            <p> Vedi tutti</p>
          </div>
          <div className="modal-comics">
            <h4>Disegni</h4>
            <div className="modal-style">
              <img
                src={DataComics[0].cover}
                alt="Cover{DataComics[0].titolo}"
              />
              <p>{DataComics[0].titolo}</p>
            </div>
            <div className="modal-style">
              <img
                src={DataComics[1].cover}
                alt="Cover{DataComics[0].titolo}"
              />
              <p>{DataComics[1].titolo}</p>
            </div>
            <p> Vedi tutti</p>
          </div>
        </div>
      )}
    </>
  );
};
export default MyNavbar;
