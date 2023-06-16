import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import { DokterProvider } from "../context/DokterContext";
import ProfileDokter from "../component/ProfilDokter";

function ProfilDokterPage() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Periksa status login

  useEffect(() => {
    if (!isLoggedIn) {
      // Jika pengguna belum login, arahkan ke halaman login
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <NavbarComponent />
      {isLoggedIn && ( // Tampilkan profil dokter hanya jika pengguna sudah login
        <DokterProvider>
          <ProfileDokter />
        </DokterProvider>
      )}
      <Footer />
    </>
  );
}

export default ProfilDokterPage;
