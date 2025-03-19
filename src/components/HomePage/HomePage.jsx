import React from "react";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomePage.css";
import "swiper/css";
import BookIcons from "../../assets/icons/book.png";
import DataComics from "../../Data/DataComics";

const Homepage = () => {
  return (
    <div className="background-home">
      <div className="card-home">
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
                  <p>Storyline</p>
                  <p>Cast</p>
                </div>
              </div>
              <div className="slide-body">
                <Button variant="outline-primary">
                  <img src={BookIcons} alt="Book Icon" className="book-icon" />
                  Read
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Homepage;
