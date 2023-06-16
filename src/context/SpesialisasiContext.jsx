import React, { createContext, useEffect, useState } from "react";

export const SpesialisasiContext = createContext();

const SpesialisasiProvider = ({ children }) => {
  const [spesialisasi, setSpesialisasi] = useState([]);

  useEffect(() => {
    fetch("https://6459d17795624ceb21f0335f.mockapi.io/kategoriDokter")
      .then((response) => response.json())
      .then((data) => {
        // Mengurutkan data berdasarkan namaKategori
        const sortedData = data.sort((a, b) => a.namaKategori.localeCompare(b.namaKategori));
        setSpesialisasi(sortedData);
      })
      .catch((error) => console.log(error));
  }, []);

  return <SpesialisasiContext.Provider value={spesialisasi}>{children}</SpesialisasiContext.Provider>;
};

export default SpesialisasiProvider;
