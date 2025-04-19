import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";
import BookIcons from "../../assets/icons/book.png";
import DataComics from "../../Data/DataComics";
import DataDrawings from "../../Data/DataDrawings";
import { Link, useNavigate } from "react-router-dom";

import imgPizzamafia from "../../assets/img/bg-home/pizzamafia.png";

//librerie
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const Homepage = () => {
  //Hook
  const navigate = useNavigate();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeSection, setActiveSection] = useState("comics");
  const [activeDrawingIndex, setActiveDrawingIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  //FUNZIONI
  const handleComicClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const handleDrawingClick = (index) => {
    setActiveDrawingIndex(index);
  };

  const handleClickContatti = (e) => {
    e.preventDefault();
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000); // nasconde dopo 2 sec
  };

  //MODALI CAST E STORYLINE
  const renderCastContent = (cast) => {
    return (
      <div className="cast-tooltip">
        <h4>Cast</h4>
        {cast.map((member, index) => (
          <div key={index} className="cast-member">
            <img
              style={{ width: "80px" }}
              src={member.foto}
              alt={member.nome}
              className="cast-photo"
            />
            <div className="cast-info">
              <p>{member.nome}</p>
              <p>{member.descrizione}</p>
            </div>
          </div>
        ))}
        <p className="text-end mb-0">Vedi Tutti</p>
      </div>
    );
  };
  return (
    <>
      <Container className="home-container">
        <Row className="sect-intro">
          <Col xs={4}>
            <div className="d-flex">
              <img src={imgPizzamafia} alt="" />

              <p>
                Non si possono scrivere racconti senza sapere la struttura
                narrativa o la conoscenza del linguaggio fumettistico. <br />{" "}
                <br />
                Non si possono disegnare personaggi senza sapere le regole dell'
                anatomia, della prospettiva dell' espressività. <br /> <br />
                Non si possono scrivere fumetti senza avere le basi sulla
                composizione e sulle inquadrature delle scene. <br />
                <br />
                Invece io l'ho fatto ! <br />
                <br />
                <strong>
                  Pizzamafia è discorsi incazzati su disegni storti,
                  <br />
                  Qui dentro non c'è arte. <br />
                  Vai via..
                </strong>
              </p>
            </div>
          </Col>
        </Row>

        <Col className="sect-title" xs={12}>
          <div className="line-home1"></div>

          <button
            className={activeSection === "comics" ? "active" : ""}
            onClick={() => setActiveSection("comics")}
          >
            Sfoglia i Fumetti
          </button>

          <button
            className={activeSection === "drawings" ? "active" : ""}
            onClick={() => setActiveSection("drawings")}
          >
            Sfoglia i Disegni
          </button>

          <div className="line-home2"></div>
        </Col>

        {/* --------------COMICS------------ */}
        {activeSection === "comics" ? (
          <Row className="sect-works d-flex justify-content-end">
            <Col xs={12}>
              <div className="d-flex justify-content-between">
                <div className="comics-home-container">
                  <h2>tutti i fumetti</h2>
                  <div className="all-comics">
                    {DataComics.map((element, index) => (
                      <div
                        key={index}
                        className="card-comic"
                        onClick={() => handleComicClick(index)}
                      >
                        <img src={element.cover} alt={element.titolo} />
                        <h5>{element.titolo}</h5>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="comics-slide-home">
                  <motion.div
                    className="card-home"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                    }}
                  >
                    <Swiper
                      className="swiper-home"
                      rewind={true}
                      navigation={true}
                      modules={[Navigation]}
                      onSwiper={(swiper) => setSwiperInstance(swiper)}
                      onInit={(swiper) => {
                        const nextButton = swiper.navigation.nextEl;
                        const prevButton = swiper.navigation.prevEl;

                        // Rimuovi le icone predefinite
                        nextButton.innerHTML = ">";
                        prevButton.innerHTML = "<";
                      }}
                    >
                      {DataComics.map((element, index) => (
                        <SwiperSlide
                          key={index}
                          className="slide-1"
                          style={{ backgroundImage: `url(${element.cover})` }}
                        >
                          <div className="slide-header">
                            <div className="title-header">
                              <h2>{element.titolo}</h2>
                            </div>
                            <div className="ancor-header">
                              <Tippy
                                className="tippy-story"
                                content={element.storyline}
                                placement="bottom"
                                delay={100}
                                interactive={true}
                                animation="bounce"
                              >
                                <h5>Storyline</h5>
                              </Tippy>
                              <Tippy
                                className="tippy-cast"
                                content={renderCastContent(element.cast)}
                                placement="bottom"
                                delay={100}
                                interactive={true}
                                animation="bounce"
                              >
                                <h5>Cast</h5>
                              </Tippy>
                            </div>
                          </div>
                          <div className="slide-body">
                            <Button
                              variant="outline-primary"
                              onClick={() => navigate(`/comics/${element.id}`)}
                            >
                              <img
                                src={BookIcons}
                                alt="Book Icon"
                                className="book-icon"
                              />
                              Read
                            </Button>
                          </div>
                          <div className="slide-footer">
                            <p className="comics-info">
                              {element.anno} | {element.produzione}
                            </p>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Row className="sect-drawings d-flex justify-content-end">
            {/* --------------DRAWINGS------------ */}
            <Col xs={12}>
              <div className="d-flex justify-content-between">
                <div className="drawings-home-container">
                  <h2>tutti i disegni</h2>
                  <div className="all-drawings">
                    {DataDrawings.map((element, index) => (
                      <div
                        key={index}
                        className="card-drawing"
                        onClick={() => handleDrawingClick(index)}
                      >
                        <img src={element.img} alt={element.titolo} />
                        <h5>{element.titolo}</h5>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="drawings-slide-home">
                  <motion.div
                    className="card-home"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                    }}
                  >
                    <Swiper
                      key={activeDrawingIndex}
                      className="swiper-home"
                      navigation={true}
                      modules={[Navigation]}
                      allowTouchMove={false}
                      initialSlide={activeDrawingIndex}
                      onInit={(swiper) => {
                        const nextButton = swiper.navigation.nextEl;
                        const prevButton = swiper.navigation.prevEl;
                        nextButton.innerHTML = ">";
                        prevButton.innerHTML = "<";
                      }}
                    >
                      {DataDrawings.map((element, index) => (
                        <SwiperSlide
                          key={index}
                          className="slide-1"
                          style={{
                            backgroundImage: `url(${element.img}) `,
                            backgroundSize: "cover",
                          }}
                        >
                          <div className="slide-header">
                            <div className="title-header">
                              <h2>{element.titolo}</h2>
                            </div>
                          </div>
                          <div className="slide-body">
                            <Button onClick={() => navigate("/drawings")}>
                              Vedi
                            </Button>
                          </div>
                          <div className="slide-footer">
                            <p className="comics-info">
                              {element.anno} | {element.produzione}
                            </p>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
      {/* --------------FOOTER------------ */}
      <footer className="footer">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md={4}>
              <p className="footer-title">Pizzamafia</p>
              <p className="footer-sub">Fumetti Incazzati da sempre</p>
            </Col>
            <Col md={4} className="text-center">
              <p className="footer-links">
                <Link to="/comics">Fumetti</Link> |{" "}
                <Link to="/drawings">Disegni</Link> |{" "}
                <Tippy
                  content=" 😡 Non mi contattare."
                  visible={showTooltip}
                  placement="top"
                  animation="shift-away"
                >
                  <a href="#contatti" onClick={handleClickContatti}>
                    Contatti
                  </a>
                </Tippy>
              </p>
            </Col>
            <Col md={4} className="text-end">
              <p className="footer-credit">
                © {new Date().getFullYear()} Pizzamafia
              </p>
              <p className="footer-claim">Niente arte. Solo disagio.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Homepage;
