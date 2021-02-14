import { useEffect, useState } from 'react';
import ListOfGifs from '../../components/ListOfGifs';

import getGifs from '../../services/getGifs';

import { useGifs } from '../../hooks/useGifs';

export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword });

    if(loading) return <i>Cargando 🤖</i>

    return (
        <>
            <ListOfGifs gifs={gifs} />
        </>
    )
}