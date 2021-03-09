import { useState, useCallback } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';

import { useGifs } from 'hooks/useGifs';
import Category from 'components/Category';
import SearchForm from 'components/SearchForm';
import {Helmet} from 'react-helmet';

//const POPULAR_GIFS = ['Matrix', 'Pandas', 'Venezuela', 'Chile', 'Colombia'];

export default function Home() {
    const { loading, gifs } = useGifs();

    //<Category title="Los gifs más populares" options={POPULAR_GIFS} />

    return(
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <header className="o-header">
                <SearchForm />
            </header>
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Última búsqueda</h3>
                        <ListOfGifs gifs={gifs} />
                    </div>
                    <div className="App-category">
                        <TrendingSearches />
                    </div>
                </div>
            </div>
        </>
    )
}