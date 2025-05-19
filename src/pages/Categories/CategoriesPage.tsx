import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';
import { useCategories } from '../../hooks/useCategories';
import styles from './CategoriesPage.module.css';

const CategoriesPage: React.FC = () => {
    const { data: categories, isLoading } = useCategories();

    return (
        <div className={styles.categoriesPage}>
            <div className={styles.header}>
                <h1>Categories</h1>
                <p>Browse our wide selection of cannabis products</p>
            </div>
            {isLoading ? (
                <LoadingIcon
                    className={styles.loader}
                    size='large'
                />
            ) : (
                <div className={styles.categoriesGrid}>
                    {!isLoading && (!categories || categories.length === 0) ? (
                        <div className={styles.emptyState}>
                            <p>No categories available at the moment.</p>
                            <p>Please check back later for updates.</p>
                        </div>
                    ) : (
                        categories?.map((category) => (
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
                                        {category.products.length} Products
                                    </span>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default CategoriesPage;
