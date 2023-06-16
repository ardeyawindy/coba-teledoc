import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container, Form, Col, Row } from "react-bootstrap";

function DetailArtikel() {
  const { id } = useParams();
  const [artikel, setArtikel] = useState(null);

  useEffect(() => {
    // Mengambil data artikel dari sumber data (API atau penyimpanan lokal)
    // Berdasarkan ID yang diterima dari parameter URL
    fetch(`https://64788d51362560649a2e003d.mockapi.io/artikel/${id}`)
      .then((response) => response.json())
      .then((data) => setArtikel(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!artikel) {
    return <div>Loading...</div>;
  }

  const { judul, tanggal, isi, gambar, penulis, url, kategori } = artikel;

  return (
    <Container fluid style={{ marginTop: "80px" }}>
      <div className="row">
        <div className="col-lg-8">
          <Card className="mb-4">
            <Card.Body>
              <Card.Title style={{ fontSize: "25px", fontWeight: "bold" }}> {judul}</Card.Title>
              <Card.Text className="mb-2 text-muted" style={{ fontSize: "16px" }}>
                Penulis: {penulis}
              </Card.Text>
              <Card.Text className="mb-2 text-muted" style={{ fontSize: "16px" }}>
                Tanggal dibuat: {new Date(tanggal).toLocaleDateString()}
              </Card.Text>
              <Card.Img variant="top" src={gambar} style={{ width: "500px", height: "300px" }} />
              <Card.Text as="div" className="mt-5" style={{ fontSize: "16px" }}>
                {isi}
              </Card.Text>
              <Card.Text className="mt-4   mb-2" style={{ fontSize: "16px" }}>
                Artikel selengkapnya dapat diakses melalui: <a href="{url}">{url}</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card className="subscribe-form">
            <Card.Body>
              <Card.Title>Berlangganan Artikel</Card.Title>
              <Form>
                <Form.Group controlId="email">
                  <Form.Control type="email" placeholder="Masukkan alamat email Anda..." className="mb-2" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Berlangganan
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title className="">Kategori Artikel</Card.Title>
              <div className="category-articles">
                <Button variant="primary" className="topic">
                  {kategori}
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Topik Terkini</Card.Title>
              <div className="topic-selection" style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
                <Button variant="outline-primary" className="topic mb-2" style={{ width: "180px" }}>
                  Diabetes
                </Button>
                <Button variant="outline-primary" className="topic mb-2" style={{ width: "180px" }}>
                  Jantung
                </Button>
                <Button variant="outline-primary" className="topic mb-2" style={{ width: "180px" }}>
                  Covid-19
                </Button>
                <Button variant="outline-primary" className="topic mb-2" style={{ width: "180px" }}>
                  Reproduksi
                </Button>
                <Button variant="outline-primary" className="topic mb-2" style={{ width: "180px" }}>
                  Anemia
                </Button>
                <Button variant="outline-primary" className="topic mb-2" style={{ width: "180px" }}>
                  Kanker
                </Button>
                <Button variant="outline-primary" className="topic mb-2" style={{ width: "180px" }}>
                  Gaya Hidup
                </Button>
                <Button variant="outline-primary" className="topic mb-2" style={{ width: "180px" }}>
                  Stroke
                </Button>
                <Button variant="outline-primary" className="topic mb-2" style={{ width: "180px" }}>
                  Kehamilan
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default DetailArtikel;
