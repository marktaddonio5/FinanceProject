

const StockQuote = (props) => {

    return (
        <section>
            <h1>Symbol: {props.metaObj[ '2. Symbol' ]}</h1>
            <h2>Last Refreshed: {props.metaObj['3. Last Refreshed']}</h2>
            <h3>Type of Data: {props.metaObj['1. Information']}</h3>
        </section>
    )
}

export default StockQuote