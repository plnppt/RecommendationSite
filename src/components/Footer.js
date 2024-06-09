import React from 'react';
import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo">
                Лого
            </div>
            <nav className="footer-navigation">
                <a href="#contacts">Контакты</a>
                <a href="#privacy">Политика конфиденциальности</a>
            </nav>
        </footer>
    );
};

export default Footer;