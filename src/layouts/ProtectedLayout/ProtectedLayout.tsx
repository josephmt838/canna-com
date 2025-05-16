import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import { useAuth } from '../../hooks/useAuth';
import styles from './ProtectedLayout.module.css';

const ProtectedLayout: React.FC = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to='/login'
                replace
            />
        );
    }

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

export default ProtectedLayout;
