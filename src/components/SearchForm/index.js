import React from 'react';
import { useLocation } from 'wouter';
import useForm from './hook';

import './styles.css';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

function SearchForm({ initialKeyword = '', initialRating = '' }) {
    const { keyword, rating, times, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating });

    const [path, pushLocation] = useLocation();

    const handleChange = evt => {
        updateKeyword(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        // navegamos a otra ruta
        pushLocation(`/search/${keyword}/${rating}`);
    };

    const handleChangeRating = evt => {
        updateRating(evt.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="c-search">
            <button className="c-search-btn">Buscar</button>
            <input className="c-search-input" placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
            <select onChange={handleChangeRating} value={rating}>
                <optgroup label="Rating type">
                    {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
                </optgroup>
            </select>
            <span>{times}</span>
        </form>
    )
}

export default React.memo(SearchForm);