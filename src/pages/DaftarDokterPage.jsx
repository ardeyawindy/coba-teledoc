import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import { DokterProvider } from "../context/DokterContext";
import DaftarDokter from "../component/DaftarDokter";

function DaftarDokterPage() {
  return (
    <>
      <NavbarComponent />
      <DokterProvider>
        <DaftarDokter />
      </DokterProvider>
      <Footer />
    </>
  );
}

export default DaftarDokterPage;
