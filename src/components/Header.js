import SignInButton from "./SignInButton";
import classes from './Header.module.css'
import TesttaskLogo from "./Logo.svg"
const Header = (props) => {
    return (
        <nav className={classes.nav__main}>
            <img className={classes.nav__logo} src={TesttaskLogo} alt="React Logo" />
            <div className={classes.nav__items}>
                <a className={`${classes.nav__item} button`} href="#get__request__part">Users</a>
                {/* {!props.token && <SignInButton signInHandler={props.signInHandler} />} */}
                <button className={`${classes.nav__item} button`} type="button" onClick={props.signInHandler}>Sign up</button>
            </div>
        </nav>
    )
}
export default Header;