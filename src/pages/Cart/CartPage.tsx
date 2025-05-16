import React from 'react';
import { Link } from 'react-router-dom';
import { components, pageLayout, typography } from '../../styles/shared';
import styles from './CartPage.module.css';

// Mock cart data - this would typically come from state management
const cartItems = [
    {
        id: 1,
        name: 'Premium CBD Oil',
        price: 49.99,
        quantity: 2,
        image: '/images/products/cbd-oil.jpg',
    },
    {
        id: 2,
        name: 'Organic Hemp Gummies',
        price: 29.99,
        quantity: 1,
        image: '/images/products/hemp-gummies.jpg',
    },
];

const CartPage: React.FC = () => {
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );
    const shipping = 5.99;
    const total = subtotal + shipping;

    return (
        <div className={pageLayout.page}>
            <section className={pageLayout.hero}>
                <h1 className={typography.heading1}>Your Cart</h1>
                <p className={typography.paragraph}>
                    Review your items and proceed to checkout.
                </p>
            </section>

            <div className={pageLayout.content}>
                {cartItems.length === 0 ? (
                    <div className={styles.emptyCart}>
                        <h2 className={typography.heading2}>
                            Your cart is empty
                        </h2>
                        <p className={typography.paragraph}>
                            Looks like you haven't added any items to your cart
                            yet.
                        </p>
                        <Link
                            to='/products'
                            className={`${components.button} ${components.button.primary}`}
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className={pageLayout.grid}>
                        <div className={pageLayout.card}>
                            <h2 className={typography.heading2}>Cart Items</h2>
                            <div className={styles.cartItems}>
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className={styles.cartItem}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className={styles.itemImage}
                                        />
                                        <div className={styles.itemDetails}>
                                            <h3 className={typography.heading3}>
                                                {item.name}
                                            </h3>
                                            <p className={components.price}>
                                                ${item.price.toFixed(2)}
                                            </p>
                                            <div
                                                className={
                                                    styles.quantityControls
                                                }
                                            >
                                                <button
                                                    className={
                                                        components.button
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span
                                                    className={
                                                        typography.paragraph
                                                    }
                                                >
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    className={
                                                        components.button
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            className={`${components.button} ${styles.removeButton}`}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={pageLayout.card}>
                            <h2 className={typography.heading2}>
                                Order Summary
                            </h2>
                            <div className={styles.orderSummary}>
                                <div className={styles.summaryRow}>
                                    <span className={typography.paragraph}>
                                        Subtotal
                                    </span>
                                    <span className={components.price}>
                                        ${subtotal.toFixed(2)}
                                    </span>
                                </div>
                                <div className={styles.summaryRow}>
                                    <span className={typography.paragraph}>
                                        Shipping
                                    </span>
                                    <span className={components.price}>
                                        ${shipping.toFixed(2)}
                                    </span>
                                </div>
                                <div className={styles.summaryRow}>
                                    <span className={typography.heading3}>
                                        Total
                                    </span>
                                    <span className={components.price}>
                                        ${total.toFixed(2)}
                                    </span>
                                </div>
                                <Link
                                    to='/checkout'
                                    className={`${components.button} ${components.button.primary}`}
                                >
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
