import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={keyword} placeholder="Buscar gifs" />
            <button>Search</button>
        </form>
    )
}

export default React.memo(SearchForm);