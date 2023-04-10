

const StockQuote = (props) => {

    return (
        <section>
            <h1>{props.metaObj[ '2. Symbol' ]}</h1>
            <h3>Last Refreshed: {props.metaObj['3. Last Refreshed']}</h3>
            <h3>Type of Data: {props.metaObj['1. Information']}</h3>
        </section>
    )
}

export default StockQuote