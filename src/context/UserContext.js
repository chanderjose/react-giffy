import React, { useEffect, useState } from 'react';
import getFavs from 'services/getFavs';

const Context = React.createContext({});

export function UserContextProvider({ children }) {
    const [favs, setFavs] = useState([]);

    // Para setear el estado inicial se usa una función en vez del statement diractamente
    // ya que se ejecuta solo una vez al setear el estado inicial y no cada vez que se
    // ejecuta UserContextProvider()
    const [jwt, setJWT] = useState(() => {
        return window.sessionStorage.getItem('jwt')
    })

    useEffect(() => {
        if(!jwt) return setFavs([])
        getFavs({jwt})
            .then(setFavs)
            .catch(err => console.error(err));
    }, [jwt])

    return <Context.Provider value={{
        jwt,
        setJWT,
        favs,
        setFavs
        }}>
        {children}
    </Context.Provider>
}

export default Context;