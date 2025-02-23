import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="Logo.png" alt="Logo" className="logo-footer" />
        </div>

        <div className="footer-section">
          <nav className="footer-nav">
            <ul>
              <li><a href="#">{t("footer.terms_conditions")}</a></li>
              <li><a href="#">{t("footer.privacy_policy")}</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <p className="footer-text">© 2025 Turistall - {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
