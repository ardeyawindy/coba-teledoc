import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Spesialisasi.css";
import { SpesialisasiContext } from "../context/SpesialisasiContext";

const Spesialisasi = () => {
  const spesialisasi = useContext(SpesialisasiContext);

  return (
    <Container className="spesialisasi container-dokter-tersedia mb-4 mt-4">
      <div className="spesialisasi-title d-flex justify-content-between align-items-center">
        <h5>Spesialisasi Dokter</h5>
        <Link to="/daftar-spesialisasi" className="text-decoration-none">
          Lihat Semua
        </Link>
      </div>
      <Row>
        <Col md={2} className="spesialisasi-card">
          <img src={spesialisasi[0]?.gambarKategori} alt="spesialisasi-1" />
          <p className="spesialisasi-card-p">{spesialisasi[0]?.namaKategori}</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src={spesialisasi[1]?.gambarKategori} alt="spesialisasi-2" />
          <p className="spesialisasi-card-p">{spesialisasi[1]?.namaKategori}</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src={spesialisasi[2]?.gambarKategori} alt="spesialisasi-3" />
          <p className="spesialisasi-card-p">{spesialisasi[2]?.namaKategori}</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src={spesialisasi[3]?.gambarKategori} alt="spesialisasi-4" />
          <p className="spesialisasi-card-p">{spesialisasi[3]?.namaKategori}</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src={spesialisasi[4]?.gambarKategori} alt="spesialisasi-5" />
          <p className="spesialisasi-card-p">{spesialisasi[4]?.namaKategori}</p>
        </Col>
        <Col md={2} className="spesialisasi-card">
          <img src={spesialisasi[5]?.gambarKategori} alt="spesialisasi-6" />
          <p className="spesialisasi-card-p">{spesialisasi[5]?.namaKategori}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Spesialisasi;
