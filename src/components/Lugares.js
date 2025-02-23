import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Lugares.css";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import Footer from "./Footer";

const Lugares = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  //Para redireccionamiento de todas la spaginas 
  const handleRedirect = () => {
    navigate('/Contacto'); // Redirige a /Contactos
    navigate('/Paquetes'); //Regirige a paquetes 
    navigate('/Ciudadesturisticas'); // Redirige a ciudades turisticas 
    navigate('/Restaurantes'); // Redirige a Restaurantes
    navigate('/'); // Redirige a ciudades turisticas 
    navigate('/Ciudadesturisticas'); // Redirige a ciudades turisticas 
    navigate('/Ciudadesturisticas'); // Redirige a ciudades turisticas 


  };


  // Configuración de los carrusel para las tarjetas
  const carruselConfig = {
    dots: true, // Muestra indicadores de navegación
    infinite: true, // Se repite cuando llega al final
    speed: 500, // Velocidad de transición
    slidesToShow: 5, // Muestra 3 tarjetas en pantallas grandes
    slidesToScroll: 1, // Se mueve de una en una
    responsive: [
      {
        breakpoint: 1024, // Para tablets
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768, // Para móviles
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const carrusel3Config = {
    dots: true, // Muestra indicadores de navegación
    infinite: false, // Se repite cuando llega al final
    speed: 500, // Velocidad de transición
    slidesToShow: 7, // Muestra 3 tarjetas en pantallas grandes
    slidesToScroll: 1, // Se mueve de una en una
    responsive: [
      {
        breakpoint: 1024, // Para tablets
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768, // Para móviles
        settings: { slidesToShow: 1 }
      }
    ]
  };

  // Configuración carrusel de la imagen 
  const carruselFullImagen = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768, // Móviles
        settings: { slidesToShow: 1, dots: false } // Ocultar dots en móviles
      }
    ]
  };

  const carruselFullImagen2 = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768, // Móviles
        settings: { slidesToShow: 1, dots: true }
      }
    ]
  };

  // Función para cambiar la imagen de la bandera segun el idioma seleccionado
  useEffect(() => {
    const selectElement = document.querySelector(".language-select");
    const selectedValue = i18n.language; // Idioma actual
    const flagUrl = `/images/Banderas/${selectedValue}.jpg`; // Ruta de la imagen

    if (selectElement) {
      selectElement.style.backgroundImage = `url(${flagUrl})`;
    }
  }, [i18n.language]); // Se ejecuta cada vez que cambia el idioma



  return (
    <div className="home-container">
      {/* Menú Superior */}
      <header className="header">
        <div className="menu-up">
          <img src="Logo.png" alt="Logo" className="logo" />
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder={t("search")} className="search-input" />
          </div>
          <button onClick={handleLogout} className="btn-logout">
            {t("logout")} <i className="fa-solid fa-arrow-right-from-bracket" />
          </button>
        </div>

        {/* Menú */}
        <nav className="menu-dawn">
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          {/* Segundo navar y redireccionamientos */}
          <ul className={menuOpen ? "menu-options open" : "menu-options"}>
            <li><a href="./home" onClick={handleRedirect}><i className="fa-solid fa-house-user" /> {t("menu.home")}</a></li>
            <li><a href="./Ciudadesturisticas" onClick={handleRedirect}><i className="fa-solid fa-city" /> {t("menu.cities")}</a></li>
            <li><a href="./Paquetes" onClick={handleRedirect} ><i className="fa-solid fa-box" /> {t("menu.packages")}</a></li>
            <li><a href="./Restaurantes" onClick={handleRedirect} ><i className="fa-solid fa-utensils" /> {t("menu.restaurant")}</a></li>
            <li><a href="./Hoteles" onClick={handleRedirect}><i class="fa-solid fa-hotel"></i> {t("menu.hotels")}</a></li>
            <li><a href="./Lugares" onClick={handleRedirect} ><i class="fa-solid fa-ranking-star"></i> {t("menu.places")}</a></li>
            <li><a href="./Contacto" onClick={handleRedirect} ><i class="fa-solid fa-address-book"></i> {t("menu.contact")}</a></li>


            <div className="language-select-container">
              <div className="form-group mt-1">
                <select
                  className="language-select form-select form-select-sm"
                  value={i18n.language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ch">Chino</option>
                </select>
              </div>
            </div>

          </ul>
        </nav>
      </header>
      <br />
      {/* Contenido Principal */}
      <div className="main-content">
        <div className="shadow p-1 mt-5 mb-1 text-center">
          {user ? (
            <p className="fs-5 fw-bold m-4 p-4 text-secondary">{user.displayName} {t("welcome_message")}</p>
          ) : (
            <p className="fs-5 text-muted">{t("description")}</p>
          )}
        </div>

        <div className="seccion2 shadow p-4 text-center">

          <h2 className="text-start">{t("titleLugares")}</h2>
          {/* Carrusel de tarjetas seccion búsquedas*/}
          
          <br /><br />
          
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Lugares;
