import { Link } from "wouter";

import './styles.css';

export default function Category({title = '', options = []}) {
    return (
        <div className="Category">
            <h3 className="Category-title">{title}</h3>
            <ul className="Category-list">
                {options.map((option, index) => (
                    <li key={index} className="Category-list-item">
                        <Link className="Category-link" to={`/search/${option}`}>
                            {option}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}