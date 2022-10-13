const SignInButton = (props) => {
    const getTokenHandler = () => {
        props.signInHandler();
    }
    return (
        <div>
            <div onClick={getTokenHandler}>Sign In</div >
        </div>)
}
export default SignInButton;