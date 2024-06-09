import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import RecommendationCard from '../components/RecommendationCard';
import './styles/HomePage.css';

const HomePage = () => {
    const [nonPersonalRecommendations, setNonPersonalRecommendations] = useState([]);
    const [personalRecommendations, setPersonalRecommendations] = useState([]);

    useEffect(() => {
        setNonPersonalRecommendations([{ title: 'Product 1', image: 'url1', price: 999 }, ]);
        setPersonalRecommendations([{ title: 'Product 4', image: 'url4', price: 499 }, ]);

        setNonPersonalRecommendations([
            { title: 'Неперсонализированный товар 1', image: 'url1', price: 999 },
            { title: 'Неперсонализированный товар 2', image: 'url2', price: 1999 },
            { title: 'Неперсонализированный товар 3', image: 'url3', price: 2999 },
            { title: 'Неперсонализированный товар 4', image: 'url4', price: 3999 },
        ]);

        setPersonalRecommendations([
            { title: 'Персонализированный товар 1', image: 'url5', price: 899 },
            { title: 'Персонализированный товар 2', image: 'url6', price: 1799 },
            { title: 'Персонализированный товар 3', image: 'url7', price: 2699 },
            { title: 'Персонализированный товар 4', image: 'url8', price: 3599 },
        ]);
    }, []);

    return (
        <div>
            <Header />
            <main className="main-content">
                <div className="category-section">
                    <CategoryCard title="Смартфоны" image="smartphones.jpg" />
                    <CategoryCard title="Телевизоры" image="televisions.jpg" />
                    <CategoryCard title="Холодильники" image="refrigerators.jpg" />
                    <CategoryCard title="Аксессуары" image="accessories.jpg" />
                </div>
                <div className="recommendation-section">
                    <h2>Неперсонализированные рекомендации</h2>
                    <div className="recommendation-cards">
                        {nonPersonalRecommendations.map((rec, index) => (
                            <RecommendationCard key={index} title={rec.title} image={rec.image} price={rec.price} />
                        ))}
                    </div>
                </div>
                <div className="recommendation-section">
                    <h2>Персонализированные рекомендации</h2>
                    <div className="recommendation-cards">
                        {personalRecommendations.map((rec, index) => (
                            <RecommendationCard key={index} title={rec.title} image={rec.image} price={rec.price} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;