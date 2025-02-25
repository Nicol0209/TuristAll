import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/contactos.css";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import Footer from "./Footer";
import MigasdePan from "./MigasdePan";

const Contactos = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const lat = 4.6097;  // Latitud
  const lon = -74.0721; // Longitud

  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?q=${lat},${lon}&key=YOUR_GOOGLE_MAPS_API_KEY`;

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
    localStorage.setItem("language", lang); // Para guardar el idioma en localStorage
  };  

  //Para redireccionamiento de todas la páginas 
  const handleRedirect = () => {
    navigate('/'); // Redirige a Inicio 
    navigate('/Contacto'); // Redirige a Contactos
    navigate('/Paquetes'); //Regirige a Paquetes 
    navigate('/Ciudadesturisticas'); // Redirige a Ciudades Turisticas 
    navigate('/Restaurantes'); // Redirige a Restaurantes
    navigate('/Lugares'); // Redirige a Lugares 
    navigate('/Hoteles'); // Redirige a Hoteles
  };


  // Configuración de los carrusel para las tarjetas
  const carruselConfig = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
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
        breakpoint: 768, // Dispositivos móviles
        settings: { slidesToShow: 1, dots: false }
      }
    ]
  };

  const carrusel3Config = {
    dots: false, // Muestra indicadores de navegación
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
        breakpoint: 768, // Dispositivos móviles
        settings: { slidesToShow: 1, dots: false }
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
      <MigasdePan />
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


            {/*lista desplegable de idiomas */}
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
      <div className="hero-container">
          <img
            src="/images/Contacto/Contacto.jpg"
            alt="Ciudades Turísticas"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h2 className="hero-title">{t("titleContactos")}</h2>
          </div>
        </div>
        <MigasdePan />

        <div className="seccion4 shadow p-4 text-right">

          <h2 className="text-start">{t("titlecontacto")}</h2>
          {/* Carrusel de tarjetas seccion búsquedas*/}
          <Slider {...carruselConfig}>
            {t("cards", { returnObjects: true }).map((card, index) => (
              <div key={index} className="card">
                <h3 className="p-3">{card.title}</h3>
                <img src={`images/${card.category}/${card.image}`} alt={card.title} className="img-fluid" />
                <p className="m-2">{card.description}</p>
                <button className="btn btn-style1 m-2">{t("view")}</button>
              </div>
            ))}
          </Slider>
        </div>

        <div className="formcontacto  shadow p-4 text-start ">
          <h2 className="text-start">{t("titlecontactos2")} </h2>
          <div className="location-info">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.785140543764!2d-74.08343562418679!3d4.63238404224428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a0f9bb0ce7%3A0x5d71ff487837183c!2sUniempresarial!5e0!3m2!1ses!2sco!4v1740454765439!5m2!1ses!2sco"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación en Google Maps"
            ></iframe>
          </div>
          <div className="contact-container">
            {/* Contenedor para la geolocalización y el formulario */}
            {/* Google Maps en iframe a la izquierda */}

            {/* Formulario de contacto */}
            <form className="contact-form">
              <div className="mb-6">
                <label htmlFor="name" className="form-label">{t("formcontacto.name")}</label>
                <input type="text" className="form-control" id="name" placeholder={t("formcontacto.namePlaceholder")} required />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="form-label">{t("formcontacto.email")}</label>
                <input type="email" className="form-control" id="email" placeholder={t("formcontacto.emailPlaceholder")} required />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="form-label">{t("formcontacto.message")}</label>
                <textarea className="form-control" id="message" rows="4" placeholder={t("formcontacto.messagePlaceholder")} required></textarea>
              </div>
              <button type="submit" className="btn btn-style1 m-6">{t("formcontacto.send")}</button>
            </form>
            {/* Información de contacto */}
            <div className="contact-info">
              <h3>{t("formcontacto.contactInfoTitle")}</h3>
              <p>{t("formcontacto.contactInfoDescription")}</p>
              <p>{t("formcontacto.address")}<i className="fas fa-map-marker-alt"></i></p>
              <p>{t("formcontacto.phone")}<i className="fas fa-phone-alt"></i></p>
              <p>{t("formcontacto.emailinfo")}<i className=" fas fa-envelope"></i></p>

            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square"></i> 
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://wa.me/3137371781" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> 
              </a>
            </div>

          </div>

        </div>

      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contactos;
