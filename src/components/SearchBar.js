/* should validate whether ticker symbol is valid or not */

import { useState, useEffect, useRef } from "react";

const SearchBar = () => {
    

    return (
        <>
        <form onSubmit={handleSubmit} style={{padding: "10px"}}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="search" placeholder="Enter stock ticker symbol" style={{width: "40vw"}} />
            <button type="submit" style={{width: "20vw"}}>Search</button>
        </form>
        <span>Search: {search}</span>
        <span>Ticker: {ticker}</span>
        <span>InitialRender? {initialRender.current.toString()}</span>
        <span>{metaObj[ '2. Symbol' ]}</span>
        </>
    );
};

export default SearchBar