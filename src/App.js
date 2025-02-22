import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm";
import Ciudadesturisticas from "./components/Ciudadesturisticas";
import Paquetes from "./components/Paquetes";
import Contacto from "./components/Contacto";
import { Circles } from 'react-loader-spinner';
import i18n from "./i18n";
import Breadcrumbs from "react-router-breadcrumbs-hoc";


const App = () => {
  const [user, loading, error] = useAuthState(auth);  // Detecta si el usuario está autenticado
  const [isLoading, setIsLoading] = useState(true);    // Estado para manejar la carga
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  // Controlamos el estado de carga para mostrar el login solo cuando Firebase haya verificado la autenticación
  useEffect(() => {
    if (loading) {
      // Si está cargando, no hacer nada
      return;

      const breadcrumbData = [
        {label: 'Home', path: '/home'},
        {label: 'Contacto', path: '/Contacto'},
        {label: 'Paquetes', path: '/Paquetes'},
        {label: 'Ciudades Turisticas', path: '/Ciudadesturisticas'},
        {label: 'Lugares', path: '/Places'}

      ];
      setBreadcrumbs
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
      </div>

      <Routes>
        {/* Si el usuario está autenticado, lo redirige a /home; si no, muestra la pantalla de login */}
        <Route path="/" element={user ? <Navigate to="/Home" /> : <Login />} />

        {/* Página de inicio (solo si está autenticado) */}
        <Route path="/Home" element={user ? <Home /> : <Navigate to="/" />} breadcrumb="Home" />

        {/* Pagina de contactos (solo si esta autenticado)*/}
        <Route path="/Contacto" element={user ? <Contacto /> : <Navigate to="/Contacto" /> } breadcrumb="Contacto"/>

        {/* Pagina de paquetes (solo si esta autenticado)*/}
        <Route path="/Paquetes" element={user ? <Paquetes /> : <Navigate to="/Paquetes" /> }/>

        {/* Pagina de Ciudades turisticas (solo si esta autenticado)*/}
        <Route path="/CiudadesTuristicas" element={user ? <Ciudadesturisticas /> : <Navigate to="/CiudadesTuristicas" /> }/>

        {/* Ruta para autenticación (registro e inicio de sesión con email y contraseña) */}
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </Router>
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
