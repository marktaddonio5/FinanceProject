import {useEffect, useState} from "react"
const DataFetcher = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    
    const url =  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=SDBO2DT8VQU27H16"

    useEffect(() => {
        fetch(url, {method: "GET"})
        .then((response) => console.log(response))
    }, [])
}


export default DataFetcher;