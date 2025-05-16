import React from 'react';
import styles from './OrderSummary.module.css';

const OrderSummary: React.FC = () => {
    // Mock order data - will be replaced with actual data from state management
    const orderItems = [
        {
            id: '1',
            name: 'Product 1',
            price: 29.99,
            quantity: 2,
        },
        {
            id: '2',
            name: 'Product 2',
            price: 39.99,
            quantity: 1,
        },
    ];

    const subtotal = orderItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );
    const shipping = 5.99;
    const total = subtotal + shipping;

    return (
        <div className={styles.orderSummary}>
            <h2>Order Summary</h2>
            <div className={styles.itemsList}>
                {orderItems.map((item) => (
                    <div
                        key={item.id}
                        className={styles.orderItem}
                    >
                        <div className={styles.itemInfo}>
                            <span className={styles.itemName}>{item.name}</span>
                            <span className={styles.itemQuantity}>
                                x{item.quantity}
                            </span>
                        </div>
                        <span className={styles.itemPrice}>
                            ${(item.price * item.quantity).toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>
            <div className={styles.summaryDetails}>
                <div className={styles.summaryRow}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                    <span className={styles.totalLabel}>Total</span>
                    <span className={styles.totalAmount}>
                        ${total.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
