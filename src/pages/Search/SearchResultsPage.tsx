import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SearchResultsPage.module.css';

const SearchResultsPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');

    return (
        <div className={styles.searchResultsPage}>
            <h1>Search Results for: {query}</h1>
            <div className={styles.searchFilters}>
                {/* Search filters will be added here */}
            </div>
            <div className={styles.resultsGrid}>
                {/* Search results will be displayed here */}
            </div>
        </div>
    );
};

export default SearchResultsPage;
