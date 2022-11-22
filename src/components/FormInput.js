import './FormInput.css'
import { useState } from 'react';
const FormInput = (props)=>{
    const [focused,setFocused] = useState(false);
    const {errorMessage,label,id,onChange,...others} = props;
    const inputChangeHandler = (e)=>{
        onChange(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const focusChange = ()=>{
        setFocused(true)
    }
    return (
        <div className="form_input">
            <label> {label}</label>
            <input wasfocused={focused.toString()} onBlur={focusChange} {...others} onChange={inputChangeHandler}/>
            <span>{errorMessage}</span>
        </div>
    )
}
export default FormInput;