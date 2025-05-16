import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage: React.FC = () => {
    return (
        <div className={styles.notFoundPage}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <Link
                to='/'
                className={styles.homeLink}
            >
                Return to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
