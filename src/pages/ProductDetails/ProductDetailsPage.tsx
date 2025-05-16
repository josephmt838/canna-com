import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetailsPage.module.css';

const ProductDetailsPage: React.FC = () => {
    const { productId } = useParams();

    return (
        <div className={styles.productDetailsPage}>
            <h1>Product Details</h1>
            <div className={styles.productContainer}>
                <div className={styles.productImages}>
                    {/* Product images will be added here */}
                </div>
                <div className={styles.productInfo}>
                    <h2>Product Name</h2>
                    <p className={styles.price}>$0.00</p>
                    <div className={styles.description}>
                        {/* Product description will be added here */}
                    </div>
                    <div className={styles.addToCart}>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
