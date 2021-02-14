import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs';

import { useGifs } from '../../hooks/useGifs';

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
            </form>

            <h3 className="section-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />

            <h3 className="section-title">Los gifs más populares</h3>

            <ul className="home-menu">
                {POPULAR_GIFS.map((populartGif) => (
                    <li key={populartGif}>
                        <Link to={`/search/${populartGif}`}>Gifs de {populartGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}