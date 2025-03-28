import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";
import BookIcons from "../../assets/icons/book.png";
import DataComics from "../../Data/DataComics";
import { useNavigate } from "react-router-dom";
import imgPizzamafia from "../../assets/img/bg-home/pizzamafia.png";
import cloud from "../../assets/img/bg-home/ballonpng.png";
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
      <Container className="home-container">
        <Row className="sect-intro">
          <Col xs={4}>
            <div className="d-flex">
              <img src={imgPizzamafia} alt="" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                quasi optio repudiandae molestiae tenetur totam laudantium. Est
                accusamus quae eaque assumenda iusto architecto, magnam,
                molestias, voluptatem exercitationem asperiores debitis hic.
              </p>
            </div>
          </Col>
        </Row>
        <Col className="sect-title" xs={12}>
          <h1>Fumetti</h1>
          <h1>Comics</h1>
        </Col>

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
          <Col xs={12}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;

/*  return (
    <>
      <div className="background-home d-flex">
        <section className="section-intro">
          <img className="img-pizzamafia" src={imgPizzamafia} alt="" />
          <div>
            <img className="img-cloud" src={cloud} alt="" />

            <h1>aa</h1>
          </div>
        </section>

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
    </>
  );*/
