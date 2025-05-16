import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
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
                            <Link to='/products'>Products</Link>
                        </li>
                        <li>
                            <Link to='/categories'>Categories</Link>
                        </li>
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Customer Service</h3>
                    <ul>
                        <li>
                            <Link to='/shipping'>Shipping Information</Link>
                        </li>
                        <li>
                            <Link to='/returns'>Returns & Refunds</Link>
                        </li>
                        <li>
                            <Link to='/faq'>FAQ</Link>
                        </li>
                        <li>
                            <Link to='/privacy'>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Contact Us</h3>
                    <ul className={styles.contactInfo}>
                        <li>Email: support@canna-com.com</li>
                        <li>Phone: (555) 123-4567</li>
                        <li>Hours: Mon-Fri 9am-6pm</li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>
                    &copy; {new Date().getFullYear()} Canna-Com. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
