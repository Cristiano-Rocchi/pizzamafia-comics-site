import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import DataComics from "../../Data/DataComics";
import { Container, Modal } from "react-bootstrap";
import "./Comics.css";
//icons
import exitfs from "../../assets/icons/exitfullscreen.svg";
import fullscreen from "../../assets/icons/fullscreen.svg";
import up from "../../assets/icons/graffitiarrowsvg.svg";

//librerie
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Zoom } from "swiper/modules";

import "swiper/css/navigation";
import { motion } from "framer-motion";
import "swiper/css/effect-creative";

const Comics = () => {
  //----STATI----
  const { id } = useParams();
  const comic = DataComics.find((comic) => comic.id === id);
  const [mode, setMode] = useState("scorrimento");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [openMobileCard, setOpenMobileCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  //mobile card
  const toggleMobileCard = (cardName) => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    if (openMobileCard === cardName) {
      setOpenMobileCard(null);
    } else {
      setOpenMobileCard(cardName);
    }
  };

  //download pdf
  const handleDownloadClick = () => {
    setShowModal(true);
  };

  const handleConfirmDownload = () => {
    setShowModal(false);
    // Avvia il download
    const link = document.createElement("a");
    link.href = comic.pdf;
    link.download = "";
    link.click();
  };

  const handleCancelDownload = () => {
    setShowModal(false);
  };

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
            onClick={() => toggleMobileCard("personaggi")}
          >
            <h3 className="text-center">Personaggi</h3>

            {(openMobileCard === "personaggi" || window.innerWidth > 768) && (
              <div className="character-list">
                {comic.cast.map((character, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-2 mb-2"
                  >
                    <img src={character.foto} alt={character.nome} />
                    <div>
                      <strong>{character.nome}</strong>
                      {window.innerWidth > 768 && (
                        <p className="mb-0">{character.descrizione}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
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
            onClick={() => toggleMobileCard("trama")}
          >
            <h3 className="text-center">Trama</h3>

            {(openMobileCard === "trama" || window.innerWidth > 768) && (
              <p className="mt-2">{comic.storyline}</p>
            )}
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
            onClick={() => toggleMobileCard("info")}
          >
            <h3 className="text-center">Info</h3>

            {(openMobileCard === "info" || window.innerWidth > 768) && (
              <div className="info-details mt-2">
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
            )}
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
            onClick={() => toggleMobileCard("extra")}
          >
            <h3 className="text-center">Extra</h3>

            {(openMobileCard === "extra" || window.innerWidth > 768) && (
              <div className="extra-content mt-2 text-center">
                <button onClick={handleDownloadClick}>Download</button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <div className="button-sect">
        {" "}
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
            <Container
              className={`comics-body d-block ${
                isFullscreen ? "fullscreen-container-scroll" : ""
              }`}
              ref={swiperRef}
            >
              <div className="header-scorrimento d-flex justify-content-between sticky-top">
                <div className="d-flex ms-3 pt-2" onClick={toggleFullscreen}>
                  <button>
                    {" "}
                    <img
                      src={isFullscreen ? exitfs : fullscreen}
                      alt={isFullscreen ? "Esci da fullscreen" : "Fullscreen"}
                      className="fullscreen-icon"
                    />
                    {isFullscreen ? " Esci da fullscreen" : " Fullscreen"}
                  </button>
                </div>
                <div
                  className="d-flex me-3 pt-2"
                  onClick={() => {
                    if (isFullscreen && swiperRef.current) {
                      // Scroll modalità fullscreen
                      swiperRef.current.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    } else {
                      // Scroll modalità normale
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  <button>
                    <img className="up-icon" src={up} alt="" />
                    torna all'inizio
                  </button>
                </div>
              </div>

              <div className="text-center">
                <img className="fumetto" src={comic.scrollMode} alt="fumetto" />
              </div>
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
              <div className="header-classic">
                <button onClick={toggleFullscreen}>
                  {" "}
                  <img
                    src={isFullscreen ? exitfs : fullscreen}
                    alt={isFullscreen ? "Esci da fullscreen" : "Fullscreen"}
                    className="fullscreen-icon"
                  />
                  {isFullscreen ? " Esci da fullscreen" : " Fullscreen"}
                </button>
              </div>
              <Swiper
                className="swiper-comics-classic"
                rewind={true}
                navigation={true}
                modules={[Navigation, Zoom]}
                zoom={true}
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
                    <div className="swiper-zoom-container">
                      {" "}
                      <img
                        src={foto.img}
                        alt={`comic-${index}`}
                        className="comic-image"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </motion.div>
        )}
      </div>
      <Modal show={showModal} onHide={handleCancelDownload} centered>
        <Modal.Header closeButton>
          <Modal.Title>Scaricare "{comic.titolo}"?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Il fumetto verrà scaricato in formato PDF. Sei sicuro?
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCancelDownload}>
            Annulla
          </button>
          <button className="btn btn-primary" onClick={handleConfirmDownload}>
            Scarica
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Comics;
