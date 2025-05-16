import React from 'react';
import styles from './ReturnsPage.module.css';

const ReturnsPage: React.FC = () => {
    return (
        <div className={styles.returnsPage}>
            <div className={styles.hero}>
                <h1>Returns & Refunds</h1>
                <p>Our hassle-free return policy</p>
            </div>

            <div className={styles.content}>
                <section className={styles.returnPolicy}>
                    <h2>Return Policy</h2>
                    <div className={styles.policyContent}>
                        <h3>30-Day Return Window</h3>
                        <p>
                            We accept returns within 30 days of delivery. Items
                            must be unopened and in their original packaging to
                            be eligible for a full refund.
                        </p>

                        <h3>Return Process</h3>
                        <p>
                            To initiate a return, please contact our customer
                            service team with your order number and reason for
                            return. We'll provide you with a return shipping
                            label and instructions.
                        </p>

                        <h3>Refund Timeline</h3>
                        <p>
                            Once we receive your return, we'll process your
                            refund within 5-7 business days. The refund will be
                            issued to your original payment method.
                        </p>
                    </div>
                </section>

                <section className={styles.eligibility}>
                    <h2>Return Eligibility</h2>
                    <div className={styles.eligibilityContent}>
                        <div className={styles.eligibilityCard}>
                            <h3>Eligible for Return</h3>
                            <ul>
                                <li>Unopened products in original packaging</li>
                                <li>Defective or damaged items</li>
                                <li>Incorrect items received</li>
                            </ul>
                        </div>
                        <div className={styles.eligibilityCard}>
                            <h3>Not Eligible for Return</h3>
                            <ul>
                                <li>Opened or used products</li>
                                <li>Products past the 30-day return window</li>
                                <li>
                                    Products purchased from third-party sellers
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.specialCases}>
                    <h2>Special Cases</h2>
                    <div className={styles.specialCasesContent}>
                        <h3>Damaged Items</h3>
                        <p>
                            If you receive a damaged item, please take photos
                            and contact us within 48 hours of delivery. We'll
                            arrange for a replacement or refund.
                        </p>

                        <h3>Wrong Items</h3>
                        <p>
                            If you receive the wrong item, please contact us
                            immediately. We'll arrange for the correct item to
                            be shipped and provide a return label for the
                            incorrect item.
                        </p>

                        <h3>Quality Issues</h3>
                        <p>
                            If you experience any quality issues with our
                            products, please contact our customer service team.
                            We'll work with you to resolve the issue.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReturnsPage;
