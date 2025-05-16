import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger';
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    type = 'button',
    variant = 'primary',
    onClick,
    className,
}) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${styles[variant]} ${className || ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
