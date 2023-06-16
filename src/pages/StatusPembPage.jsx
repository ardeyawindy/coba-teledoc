import React from "react";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import PaymentStatus from "../component/StatusPembayaran";

function StatusPembPage() {
  return (
    <>
      <NavbarComponent />
      <PaymentStatus />
      <Footer />
    </>
  );
}

export default StatusPembPage;
