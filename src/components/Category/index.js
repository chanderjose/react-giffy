import { Link } from "wouter";

import './styles.css';

export default function Category({title = '', options = []}) {
    return (
        <section>
            <h3 className="Category-title">{title}</h3>
            <ul className="Category-list">
                {options.map((option, index) => (
                    <li key={index}>
                        <Link to={`/search/${option}`}>
                            {option}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}