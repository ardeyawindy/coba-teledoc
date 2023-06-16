import React, { createContext, useState, useEffect } from "react";

const DokterContext = createContext();

const DokterProvider = ({ children }) => {
  const [dokterData, setDokterData] = useState([]);

  useEffect(() => {
    fetch("https://6459d17795624ceb21f0335f.mockapi.io/dokter")
      .then((response) => response.json())
      .then((data) => setDokterData(data))
      .catch((error) => console.log(error));
  }, []);

  return <DokterContext.Provider value={dokterData}>{children}</DokterContext.Provider>;
};

export { DokterContext, DokterProvider };
