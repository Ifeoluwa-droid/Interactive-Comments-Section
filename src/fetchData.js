const fetchData = async (url, setData, method, ...args) => {
    console.log(args)
    const response = await fetch(url, {
        method: `${method}`,
        headers: {'Content-Type': 'application/json'},
        ...args[0]
    });
    if (response.json) {
        const data = await response.json();
        setData(data);
    } else {
        if (response.ok) {
            console.log("Request Successful");
            setData();
        }
    };
}

export default fetchData;