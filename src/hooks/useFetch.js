import {useState, useEffect} from 'react';
import fetchData from '../fetchData';



const useFetch = (url) => {

    const [data, setData] = useState(null);

    useEffect(
        () => {
            fetchData(url, setData, 'GET');
        }, [url]
    );

    return data;
}


export default useFetch;

