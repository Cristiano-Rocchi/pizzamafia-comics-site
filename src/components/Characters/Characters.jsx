import React, { useState } from "react";
import "./Characters.css";
import { Col, Container, Row } from "react-bootstrap";
import DataComics from "../../Data/DataComics";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  // HOOKS
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [comicTitle, setComicTitle] = useState("");
  const [comicId, setComicId] = useState("");

  const navigate = useNavigate(); // ✅ Per navigare tra le pagine

  // FUNZIONI
  const handleCharacterClick = (character, comic) => {
    setSelectedCharacter(character);
    setShowDetails(true);
    setComicTitle(comic.titolo);
    setComicId(comic.id); // ✅ Salva l'id del fumetto per il link
  };

  // Naviga alla pagina del fumetto
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
              <h2>{selectedCharacter.nome}</h2>
              <img src={selectedCharacter.foto} alt={selectedCharacter.nome} />
              <p className="text-start mt-3">{selectedCharacter.descrizione}</p>
              <p>
                Fumetto: <span onClick={goToComicPage}>{comicTitle}</span>
              </p>
            </div>
          )}
        </Col>

        {/* CARD PERSONAGGI */}
        <Col className="mt-5" xs={7}>
          <h1 className="text-center">Tutti i Personaggi</h1>
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
