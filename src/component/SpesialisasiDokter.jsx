import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SpesialisasiDokter.css";
import { SpesialisasiContext } from "../context/SpesialisasiContext";

const SpesialisasiDokter = () => {
  const spesialisasi = useContext(SpesialisasiContext);

  return (
    <Container fluid className="spesialisasi container-dokter-tersedia " style={{ marginTop: "80px" }}>
      <div className="spesialisasi-title d-flex justify-content-between align-items-center">
        <h5>Spesialisasi Dokter</h5>
      </div>

      <Row>
        {spesialisasi.map((item, index) => (
          <Col md={2} className="spesialisasi-card" key={index}>
            <Link to="/daftar-dokter" className="text-decoration-none">
              {" "}
              {/*Navigate ke daftar dokter */}
              <img src={item.gambarKategori} alt={`spesialisasi-${index + 1}`} />
              <p className="spesialisasi-card-p" style={{ color: "black" }}>
                {item.namaKategori}
              </p>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpesialisasiDokter;
