import { useState } from "react";
const SignInButton = () => {
    const [tokenIsActive, setTokenIsActive] = useState(false)
    const getTokenHandler = ()=>{
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then(res=>res.json())
        .then(data=>{
            //Set token to data.token
            console.log(data.token)
        })
        setTokenIsActive(true)
    }
    return (
        <div>
            {!tokenIsActive && <button onClick={getTokenHandler}>Sign In</button >}
        </div>)
}
export default SignInButton;