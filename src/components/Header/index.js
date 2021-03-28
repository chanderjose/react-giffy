import { Link } from 'wouter';

import useUser from 'hooks/useUser';

import './styles.css';

export default function Header() {
    const { isLogged, logout } = useUser()

    const handleClick = event => {
        event.preventDefault();
        logout();
    }

    return (
        <header className='gf-header'>
            {
                isLogged
                    ? <Link to="#" onClick={handleClick}>Logout</Link>
                    : <Link to='/login'>Login</Link>
            }
        </header>
    )
}
