import { useState } from "react"

const StockQuote = (props) => {

    if (props.loading === true) 
    return (
        <h1>loading</h1>
    )

    if (props.loading === false)
    return (
        <section>
            <h1>{props.metaObj[ '2. Symbol' ]}</h1>
            <h3>Last Refreshed: {props.metaObj['3. Last Refreshed']}</h3>
            <h3>Type of Data: {props.metaObj['1. Information']}</h3>
            <label htmlFor="dataList">Data as of {props.metaObj['3. Last Refreshed']}</label>
            <ul id="dataList" style={{listStyle: "none"}}>
                <li>Open: {props.recentDataObj['1. open']} </li>
                <li>High: {props.recentDataObj['2. high']} </li>
                <li>Low: {props.recentDataObj['3. low']} </li>
                <li>Close: {props.recentDataObj['4. close']} </li>
                <li>Adjusted Close: {props.recentDataObj['5. adjusted close']} </li>
                <li>Volume: {props.recentDataObj['6. volume']} </li>
            </ul>

        </section>
    )
}

export default StockQuote