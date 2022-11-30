import classes from'./FormInput.module.css'
import { useState } from 'react';
const FormInput = (props)=>{
    const [focused,setFocused] = useState(false);
    const {errorMessage,label,id,onChange,placeholder,button,...others} = props;
    const inputChangeHandler = (e)=>{
        onChange(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const focusChange = ()=>{
        setFocused(true)
    }
    return (
        <div className={classes.form_input} name={others.name}>
            <input className={classes.input}wasfocused={focused.toString()} onBlur={focusChange} {...others} onChange={inputChangeHandler}/>
            <label className={classes.label}> {label}</label>
            <span>{errorMessage}</span>
        </div>
    )
}
export default FormInput;