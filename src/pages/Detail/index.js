import Gif from 'components/Gif';
import useSingleGif from 'hooks/useSingleGif';
import {Redirect} from 'wouter';
import {Helmet} from 'react-helmet';

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({id: params.id});

    const title  = gif ? gif.title : '';

    if(isLoading) {
        return (
            <>
                <Helmet>
                    <title>Loading...</title>
                </Helmet>
                <h1>Loading</h1>
            </>
        )
    }
    if(isError) return <Redirect to="/404" />

    if(!gif) return null;

    return (
        <>
        <Helmet>
            <title>{title} | Giffy</title>
        </Helmet>
        <h3>{title}</h3>
        <Gif {...gif} />
        </>
    )
}