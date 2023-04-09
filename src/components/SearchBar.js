/* should validate whether ticker symbol is valid or not */
import DataFetcher from "./dataFetcher"
import { useState, useEffect } from "react";

const SearchBar = () => {
    const [ticker, setTicker] = useState()
    const [search, setSearch] = useState("")
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=SDBO2DT8VQU27H16`;

    useEffect(() => {
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
        });
    }, [url]);

    function handleSubmit(e){
        e.preventDefault();
        setTicker(search);
        setSearch("")
    }

    return (
        <form onSubmit={handleSubmit} style={{padding: "10px"}}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="search" placeholder="Enter stock ticker symbol" style={{width: "40vw"}} />
            <button type="submit" style={{width: "20vw"}}>Search</button>
        </form>
    );
};

export default SearchBar