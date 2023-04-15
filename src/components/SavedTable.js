import { useEffect } from "react"

const SavedTable = (props) => {
    const saveString = props.save
    console.log(saveString)

    if (props.save){
    return(
        <table>
            <tbody>
                <tr>
                    <th>Symbol</th>
                    {saveString[0]}
                </tr>
                <tr>
                    {saveString[1]}
                </tr>
            </tbody>
        </table>
    )}
    
}

export default SavedTable;