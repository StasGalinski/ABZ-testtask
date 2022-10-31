import classes from './Banner.module.css';
import SignInButton from './SignInButton';

const Banner = (props) => {
    return (
        <div className={classes['banner']}>
            <div className={classes['banner__content']}>
                <div className={classes['banner__text-group']}>
                    <h1 className={classes.banner__heading}>Test assignment for front-end developer</h1>
                    <p className={classes.banner__text}>What defines a good front-end developer is one that has skilled knowledge
                        of HTML, CSS, JS with a vast understanding of User design thinking as
                        they'll be building web interfaces with accessibility in mind. They
                        should also be excited to learn, as the world of Front-End
                        Development keeps evolving.</p>
                </div>
                <button className='button' onClick={props.signInHandler}>Sign up</button>
            </div>
            {/* {!props.token && <SignInButton signInHandler={props.signInHandler} />} */}
        </div>
    )
}
export default Banner;