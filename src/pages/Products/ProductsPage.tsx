import React from 'react';
import styles from './ProductsPage.module.css';

const ProductsPage: React.FC = () => {
    return (
        <div className={styles.productsPage}>
            <h1>All Products</h1>
            <div className={styles.filtersSection}>
                <div className={styles.searchBar}>
                    <input
                        type='text'
                        placeholder='Search products...'
                    />
                </div>
                <div className={styles.sortOptions}>
                    <select>
                        <option value='newest'>Newest</option>
                        <option value='price-low'>Price: Low to High</option>
                        <option value='price-high'>Price: High to Low</option>
                        <option value='popular'>Most Popular</option>
                    </select>
                </div>
                <div className={styles.filterOptions}>
                    {/* Filter options will be added here */}
                </div>
            </div>
            <div className={styles.productsGrid}>
                {/* Products will be displayed here */}
            </div>
        </div>
    );
};

export default ProductsPage;
