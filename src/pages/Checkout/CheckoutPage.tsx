import React, { useState } from 'react';
import OrderSummary from '../../features/checkout/OrderSummary/OrderSummary';
import { components, pageLayout, typography } from '../../styles/shared';
import styles from './CheckoutPage.module.css';

const CheckoutPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
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
                <h1 className={typography.heading1}>Checkout</h1>
                <p className={typography.paragraph}>
                    Complete your purchase by providing your information.
                </p>
            </section>

            <div className={pageLayout.content}>
                <div className={pageLayout.grid}>
                    <div className={pageLayout.card}>
                        <h2 className={typography.heading2}>
                            Shipping Information
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                            className={styles.checkoutForm}
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
                                    htmlFor='address'
                                    className={components.label}
                                >
                                    Address
                                </label>
                                <input
                                    type='text'
                                    id='address'
                                    name='address'
                                    value={formData.address}
                                    onChange={handleChange}
                                    className={components.input}
                                    required
                                />
                            </div>

                            <div className={styles.formRow}>
                                <div className={components.formGroup}>
                                    <label
                                        htmlFor='city'
                                        className={components.label}
                                    >
                                        City
                                    </label>
                                    <input
                                        type='text'
                                        id='city'
                                        name='city'
                                        value={formData.city}
                                        onChange={handleChange}
                                        className={components.input}
                                        required
                                    />
                                </div>
                                <div className={components.formGroup}>
                                    <label
                                        htmlFor='state'
                                        className={components.label}
                                    >
                                        State
                                    </label>
                                    <input
                                        type='text'
                                        id='state'
                                        name='state'
                                        value={formData.state}
                                        onChange={handleChange}
                                        className={components.input}
                                        required
                                    />
                                </div>
                                <div className={components.formGroup}>
                                    <label
                                        htmlFor='zipCode'
                                        className={components.label}
                                    >
                                        ZIP Code
                                    </label>
                                    <input
                                        type='text'
                                        id='zipCode'
                                        name='zipCode'
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        className={components.input}
                                        required
                                    />
                                </div>
                            </div>

                            <h2 className={typography.heading2}>
                                Payment Information
                            </h2>

                            <div className={components.formGroup}>
                                <label
                                    htmlFor='cardNumber'
                                    className={components.label}
                                >
                                    Card Number
                                </label>
                                <input
                                    type='text'
                                    id='cardNumber'
                                    name='cardNumber'
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    className={components.input}
                                    required
                                />
                            </div>

                            <div className={styles.formRow}>
                                <div className={components.formGroup}>
                                    <label
                                        htmlFor='expiryDate'
                                        className={components.label}
                                    >
                                        Expiry Date
                                    </label>
                                    <input
                                        type='text'
                                        id='expiryDate'
                                        name='expiryDate'
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                        className={components.input}
                                        placeholder='MM/YY'
                                        required
                                    />
                                </div>
                                <div className={components.formGroup}>
                                    <label
                                        htmlFor='cvv'
                                        className={components.label}
                                    >
                                        CVV
                                    </label>
                                    <input
                                        type='text'
                                        id='cvv'
                                        name='cvv'
                                        value={formData.cvv}
                                        onChange={handleChange}
                                        className={components.input}
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type='submit'
                                className={`${components.button} ${components.primary}`}
                            >
                                Place Order
                            </button>
                        </form>
                    </div>

                    <div className={pageLayout.card}>
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
