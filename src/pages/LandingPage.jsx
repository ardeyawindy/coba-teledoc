import React from "react";
import NavbarComponent from "../component/Navbar";
import Hero from "../component/Hero";
import Spesialisasi from "../component/Spesialisasi";
import SpesialisasiProvider from "../context/SpesialisasiContext";
import DokterTersedia from "../component/DokterTersedia";
import { DokterProvider } from "../context/DokterContext";
import Artikel from "../component/Artikel";
import ArtikelProvider from "../context/ArticleContext";
import Footer from "../component/Footer";

function LandingPage() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <SpesialisasiProvider>
        <Spesialisasi />
      </SpesialisasiProvider>
      <DokterProvider>
        <DokterTersedia />
      </DokterProvider>
      <ArtikelProvider>
        <Artikel />
      </ArtikelProvider>
      <Footer />
    </>
  );
}

export default LandingPage;
