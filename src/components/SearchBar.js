/* should validate whether ticker symbol is valid or not */

import { useState, useEffect, useRef } from "react";
const Intervals = (props) => {
    return (
        <select value={props.intervalType} onChange={(e) => props.setIntervalType(e.target.value)}>
            <option>1min</option>
            <option>5min</option>
            <option>15min</option>
            <option>30min</option>
            <option>60min</option>
        </select>
    )
}


const SearchBar = (props) => {
   
    return (
        <>
        <form onSubmit={props.submit} style={{padding: "10px"}}>
            <input value={props.search} onChange={(e) => props.setSearch(e.target.value)} type="text" name="search" id="search" placeholder="Enter stock ticker symbol" style={{width: "40vw"}} />
            <select value={props.searchType} onChange={(e) => props.setSearchType(e.target.value)}>
                <option>Daily Time Series with Splits and Dividend Events</option>
                <option>Intraday open, high, low, close prices and volume</option>
                <option>SearchType #3</option>
            </select>
            {props.searchType === 'Intraday open, high, low, close prices and volume' 
                ? <Intervals intervalType={props.intervalType} setIntervalType={props.setIntervalType} /> 
                : null}
            <button type="submit" style={{width: "20vw"}}>Search</button>
        </form>
        </>
    );
};

export default SearchBar