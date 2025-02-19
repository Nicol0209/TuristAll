import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [user] = useAuthState(auth); // Detectar si el usuario está autenticado

  return (
    <Router>
      <Routes>
        {/* Si el usuario está autenticado, lo redirige a /home; si no, muestra la pantalla de login */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />

        {/* Página de inicio (solo si está autenticado) */}
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />

        {/* Ruta para autenticación (registro e inicio de sesión con email y contraseña) */}
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </Router>
  );
};

export default App;
