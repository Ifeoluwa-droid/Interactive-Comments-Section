import {useState, useEffect} from 'react';


const fetchData = async (url, setData, method) => {
    const rawData = await fetch(url, {
        method: `${method}`,
        // headers: {'Content-Type': 'application/json'}
    });
    const data = await rawData.json();
    setData(data);
}

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

