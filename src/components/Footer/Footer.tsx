import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h3>About Us</h3>
                    <p>
                        Your trusted source for high-quality cannabis products.
                        We're committed to providing the best selection and
                        service.
                    </p>
                </div>

                <div className={styles.footerSection}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link
                                to='/products'
                                onClick={handleLinkClick}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/categories'
                                onClick={handleLinkClick}
                            >
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about'
                                onClick={handleLinkClick}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/contact'
                                onClick={handleLinkClick}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Customer Service</h3>
                    <ul>
                        <li>
                            <Link
                                to='/shipping'
                                onClick={handleLinkClick}
                            >
                                Shipping Information
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/returns'
                                onClick={handleLinkClick}
                            >
                                Returns & Refunds
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/faq'
                                onClick={handleLinkClick}
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/privacy'
                                onClick={handleLinkClick}
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Contact Us</h3>
                    <ul className={styles.contactInfo}>
                        <li>
                            Email:{' '}
                            <Link to='mailto:support@canna-com.com'>
                                support@canna-com.com
                            </Link>
                        </li>
                        <li>
                            Phone:{' '}
                            <Link to='tel:5551234567'>(555) 123-4567</Link>
                        </li>
                        <li>Hours: Mon-Fri 9am-6pm</li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>
                    &copy; {new Date().getFullYear()} Canna-Com. All rights
                    reserved.
                </p>
                <p>
                    Powered by{' '}
                    <Link to='https://www.josephmt.com'>JosephMT.com</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
