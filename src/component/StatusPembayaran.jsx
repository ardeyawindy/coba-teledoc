import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./StatusPembayaran.css";

const PaymentStatus = () => {
  return (
    <Card className="payment-status">
      <Card.Body>
        <div className="text-center mb-5">
          <img src="https://i.ibb.co/xJqRjX1/check2.png" alt="Check" className="check-img" />
        </div>
        <Card.Title className="transaction text-center mb-3">Transaksi berhasil!</Card.Title>
        <Card.Text className="success text-center mb-5">Selamat, pembayaran anda telah berhasil</Card.Text>
        <div className="text-center">
          <Button variant="primary" as={Link} to="https://api.whatsapp.com/send/?phone=6289515768428&text&type=phone_number&app_absent=0">
            OK
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PaymentStatus;
