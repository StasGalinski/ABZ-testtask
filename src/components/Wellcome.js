import classes from './Wellcome.module.css';
import SignInButton from './SignInButton';

const Wellcome = (props)=>{
    return <div className={classes.box}>
        <p> Wellcome Item</p>
        {!props.token && <SignInButton signInHandler={props.signInHandler} />}
    </div>
}
export default Wellcome;