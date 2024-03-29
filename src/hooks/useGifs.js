import { useContext, useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0

export function useGifs({ keyword, rating } = { keyword: null }) {
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const { gifs, setGifs } = useContext(GifsContext);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    useEffect(function() {
        setLoading(true);

        getGifs({ keyword: keywordToUse, rating })
            .then(gifs => {
                setGifs(gifs);
                setLoading(false);
                localStorage.setItem('lastKeyword', keyword);
            })
      }, [keyword, rating, keywordToUse, setGifs]);

      useEffect(() => {
        if(page === INITIAL_PAGE) return;

        setLoadingNextPage(true);

        getGifs({ keyword: keywordToUse, rating: rating, page: page })
            .then(nextGifs => {
                setGifs(prevtGifs => prevtGifs.concat(nextGifs));
                setLoadingNextPage(false);
            })
      }, [keywordToUse, page, setGifs]);

      return {loading, loadingNextPage, gifs, setPage};
}