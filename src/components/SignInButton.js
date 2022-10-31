const SignInButton = (props) => {
    const getTokenHandler = () => {
        props.signInHandler();
    }
    return <div onClick={getTokenHandler}>Sign In</div>
        
}
export default SignInButton;