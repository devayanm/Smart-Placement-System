import React from 'react';

const SearchResults = ({ results }) => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Search Results</h2>
            {results.length > 0 ? (
                <ul>
                    {results.map((result, index) => (
                        <li key={index} style={{ marginBottom: '10px' }}>
                            {result}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
