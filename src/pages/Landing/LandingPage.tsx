import React from 'react';
import { FaRegHeart, FaShippingFast } from 'react-icons/fa';
import { TbPlant } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import accessories from '../../assets/images/categories/accessories.jpg';
import cbdOil from '../../assets/images/categories/cbd-oil.jpg';
import edibles from '../../assets/images/categories/edibles.jpg';
import topical from '../../assets/images/categories/topical.jpg';
import { components, pageLayout, typography } from '../../styles/shared';
import styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
    return (
        <div className={pageLayout.page}>
            {/* Hero Section */}
            <section className={`${styles.hero} ${styles.image}`}>
                <div className={styles.heroContent}>
                    <h1 className={typography.heading1}>
                        Premium CBD Products for a Better Life
                    </h1>
                    <p className={typography.paragraph}>
                        Discover our selection of high-quality CBD products,
                        carefully crafted to enhance your wellness journey.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link
                            to='/products'
                            className={components.button}
                        >
                            Shop Now
                        </Link>
                        <Link
                            to='/about'
                            className={components.button}
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className={pageLayout.section}>
                <h2 className={typography.heading2}>Shop by Category</h2>
                <div className={styles.categoryGrid}>
                    <Link
                        to='/category/oils'
                        className={styles.categoryCard}
                    >
                        <img
                            src={cbdOil}
                            alt='CBD Oils'
                        />
                        <h3 className={typography.heading3}>CBD Oils</h3>
                    </Link>
                    <Link
                        to='/category/edibles'
                        className={styles.categoryCard}
                    >
                        <img
                            src={edibles}
                            alt='Edibles'
                        />
                        <h3 className={typography.heading3}>Edibles</h3>
                    </Link>
                    <Link
                        to='/category/topicals'
                        className={styles.categoryCard}
                    >
                        <img
                            src={topical}
                            alt='Topicals'
                        />
                        <h3 className={typography.heading3}>Topicals</h3>
                    </Link>
                    <Link
                        to='/category/accessories'
                        className={styles.categoryCard}
                    >
                        <img
                            src={accessories}
                            alt='Accessories'
                        />
                        <h3 className={typography.heading3}>Accessories</h3>
                    </Link>
                </div>
            </section>

            {/* Benefits Section */}
            <section
                className={`${pageLayout.section} ${styles.benefitsSection}`}
            >
                <h2 className={typography.heading2}>Why Choose Us</h2>
                <div className={styles.benefitsGrid}>
                    <div className={styles.benefitCard}>
                        <TbPlant className={styles.benefitIcon} />
                        <h3 className={typography.heading3}>Premium Quality</h3>
                        <p className={typography.paragraph}>
                            All our products are made from organically grown
                            hemp and undergo rigorous quality testing.
                        </p>
                    </div>
                    <div className={styles.benefitCard}>
                        <FaShippingFast className={styles.benefitIcon} />
                        <h3 className={typography.heading3}>Fast Shipping</h3>
                        <p className={typography.paragraph}>
                            Free shipping on orders over $50. Get your products
                            delivered within 2-3 business days.
                        </p>
                    </div>
                    <div className={styles.benefitCard}>
                        <FaRegHeart className={styles.benefitIcon} />
                        <h3 className={typography.heading3}>
                            Customer Support
                        </h3>
                        <p className={typography.paragraph}>
                            Our dedicated team is here to help you with any
                            questions or concerns.
                        </p>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section
                className={`${pageLayout.section} ${styles.newsletterSection}`}
            >
                <div className={styles.newsletterContent}>
                    <h2 className={typography.heading2}>Stay Updated</h2>
                    <p className={typography.paragraph}>
                        Subscribe to our newsletter for exclusive offers and
                        updates.
                    </p>
                    <form className={styles.newsletterForm}>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className={components.input}
                            required
                        />
                        <button
                            type='submit'
                            className={`${components.button} ${components.secondary}`}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
