import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import './styles/CatalogPage.css';

const CatalogPage = () => {
    const [catalogItems, setCatalogItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        // Запрос к API для получения данных каталога с учетом текущей страницы
        // Пример:
        // fetchCatalogItems(currentPage);

        // Для примера установим статические данные
        const itemsPerPage = 8;
        const totalItems = 24;
        setTotalPages(Math.ceil(totalItems / itemsPerPage));

        const items = Array.from({ length: totalItems }, (_, i) => ({
            id: i + 1,
            title: `Товар ${i + 1}`,
            image: `https://via.placeholder.com/150?text=Item+${i + 1}`,
            price: ((i + 1) * 100).toFixed(2)
        }));

        setCatalogItems(items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleAddToCart = (id) => {
        // Логика обработки добавления в корзину
        console.log(`Товар ${id} добавлен в корзину`);
    };

    const handleBuyNow = (id) => {
        // Логика для обработки покупки
        console.log(`Товар ${id} куплен`);
    };

    return (
        <div>
            <Header />
            <main className="main-content">
                <h2>Каталог товаров</h2>
                <div className="catalog-section">
                    {catalogItems.map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            onAddToCart={handleAddToCart}
                            onBuyNow={handleBuyNow}
                        />
                    ))}
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </main>
            <Footer />
        </div>
    );
};

export default CatalogPage;
