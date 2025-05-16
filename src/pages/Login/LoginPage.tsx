import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { components, pageLayout, typography } from '../../styles/shared';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const success = await login(formData.email, formData.password);
            if (success) {
                navigate('/');
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={pageLayout.page}>
            <section className={pageLayout.hero}>
                <h1 className={typography.heading1}>Welcome Back</h1>
                <p className={typography.paragraph}>
                    Sign in to your account to continue shopping.
                </p>
            </section>

            <div className={pageLayout.content}>
                <div className={pageLayout.card}>
                    <form
                        onSubmit={handleSubmit}
                        className={styles.loginForm}
                    >
                        {error && <div className={styles.error}>{error}</div>}

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
                                disabled={isLoading}
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
                                disabled={isLoading}
                            />
                        </div>

                        <div className={styles.formFooter}>
                            <div className={styles.rememberMe}>
                                <input
                                    type='checkbox'
                                    id='remember'
                                    disabled={isLoading}
                                />
                                <label
                                    htmlFor='remember'
                                    className={typography.small}
                                >
                                    Remember me
                                </label>
                            </div>
                            <Link
                                to='/forgot-password'
                                className={components.link}
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type='submit'
                            className={`${components.button} ${components.button.primary}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>

                        <div className={styles.registerLink}>
                            <p className={typography.paragraph}>
                                Don't have an account?{' '}
                                <Link
                                    to='/register'
                                    className={components.link}
                                >
                                    Register here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
