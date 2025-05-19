import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';
import { useCategory } from '../../hooks/useCategory';
import type { Product } from '../../types/category';
import styles from './CategoryPage.module.css';

const CategoryPage: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const navigate = useNavigate();
    const { data: category, isLoading } = useCategory(categoryName || '');

    if (!isLoading && !category?.products) {
        return (
            <div className={styles.categoryPage}>
                <div className={styles.emptyState}>
                    <h2>Category Not Found</h2>
                    <p>The category you're looking for doesn't exist.</p>
                    <button
                        className={styles.backButton}
                        onClick={() => navigate('/categories')}
                    >
                        Back to Categories
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.categoryPage}>
            {isLoading ? (
                <LoadingIcon
                    className={styles.loading}
                    size='large'
                />
            ) : (
                <>
                    <div className={styles.header}>
                        <div className={styles.categoryImage}>
                            <img
                                src={category?.image}
                                alt={category?.name}
                            />
                        </div>
                        <div className={styles.categoryInfo}>
                            <h1>{category?.name}</h1>
                            <p>{category?.description}</p>
                        </div>
                    </div>

                    <div className={styles.productsSection}>
                        <h2>Products</h2>
                        {category?.products.length === 0 ? (
                            <div className={styles.emptyState}>
                                <p>
                                    No products available in this category yet.
                                </p>
                                <p>Please check back later for updates.</p>
                            </div>
                        ) : (
                            <div className={styles.productsGrid}>
                                {category?.products.map((product: Product) => (
                                    <div
                                        key={product.id}
                                        className={styles.productCard}
                                    >
                                        <div className={styles.productImage}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className={styles.productInfo}>
                                            <h3>{product.name}</h3>
                                            <p>{product.description}</p>
                                            <div
                                                className={styles.productPrice}
                                            >
                                                ${product.price.toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default CategoryPage;
