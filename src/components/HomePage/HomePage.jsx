import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";
import BookIcons from "../../assets/icons/book.png";
import DataComics from "../../Data/DataComics";
import DataDrawings from "../../Data/DataDrawings";
import { useNavigate } from "react-router-dom";
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

  //FUNZIONI
  const handleComicClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
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
      {/* --------------COMICS------------ */}

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
                  Pizzamafia è discorsi strani su disegni brutti,
                  <br />
                  Qui dentro non c'è arte. <br />
                  Vai via..
                </strong>
              </p>
            </div>
          </Col>
        </Row>

        <Col className="sect-title" xs={12}>
          <h1
            onClick={() => setActiveSection("comics")}
            className={activeSection === "comics" ? "active" : ""}
          >
            Sfoglia i Fumetti
          </h1>
          <h1
            onClick={() => setActiveSection("drawings")}
            className={activeSection === "drawings" ? "active" : ""}
          >
            Sfoglia i Disegni
          </h1>
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
          <Row className="sect-drawings">
            {/* --------------DRAWINGS------------ */}

            <h2 className="text-center">drawing</h2>
            <Col xs={12}>
              {/* FILA 1 */}
              <div className="container-card-drawing-1 mb-2">
                <motion.div
                  className="card-drawing d-flex"
                  style={{ position: "relative", bottom: "20px" }}
                  initial={{
                    x: "100vw",
                    y: -100,
                    opacity: 0,
                    rotate: 15,
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                  }}
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 30, // Rigidità
                      damping: 10, //  Smorzamento
                      mass: 4, // Massa
                    },
                    y: {
                      type: "keyframes",
                      values: [-100, 50, -20, 10, 0],
                      times: [0, 0.3, 0.6, 0.8, 1],
                      duration: 3,
                    },
                    rotate: {
                      type: "keyframes",
                      values: [15, -10, 5, -2, 0],
                      duration: 3,
                    },
                    opacity: {
                      duration: 2,
                    },
                  }}
                >
                  <div>
                    <h3 className="p-5 border border-solid">Card 1</h3>

                    <p className="text-center">• Titolo •</p>
                  </div>
                </motion.div>
                <motion.div
                  className="card-drawing d-flex"
                  style={{ position: "relative", top: "50px", left: "50px" }}
                  initial={{
                    y: "100vh",
                    x: 0,
                    opacity: 0,
                    rotate: 10,
                  }}
                  animate={{
                    y: 0,
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                  }}
                  transition={{
                    y: {
                      type: "spring",
                      stiffness: 30,
                      damping: 8,
                      mass: 2,
                      bounce: 0.6,
                      delay: 1.5,
                    },
                    x: {
                      type: "keyframes",
                      values: [0, 15, -10, 5, 0],
                      times: [0, 0.3, 0.6, 0.8, 1],
                      duration: 2,
                      delay: 1.5,
                    },
                    rotate: {
                      type: "spring",
                      stiffness: 50,
                      damping: 15,
                      mass: 1,
                      delay: 1.5,
                    },
                    opacity: {
                      duration: 1.5,
                      delay: 1.5,
                    },
                  }}
                >
                  <div>
                    <h3 className="p-5 border border-solid">Card 1</h3>

                    <p className="text-center">• Titolo •</p>
                  </div>
                </motion.div>

                <motion.div
                  className="card-drawing d-flex"
                  style={{
                    position: "relative",
                    bottom: "60px",
                    left: "30px",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    perspective: 1000,
                  }}
                  initial={{
                    rotateY: 200,
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    rotateY: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    rotateY: {
                      type: "tween",
                      ease: "easeOut",
                      duration: 1.2,
                      delay: 3,
                    },
                    opacity: {
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 2,
                    },
                    scale: {
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                      delay: 2.2,
                    },
                  }}
                >
                  <motion.div
                    style={{
                      transformOrigin: "center",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div>
                      <h3 className="p-5 border border-solid">Card 1</h3>

                      <p className="text-center">• Titolo •</p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="card-drawing d-flex"
                  initial={{
                    x: 200,
                    opacity: 0,
                    rotate: 5,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 30,
                    damping: 8,
                    mass: 4,
                    bounce: 0.4,
                    delay: 1.3,
                    velocity: 0.1,
                  }}
                >
                  <div>
                    <h3 className="p-5 border border-solid">Card 1</h3>

                    <p className="text-center">• Titolo •</p>
                  </div>
                </motion.div>
              </div>

              {/* FILA 2 */}
              <div className="container-card-drawing-2 mb-5">
                <motion.div
                  className="card-drawing d-flex"
                  initial={{
                    x: "100vw",
                    y: "100vh",
                    opacity: 0,
                    rotate: -15,
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                  }}
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 20,
                      damping: 8,
                      mass: 5,
                    },
                    y: {
                      type: "keyframes",
                      values: [200, -100, 50, -20, 10, 0],
                      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                      duration: 3,
                    },
                    rotate: {
                      type: "keyframes",
                      values: [-15, 10, -5, 3, -1, 0],
                      duration: 3,
                    },
                    opacity: {
                      duration: 2,
                    },
                  }}
                >
                  <div>
                    <h3 className="p-5 border border-solid">Card 1</h3>
                    <p className="text-center">● Titolo ●</p>
                  </div>
                </motion.div>

                <motion.div
                  className="card-drawing d-flex"
                  style={{ position: "relative", top: "20px", right: "150px" }}
                  initial={{
                    x: 0,
                    y: "100vh",
                    opacity: 0,
                    rotate: 15,
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                  }}
                  transition={{
                    y: {
                      type: "spring",
                      stiffness: 30,
                      damping: 10,
                      mass: 4,
                      bounce: 0.6,
                    },
                    x: {
                      type: "keyframes",
                      values: [0, 20, -15, 10, 0],
                      times: [0, 0.3, 0.6, 0.8, 1],
                      duration: 3,
                    },
                    rotate: {
                      type: "keyframes",
                      values: [15, -10, 5, -2, 0],
                      duration: 3,
                    },
                    opacity: {
                      duration: 2,
                    },
                  }}
                >
                  <div>
                    <h3 className="p-5 border border-solid">Card 1</h3>

                    <p className="text-center">• Titolo •</p>
                  </div>
                </motion.div>
              </div>
              {/* FILA 3 */}
              <div className="container-card-drawing-3 mb-5">
                <motion.div
                  className="card-drawing d-flex"
                  style={{ position: "relative", right: "100px" }}
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                  }}
                >
                  <div>
                    <h3 className="p-5 border border-solid">Card 1</h3>

                    <p className="text-center">• Titolo •</p>
                  </div>
                </motion.div>
                <motion.div
                  className="card-drawing d-flex"
                  style={{
                    position: "relative",
                    bottom: "30px",
                    right: "80px",
                  }}
                  initial={{
                    x: "-100vw",
                    y: "100vh",
                    opacity: 0,
                    rotate: -15,
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                  }}
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 30,
                      damping: 10,
                      mass: 4,
                      delay: 0.5,
                    },
                    y: {
                      type: "keyframes",
                      values: [100, -30, 15, -5, 0],
                      times: [0, 0.3, 0.6, 0.8, 1],
                      duration: 3,
                      delay: 0.5,
                    },
                    rotate: {
                      type: "keyframes",
                      values: [-15, 10, -5, 2, 0],
                      duration: 3,
                      delay: 0.5,
                    },
                    opacity: {
                      duration: 2,
                      delay: 0.5,
                    },
                  }}
                >
                  <div>
                    <h3 className="p-5 border border-solid">Card 1</h3>

                    <p className="text-center">• Titolo •</p>
                  </div>
                </motion.div>

                <motion.div
                  className="card-drawing d-flex "
                  style={{ position: "relative", top: "20px", left: "50px" }}
                  initial={{
                    x: "100vw",
                    y: "100vh",
                    opacity: 0,
                    rotate: 30,
                  }}
                  animate={{
                    x: ["100vw", "50vw", "-20vw", "0"],
                    y: ["100vh", "-20vh", "10vh", "0"],
                    opacity: 1,
                    rotate: [30, -10, 5, 0],
                  }}
                  transition={{
                    x: {
                      type: "keyframes",
                      duration: 4,
                      ease: "easeInOut",
                    },
                    y: {
                      type: "keyframes",
                      duration: 4,
                      ease: "easeInOut",
                    },
                    rotate: {
                      type: "keyframes",
                      duration: 4,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: 2,
                    },
                  }}
                >
                  <div>
                    <h3 className="p-5 border border-solid">Card 1</h3>

                    <p className="text-center">• Titolo •</p>
                  </div>
                </motion.div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Homepage;

