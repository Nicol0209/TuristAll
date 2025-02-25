import React from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // 🔹 Guardar idioma en localStorage
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="btn-group">
        <button onClick={() => changeLanguage("en")} className={`btn ${i18n.language === "en" ? "btn-primary" : "btn-outline-secondary"}`}>🇬🇧 EN</button>
        <button onClick={() => changeLanguage("es")} className={`btn ${i18n.language === "es" ? "btn-primary" : "btn-outline-secondary"}`}>🇪🇸 ES</button>
        <button onClick={() => changeLanguage("fr")} className={`btn ${i18n.language === "fr" ? "btn-primary" : "btn-outline-secondary"}`}>🇫🇷 FR</button>
        <button onClick={() => changeLanguage("ch")} className={`btn ${i18n.language === "ch" ? "btn-primary" : "btn-outline-secondary"}`}>🇨🇳 CH</button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
