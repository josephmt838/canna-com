import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '../../components/Form/FormGroup';
import styles from './ProfilePage.module.css';

const ProfilePage: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipCode: '12345',
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
        // Handle form submission
        console.log('Profile updated:', formData);
        setIsEditing(false);
    };

    return (
        <div className={styles.profilePage}>
            <h1>My Profile</h1>
            <div className={styles.profileContainer}>
                <div className={styles.profileHeader}>
                    <div className={styles.profileInfo}>
                        <h2>
                            {formData.firstName} {formData.lastName}
                        </h2>
                        <p>{formData.email}</p>
                    </div>
                    <button
                        className={styles.editButton}
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>

                {isEditing ? (
                    <form
                        onSubmit={handleSubmit}
                        className={styles.profileForm}
                    >
                        <div className={styles.formGrid}>
                            <FormGroup
                                label='First Name'
                                type='text'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                            <FormGroup
                                label='Last Name'
                                type='text'
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                            <FormGroup
                                label='Email'
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <FormGroup
                                label='Phone'
                                type='tel'
                                name='phone'
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                            <FormGroup
                                label='Address'
                                type='text'
                                name='address'
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                            <FormGroup
                                label='City'
                                type='text'
                                name='city'
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                            />
                            <FormGroup
                                label='State'
                                type='text'
                                name='state'
                                value={formData.state}
                                onChange={handleInputChange}
                                required
                            />
                            <FormGroup
                                label='ZIP Code'
                                type='text'
                                name='zipCode'
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className={styles.saveButton}
                        >
                            Save Changes
                        </button>
                    </form>
                ) : (
                    <div className={styles.profileDetails}>
                        <div className={styles.detailGroup}>
                            <h3>Contact Information</h3>
                            <p>
                                <strong>Email:</strong> {formData.email}
                            </p>
                            <p>
                                <strong>Phone:</strong> {formData.phone}
                            </p>
                        </div>
                        <div className={styles.detailGroup}>
                            <h3>Shipping Address</h3>
                            <p>{formData.address}</p>
                            <p>
                                {formData.city}, {formData.state}{' '}
                                {formData.zipCode}
                            </p>
                        </div>
                    </div>
                )}

                <div className={styles.profileActions}>
                    <Link
                        to='/orders'
                        className={styles.actionButton}
                    >
                        View Order History
                    </Link>
                    <button className={styles.actionButton}>
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
