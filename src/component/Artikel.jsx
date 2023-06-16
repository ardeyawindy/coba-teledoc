import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ArtikelContext } from "../context/ArticleContext";
import { Link } from "react-router-dom";
import "./Artikel.css";

function Artikel() {
  const { articles } = useContext(ArtikelContext);

  return (
    <Container className="container-article">
      <div className="d-flex justify-content-between align-items-center">
        <h5>Artikel</h5>
        <Link to="/daftar-artikel" className="text-decoration-none">
          Lihat Semua
        </Link>
      </div>

      <div className="badges">
        <a href="" id="badge-new" className="badge-articles">
          Terbaru
        </a>
        <a href="" id="badge-secondary" className="badge-articles">
          Terpopuler
        </a>
        <a href="" id="badge-secondary" className="badge-articles">
          Kehamilan
        </a>
      </div>

      <Row className="text-start g-0 mt-sm-3">
        {articles.slice(0, 4).map((article) => (
          <Col xs={12} sm={6} md={6} lg={3} key={article.id}>
            <Card className="card-height m-2">
              <Link to={`/detail-artikel/${article.id}`} className="card-article text-decoration-none">
                <Card.Img src={article.gambar} style={{ height: "150px" }} alt="gambar" />
                <Card.Body>
                  <div className="badge text-wrap mb-1">{article.kategori}</div>
                  <Card.Title className="card-title">{article.judul}</Card.Title>
                  <Card.Text className="card-text">{article.deskripsi}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Artikel;
