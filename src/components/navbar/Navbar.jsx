import React from "react";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TitleArrow from "../../assets/icons/titlearrow.svg";
import DataComics from "../../Data/DataComics";
//librerie
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { motion } from "framer-motion";
import "../navbar/Navbar.css";

const MyNavbar = () => {
  //---------STATI-------
  const [showModalTitle, setShowModalTitle] = useState(false);

  //Modale INFO
  const renderInfo = () => {
    return <div className="info-tooltip">ciao </div>;
  };

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
            <Tippy
              className="info-tooltip"
              content={renderInfo()}
              placement="bottom"
              delay={100}
              interactive={true}
              animation="bounce"
              trigger="click"
            >
              <span className="nav2">INFO</span>
            </Tippy>
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
        <motion.div
          className="custom-modal"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 17,
          }}
        >
          <div className="modal-comics">
            <h4>• Fumetti</h4>
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
            <p>
              Vedi tutti
              <span>
                <button className="button-modal">
                  <img src={TitleArrow} alt="arrowicon" />
                </button>
              </span>
            </p>
          </div>
          <div
            style={{
              borderTop: "2px solid black",
              width: "90%",
              margin: "auto",
            }}
          />
          <div className="modal-comics">
            <h4>• Disegni</h4>
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
            <p>
              Vedi tutti
              <span>
                <button className="button-modal">
                  <img src={TitleArrow} alt="arrowicon" />
                </button>
              </span>
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};
export default MyNavbar;
