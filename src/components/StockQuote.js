

// Want to add a save button so stocks can be compared in the data table
// Right now only returning and displaying the most recent data point


function dataObjectLoopKey(object){
    let values = Object.keys(object)
    let displayKey = values.map((key) => {
        return (
            <th>{key}</th>
        )
    });
    return displayKey;
}

function dataObjectLoopVal(object) {
    let values = Object.values(object)
    let displayVal = values.map((val) => {
        return (
            <td>{val}</td>
        )
    });
    return displayVal;
}



const StockQuote = (props) => {

    function handleSave() {
        let data = [dataObjectLoopKey(props.recentDataObj), dataObjectLoopVal(props.recentDataObj), props.metaObj['2. Symbol']]
        props.setSave(data)
    }
    
    if (props.loading === true)

    return (
        <h1>Loading, please wait</h1>
    )

    if (props.loading === false && props.error === '')

    return (
        <section>
            <h1>{props.metaObj['2. Symbol'] !== undefined ? props.metaObj[ '2. Symbol' ].toUpperCase() : null}</h1>
            <h3>Last Refreshed: {props.metaObj['3. Last Refreshed']}</h3>
            <h3>Type of Data: {props.metaObj['1. Information']}</h3>
            <label htmlFor="dataList">Data as of {props.metaObj['3. Last Refreshed']}</label>
            <table id="dataList" style={{listStyle: "none", width: "100vw"}}> 
                <tbody>
                <tr>
                    <th>Symbol</th>
                    {dataObjectLoopKey(props.recentDataObj)}
                </tr>
                <tr>
                    <td>{props.metaObj['2. Symbol'] !== undefined ? props.metaObj[ '2. Symbol' ].toUpperCase() : null}</td>
                    {dataObjectLoopVal(props.recentDataObj)}
                </tr>
                </tbody>
            </table>
            <button onClick={handleSave}>Click Here to Save</button>
        </section>
    )
};



export default StockQuote;