import React from 'react';
import styles from './LoadingIcon.module.css';

interface LoadingIconProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

const LoadingIcon: React.FC<LoadingIconProps> = ({
    size = 'medium',
    className,
}) => {
    return (
        <div
            className={`${styles.loadingContainer} ${styles[size]} ${className}`}
        >
            <div className={styles.spinner}>
                <div className={styles.spinnerInner}></div>
            </div>
        </div>
    );
};

export default LoadingIcon;
