import React from 'react';
import './styles/OrderHistoryCard.css';

const OrderHistoryCard = ({ order }) => {
    return (
        <div className="order-history-card">
            <h3>Заказ №{order.id}</h3>
            <p><strong>Дата заказа:</strong> {order.date}</p>
            <p><strong>Общая сумма:</strong> {order.totalAmount} ₽</p>
            {order.items.map((item, index) => (
                <div key={index} className="order-item">
                    <p>{item.title} ({item.quantity} шт.) - {item.price} ₽</p>
                </div>
            ))}
        </div>
    );
};

export default OrderHistoryCard;