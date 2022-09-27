import SignInButton from "./SignInButton";

const Header = (props)=>{

    return <nav>
        <p>TESTTASK</p>
        <ul>
            <li>
                <button>Users</button>
                {!props.token &&<SignInButton signInHandler={props.signInHandler}/>}
            </li>
        </ul>
    </nav>
}
export default Header;