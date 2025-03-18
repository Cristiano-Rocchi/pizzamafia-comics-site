import React from "react";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomePage.css";
import "swiper/css";
import BookIcons from "../../assets/icons/book.png";

const Homepage = () => {
  return (
    <div className="background-home">
      <div className="card-home">
        <Swiper className="mySwiper">
          <SwiperSlide className="slide-1">
            <div className="slide-header">
              <div className="title-header">
                <h2>Viaggio Interstellare</h2>
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
          <SwiperSlide>
            {" "}
            <div className="slide-header">
              <div className="title-header">Nome fumetto</div>
              <div className="ancor-header">
                <p>Storyline</p>
                <p>Cast</p>
              </div>
            </div>
            <div className="slide-body">
              <Button variant="outline-primary">Primary</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide-header">
              <div className="title-header">Nome fumetto</div>
              <div className="ancor-header">
                <p>Storyline</p>
                <p>Cast</p>
              </div>
            </div>
            <div className="slide-body">
              <Button variant="outline-primary">Primary</Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide-header">
              <div className="title-header">Nome fumetto</div>
              <div className="ancor-header">
                <p>Storyline</p>
                <p>Cast</p>
              </div>
            </div>
            <div className="slide-body">
              <Button variant="outline-primary">Primary</Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Homepage;
