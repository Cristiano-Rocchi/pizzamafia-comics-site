import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import DataComics from "../../Data/DataComics";
import { Container } from "react-bootstrap";
import "./Comics.css";
//icons
import exitfs from "../../assets/icons/exitfullscreen.svg";
import fullscreen from "../../assets/icons/fullscreen.svg";

//librerie
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import "swiper/css/effect-creative";

const Comics = () => {
  //----STATI----
  const { id } = useParams();
  const comic = DataComics.find((comic) => comic.id === id);
  const [mode, setMode] = useState("scorrimento");
  const [isFullscreen, setIsFullscreen] = useState(false);

  //----REF----
  const scrollRef = useRef(null);
  const swiperRef = useRef(null);

  //----FUNZIONI----
  //change mode
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
  //fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      swiperRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
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
            <Container className="comics-classic-body d-block" ref={swiperRef}>
              <div className="header-classic" onClick={toggleFullscreen}>
                <img
                  src={isFullscreen ? exitfs : fullscreen}
                  alt={isFullscreen ? "Esci da fullscreen" : "Fullscreen"}
                  className="fullscreen-icon"
                />
                {isFullscreen ? " Esci da fullscreen" : " Fullscreen"}
              </div>
              <Swiper
                className="swiper-comics-classic"
                rewind={true}
                navigation={true}
                modules={[Navigation, EffectCreative]}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -5000],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
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
