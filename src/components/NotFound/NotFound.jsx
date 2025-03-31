import React from "react";
import "./NotFound.css";
import Verme from "../../assets/img/viaggioIntStellar/character/kunVerme.png";
import { Button, Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <h1 className="text-center text-danger mt-4">
        <span className="fw-bold">404</span> Pagina non trovata
      </h1>
      <Container className="not-found-container">
        <Row>
          <Col xs={4}>
            {" "}
            <img src={Verme} alt="" />
          </Col>
          <Col xs={6}>
            <h5>
              Hey Dove sei finito? <br /> Non cè niente qui dentro !
            </h5>
            <Button onClick={() => (window.location.href = "/")}>
              Torna alla home
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default NotFound;
