import classes from './User.module.css'
const User = ({ user }) => {
    return (
        <div className={classes.card__content}>
            <div
                className={classes.image}
                style={{ backgroundImage: `url(${user.photo})` }}>
            </div>
            <p title={user.name} className={classes.tooltip}>{user.name}</p>
            <div>
                <p className={classes.tooltip}>{user.position}</p>
                <p className={classes.tooltip}>{user.email}</p>
                <p className={classes.tooltip}>{user.phone}</p>
            </div>
        </div >
    )
}
export default User;