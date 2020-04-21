import { useState, useEffect } from "react";




function FetchUsers(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    async function FetchUrl() {
        const response = await fetch(url);
        const json = await response.json()

        setData(json);
        setLoading(false);
    }

    useEffect(()=>{
        FetchUrl();
    }, []);
    return [data, loading];
}

export {FetchUsers};