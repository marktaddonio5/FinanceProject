import { useState } from "react"

const SavedTable = (props) => {
    
    const saveString = props.save

    if (props.save){
    return(
        <table >
            <tbody>
                <tr>
                    <label style={{fontWeight: "bold"}}>Symbol</label>
                    {saveString[0]}
                </tr>
                <tr>
                    {saveString[2].toUpperCase()}
                    {saveString[1]}
                </tr>
            </tbody>
        </table>
    )}
    
}

export default SavedTable;