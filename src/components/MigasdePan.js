import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/MigasdePan.css"; // Importa el archivo de estilos

const MigasdePan = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const breadcrumbList = [
        { name: "Home", path: "/" },
        { name: "Contacto", path: "/Contacto" },
        { name: "Paquetes", path: "/Paquetes" },
        { name: "Restaurantes", path: "/Restaurantes" },
        { name: "Hoteles", path: "/Hoteles" },
        { name: "Ciudades Turísticas", path: "/CiudadesTuristicas" },
        { name: "Lugares", path: "/Lugares" },
        { name: "Autenticación", path: "/auth" },
    ];

    return (
        <div className="breadcrumbs-container">
            <nav aria-label="breadcrumb">
                <ul className="breadcrumbs-list">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>

                    {pathnames.map((value, index) => {
                        const currentPath = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const breadcrumb = breadcrumbList.find((b) => b.path === currentPath);

                        return breadcrumb ? (
                            <li key={index}>
                                <span className="separator"> &gt; </span>
                                <Link to={currentPath}>{breadcrumb.name}</Link>
                            </li>
                        ) : null;
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default MigasdePan;
