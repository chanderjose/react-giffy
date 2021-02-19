import { useState, useEffect } from 'react';

import { useGifs } from 'hooks/useGifs';
import getSingleGif from 'services/getSingleGif';

export default function useSingleGif({ id }) {
    const { gifs } = useGifs();

    const gifFromCache = gifs.find(sinleGif => sinleGif.id === id);

    const [gif, setGif] = useState(gifFromCache);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if(!gif) {
            setIsLoading(true);
            getSingleGif({id})
                .then(gif => {
                    setGif(gif);
                    setIsLoading(false);
                    setIsError(false);
                }).catch(err => {
                    setIsLoading(false);
                    setIsError(true);
                });
        }
    }, [gif, id]);

    return { gif, isLoading, isError };
}