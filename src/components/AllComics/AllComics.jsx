import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./AllComics.css";
import hunderline from "../../assets/icons/hunderline.svg";
import { useNavigate } from "react-router-dom";
import DataComics from "../../Data/DataComics";

//librerie
import { motion } from "framer-motion";

const AllComics = () => {
  // HOOKS
  const [selectedComics, setSelectedComics] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [comicTitle, setComicTitle] = useState("");
  const [comicId, setComicId] = useState("");

  const navigate = useNavigate();

  // FUNZIONI
  const handleComicsClick = (comic) => {
    setSelectedComics(comic);
    setShowDetails(true);
    setComicTitle(comic.titolo);
    setComicId(comic.id);
  };

  return (
    <>
      <Container className="characters-container">
        <Row>
          {/* CARD DETTAGLI */}
          <Col
            xs={5}
            className={`details-panel ${showDetails ? "visible" : ""}`}
          >
            {selectedComics && (
              <div className="card-comics-details">
                <h2>· {selectedComics.titolo} ·</h2>{" "}
                <div className="d-flex justify-content-between">
                  <div>
                    {" "}
                    <h5>
                      <span>· Produzione ·</span> {selectedComics.produzione}
                    </h5>
                    <h5>
                      <span>· Anno ·</span> {selectedComics.anno}
                    </h5>
                    <h5>
                      <span>· Autore ·</span> Pizzamafia
                    </h5>
                  </div>
                  <div>
                    <Button>Leggi</Button>
                  </div>
                </div>
                <hr />
                <h3>· Storyline ·</h3>
                <p className="text-start mt-3">"{selectedComics.storyline}"</p>
                <img src={selectedComics.cover} alt={selectedComics.titolo} />
                <hr />
                <h3 className="mt-4">· Cast ·</h3>
                <div className="cast-grid">
                  {selectedComics.cast.map((member, index) => (
                    <div key={index} className="cast-member">
                      <div className="d-flex">
                        <img
                          src={member.foto}
                          alt={member.nome}
                          className="cast-photo"
                        />
                        <div>
                          <h5 className="mt-2">· {member.nome} ·</h5>
                          <p className="cast-description">
                            "{member.descrizione}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Col>

          {/* CARD FUMETTI
           */}
          <Col className="mt-5" xs={6}>
            <div className="title-comics">
              <h1>· Tutti i Fumetti ·</h1>
              <img src={hunderline} alt="" />
            </div>
            <div className="card-comics-container">
              {DataComics.map((comic) => (
                <motion.div
                  onClick={() => handleComicsClick(comic)}
                  className="card-comics d-flex"
                  key={comic.id}
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  {" "}
                  <img src={comic.cover} alt={comic.titolo} />{" "}
                  <h4>{comic.titolo}</h4>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AllComics;
