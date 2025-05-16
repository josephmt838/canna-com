import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import FormGroup from '../../../components/Form/FormGroup';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log(formData);
    };

    return (
        <div className={styles.loginForm}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup
                    label='Email'
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                    onChange={handleInputChange}
                    required
                />
                <FormGroup
                    label='Password'
                    id='password'
                    type='password'
                    placeholder='Enter your password'
                    onChange={handleInputChange}
                    required
                />
                <Button
                    type='submit'
                    className={styles.loginButton}
                >
                    Login
                </Button>
            </form>
            <p className={styles.registerLink}>
                Don't have an account? <Link to='/register'>Register here</Link>
            </p>
        </div>
    );
};

export default LoginForm;
