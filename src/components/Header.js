import SignInButton from "./SignInButton";

const Header = ()=>{
    return <nav>
        <p>TESTTASK</p>
        <ul>
            <li>
                <button>Users</button>
                <SignInButton />
            </li>
        </ul>
    </nav>
}
export default Header;