/* 

 {/
 <Row className="sect-intro mt-5 mb-5">
 <Col className="sect-title2" xs={12}>
   <h1>Disegni</h1>
 </Col>
</Row>
<Row className="sect-works2 d-flex justify-content-end">
 <Col xs={12}>
   <div className="d-flex justify-content-between">
     <div className="drawings-home-container">
       <h2>tutti i fumetti</h2>
       <div className="all-drawings">
         {DataDrawings.map((element, index) => (
           <div
             key={index}
             onClick={() => handleDrawingClick(index)}
             className="card-drawing"
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
           className="swiper-home"
           rewind={true}
           navigation={true}
           modules={[Navigation]}
           onSwiper={(swiper) => setSwiperInstance2(swiper)}
           onInit={(swiper) => {
             const nextButton = swiper.navigation.nextEl;
             const prevButton = swiper.navigation.prevEl;

             // Rimuovi le icone predefinite
             nextButton.innerHTML = ">";
             prevButton.innerHTML = "<";
           }}
         >
           {DataDrawings.map((element, index) => (
             <SwiperSlide
               key={index}
               className="slide-1"
               style={{ backgroundImage: `url(${element.img})` }}
             >
               <div className="slide-header">
                 <div className="title-header">
                   <h2>{element.titolo}</h2>
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
*/
