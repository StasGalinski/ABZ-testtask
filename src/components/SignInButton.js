import { useSelector,useDispatch } from "react-redux";
import { tokenActions } from "../store";
const SignInButton = () => {
    const dispatch = useDispatch();
    const token = useSelector(state=>state.token)
    const getTokenHandler = ()=>{
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then(res=>res.json())
        .then(data=>{
            dispatch(tokenActions.setToken({token:data.token, expirationTime:new Date().getTime()+2400000}))
        })
    }

    return (
        <div>
            {!token && <button onClick={getTokenHandler}>Sign In</button >}
        </div>)
}
export default SignInButton;