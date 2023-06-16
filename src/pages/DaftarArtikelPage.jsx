import React from "react";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import ArtikelProvider from "../context/ArticleContext";
import { TopicSelection, PopularArticles, NewArticles } from "../component/DaftarArtikel";

function DaftarArtikelPage() {
  return (
    <>
      <NavbarComponent />
      <ArtikelProvider>
        <TopicSelection />
        <PopularArticles />
        <NewArticles />
      </ArtikelProvider>
      <Footer />
    </>
  );
}

export default DaftarArtikelPage;
