import { useState } from "react";
const SignInButton = (props) => {
    const [tokenIsActive, setTokenIsActive] = useState(false)
    const getTokenHandler = ()=>{
        props.signInHandler();
    }
    return (
        <div>
            {!tokenIsActive && <button onClick={getTokenHandler}>Sign In</button >}
        </div>)
}
export default SignInButton;