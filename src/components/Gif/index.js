import React from 'react';
import { Link } from 'wouter';

import Fav from 'components/Fav';

import './Gif.css';

function Gif({ title, id, url }) {
    return (
        <div className="Gif">
            <div className="Gif-buttons">
                <Fav id={id} />
            </div>
            <Link to={`/gif/${id}`} className="Gif-link">
                <h4>{title}</h4>
                <img loading='lazy' src={url} alt={title} />
            </Link>
        </div>
    )
}

export default React.memo(Gif);