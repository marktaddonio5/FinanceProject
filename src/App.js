import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import StockQuote from './components/StockQuote';

/* Add a way to save certain stocks */

function App() {
  return (
    <div className="App">
      <header className="App-header">Finance Project</header>
      <SearchBar />
      <StockQuote />
    </div>
  );
}

export default App;
