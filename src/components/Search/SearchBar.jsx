import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div style={{ padding: '20px', display: 'flex', gap: '10px' }}>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ padding: '10px', width: '300px' }}
            />
            <button onClick={handleSearch} style={{ padding: '10px' }}>Search</button>
        </div>
    );
};

export default SearchBar;
