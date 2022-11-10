import classes from './User.module.css';
import imagePlaceholder from './photo-cover.svg'
const User = ({ user }) => {
    return (
        <div className={classes.card__content}>
            <div
                className={classes.image}
                style={{ backgroundImage: `url(${user.photo}), url(${imagePlaceholder})` }}>
            </div>
            <div className={classes["card__text-wrap"]}>
                <div className={classes.tooltip}>
                    <p className={classes.text} title={user.name}>{user.name}</p>
                    <div className={classes["tooltip__text"]}>{user.name}</div>
                </div>
            </div>
            <div className={classes["card__text-wrap"]}>
                <p className={classes.text}>{user.position}</p>
                <div className={classes.tooltip}>
                    <div className={classes.text}>{user.email}</div>
                    <div className={classes["tooltip__text"]}>{user.email}</div>
                </div>
                <p className={classes.text}>{user.phone}</p>
            </div>
        </div >
    )
}
export default User;