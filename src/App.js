import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import StockQuote from './components/StockQuote';

/* Add a way to save certain stocks */

function App() {

  const [ticker, setTicker] = useState("")
  const [search, setSearch] = useState("")
  const [data, setData] = useState("");
  const [meta, setMeta] = useState("")
  const [metaObj, setMetaObj] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
              .then((jsondata) => {
                 /* const jsonString = JSON.stringify(jsondata);
                  setData(jsonString); */
                  console.log(Object.entries(jsondata))
                  setData(Object.entries(jsondata))
              })
              .catch((err) => {
                  console.log(err.message);
                  setError(err.message);
                  setData(null)
              })
              .finally(() => {
                  setLoading(false)
              })
      }
  }, [url]);

  useEffect(() => {
      console.log('effect2 ran')
      if (initialRender.current === false) {
          console.log(data[0])
          setMeta(data[0])
      } 
  }, [data]);

  useEffect(() => {
      console.log('effect3 ran')
      if (initialRender.current === false) {
          console.log(meta[1])
          setMetaObj(meta[1])
      } 
  }, [meta]);

  function handleSubmit(e){
      e.preventDefault();
      setTicker(search);
      setSearch("")
      initialRender.current = false
  }



  return (
    <div className="App">
      <header className="App-header">Finance Project</header>
      <SearchBar />
      <StockQuote />
    </div>
  );
}

export default App;
