import React from 'react';
import './styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const createPages = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={`pagination-button ${currentPage === i ? 'active' : ''}`}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="pagination">
            {createPages()}
        </div>
    );
};

export default Pagination;