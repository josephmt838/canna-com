import React from 'react';
import { typography } from '../../styles/shared';
import styles from './TermsPage.module.css';

const TermsPage: React.FC = () => {
    return (
        <div>
            <section className={styles.hero}>
                <h1 className={typography.heading1}>Terms of Service</h1>
                <p className={typography.paragraph}>
                    Please read these terms carefully before using our services.
                </p>
            </section>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2 className={typography.heading2}>
                        1. Acceptance of Terms
                    </h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            By accessing and using Canna-Com's website and
                            services, you agree to be bound by these Terms of
                            Service. If you do not agree to these terms, please
                            do not use our services.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={typography.heading2}>2. Age Verification</h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            You must be at least 21 years old to use our
                            services. By using our website, you confirm that you
                            are of legal age to purchase cannabis products in
                            your jurisdiction.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={typography.heading2}>
                        3. Account Registration
                    </h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            To access certain features of our website, you must
                            register for an account. You agree to provide
                            accurate and complete information during
                            registration and to keep your account information
                            updated.
                        </p>
                        <ul className={styles.list}>
                            <li>
                                You are responsible for maintaining the
                                confidentiality of your account
                            </li>
                            <li>
                                You must notify us immediately of any
                                unauthorized use of your account
                            </li>
                            <li>
                                We reserve the right to suspend or terminate
                                accounts at our discretion
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={typography.heading2}>
                        4. Product Information
                    </h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            While we strive to provide accurate product
                            information, we cannot guarantee that all product
                            descriptions or other content is accurate, complete,
                            reliable, current, or error-free.
                        </p>
                        <ul className={styles.list}>
                            <li>
                                Product images are for illustrative purposes
                                only
                            </li>
                            <li>Actual product packaging may vary</li>
                            <li>Product availability is subject to change</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={typography.heading2}>
                        5. Ordering and Payment
                    </h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            By placing an order, you warrant that you are
                            legally capable of entering into binding contracts
                            and that the information you provide is accurate and
                            complete.
                        </p>
                        <ul className={styles.list}>
                            <li>
                                All prices are subject to change without notice
                            </li>
                            <li>
                                Payment must be made in full at the time of
                                order
                            </li>
                            <li>We reserve the right to refuse any order</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={typography.heading2}>
                        6. Shipping and Delivery
                    </h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            We strive to process and ship orders promptly, but
                            we cannot guarantee delivery times. Shipping times
                            may vary based on your location and other factors.
                        </p>
                        <ul className={styles.list}>
                            <li>Delivery times are estimates only</li>
                            <li>Risk of loss transfers to you upon delivery</li>
                            <li>Some areas may have shipping restrictions</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={typography.heading2}>
                        7. Returns and Refunds
                    </h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            Our return policy is designed to ensure customer
                            satisfaction while complying with all applicable
                            laws and regulations.
                        </p>
                        <ul className={styles.list}>
                            <li>
                                Returns must be initiated within 30 days of
                                delivery
                            </li>
                            <li>
                                Products must be unopened and in original
                                packaging
                            </li>
                            <li>
                                Refunds will be processed within 5-7 business
                                days
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={typography.heading2}>
                        8. Intellectual Property
                    </h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            All content on our website, including text,
                            graphics, logos, and images, is the property of
                            Canna-Com and is protected by intellectual property
                            laws.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={typography.heading2}>
                        9. Limitation of Liability
                    </h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            Canna-Com shall not be liable for any indirect,
                            incidental, special, consequential, or punitive
                            damages resulting from your use of our services.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={typography.heading2}>
                        10. Changes to Terms
                    </h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            We reserve the right to modify these terms at any
                            time. Changes will be effective immediately upon
                            posting to the website. Your continued use of our
                            services constitutes acceptance of the modified
                            terms.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TermsPage;
