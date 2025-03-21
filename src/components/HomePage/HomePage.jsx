import React from "react";
import { Button } from "react-bootstrap";

import "./HomePage.css";

import BookIcons from "../../assets/icons/book.png";
import DataComics from "../../Data/DataComics";

//librerie
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Homepage = () => {
  const renderCastContent = (cast) => {
    return (
      <div className="cast-tooltip">
        <h4>Cast</h4>
        {cast.map((member, index) => (
          <div key={index} className="cast-member">
            <img src={member.foto} alt={member.nome} className="cast-photo" />
            <div className="cast-info">
              <strong>{member.nome}</strong>
              <p>{member.descrizione}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="background-home">
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
          <Swiper className="mySwiper">
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
                      trigger="click"
                    >
                      <h5>Storyline</h5>
                    </Tippy>
                    <Tippy
                      className="tippy-cast"
                      content={renderCastContent(element.cast)}
                      placement="bottom"
                      delay={100}
                      interactive={true}
                    >
                      <h5>Cast</h5>
                    </Tippy>
                  </div>
                </div>
                <div className="slide-body">
                  <Button variant="outline-primary">
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
  );
};

export default Homepage;
