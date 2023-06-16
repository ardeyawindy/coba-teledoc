import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md={4} className="label-footer mt-3">
            <a href="/" className="logofooter">
              <img src="https://i.ibb.co/WFN1kzQ/logo.png" alt="TeleDoc" width="120" height="38" />
            </a>
          </Col>
          <Col md={4} className="sitemap-footer mt-3">
            <h6>Site Map</h6>
            <a href="/" className="lkf">
              FAQ
            </a>
            <a href="/" className="lkf">
              Blog
            </a>
            <a href="/" className="lkf">
              Syarat & Ketentuan
            </a>
            <a href="/" className="lkf">
              Kebijakan Privasi
            </a>
            <a href="/" className="lkf">
              Promo
            </a>
          </Col>
          <Col md={4} className="sitemap-footer mt-3">
            <h6>Hubungi Kami</h6>
            <p className="lkf">Gedung TeleDoc, Jl HR Rasuna Said</p>
            <p className="lkf">Kav. 832-33, Jakarta Selatan 12940</p>
            <p className="lkf">Phone: +6283452678115</p>
            <p className="lkf">Email: teledoc@gmail.com</p>
          </Col>
        </Row>
        <Row className="akhirfooter">
          <Col md={6}>
            <p>© TeleDoc, 2023. ALL RIGHT RESERVED</p>
          </Col>
          <Col md={6} className="icons">
            <a href="#">
              <FiInstagram />
            </a>
            <a href="#">
              <FiFacebook />
            </a>
            <a href="#">
              <FiTwitter />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
