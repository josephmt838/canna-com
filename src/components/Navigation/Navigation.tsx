import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { components } from '../../styles/shared';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated, user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        if (isUserMenuOpen) setIsUserMenuOpen(false);
        setIsMenuOpen((prev) => !prev);
    };

    const toggleUserMenu = () => {
        if (isMenuOpen) setIsMenuOpen(false);
        setIsUserMenuOpen((prev) => !prev);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setIsUserMenuOpen(false);
        window.scrollTo({
            top: 0,
        });
    };

    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                <Link
                    to='/'
                    className={styles.logo}
                    onClick={handleLinkClick}
                >
                    CannaCom
                </Link>

                <div
                    className={`${styles.navLinks} ${
                        isMenuOpen ? styles.active : ''
                    }`}
                >
                    <Link
                        to='/'
                        className={`${styles.navLink} ${
                            isActive('/') ? styles.active : ''
                        }`}
                        onClick={handleLinkClick}
                    >
                        Home
                    </Link>
                    <Link
                        to='/products'
                        className={`${styles.navLink} ${
                            isActive('/products') ? styles.active : ''
                        }`}
                        onClick={handleLinkClick}
                    >
                        Products
                    </Link>
                    <Link
                        to='/categories'
                        className={`${styles.navLink} ${
                            isActive('/categories') ? styles.active : ''
                        }`}
                        onClick={handleLinkClick}
                    >
                        Categories
                    </Link>
                    <Link
                        to='/about'
                        className={`${styles.navLink} ${
                            isActive('/about') ? styles.active : ''
                        }`}
                        onClick={handleLinkClick}
                    >
                        About
                    </Link>
                    <Link
                        to='/contact'
                        className={`${styles.navLink} ${
                            isActive('/contact') ? styles.active : ''
                        }`}
                        onClick={handleLinkClick}
                    >
                        Contact
                    </Link>
                    {!isAuthenticated && isMobile && (
                        <div className={styles.authButtons}>
                            <Link
                                to='/login'
                                className={`${styles.loginButton} ${
                                    isActive('/login') ? styles.active : ''
                                }`}
                                onClick={handleLinkClick}
                            >
                                Login
                            </Link>
                            <Link
                                to='/register'
                                className={`${styles.registerButton} ${
                                    isActive('/register') ? styles.active : ''
                                }`}
                                onClick={handleLinkClick}
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>

                <div className={styles.navActions}>
                    <Link
                        to='/cart'
                        className={styles.cartLink}
                        onClick={handleLinkClick}
                    >
                        <MdOutlineShoppingCart
                            className={`${components.icon} ${components.cart}`}
                        />

                        <span className={styles.cartCount}>0</span>
                    </Link>

                    {isAuthenticated ? (
                        <div className={styles.userMenu}>
                            <button
                                className={styles.userButton}
                                onClick={toggleUserMenu}
                            >
                                <span className={styles.userIcon}>👤</span>
                            </button>
                            {isUserMenuOpen && (
                                <div className={styles.userDropdown}>
                                    <div className={styles.userInfo}>
                                        <p>
                                            {user?.firstName} {user?.lastName}
                                        </p>
                                        <p className={styles.userEmail}>
                                            {user?.email}
                                        </p>
                                    </div>
                                    <Link
                                        to='/profile'
                                        className={`${styles.dropdownItem} ${
                                            isActive('/profile')
                                                ? styles.active
                                                : ''
                                        }`}
                                        onClick={handleLinkClick}
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        to='/orders'
                                        className={`${styles.dropdownItem} ${
                                            isActive('/orders')
                                                ? styles.active
                                                : ''
                                        }`}
                                        onClick={handleLinkClick}
                                    >
                                        Orders
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            handleLinkClick();
                                        }}
                                        className={styles.dropdownItem}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        !isMobile && (
                            <div className={styles.authButtons}>
                                <Link
                                    to='/login'
                                    className={styles.loginButton}
                                    onClick={handleLinkClick}
                                >
                                    Login
                                </Link>
                                <Link
                                    to='/register'
                                    className={styles.registerButton}
                                    onClick={handleLinkClick}
                                >
                                    Register
                                </Link>
                            </div>
                        )
                    )}
                    {isMobile && (
                        <button
                            className={`${styles.menuButton} ${
                                isMenuOpen ? styles.active : ''
                            }`}
                            onClick={toggleMenu}
                        >
                            <span className={styles.menuIcon}></span>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
