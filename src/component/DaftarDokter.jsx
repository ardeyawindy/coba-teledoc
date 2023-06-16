import React, { useContext } from "react";
import { DokterContext } from "../context/DokterContext";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DaftarDokter.css";

function DaftarDokter() {
  const dokterData = useContext(DokterContext);

  return (
    <div className="ms-4">
      <Container fluid style={{ marginTop: "80px" }}>
        <h5>Semua Ahli Dokter Umum</h5>
        <Row>
          {dokterData.map((dokter) => (
            <Col xs={12} md={4} key={dokter.id} className="mb-2">
              <Link to={`/profil-dokter/${dokter.id}`} className="custom-card-link" style={{color: "black"}}>
                <Card style={{ width: "380px", height: "100px", fontWeight: "bold" }} className="custom-card">
                  <div className="card-wrapper d-flex">
                    <Card.Img variant="top" src={dokter.gambarDokter} style={{ width: "50px", height: "70px" }} className="img m-3" />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>{dokter.namaDokter}</Card.Title>
                      <Row>
                        <Col>
                          <Card.Text className="mb-1">{dokter.kategori}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>12.00pm - 4.00pm</Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid className="dokter-tersedia mt-2">
        <h5>Dokter yang Tersedia</h5>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          {dokterData.map((dokter) => (
            <Col className="col-doctor mt-sm-3 " key={dokter.id}>
              <Link to={`/profil-dokter/${dokter.id}`} className="custom-card-link">
                <Card className="doctor-card card-sm-1 mr-0">
                  <Card.Img src={dokter.gambarDokter} className="card-img-top" alt={dokter.namaDokter} />
                  <div className="card-img-overlay p-2">
                    <h2 className="card-title doctor-name">{dokter.namaDokter}</h2>
                    <p className="card-text spesialisasi-text m-1">{dokter.kategori}</p>
                    <p className="card-text place-title m-1">
                      <small>Tempat Praktik</small>
                    </p>
                    <h4 className="m-1">{dokter.tempatPraktik}</h4>
                    <p className="card-text m-1">
                      <small>Harga</small>
                    </p>
                    <h4 className="m-1 price">{dokter.harga}</h4>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default DaftarDokter;
