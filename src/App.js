import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import StockQuote from './components/StockQuote';
import { useState, useEffect, useRef } from "react";
/* Add a way to save certain stocks */

/* need error messaging if ticker symbol doesn't exist */
/* need loading animation/message */
/* bugs arise when invalid ticker symbol is entered and submitted */

function App() {

  const [ticker, setTicker] = useState("");
  const [tickerType, setTickerType] = useState();
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState('Daily Time Series with Splits and Dividend Events')
  const [interval, setInterval] = useState('')
  const [data, setData] = useState("");
  const [meta, setMeta] = useState("");
  const [metaObj, setMetaObj] = useState('');
  const [dataValues, setDataValues] = useState('');
  const [dataArray, setDataArray] = useState('')
  const [recentDataObj, setRecentDataObject] = useState('')
  const [loading, setLoading] = useState("false");
  const [error, setError] = useState('');

    let url = `https://www.alphavantage.co/query?function=${tickerType}&symbol=${ticker}${interval}&apikey=SDBO2DT8VQU27H16`;

    const initialRender = useRef(true);

    useEffect(() => {
        console.log('effect ran')
        if (initialRender.current === false) {
            setLoading(true)
            console.log(url)
            fetch(url, {method: "GET"})
                .then((response) => {
                    //console.log(response)
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        );
                    }
                    return response.json();
                })
                .catch((err) => {
                    //console.log(err.message);
                    setError(err.message);
                })
                .then((jsondata) => {
                    console.log(jsondata)
                    console.log(jsondata)
                    if (jsondata['Error Message']){ throw new Error(`Invalid ticker symbol`) } //Can I make these error messages the ones provided by the API?
                    else if (jsondata['Note']) { throw new Error(`API calls exceeded`) }
                    else { setData(Object.entries(jsondata))}
                })
                .catch((err) => {
                    //console.log(err.message);
                    setError(err.message);
                })
                .finally(() => {
                    setLoading(false)
                })
        };
  }, [url]);

  useEffect(() => {
      console.log('effect2 ran')
      if (initialRender.current === false ) {
          //console.log(data[0])
          setMeta(data[0])
          //console.log(Object.values(data[1]))
          setDataValues(Object.values(data[1]))
      } 
  }, [data, initialRender]);

  useEffect(() => {
      console.log('effect3 ran')
      if (initialRender.current === false) {
          //console.log(meta[1])
          setMetaObj(meta[1])
          //console.log(Object.values(dataValues[1]))
          setDataArray(Object.values(dataValues[1]))
      } 
  }, [meta]);

  useEffect(() => {
    console.log('effect4 ran')
    if (initialRender.current === false) {
        //console.log(dataArray[0])
        setRecentDataObject(dataArray[0])
    }
}, [dataArray]);

  function handleSubmit(e){
    e.preventDefault();
    
    if (searchType === "Daily Time Series with Splits and Dividend Events") {
        setTickerType('TIME_SERIES_DAILY_ADJUSTED')
        
    } else if (searchType === "Intraday (5min) open, high, low, close prices and volume") {
        setInterval("&interval=5min")
        setTickerType('TIME_SERIES_INTRADAY')
        
    }
    setTicker(search)
    setSearch("");
    initialRender.current = false;
    setError('')
    setRecentDataObject('')
    setMetaObj('')
  }

  return (
    <div className="App">
      <header className="App-header">Stock Quotes</header>
      <SearchBar
        submit={handleSubmit}
        search={search}
        setSearch={setSearch}
        searchType={searchType}
        setSearchType={setSearchType}
      />
      <h3 style={error ? {color: "red", borderStyle: "solid", borderColor: "red"} : null}>{error}</h3>
      <StockQuote
        metaObj={metaObj}
        dataArray={dataArray}
        recentDataObj={recentDataObj}
        loading={loading}
      />
    </div>
  );
}

export default App;
