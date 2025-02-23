import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm";
import Ciudadesturisticas from "./components/Ciudadesturisticas";
import Paquetes from "./components/Paquetes";
import Contacto from "./components/Contacto";
import Restaurantes from "./components/Restaurantes";
import Lugares from "./components/Lugares";
import Hoteles from "./components/Hoteles";

import { Circles } from 'react-loader-spinner';
import i18n from "./i18n";


const App = () => {
  const [user, loading, error] = useAuthState(auth);  // Detecta si el usuario está autenticado
  const [isLoading, setIsLoading] = useState(true);    // Estado para manejar la carge

  // Controlamos el estado de carga para mostrar el login solo cuando Firebase haya verificado la autenticación
  useEffect(() => {
    if (loading) {
      // Si está cargando, no hacer nada
      return;

    }


    setIsLoading(false);

    // Recuperar idioma de localStorage
    const savedLanguage = localStorage.getItem('language'); // Recupera el idioma del localStorage (o usa 'es' como fallback)

    // Cambiar el idioma si es necesario
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage); // Cambia el idioma usando i18next
    }
  }, [loading, i18n]); // Ejecuta este useEffect solo después de que se haya verificado la autenticación

  if (isLoading) {
    // Mientras se verifica la autenticación, muestra un componente de carga (puedes agregar algo como un spinner aquí)
    return (
      <div style={styles.loaderContainer}>
        <Circles
          height="100"
          width="100"
          color="#00BFFF"
          ariaLabel="loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <Router>
      <div style={styles.breadcrumbContainer}>
        <Breadcrumbs />
        <Breadcrumbs path="/Contacto" name="contacto" />


      </div>

      <Routes>
        {/* Si el usuario está autenticado, lo redirige a /home; si no, muestra la pantalla de login */}
        <Route path="/" element={user ? <Navigate to="/Home" /> : <Login />} />

        {/* Página de inicio (solo si está autenticado) */}
        <Route path="/Home" element={user ? <Home /> : <Navigate to="/" />} />

        {/* Pagina de contactos (solo si esta autenticado)*/}
        <Route path="/Contacto" element={user ? <Contacto /> : <Navigate to="/Contacto" />} />

        {/* Pagina de paquetes (solo si esta autenticado)*/}
        <Route path="/Paquetes" element={user ? <Paquetes /> : <Navigate to="/Paquetes" />} />

        {/* Pagina de Ciudades turisticas (solo si esta autenticado)*/}
        <Route path="/CiudadesTuristicas" element={user ? <Ciudadesturisticas /> : <Navigate to="/CiudadesTuristicas" />} />

         {/* Pagina de Ciudades turisticas (solo si esta autenticado)*/}
         <Route path="/Restaurantes" element={user ? <Restaurantes /> : <Navigate to="/Restaurantes" />} />

          {/* Pagina de Ciudades turisticas (solo si esta autenticado)*/}
        <Route path="/Lugares" element={user ? <Lugares /> : <Navigate to="/Lugares" />} />

         {/* Pagina de Ciudades turisticas (solo si esta autenticado)*/}
         <Route path="/Hoteles" element={user ? <Hoteles /> : <Navigate to="/Hoteles" />} />



        {/* Ruta para autenticación (registro e inicio de sesión con email y contraseña) */}
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </Router>
  );
};

const Breadcrumbs = ({ }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // Divide la URL en segmentos
  const breadcrumbList = [
    { name: "Home", path: "/" },
    { name: "Contacto", path: "/Contacto" },
    { name: "Paquetes", path: "/Paquetes" },
    { name: "Ciudades Turísticas", path: "/CiudadesTuristicas" },
    { name: "Autenticación", path: "/auth" },
  ];
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex' }}>
          <li><Link to="/">Inicio</Link></li> {/* Agregar un link al inicio */}

          {/* Crear las migas de pan basadas en la URL actual */}
          {pathnames.map((value, index) => {
            const currentPath = `/${pathnames.slice(0, index + 1).join("/")}`;
            const breadcrumb = breadcrumbList.find((b) => b.path === currentPath);
            return breadcrumb ? (
              <li key={index} style={{ marginLeft: '10px' }}>
                <span> &gt; </span>
                <Link to={currentPath}>{breadcrumb.name}</Link>
              </li>
            ) : null;
          })}
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',   // Asegura que ocupe toda la altura de la pantalla
    backgroundColor: '#fff',  // Puedes cambiar el color de fondo si lo prefieres
  },
  breadcrumbContainer: {
    padding: '10px',
    backgroundColor: '#f0f0f0',
  }
};

export default App;
