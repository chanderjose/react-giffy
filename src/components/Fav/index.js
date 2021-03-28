import useUser from 'hooks/useUser'
import {useLocation} from 'wouter';

import './styles.css';

export default function Fav({ id }) {
    const {isLogged, favs, addFav} = useUser();
    const [, navigate] = useLocation();

    const isFaved = favs.some(favId => favId === id)

    const handleClick = () => {
        if (!isLogged) return navigate('/login');
        addFav({id});
    }

    const [label, emoji] = isFaved ? ['Remove Gif from favorites', '❌'] : ['Add Gig to favorites', '💓']

    return <button onClick={handleClick} className='gf-Fav'>
        <span aria-label={label} role='img'>{emoji}</span>
    </button>
}
