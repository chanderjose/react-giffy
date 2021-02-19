import Gif from 'components/Gif';
import useSingleGif from 'hooks/useSingleGif';
import useSEO from 'hooks/useSEO';
import {Redirect} from 'wouter';

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({id: params.id});

    const title  = gif ? gif.title : '';

    useSEO({ title: title, description: `Detail of ${title}`});

    if(isLoading) return <h1>Loading</h1>
    if(isError) return <Redirect to="/404" />

    if(!gif) return null;

    return (
        <Gif {...gif} />
    )
}