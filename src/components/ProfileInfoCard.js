import React from 'react';
import './styles/ProfileInfoCard.css';

const ProfileInfoCard = ({ user }) => {
    return (
        <div className="profile-info-card">
            <h2>Личная информация</h2>
            <p><strong>Имя:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Дата рождения:</strong> {user.birthdate}</p>
            <p><strong>Дата регистрации:</strong> {user.registrationDate}</p>
        </div>
    );
};

export default ProfileInfoCard;