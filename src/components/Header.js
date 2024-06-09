import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Лого</Link>
            </div>
            <nav className="navigation">
                <Link to="/catalog#smartphones">Смартфоны</Link>
                <Link to="/catalog#televisions">Телевизоры</Link>
                <Link to="/catalog#refrigerators">Холодильники</Link>
                <Link to="/catalog#accessories">Аксессуары</Link>
            </nav>
            <div className="header-right">
                <input type="text" placeholder="Поиск..." className="search" />
                <div className="cart">Корзина</div>
                <div className="profile">
                    <Link to="/profile">Личный кабинет</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;