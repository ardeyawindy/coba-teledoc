import React from "react";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import ArtikelProvider from "../context/ArticleContext";
import DetailArtikel from "../component/DetailArtikel";

function DetailArtikelPage() {
  return (
    <>
      <NavbarComponent />
      <ArtikelProvider>
        <DetailArtikel />
      </ArtikelProvider>
      <Footer />
    </>
  );
}

export default DetailArtikelPage;
