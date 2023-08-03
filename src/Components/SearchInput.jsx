import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../Style/SearchInput.css';

const SearchInput = () => {
    return (
        <div className="search-input">
            <input type="text" placeholder="Search..." />
            <SearchIcon className="search-icon" />
        </div>
    );
};

export default SearchInput;
