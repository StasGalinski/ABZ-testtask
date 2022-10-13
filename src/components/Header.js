import SignInButton from "./SignInButton";
import classes from './Header.module.css'
const Header = (props) => {
    return (
        <header className={classes.mainHeader}>
            <p className={classes.navLogo}>TESTTASK</p>
            <nav className={classes.navMain}>
                <ul className={classes.navItems}>
                    <li className={classes.navItem}>
                        <a href="#usersList">Users</a>
                    </li>
                    <li className={classes.navItem}>
                        {!props.token && <SignInButton signInHandler={props.signInHandler} />}
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;