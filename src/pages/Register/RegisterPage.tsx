import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { components, pageLayout, typography } from '../../styles/shared';
import styles from './RegisterPage.module.css';

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className={pageLayout.page}>
            <section className={pageLayout.hero}>
                <h1 className={typography.heading1}>Create Account</h1>
                <p className={typography.paragraph}>
                    Join our community and start shopping today.
                </p>
            </section>

            <div className={pageLayout.content}>
                <div className={pageLayout.card}>
                    <form
                        onSubmit={handleSubmit}
                        className={styles.registerForm}
                    >
                        <div className={styles.formRow}>
                            <div className={components.formGroup}>
                                <label
                                    htmlFor='firstName'
                                    className={components.label}
                                >
                                    First Name
                                </label>
                                <input
                                    type='text'
                                    id='firstName'
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={components.input}
                                    required
                                />
                            </div>
                            <div className={components.formGroup}>
                                <label
                                    htmlFor='lastName'
                                    className={components.label}
                                >
                                    Last Name
                                </label>
                                <input
                                    type='text'
                                    id='lastName'
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={components.input}
                                    required
                                />
                            </div>
                        </div>

                        <div className={components.formGroup}>
                            <label
                                htmlFor='email'
                                className={components.label}
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className={components.input}
                                required
                            />
                        </div>

                        <div className={components.formGroup}>
                            <label
                                htmlFor='password'
                                className={components.label}
                            >
                                Password
                            </label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                className={components.input}
                                required
                            />
                        </div>

                        <div className={components.formGroup}>
                            <label
                                htmlFor='confirmPassword'
                                className={components.label}
                            >
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                id='confirmPassword'
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={components.input}
                                required
                            />
                        </div>

                        <div className={styles.terms}>
                            <input
                                type='checkbox'
                                id='terms'
                                required
                            />
                            <label
                                htmlFor='terms'
                                className={typography.small}
                            >
                                I agree to the{' '}
                                <Link
                                    to='/terms'
                                    className={components.link}
                                >
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link
                                    to='/privacy'
                                    className={components.link}
                                >
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        <button
                            type='submit'
                            className={components.button}
                        >
                            Create Account
                        </button>

                        <div className={styles.loginLink}>
                            <p className={typography.paragraph}>
                                Already have an account?{' '}
                                <Link
                                    to='/login'
                                    className={components.link}
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
