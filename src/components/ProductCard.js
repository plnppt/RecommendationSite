import React from 'react';
import './styles/ProductCard.css';

const ProductCard = ({ id, title, image, price, onAddToCart, onBuyNow }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <div className="product-details">
                <h3>{title}</h3>
                <p className="product-price">{price} ₽</p>
            </div>
            <div className="product-actions">
                <button className="add-to-cart" onClick={() => onAddToCart(id)}>Добавить в корзину</button>
                <button className="buy-now" onClick={() => onBuyNow(id)}>Купить сейчас</button>
            </div>
        </div>
    );
};

export default ProductCard;