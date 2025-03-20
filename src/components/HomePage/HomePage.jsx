import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomePage.css";
import "swiper/css";
import BookIcons from "../../assets/icons/book.png";
import DataComics from "../../Data/DataComics";
import { motion } from "framer-motion";

const Homepage = () => {
  const [showModalStory, setShowModalStory] = useState(false);
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
                className="slide-1"
                style={{ backgroundImage: `url(${element.cover})` }}
              >
                <div className="slide-header">
                  <div className="title-header">
                    <h2>{element.titolo}</h2>
                  </div>
                  <div className="ancor-header">
                    <p onClick={() => setShowModalStory(!showModalStory)}>
                      Storyline
                    </p>
                    <p>Cast</p>
                  </div>
                  {/* -----MODALI----- */}
                  {showModalStory && (
                    <motion.div
                      className="custom-modal"
                      initial={{ y: -200, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 17,
                      }}
                    >
                      <div className="custom-modal-story">
                        {element.storyline}
                      </div>
                    </motion.div>
                  )}
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
