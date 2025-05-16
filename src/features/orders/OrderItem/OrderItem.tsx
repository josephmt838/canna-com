import React from 'react';
import styles from './OrderItem.module.css';

interface Product {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
}

interface OrderItemProps {
    orderId: string;
    date: string;
    status: string;
    products: Product[];
    subtotal: number;
    shipping: number;
    total: number;
}

const OrderItem: React.FC<OrderItemProps> = ({
    orderId,
    date,
    status,
    products,
    subtotal,
    shipping,
    total,
}) => {
    return (
        <div className={styles.orderItem}>
            <div className={styles.orderHeader}>
                <div className={styles.orderInfo}>
                    <h3>Order #{orderId}</h3>
                    <p className={styles.orderDate}>Placed on: {date}</p>
                </div>
                <div className={styles.orderStatus}>
                    <span className={styles.statusBadge}>{status}</span>
                </div>
            </div>
            <div className={styles.orderDetails}>
                <div className={styles.orderProducts}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={styles.productItem}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                            />
                            <div className={styles.productInfo}>
                                <h4>{product.name}</h4>
                                <p>Quantity: {product.quantity}</p>
                                <p>Price: ${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.orderSummary}>
                    <div className={styles.summaryRow}>
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>Shipping:</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className={`${styles.summaryRow} ${styles.total}`}>
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;
