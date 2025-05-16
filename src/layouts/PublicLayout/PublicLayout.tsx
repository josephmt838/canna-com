import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import styles from './PublicLayout.module.css';

const PublicLayout: React.FC = () => {
    return (
        <div className={styles.layout}>
            <Navigation />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
