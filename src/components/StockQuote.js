import { useState } from "react"

// Want to add a save button so stocks can be compared in the data table

function dataObjectLoopKey(object){
    let values = Object.keys(object)
    let displayKey = values.map((key) => {
        return (
            <th>{key}</th>
        )
    })
    return displayKey;
}

function dataObjectLoopVal(object) {
    let values = Object.values(object)
    let displayVal = values.map((val) => {
        return (
            <td>{val}</td>
        )
    })
    return displayVal;
}


const StockQuote = (props) => {
    if (props.loading === true) 
    return (
        <h1>Loading, please wait</h1>
    )

    if (props.loading === false && props.error === '')
    return (
        <section>
            <h1>{props.metaObj['2. Symbol'] != undefined ? props.metaObj[ '2. Symbol' ].toUpperCase() : null }</h1>
            <h3>Last Refreshed: {props.metaObj['3. Last Refreshed']}</h3>
            <h3>Type of Data: {props.metaObj['1. Information']}</h3>
            <label htmlFor="dataList">Data as of {props.metaObj['3. Last Refreshed']}</label>
            <table id="dataList" style={{listStyle: "none", width: "100vw"}}> 
                <tbody>
                <tr>
                    {dataObjectLoopKey(props.recentDataObj)}
                </tr>
                <tr>
                    {dataObjectLoopVal(props.recentDataObj)}
                </tr>
                </tbody>
            </table>
        </section>
    )
}
/*
<th>Ticker Symbol</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Adjusted Close</th>
                    <th>Volume</th>
<td>{props.metaObj[ '2. Symbol' ]}</td>
                    <td>{props.recentDataObj['1. open']}</td>
                    <td>{props.recentDataObj['2. high']}</td>
                    <td>{props.recentDataObj['3. low']}</td>
                    <td>{props.recentDataObj['4. close']}</td>
                    <td>{props.recentDataObj['5. adjusted close']}</td>
                    <td>{props.recentDataObj['6. volume']}</td>
                    */

export default StockQuote;