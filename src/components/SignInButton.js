const SignInButton = (props) => {
    const getTokenHandler = () => {
        props.signInHandler();
    }
    return (
        <div>
            <button onClick={getTokenHandler}>Sign In</button >
        </div>)
}
export default SignInButton;