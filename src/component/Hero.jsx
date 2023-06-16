import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <Container fluid id="hero" className="mt-5">
      <Row className="align-items-center">
        <Col md={6} className="hero-content">
          <div className="hero-greeting ms-md-5">
            <h1>Konsultasi kesehatan dengan Mudah</h1>
            <p>
              Chat dokter, konsultasi online, informasi
              <br />
              kesehatan terupdate
              <br />
              Semua Ada di TeleDoc.
            </p>
            <div className="hero-button">
              <Link to="/daftar-dokter" className="text-decoration-none">
                <Button>Konsultasi Sekarang</Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col md={6} className="hero-img">
          <img src="https://i.ibb.co/kxxpbNt/hero.png" className="img-fluid mt-md-5" alt="hero" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
