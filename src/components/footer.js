import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="Logo.png" alt="Logo" className="logo-footer" />
        <nav className="footer-nav">
          <ul>
            <li><a href="#">{t("terms_conditions")}</a></li>
            <li><a href="#">{t("privacy_policy")}</a></li>
          </ul>
        </nav>
        <p className="footer-text">© 2025 Turistall - {t("footer.rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
