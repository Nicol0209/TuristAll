import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ Importa i18next
import "../styles/MigasdePan.css"; 

const MigasdePan = () => {
    const { t } = useTranslation(); // ✅ Obtiene la función t() para traducir
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const breadcrumbList = [
        { name: t("menu.home"), path: "/" },
        { name: t("menu.contact"), path: "/Contacto" },
        { name: t("menu.packages"), path: "/Paquetes" },
        { name: t("menu.restaurant"), path: "/Restaurantes" },
        { name: t("menu.hotels"), path: "/Hoteles" },
        { name: t("menu.cities"), path: "/Ciudadesturisticas" },
        { name: t("menu.places"), path: "/Lugares" },
        { name: t("menu.auth"), path: "/auth" }
    ];

    return (
        <div className="breadcrumbs-container">
            <nav aria-label="breadcrumb">
                <ul className="breadcrumbs-list">
                    <li>
                        <Link to="/">{t("menu.home")}</Link>
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
