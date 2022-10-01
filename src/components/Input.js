import { useEffect, useState} from 'react';
const Input = ({ name, type, placeholder,regEx,saveInput }) => {
    const [input,setInput]= useState('');
    const [inputIsValid,setInputIsValid] = useState(true);
    let timer;
    var changeHandler = (event)=>{
            if(timer){
                console.log('timer cleared')
                clearTimeout(timer)
            }
            timer = setTimeout(()=>{
                console.log('value changed')
            setInput(event.target.value);
            saveInput(event.target.value,setInputIsValid)
        },200)
    }   
    
    useEffect(()=>{
        setInputIsValid(input.match(regEx))
    },[input,regEx])
    let content = <input onChange={changeHandler} name={name} type={type} placeholder={placeholder} required ></input>
    if(input){
        content = <fieldset>
            <legend>{placeholder}</legend>
            {!inputIsValid &&<p>Validation failed</p>}
            <input onChange={changeHandler} name={name} type={type} defaultValue={input} autoFocus required/>
        </fieldset>
    }
    return (
        <div>
            { content }
        </div>
    )
};
export default Input;