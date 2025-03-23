import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import DataComics from "../../Data/DataComics";
import { Container } from "react-bootstrap";
import "./Comics.css";

//librerie
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const Comics = () => {
  //----STATI----
  const { id } = useParams();
  const comic = DataComics.find((comic) => comic.id === id);
  const [mode, setMode] = useState("scorrimento");

  const scrollRef = useRef(null);

  //----FUNZIONI----
  const handleModeChange = (newMode) => {
    setMode(newMode);

    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  if (!comic) {
    return <h1>Comic not found</h1>;
  }
  return (
    <>
      <div className="comics-header">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <h1>{comic.titolo}</h1>
        </motion.div>

        <div className="header-info">
          <motion.div
            className="card-info comics-characters"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 1,
            }}
          >
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
          </motion.div>

          <motion.div
            className="card-info comics-trama"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 1.5,
            }}
          >
            <h3 className="text-center">Trama</h3>
            <p>{comic.storyline}</p>
          </motion.div>

          <motion.div
            className="card-info comics-info"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 2,
            }}
          >
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
          </motion.div>
          <motion.div
            className="card-info comics-extra"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 2.5,
            }}
          >
            <h3 className="text-center">Extra</h3>
            <button
              className={mode === "classic" ? "active" : ""}
              onClick={() => handleModeChange("classic")}
            >
              Leggi in modalità classica
            </button>
            <button
              className={mode === "scorrimento" ? "active" : ""}
              onClick={() => handleModeChange("scorrimento")}
            >
              Leggi in modalità scorrimento
            </button>
          </motion.div>
        </div>
      </div>

      <div ref={scrollRef}>
        {" "}
        {/* SCORRIMENTO MODE */}
        {mode === "scorrimento" && (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.5,
            }}
          >
            <Container className="comics-body">
              <img src={comic.scrollMode} alt="fumetto" />
            </Container>
          </motion.div>
        )}
        {/* CLASSIC MODE */}
        {mode === "classic" && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <Container className="comics-classic-body">
              <Swiper
                className="swiper-comics-classic"
                rewind={true}
                navigation={true}
                modules={[Navigation]}
              >
                {comic.classicMode.map((foto, index) => (
                  <SwiperSlide className="slide-classic" key={index}>
                    <img
                      src={foto.img}
                      alt={`comic-${index}`}
                      className="comic-image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Comics;
