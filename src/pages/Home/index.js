import { useState, useCallback } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';

import { useGifs } from 'hooks/useGifs';
import Category from 'components/Category';
import SearchForm from 'components/SearchForm';

const POPULAR_GIFS = ['Matrix', 'Pandas', 'Venezuela', 'Chile', 'Colombia'];

export default function Home() {
    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGifs();

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`);
    }, [pushLocation]);



    return(
        <>
            <SearchForm onSubmit={handleSubmit} />

            <h3 className="section-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />

            <Category title="Los gifs más populares" options={POPULAR_GIFS} />

            <TrendingSearches />
        </>
    )
}