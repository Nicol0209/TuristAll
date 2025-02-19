import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen, traduccionhomepage] = useState(false); // Estado para menú en móviles

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="container-home">
      {/* Menú Superior */}
      <header className="top-menu">
        <div class="text-center">
          <img src="Logo.png" alt="Logo" className="logo img-fluid" style={{ width: "120px", height: "auto"}} />
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Ciudades Turísticas</a></li>
            <li><a href="#">Paquetes</a></li>
            <li><a href="#">Contacto</a></li>
            <li>
              <button onClick={handleLogout} className="btn-logout">Cerrar sesión</button>
            </li>
          </ul>
        </nav>
        <nav className={traduccionhomepage ? "nav-menu open" : "nav-menu"}>
          <ul>
            <li><a href="#"></a></li>
            <li><a href="#">Ciudades Turísticas</a></li>
            <li><a href="#">Paquetes</a></li>
            <li><a href="#">Contacto</a></li>
            <li>
              <button onClick={handleLogout} className="btn-logout">
                    <i className="bi bi-box-arrow-right"></i> Cerrar sesión</button>
            </li>
          </ul>
        </nav>
        
      </header>

      {/* Contenido Principal */}
      <div className="main-content">
        <div className="card shadow p-4 text-center">
          {user ? (
            <p className="fs-5 fw-bold">Bienvenid@, a Turistall {user.displayName}</p>
          ) : (
            <p className="fs-5 text-muted">Cargando...</p>
          )}
        </div>
      </div>
    </div>

    
  );
};

export default Home;
