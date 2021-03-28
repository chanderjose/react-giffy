import { useEffect, useState } from 'react';

import { useLocation } from 'wouter';
import useUser from 'hooks/useUser';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [, navigate] = useLocation();
    const { isLoginLoading, hasLoginError, isLogged, login } = useUser();

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate]);

    const handleSubmit = event => {
        event.preventDefault();
        login({ username, password });
    };

    return (
        <>
            <h2>Login</h2>
            {isLoginLoading && <strong>Checking credentials</strong>}
            {!isLoginLoading &&
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='username'
                        onChange={e => setUsername(e.target.value)}
                        value={username} />
                    <input
                        type='password'
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password} />
                    <button>Login</button>
                </form>
            }
            {hasLoginError && <strong>Credentials are invalid</strong>}
        </>
    )
}
