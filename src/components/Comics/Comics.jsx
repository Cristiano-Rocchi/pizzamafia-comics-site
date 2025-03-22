import React from "react";
import { useParams } from "react-router-dom";
import DataComics from "../../Data/DataComics";
import { Container } from "react-bootstrap";
import "./Comics.css";

const Comics = () => {
  const { id } = useParams();
  const comic = DataComics.find((comic) => comic.id === id);

  if (!comic) {
    return <h1>Comic not found</h1>;
  }
  return (
    <>
      <div className="comics-header">
        <h1>{comic.titolo}</h1>
        <div className="header-info">
          <div className="card-info comics-characters">
            <h3 className="text-center">Personaggi</h3>
            {comic.cast.map((character, index) => (
              <div key={index} className="d-flex">
                <img src={character.foto} alt={character.nome} />
                <div>
                  <strong>{character.nome}</strong>
                  <p>{character.descrizione}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="card-info comics-trama">
            <h3 className="text-center">Trama</h3>
            <p>{comic.storyline}</p>
          </div>
          <div className="card-info comics-info">
            <h3 className="text-center">Info</h3>
            <p>
              Anno di uscita: <strong>{comic.anno}</strong>
            </p>
            <p>
              Prodotto in <strong>{comic.produzione}</strong>
            </p>
            <p>
              Autore <strong>Pizzamafia</strong>
            </p>
          </div>
        </div>
      </div>
      <Container className="comics-body">
        <img src={comic.completo} alt="fumetto" />
      </Container>
    </>
  );
};

export default Comics;
