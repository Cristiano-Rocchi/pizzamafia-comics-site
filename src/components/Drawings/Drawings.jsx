import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Drawings.css";
import hunderline from "../../assets/icons/hunderline.svg";
import { useNavigate } from "react-router-dom";
import DataDrawings from "../../Data/DataDrawings";
import closeIcon from "../../assets/icons/close.svg";

//librerie
import { motion } from "framer-motion";

const Drawings = () => {
  // HOOKS
  const [selectedDrawings, setSelectedDrawings] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [drawingTitle, setDrawingTitle] = useState("");
  const [drawingId, setDrawingId] = useState("");
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const navigate = useNavigate();

  // FUNZIONI
  const handleDrawingsClick = (drawing) => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      openFullscreen(drawing.img);
    } else {
      setSelectedDrawings(drawing);
      setShowDetails(true);
      setDrawingTitle(drawing.titolo);
      setDrawingId(drawing.id);
    }
  };

  const openFullscreen = (imgSrc) => {
    setFullscreenImage(imgSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <Container className="drawings-container">
        <Row>
          {/* CARD DETTAGLI */}
          <Col
            xs={5}
            className={`details-panel ${showDetails ? "visible" : ""}`}
          >
            {selectedDrawings && (
              <div className="card-drawing-details">
                <h2>· {selectedDrawings.titolo} ·</h2>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>
                      <span>· Produzione ·</span> {selectedDrawings.produzione}
                    </h5>
                    <h5>
                      <span>· Anno ·</span> {selectedDrawings.anno}
                    </h5>
                    <h5>
                      <span>· Autore ·</span> Pizzamafia
                    </h5>
                  </div>
                  <Button onClick={() => openFullscreen(selectedDrawings.img)}>
                    Apri
                  </Button>
                </div>
                <hr />
                <h3>· Drawing ·</h3>

                <img
                  onClick={() => openFullscreen(selectedDrawings.img)}
                  src={selectedDrawings.img}
                  alt={selectedDrawings.titolo}
                />
                <hr />
              </div>
            )}
          </Col>

          {/* CARD DISEGNI
           */}
          <Col className="mt-5" xs={6}>
            <div className="title-drawings">
              <h1>· Tutti i Disegni ·</h1>
              <img src={hunderline} alt="" />
            </div>
            <div className="card-drawings-container">
              {DataDrawings.map((drawing) => (
                <motion.div
                  onClick={() => handleDrawingsClick(drawing)}
                  className="card-drawings d-flex"
                  key={drawing.id}
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  {" "}
                  <img src={drawing.img} alt={drawing.titolo} />{" "}
                  <h4>{drawing.titolo}</h4>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* OVERLAY IMMAGINE A TUTTO SCHERMO */}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <div
            className="fullscreen-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-end mb-2">
              <button className="close-button" onClick={closeFullscreen}>
                {" "}
                <img src={closeIcon} alt="Chiudi" />
              </button>
            </div>

            <img
              src={fullscreenImage}
              alt="Drawing a tutto schermo"
              className="fullscreen-image"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Drawings;
