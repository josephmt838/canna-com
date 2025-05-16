import React from 'react';
import styles from './ShippingPage.module.css';

const ShippingPage: React.FC = () => {
    return (
        <div className={styles.shippingPage}>
            <div className={styles.hero}>
                <h1>Shipping Information</h1>
                <p>Fast and reliable shipping to your doorstep</p>
            </div>

            <div className={styles.content}>
                <section className={styles.shippingInfo}>
                    <h2>Shipping Methods</h2>
                    <div className={styles.methodsGrid}>
                        <div className={styles.methodCard}>
                            <h3>Standard Shipping</h3>
                            <p>3-5 business days</p>
                            <p className={styles.price}>$5.99</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3>Express Shipping</h3>
                            <p>1-2 business days</p>
                            <p className={styles.price}>$12.99</p>
                        </div>
                        <div className={styles.methodCard}>
                            <h3>Free Shipping</h3>
                            <p>5-7 business days</p>
                            <p className={styles.price}>
                                Free on orders over $100
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.shippingPolicy}>
                    <h2>Shipping Policy</h2>
                    <div className={styles.policyContent}>
                        <h3>Processing Time</h3>
                        <p>
                            Orders are typically processed within 1-2 business
                            days. You will receive a shipping confirmation email
                            with tracking information once your order ships.
                        </p>

                        <h3>Delivery Areas</h3>
                        <p>
                            We currently ship to all provinces and territories
                            in Canada. International shipping is not available
                            at this time.
                        </p>

                        <h3>Age Verification</h3>
                        <p>
                            All orders require age verification upon delivery.
                            Please ensure someone 19 years or older is available
                            to sign for the package.
                        </p>

                        <h3>Tracking Information</h3>
                        <p>
                            Once your order ships, you'll receive a tracking
                            number via email. You can track your package's
                            status through our website or the carrier's tracking
                            system.
                        </p>
                    </div>
                </section>

                <section className={styles.restrictions}>
                    <h2>Shipping Restrictions</h2>
                    <div className={styles.restrictionsContent}>
                        <h3>Product Restrictions</h3>
                        <p>
                            Some products may have shipping restrictions based
                            on provincial regulations. These restrictions will
                            be clearly indicated on the product page.
                        </p>

                        <h3>Weather Conditions</h3>
                        <p>
                            During extreme weather conditions, shipping may be
                            delayed to ensure product quality and safety. We'll
                            notify you if there are any weather-related delays.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ShippingPage;
