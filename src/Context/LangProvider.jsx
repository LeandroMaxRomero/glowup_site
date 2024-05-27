import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const LenguaContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const language = localStorage.getItem("lang");
    if (language) return language;
    else return "castellano";
  });

  useEffect(() => {
    // Si no hay un idioma en localStorage, se configura el idioma inicial como "ingles"
    if (!localStorage.getItem("lang")) {
      setLang("ingles");
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("lang", lang);
  // }, [lang]);

  /* funcion que cambia de lengua */
  const changeLang = (lang) => {
    setLang(lang);
  };

  return (
    <LenguaContext.Provider value={{ lang, changeLang }}>
      {children}
    </LenguaContext.Provider>
  );
};

LangProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LangProvider };