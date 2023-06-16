import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DaftarArtikelPage from "./pages/DaftarArtikelPage";
import DetailArtikelPage from "./pages/DetailArtikelPage";
import DaftarDokterPage from "./pages/DaftarDokterPage";
import ProfilDokterPage from "./pages/ProfilDokterPage";
import PesanDokterPage from "./pages/PesanDokterPage";
import Invoice from "./component/Invoice";
import StatusPembPage from "./pages/StatusPembPage";
import SpesialisasiPage from "./pages/SpesialisasiPage";
import Login from "./component/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/beranda" element={<LandingPage />} />
        <Route path="/dokter" element={<DaftarDokterPage />} />
        <Route path="/notifikasi" element={<LandingPage />} />
        <Route path="/artikel" element={<DaftarArtikelPage />} />
        <Route path="/daftar-spesialisasi" element={<SpesialisasiPage />} />
        <Route path="/daftar-artikel" element={<DaftarArtikelPage />} />
        <Route path="/detail-artikel/:id" element={<DetailArtikelPage />} />
        <Route path="/daftar-dokter" element={<DaftarDokterPage />} />
        <Route path="/profil-dokter/:id" element={<ProfilDokterPage />} />
        <Route path="/pesan-dokter/:id" element={<PesanDokterPage />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/payment-status" element={<StatusPembPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
