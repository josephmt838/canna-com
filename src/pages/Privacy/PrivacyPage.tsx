import React from 'react';
import styles from './PrivacyPage.module.css';

const PrivacyPage: React.FC = () => {
    return (
        <div className={styles.privacyPage}>
            <div className={styles.hero}>
                <h1>Privacy Policy</h1>
                <p>How we protect and handle your information</p>
            </div>

            <div className={styles.content}>
                <section className={styles.infoCollection}>
                    <h2>Information We Collect</h2>
                    <div className={styles.policyContent}>
                        <h3>Personal Information</h3>
                        <p>
                            We collect information that you provide directly to
                            us, including:
                        </p>
                        <ul>
                            <li>Name and contact information</li>
                            <li>Shipping and billing addresses</li>
                            <li>Payment information</li>
                            <li>Age verification information</li>
                        </ul>

                        <h3>Usage Information</h3>
                        <p>
                            We automatically collect certain information about
                            your device and how you interact with our website,
                            including:
                        </p>
                        <ul>
                            <li>IP address and browser type</li>
                            <li>Pages visited and time spent</li>
                            <li>Device information</li>
                            <li>Cookies and similar technologies</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.infoUsage}>
                    <h2>How We Use Your Information</h2>
                    <div className={styles.policyContent}>
                        <h3>Primary Uses</h3>
                        <ul>
                            <li>Process and fulfill your orders</li>
                            <li>Verify your age and identity</li>
                            <li>Communicate with you about your orders</li>
                            <li>
                                Send you marketing communications (with your
                                consent)
                            </li>
                        </ul>

                        <h3>Legal Compliance</h3>
                        <p>
                            We use your information to comply with applicable
                            laws and regulations, including age verification
                            requirements and tax obligations.
                        </p>
                    </div>
                </section>

                <section className={styles.infoSharing}>
                    <h2>Information Sharing</h2>
                    <div className={styles.policyContent}>
                        <h3>Service Providers</h3>
                        <p>
                            We share your information with trusted service
                            providers who help us operate our business, such as:
                        </p>
                        <ul>
                            <li>Payment processors</li>
                            <li>Shipping partners</li>
                            <li>Age verification services</li>
                            <li>IT and security providers</li>
                        </ul>

                        <h3>Legal Requirements</h3>
                        <p>
                            We may disclose your information when required by
                            law or to protect our rights and safety.
                        </p>
                    </div>
                </section>

                <section className={styles.dataSecurity}>
                    <h2>Data Security</h2>
                    <div className={styles.policyContent}>
                        <h3>Security Measures</h3>
                        <p>
                            We implement appropriate security measures to
                            protect your personal information, including:
                        </p>
                        <ul>
                            <li>Encryption of sensitive data</li>
                            <li>Secure payment processing</li>
                            <li>Regular security assessments</li>
                            <li>Access controls and authentication</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.yourRights}>
                    <h2>Your Rights</h2>
                    <div className={styles.policyContent}>
                        <h3>Access and Control</h3>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPage;
