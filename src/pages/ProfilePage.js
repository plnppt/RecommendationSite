import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileInfoCard from '../components/ProfileInfoCard';
import OrderHistoryCard from '../components/OrderHistoryCard';
import './styles/ProfilePage.css';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        // Загрузка данных пользователя
        // Пример:
        // fetchUserData().then(data => setUserData(data));

        setUserData({
            name: 'Иван Иванов',
            email: 'ivan@example.com',
            birthdate: '01.01.1990',
            registrationDate: '01.01.2020',
        });

        // Загрузка истории заказов
        // Пример:
        // fetchOrderHistory().then(data => setOrderHistory(data));

        setOrderHistory([
            {
                id: 1,
                date: '01.01.2021',
                totalAmount: 1500.00,
                items: [
                    { title: 'Товар 1', quantity: 1, price: 500.00 },
                    { title: 'Товар 2', quantity: 2, price: 500.00 }
                ]
            },
            {
                id: 2,
                date: '01.02.2021',
                totalAmount: 1000.00,
                items: [
                    { title: 'Товар 3', quantity: 1, price: 1000.00 }
                ]
            }
        ]);
    }, []);

    return (
        <div>
            <Header />
            <main className="main-content">
                <h2>Личный кабинет</h2>
                {userData && <ProfileInfoCard user={userData} />}
                <h2>История заказов</h2>
                {orderHistory.length > 0 ? (
                    orderHistory.map(order => (
                        <OrderHistoryCard key={order.id} order={order} />
                    ))
                ) : (
                    <p>У вас пока нет заказов.</p>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default ProfilePage;