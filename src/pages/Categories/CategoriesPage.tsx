import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoriesPage.module.css';

import accessories from '../../assets/images/categories/accessories.jpg';
import cbdOil from '../../assets/images/categories/cbd-oil.jpg';
import edibles from '../../assets/images/categories/edibles.jpg';
import flower from '../../assets/images/categories/flower.jpg';
import preroll from '../../assets/images/categories/preroll.jpg';
import topical from '../../assets/images/categories/topical.jpg';

// Mock categories data - this would typically come from an API
const categories = [
    {
        id: 1,
        name: 'Flower',
        description: 'Premium cannabis flower strains',
        image: flower,
        count: 24,
    },
    {
        id: 2,
        name: 'Edibles',
        description: 'Delicious cannabis-infused treats',
        image: edibles,
        count: 18,
    },
    {
        id: 3,
        name: 'Concentrates',
        description: 'High-potency cannabis extracts',
        image: cbdOil,
        count: 15,
    },
    {
        id: 4,
        name: 'Topicals',
        description: 'All your topical solutions in one place',
        image: topical,
        count: 20,
    },
    {
        id: 5,
        name: 'Pre-rolls',
        description: 'Ready-to-smoke cannabis joints',
        image: preroll,
        count: 12,
    },
    {
        id: 6,
        name: 'Accessories',
        description: 'Essential cannabis accessories and tools',
        image: accessories,
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
