import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import SpesialisasiProvider from "../context/SpesialisasiContext";
import SpesialisasiDokter from "../component/SpesialisasiDokter";

function SpesialisasiPage() {
  return (
    <>
      <NavbarComponent />
      <SpesialisasiProvider>
        <SpesialisasiDokter />
      </SpesialisasiProvider>

      <Footer />
    </>
  );
}

export default SpesialisasiPage;
