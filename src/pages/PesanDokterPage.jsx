import React from "react";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import { DokterProvider } from "../context/DokterContext";
import PesanDokter from "../component/PesanDokter";

function PesanDokterPage() {
  return (
    <>
      <NavbarComponent />
      <DokterProvider>
        <PesanDokter />
      </DokterProvider>
    </>
  );
}

export default PesanDokterPage;
