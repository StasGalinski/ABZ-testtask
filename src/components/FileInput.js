import "./FileInput.css"
import { useState } from "react";
const FileInput = (props) => {
    const [fileValue,setFileValue] = useState("")
    const fileAdd = (e)=>{
        setFileValue(e.target.files[0])
        
    }
    console.log(fileValue)
    return (
        <div className="fileinput">
            <label className="not"htmlFor="photo">Upload</label>
            <input onChange={fileAdd}name="photo"type="file" id="photo"></input>
            <p>{fileValue ? fileValue.name : "Upload your photo"}</p>
        </div>)
}
export default FileInput;