import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { components, pageLayout, typography } from '../../styles/shared';
import styles from './ContactPage.module.css';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
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
            <section className={styles.hero}>
                <h1 className={typography.heading1}>Contact Us</h1>
                <p className={typography.paragraph}>
                    Have questions? We're here to help. Reach out to our team
                    for assistance.
                </p>
            </section>

            <div className={pageLayout.content}>
                <div className={pageLayout.grid}>
                    <div className={pageLayout.card}>
                        <h2 className={typography.heading2}>
                            Contact Information
                        </h2>
                        <div className={styles.contactInfo}>
                            <div className={styles.infoCard}>
                                <h3 className={typography.heading3}>Email</h3>
                                <p className={typography.paragraph}>
                                    <Link to='mailto:support@canna-com.com'>
                                        support@canna-com.com
                                    </Link>
                                </p>
                            </div>
                            <div className={styles.infoCard}>
                                <h3 className={typography.heading3}>Phone</h3>
                                <p className={typography.paragraph}>
                                    <Link to='tel:5551234567'>
                                        (555) 123-4567
                                    </Link>
                                </p>
                            </div>
                            <div className={styles.infoCard}>
                                <h3 className={typography.heading3}>Hours</h3>
                                <p className={typography.paragraph}>
                                    Monday - Friday: 9am - 6pm
                                </p>
                                <p className={typography.paragraph}>
                                    Saturday: 10am - 4pm
                                </p>
                                <p className={typography.paragraph}>
                                    Sunday: Closed
                                </p>
                            </div>
                            <div className={styles.infoCard}>
                                <h3 className={typography.heading3}>
                                    Location
                                </h3>
                                <p className={typography.paragraph}>
                                    123 Cannabis Street
                                </p>
                                <p className={typography.paragraph}>
                                    San Francisco, CA 94103
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={pageLayout.card}>
                        <h2 className={typography.heading2}>
                            Send us a Message
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                            className={styles.contactForm}
                        >
                            <div className={components.formGroup}>
                                <label
                                    htmlFor='name'
                                    className={components.label}
                                >
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={components.input}
                                    required
                                />
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
                                    htmlFor='subject'
                                    className={components.label}
                                >
                                    Subject
                                </label>
                                <input
                                    type='text'
                                    id='subject'
                                    name='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={components.input}
                                    required
                                />
                            </div>
                            <div className={components.formGroup}>
                                <label
                                    htmlFor='message'
                                    className={components.label}
                                >
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={components.input}
                                    rows={5}
                                    required
                                />
                            </div>
                            <button
                                type='submit'
                                className={`${components.button} ${components.primary}`}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
