/* should validate whether ticker symbol is valid or not */

import { useState, useEffect, useRef } from "react";

const SearchBar = (props) => {
    return (
        <>
        <form onSubmit={props.submit} style={{padding: "10px"}}>
            <input value={props.search} onChange={(e) => props.setSearch(e.target.value)} type="text" name="search" id="search" placeholder="Enter stock ticker symbol" style={{width: "40vw"}} />
            <button type="submit" style={{width: "20vw"}}>Search</button>
        </form>
        </>
    );
};

export default SearchBar