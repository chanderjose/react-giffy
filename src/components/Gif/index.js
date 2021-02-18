import React from 'react';
import { Link } from 'wouter';

import './Gif.css';

function Gif({ title, id, url }) {
    return (
        <Link to={`/gif/${id}`} className="Gif">
            <h4>{title}</h4>
            <img loading='lazy' src={url} alt={title} />
        </Link>
    )
}

export default React.memo(Gif);