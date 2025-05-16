import React, { useState } from 'react';
import styles from './FAQPage.module.css';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqItems: FAQItem[] = [
    {
        question: 'What are your age verification requirements?',
        answer: 'You must be 19 years or older to purchase from Canna-Com. We require government-issued photo ID for age verification upon delivery.',
        category: 'General',
    },
    {
        question: 'How do I track my order?',
        answer: "Once your order ships, you'll receive a tracking number via email. You can track your package's status through our website or the carrier's tracking system.",
        category: 'Orders',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept major credit cards (Visa, Mastercard, American Express), Interac Online, and PayPal.',
        category: 'Payment',
    },
    {
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 3-5 business days, express shipping takes 1-2 business days, and free shipping takes 5-7 business days.',
        category: 'Shipping',
    },
    {
        question: 'What is your return policy?',
        answer: 'We accept returns within 30 days of delivery for unopened items in their original packaging. Please contact our customer service team to initiate a return.',
        category: 'Returns',
    },
    {
        question: 'Are your products lab-tested?',
        answer: 'Yes, all our products undergo rigorous third-party lab testing to ensure quality, safety, and accurate potency information.',
        category: 'Products',
    },
    {
        question: 'Do you ship internationally?',
        answer: 'Currently, we only ship within Canada. International shipping is not available at this time.',
        category: 'Shipping',
    },
    {
        question: 'How do I store cannabis products?',
        answer: 'Store products in a cool, dark place away from direct sunlight and heat. Keep out of reach of children and pets.',
        category: 'Products',
    },
];

const FAQPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

    const categories = [
        'All',
        ...new Set(faqItems.map((item) => item.category)),
    ];

    const filteredFAQs =
        activeCategory === 'All'
            ? faqItems
            : faqItems.filter((item) => item.category === activeCategory);

    const toggleQuestion = (index: number) => {
        setExpandedQuestions((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index],
        );
    };

    return (
        <div className={styles.faqPage}>
            <div className={styles.hero}>
                <h1>Frequently Asked Questions</h1>
                <p>
                    Find answers to common questions about our products and
                    services
                </p>
            </div>

            <div className={styles.content}>
                <div className={styles.categories}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.categoryButton} ${
                                activeCategory === category ? styles.active : ''
                            }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className={styles.faqList}>
                    {filteredFAQs.map((item, index) => (
                        <div
                            key={index}
                            className={styles.faqItem}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggleQuestion(index)}
                            >
                                <span>{item.question}</span>
                                <span className={styles.icon}>
                                    {expandedQuestions.includes(index)
                                        ? '−'
                                        : '+'}
                                </span>
                            </button>
                            {expandedQuestions.includes(index) && (
                                <div className={styles.answer}>
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
