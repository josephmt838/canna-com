import React from 'react';
import { FaGraduationCap, FaLeaf, FaUsers } from 'react-icons/fa';
import { typography } from '../../styles/shared';
import styles from './AboutPage.module.css';

const AboutPage: React.FC = () => {
    return (
        <div>
            <section className={styles.hero}>
                <h1 className={typography.heading1}>About Canna-Com</h1>
                <p className={typography.paragraph}>
                    Your trusted source for premium cannabis products and
                    education.
                </p>
            </section>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2 className={typography.heading2}>Our Mission</h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            At Canna-Com, we're dedicated to providing
                            high-quality cannabis products while promoting
                            responsible consumption and education. We believe in
                            the therapeutic and wellness benefits of cannabis
                            and strive to make these benefits accessible to our
                            community.
                        </p>
                    </div>
                </section>

                <section className={styles.valuesSection}>
                    <h2 className={typography.heading2}>Our Values</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <FaLeaf className={styles.valueIcon} />
                            <h3 className={typography.heading3}>Quality</h3>
                            <p className={typography.paragraph}>
                                We source only the finest products from trusted
                                growers and manufacturers, ensuring the highest
                                standards of quality and safety.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <FaGraduationCap className={styles.valueIcon} />
                            <h3 className={typography.heading3}>Education</h3>
                            <p className={typography.paragraph}>
                                We believe in empowering our customers with
                                knowledge about cannabis products, their
                                effects, and responsible consumption.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <FaUsers className={styles.valueIcon} />
                            <h3 className={typography.heading3}>Community</h3>
                            <p className={typography.paragraph}>
                                We're committed to building a supportive
                                community where cannabis enthusiasts can learn,
                                share, and grow together.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={typography.heading2}>Our Team</h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            Our team consists of passionate cannabis experts,
                            healthcare professionals, and customer service
                            specialists who are dedicated to providing you with
                            the best possible experience. We're here to answer
                            your questions, provide guidance, and ensure you
                            find the products that best suit your needs.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={typography.heading2}>Quality Assurance</h2>
                    <div className={styles.card}>
                        <p className={typography.paragraph}>
                            All our products undergo rigorous testing to ensure
                            they meet the highest standards of quality and
                            safety. We work with certified laboratories to
                            verify the potency, purity, and safety of every
                            product we sell.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
