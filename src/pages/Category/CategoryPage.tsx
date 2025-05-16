import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './CategoryPage.module.css';

const CategoryPage: React.FC = () => {
    const { categoryName } = useParams();

    return (
        <div className={styles.categoryPage}>
            <h1>{categoryName}</h1>
            <div className={styles.categoryDescription}>
                {/* Category description will be added here */}
            </div>
            <div className={styles.productsGrid}>
                {/* Category products will be displayed here */}
            </div>
        </div>
    );
};

export default CategoryPage;
