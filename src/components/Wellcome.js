import classes from './Wellcome.module.css';
import SignInButton from './SignInButton';
const Wellcome = ()=>{
    return <div className={classes.box}>
        <p> Wellcome Item</p>
        <SignInButton />
    </div>
}
export default Wellcome;