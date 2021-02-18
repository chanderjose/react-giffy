import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';

import { useGifs } from 'hooks/useGifs';
import Category from 'components/Category';

const POPULAR_GIFS = ['Matrix', 'Pandas', 'Venezuela', 'Chile', 'Colombia'];

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGifs();

    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}`);
    };

    const handleChange = evt => {
        setKeyword(evt.target.value);
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={keyword} placeholder="Buscar gifs" />
                <button>Search</button>
            </form>

            <h3 className="section-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />

            <Category title="Los gifs más populares" options={POPULAR_GIFS} />

            <TrendingSearches />
        </>
    )
}