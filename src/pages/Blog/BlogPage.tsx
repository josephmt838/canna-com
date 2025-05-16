import React from 'react';
import { Link } from 'react-router-dom';
import { components, pageLayout, typography } from '../../styles/shared';
import styles from './BlogPage.module.css';

// Mock blog posts data - this would typically come from an API
const blogPosts = [
    {
        id: 1,
        title: 'Understanding Different Cannabis Strains',
        excerpt:
            'Learn about the various cannabis strains and their unique characteristics.',
        image: '/images/blog/strain-guide.jpg',
        date: '2024-03-15',
        author: 'Dr. Jane Smith',
        category: 'Education',
    },
    {
        id: 2,
        title: 'The Science of CBD',
        excerpt:
            'Exploring the scientific research behind CBD and its potential benefits.',
        image: '/images/blog/cbd-science.jpg',
        date: '2024-03-10',
        author: 'Dr. John Doe',
        category: 'Science',
    },
    {
        id: 3,
        title: 'Cannabis and Wellness',
        excerpt: 'How cannabis can be integrated into your wellness routine.',
        image: '/images/blog/wellness.jpg',
        date: '2024-03-05',
        author: 'Sarah Johnson',
        category: 'Wellness',
    },
    {
        id: 4,
        title: 'Cooking with Cannabis',
        excerpt: 'Delicious recipes and tips for cooking with cannabis.',
        image: '/images/blog/cooking.jpg',
        date: '2024-03-01',
        author: 'Chef Mike Brown',
        category: 'Recipes',
    },
];

const BlogPage: React.FC = () => {
    const featuredPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1);

    return (
        <div className={pageLayout.page}>
            <section className={pageLayout.hero}>
                <h1 className={typography.heading1}>Canna-Com Blog</h1>
                <p className={typography.paragraph}>
                    Stay informed with the latest news, research, and insights
                    about cannabis.
                </p>
            </section>

            <div className={pageLayout.content}>
                <section className={styles.featuredPost}>
                    <h2 className={typography.heading2}>Featured Article</h2>
                    <div className={pageLayout.card}>
                        <div className={styles.featuredContent}>
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className={styles.featuredImage}
                            />
                            <div className={styles.featuredText}>
                                <span className={components.badge}>
                                    {featuredPost.category}
                                </span>
                                <h3 className={typography.heading3}>
                                    {featuredPost.title}
                                </h3>
                                <p className={typography.paragraph}>
                                    {featuredPost.excerpt}
                                </p>
                                <div className={styles.postMeta}>
                                    <span className={typography.small}>
                                        By {featuredPost.author}
                                    </span>
                                    <span className={typography.small}>
                                        {featuredPost.date}
                                    </span>
                                </div>
                                <Link
                                    to={`/blog/${featuredPost.id}`}
                                    className={components.link}
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className={typography.heading2}>Latest Articles</h2>
                    <div className={pageLayout.grid}>
                        {otherPosts.map((post) => (
                            <div
                                key={post.id}
                                className={pageLayout.card}
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className={styles.postImage}
                                />
                                <div className={styles.postContent}>
                                    <span className={components.badge}>
                                        {post.category}
                                    </span>
                                    <h3 className={typography.heading3}>
                                        {post.title}
                                    </h3>
                                    <p className={typography.paragraph}>
                                        {post.excerpt}
                                    </p>
                                    <div className={styles.postMeta}>
                                        <span className={typography.small}>
                                            By {post.author}
                                        </span>
                                        <span className={typography.small}>
                                            {post.date}
                                        </span>
                                    </div>
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className={components.link}
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BlogPage;
