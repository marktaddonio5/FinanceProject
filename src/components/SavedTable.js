import { useState, useEffect } from "react"

const SavedTable = (props) => {

    const [newSave, setNewSave] = useState([props.save])
    
    useEffect(() => {
        if (props.save !== newSave){
            setNewSave([[...newSave], [props.save]])
        } else {setNewSave(props.save)}
    }, [props.save])


    //if (data !== newSave) setNewSave([...newSave, props.save])


        for (const array of newSave) {
            return(
                <table>
                    <tbody>
                        <tr>
                            {array[0]}
                        </tr>
                        <tr>
                            {array[2]}
                            {array[1]}
                        </tr>
                    </tbody>
                </table>
            )
    }
    
}

export default SavedTable;