import { Container, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PesanDokter.css";

function PesanDokter() {
  const [selectedPayment, setSelectedPayment] = useState("");
  const navigate = useNavigate();

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleOrderSubmit = () => {
    if (selectedPayment) {
      console.log("Pesanan dibuat");
      console.log("Metode Pembayaran:", selectedPayment);

      // Navigasi ke halaman "Invoice" dengan menyertakan data harga dalam state lokasi
      navigate("/invoice", { state: { harga } });
    } else {
      alert("Silakan pilih metode pembayaran");
    }
  };

  const location = useLocation();
  const { dokter } = location.state; // Access the dokter object passed from the ProfileDokter component
  const harga = dokter.harga;

  return (
    <Container className="container-message-dokter">
      <div className="message-dokter">
        <h3>Pesan Dokter</h3>
        <span className="consultation">Konsultasi untuk</span>
        <div className="consultation-name-wrapper">
          <span className="consultation-name">Kairi Kalanda</span>
        </div>
      </div>

      <div className="order-dokter">
        <span>Dokter yang dipesan</span>
      </div>
      <div className="dokter-profile">
        <div className="profile-image">
          <img src={dokter.gambarDokter} alt="Doctor Profile" />
        </div>
        <div className="profile-details">
          <div className="profile-heading">
            <h2 className="profile-name">{dokter.namaDokter}</h2>
            <div className="profile-specialty">
              <span>Dokter Umum</span>
            </div>
            <div className="sesi">
              <div className="sesi-info">
                <p>
                  Biaya Sesi <span>1 Jam</span>
                </p>
              </div>
              <div className="sesi-price">
                <span>{dokter.harga}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-method">
        <span>Pilih Metode Pembayaran</span>
      </div>
      <div className="payment">
        <div className="payment-details">
          <img src="https://i.ibb.co/L5Br6zm/visa.png" alt="visa" />
          <label className="payment-name">Transfer Bank</label>
          <input type="radio" id="visa" name="payment" value="visa" checked={selectedPayment === "visa"} onChange={handlePaymentChange} />
        </div>

        <div className="payment-details">
          <img src="https://i.ibb.co/ZgwMTKM/dana.png" alt="dana" />
          <label className="payment-name">Dana</label>
          <input type="radio" id="dana" name="payment" value="dana" checked={selectedPayment === "dana"} onChange={handlePaymentChange} />
        </div>

        <div className="payment-details">
          <img src="https://i.ibb.co/Prx2mC4/gopay.png" alt="gopay" />
          <label className="payment-name">Gopay</label>
          <input type="radio" id="gopay" name="payment" value="gopay" checked={selectedPayment === "gopay"} onChange={handlePaymentChange} />
        </div>

        <div className="payment-details">
          <img src="https://i.ibb.co/3fPmxvL/shopee-pay.png" alt="shopee pay" />
          <label className="payment-name">Shopee Pay</label>
          <input type="radio" id="shopee-pay" name="payment" value="shopee-pay" checked={selectedPayment === "shopee-pay"} onChange={handlePaymentChange} />
        </div>
      </div>

      <div className="paid">
        <span>Total yang Dibayar</span>
        <div className="paid-price">
          <span>{dokter.harga}</span>
        </div>
      </div>
      <div className="make-an-order">
        <Button onClick={handleOrderSubmit}>Buat Pesanan</Button>
      </div>
    </Container>
  );
}

export default PesanDokter;
