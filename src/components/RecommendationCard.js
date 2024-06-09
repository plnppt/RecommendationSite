import React from 'react';
import './styles/RecommendationCard.css';

const RecommendationCard = ({ id, title, image, price, onAddToCart, onBuyNow }) => {
    return (
        <div className="recommendation-card">
            <img src={image} alt={title} className="recommendation-image" />
            <div className="recommendation-details">
                <h3>{title}</h3>
                <p className="recommendation-price">{price} ₽</p>
            </div>
            <div className="recommendation-actions">
                <button className="add-to-cart" onClick={() => onAddToCart(id)}>Добавить в корзину</button>
                <button className="buy-now" onClick={() => onBuyNow(id)}>Купить сейчас</button>
            </div>
        </div>
    );
};

export default RecommendationCard;