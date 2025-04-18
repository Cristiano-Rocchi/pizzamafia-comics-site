import React, { useState } from "react";
import "./Characters.css";
import { Col, Container, Row } from "react-bootstrap";
import DataComics from "../../Data/DataComics";
import { useNavigate } from "react-router-dom";

import hunderline from "../../assets/icons/hunderline.svg";

const Characters = () => {
  // HOOKS
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [comicTitle, setComicTitle] = useState("");
  const [comicId, setComicId] = useState("");
  const [activeMobileCharacter, setActiveMobileCharacter] = useState(null);

  const navigate = useNavigate();

  // FUNZIONI
  const handleCharacterClick = (character, comic) => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      if (activeMobileCharacter === character.nome) {
        setActiveMobileCharacter(null); // chiudi se già attivo
      } else {
        setActiveMobileCharacter(character.nome);
        setComicTitle(comic.titolo);
      }
    } else {
      setSelectedCharacter(character);
      setShowDetails(true);
      setComicTitle(comic.titolo);
      setComicId(comic.id);
    }
  };

  const goToComicPage = () => {
    navigate(`/comics/${comicId}`);
  };

  return (
    <Container className="characters-container">
      <Row>
        {/* CARD DETTAGLI */}
        <Col xs={4} className={`details-panel ${showDetails ? "visible" : ""}`}>
          {selectedCharacter && (
            <div className="card-characters-details">
              <h2>· {selectedCharacter.nome} ·</h2>
              <img src={selectedCharacter.foto} alt={selectedCharacter.nome} />
              <p className="text-start mt-3">
                "{selectedCharacter.descrizione}"
              </p>
              <p className="d-flex justify-content-end gap-2">
                Fumetto:
                <div
                  className="footer-characters-details"
                  onClick={goToComicPage}
                >
                  <p className="mb-0">{comicTitle}</p>
                </div>
              </p>
            </div>
          )}
        </Col>

        {/* CARD PERSONAGGI */}
        <Col className="mt-5" xs={7}>
          <div className="title-characters">
            <h1>· Tutti i Personaggi ·</h1>
            <img src={hunderline} alt="" />
          </div>
          <div className="card-characters-container">
            {DataComics.map((comic) =>
              comic.cast.map((element, index) => (
                <div
                  className="card-characters d-flex"
                  key={index}
                  onClick={() => handleCharacterClick(element, comic)}
                >
                  <img src={element.foto} alt={element.nome} />
                  <h4>{element.nome}</h4>
                  {/* MOSTRA I DETTAGLI SOLO SU MOBILE E SOLO SE ATTIVO */}
                  {activeMobileCharacter === element.nome &&
                    window.innerWidth <= 768 && (
                      <div className="mobile-character-details mt-2 text-center">
                        <p>"{element.descrizione}"</p>
                        <p>
                          <strong>Fumetto:</strong> {comic.titolo}
                        </p>
                      </div>
                    )}
                </div>
              ))
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Characters;
