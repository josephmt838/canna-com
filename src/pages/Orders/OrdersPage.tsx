import React from 'react';
import { Link } from 'react-router-dom';
import OrderItem from '../../features/orders/OrderItem/OrderItem';
import styles from './OrdersPage.module.css';

const OrdersPage: React.FC = () => {
    // Mock orders data - will be replaced with actual data from API
    const orders = [
        {
            id: '1',
            date: '2024-03-15',
            status: 'Delivered',
            products: [
                {
                    name: 'Product 1',
                    quantity: 2,
                    price: 29.99,
                    id: '1234',
                    image: 'https://picsum.photos/200',
                },
                {
                    name: 'Product 2',
                    quantity: 1,
                    price: 39.99,
                    id: '2345',
                    image: 'https://picsum.photos/200',
                },
            ],
            subtotal: 99.97,
            shipping: 5.99,
            total: 105.96,
        },
        {
            id: '2',
            date: '2024-03-10',
            status: 'Processing',
            products: [
                {
                    name: 'Product 3',
                    quantity: 1,
                    price: 49.99,
                    id: '3456',
                    image: 'https://picsum.photos/200',
                },
            ],
            subtotal: 49.99,
            shipping: 5.99,
            total: 55.98,
        },
    ];

    return (
        <div className={styles.ordersPage}>
            <h1>My Orders</h1>
            {orders.length === 0 ? (
                <div className={styles.emptyState}>
                    <p>You haven't placed any orders yet.</p>
                    <Link
                        to='/products'
                        className={styles.shopNowButton}
                    >
                        Start Shopping
                    </Link>
                </div>
            ) : (
                <div className={styles.ordersList}>
                    {orders.map((order) => (
                        <OrderItem
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrdersPage;
