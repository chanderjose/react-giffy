import { useCallback, useEffect, useRef } from 'react';

import ListOfGifs from 'components/ListOfGifs';
import Spinner from 'components/Spinner'
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import {Helmet} from 'react-helmet';
import SearchForm from 'components/SearchForm';

export default function SearchResults({ params }) {
    const { keyword, rating = 'g' } = params;
    const { loading, gifs, setPage } = useGifs({ keyword, rating });
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false });

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage]);

    useEffect(() => {
        if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen]);

    const title = gifs ? `${gifs.length} results of ${keyword}` : '';

    if(loading) return <Spinner />

    return (
        <div className="App-wrapper">
            <Helmet>
                <title>{title} | Giffy</title>
                <meta name="description" content={title}/>
            </Helmet>

            <header className="o-header">
                <SearchForm initialKeyword={keyword} initialRating={rating} />
            </header>

            <h3>
                {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs} />
            <br />
            <div id="visor" ref={externalRef}></div>
        </div>
    )
}