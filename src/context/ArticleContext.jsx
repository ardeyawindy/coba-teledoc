import React, { createContext, useState, useEffect } from "react";

export const ArtikelContext = createContext();

const ArtikelProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://64788d51362560649a2e003d.mockapi.io/artikel")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ArtikelContext.Provider value={{ articles }}>
      {children}
    </ArtikelContext.Provider>
  );
};

export default ArtikelProvider;
