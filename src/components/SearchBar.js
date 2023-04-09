/* should validate whether ticker symbol is valid or not */

import { useState, useEffect, useRef } from "react";

const SearchBar = () => {
    const [ticker, setTicker] = useState("")
    const [search, setSearch] = useState("")
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=SDBO2DT8VQU27H16`;

    const initialRender = useRef(true);

    useEffect(() => {
        console.log('effect ran')
        if (initialRender.current === false) {
            fetch(url, {method: "GET"})
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((data) => console.log(data))
                .catch((err) => {
                    console.log(err.message);
                })
        }
    }, [url]);


    function handleSubmit(e){
        e.preventDefault();
        setTicker(search);
        setSearch("")
        initialRender.current = false
    }

    return (
        <form onSubmit={handleSubmit} style={{padding: "10px"}}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="search" placeholder="Enter stock ticker symbol" style={{width: "40vw"}} />
            <button type="submit" style={{width: "20vw"}}>Search</button>
            <span>Search: {search}</span>
            <span>Ticker: {ticker}</span>
            <span>InitialRender? {initialRender.current.toString()}</span>
        </form>
        
    );
};

export default SearchBar