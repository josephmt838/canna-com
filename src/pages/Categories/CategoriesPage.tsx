import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoriesPage.module.css';

// Mock categories data - this would typically come from an API
const categories = [
    {
        id: 1,
        name: 'Flower',
        description: 'Premium cannabis flower strains',
        image: 'https://placehold.co/400x300/2ecc71/white?text=Flower',
        count: 24,
    },
    {
        id: 2,
        name: 'Edibles',
        description: 'Delicious cannabis-infused treats',
        image: 'https://placehold.co/400x300/2ecc71/white?text=Edibles',
        count: 18,
    },
    {
        id: 3,
        name: 'Concentrates',
        description: 'High-potency cannabis extracts',
        image: 'https://placehold.co/400x300/2ecc71/white?text=Concentrates',
        count: 15,
    },
    {
        id: 4,
        name: 'Vapes',
        description: 'Disposable and refillable vape products',
        image: 'https://placehold.co/400x300/2ecc71/white?text=Vapes',
        count: 20,
    },
    {
        id: 5,
        name: 'Pre-rolls',
        description: 'Ready-to-smoke cannabis joints',
        image: 'https://placehold.co/400x300/2ecc71/white?text=Pre-rolls',
        count: 12,
    },
    {
        id: 6,
        name: 'Accessories',
        description: 'Essential cannabis accessories and tools',
        image: 'https://placehold.co/400x300/2ecc71/white?text=Accessories',
        count: 30,
    },
];

const CategoriesPage: React.FC = () => {
    return (
        <div className={styles.categoriesPage}>
            <div className={styles.header}>
                <h1>Categories</h1>
                <p>Browse our wide selection of cannabis products</p>
            </div>

            <div className={styles.categoriesGrid}>
                {categories.map((category) => (
                    <Link
                        to={`/category/${category.name.toLowerCase()}`}
                        key={category.id}
                        className={styles.categoryCard}
                    >
                        <div className={styles.categoryImage}>
                            <img
                                src={category.image}
                                alt={category.name}
                            />
                        </div>
                        <div className={styles.categoryInfo}>
                            <h2>{category.name}</h2>
                            <p>{category.description}</p>
                            <span className={styles.productCount}>
                                {category.count} Products
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
