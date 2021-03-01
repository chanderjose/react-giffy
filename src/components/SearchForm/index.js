import React, { useState } from 'react';

import './styles.css';

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('');

    const handleChange = evt => {
        setKeyword(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit({ keyword });
    };

    return (
        <form onSubmit={handleSubmit} className="c-search">
            <button className="c-search-btn">Buscar</button>
            <input className="c-search-input" placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
        </form>
    )
}

export default React.memo(SearchForm);