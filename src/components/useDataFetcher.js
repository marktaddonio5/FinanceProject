import {useEffect, useState} from "react"
/*
const useDataFetcher = () => {
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

}

export default useDataFetcher;
*/