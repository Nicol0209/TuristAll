import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import Footer from "./Footer";

const Home = () => {
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
    navigate('/Lugares'); // Redirige a Lugares 
    navigate('/Hoteles'); // Redirige a Hoteles


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

        <div className="seccion1">
          <Slider {...carruselFullImagen} className="carrusel-full">
            {[
              { img: "/images/Ciudades/Bogota.jpg", title: "¿Ya conoces Bogotá? ", link: "/Bogota" },
              { img: "/images/Ciudades/Santa Marta.jpg", title: "Visita Santa Marta y sus paisajes inolvidables", link: "/SantaMarta" },
              { img: "/images/Ciudades/Barranquilla2.jpg", title: "Explora Barranqulla la ciudad de la belleza arquitectónica", link: "/Cali" }
            ].map((slide, index) => (
              <div key={index} className="carousel-slide">
                {/* Imagen de fondo */}
                <img src={slide.img} alt={slide.title} className="full-img" />
                {/* Contenedor del texto y el botón */}
                <div className="carousel-overlay">
                  <h2 className="carousel-title">{slide.title}</h2>
                  <a href={slide.link} className="btn-carousel">Ver más</a>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="seccion2 shadow p-4 text-center">

          <h2 className="text-start">{t("title1")}</h2>
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
          <br /><br />
          <div className="seccion3">
            <h2 className="text-start text-style2">{t("title2")}</h2>
            {/* Carrusel de tarjetas sección rankigs*/}
            <Slider {...carruselConfig}>
              {t("cards2", { returnObjects: true }).map((card, index) => (
                <div key={index} className="card">
                  <h3 className="p-3">{card.title}</h3>
                  <img src={`images/${card.category}/${card.image}`} alt={card.title} className="img-fluid" />
                  <p className="m-2">{card.description}</p>
                  <button className="btn btn-style3 m-2">{t("view")}</button>
                </div>
              ))}
            </Slider>
            <br />
          </div>
          <h2 className="text-start">{t("title3")}</h2>
          {/* Carrusel de tarjetas sección promos y descuentos*/}
          <Slider {...carrusel3Config}>
            {t("cards3", { returnObjects: true }).map((card, index) => (
              <div key={index} className="card">
                <h3 className="p-3">{card.title}</h3>
                <img src={`images/${card.category}/${card.image}`} alt={card.title} className="img-fluid" />
                <p className="m-2">{card.description}</p>
                <button className="btn btn-style1 m-2">{t("view")}</button>
              </div>
            ))}
          </Slider>
          <br />
          <div className="seccion4">
            <Slider {...carruselFullImagen2} className="carrusel-full">
              {[
                {
                  img: "/images/testimonios/Colombiano1.jpg",
                  title: "María de España: 'Una experiencia inolvidable en Bogotá'",
                  description: "María quedó maravillada con la historia y cultura de la ciudad, visitando lugares como La Candelaria y el Museo del Oro. Se sintió como en casa.",
                  city: "Bogota"
                },
                {
                  img: "/images/testimonios/Colombiano2.jpg",
                  title: "Carlos de Argentina: 'Santa Marta, el paraíso escondido'",
                  description: "Carlos disfrutó de las playas cristalinas y las montañas de Santa Marta. Enamoró con la Sierra Nevada y las maravillas naturales del Parque Tayrona.",
                  city: "SantaMarta"
                },
                {
                  img: "/images/testimonios/Colombiano3.jpg",
                  title: "Lucía de México: 'Barranquilla, una ciudad llena de vida y color'",
                  description: "Lucía se asombró con la calidez de la gente y la arquitectura de Barranquilla. Además, disfrutó de su gastronomía única y su vibrante Carnaval.",
                  city: "Barranquilla"
                },
                {
                  img: "/images/testimonios/Colombiano4.jpeg",
                  title: "Andrés de Chile: 'Cartagena, historia y romance a la orilla del mar'",
                  description: "Andrés visitó la ciudad amurallada y se sintió como un viajero en el tiempo, explorando la arquitectura colonial y disfrutando de las playas caribeñas.",
                  city: "Cartagena"
                },
                {
                  img: "/images/testimonios/Colombiano5.jpg",
                  title: "Sofía de Brasil: 'Cali, la salsa y el ritmo de la vida'",
                  description: "Sofía se sumergió en el corazón de la salsa. Disfrutó de las noches de fiesta, la gastronomía caleña, y los parques naturales de la ciudad.",
                  city: "Cali"
                },
                {
                  img: "/images/testimonios/Colombiano6.jpg",
                  title: "Diego de Perú: 'Medellín, innovación y cultura en cada rincón'",
                  description: "Diego quedó encantado con la transformación de Medellín, visitando el Parque Arví, el Museo de Antioquia y disfrutando de la calidez de su gente.",
                  city: "Medellín"
                }
              ].map((slide, index) => (
                <div key={index} className="carousel-slide2">
                  {/* Imagen de fondo */}
                  <img src={slide.img} alt={slide.title} className="full-img" />
                  {/* Contenedor del texto y el botón */}
                  <div className="carousel-overlay2">
                    <h2 className="carousel-title2">{slide.title}</h2>
                    <p className="carousel-p2">{slide.description}</p>
                    <p className="carousel-p2 fw-bold">{slide.city}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
