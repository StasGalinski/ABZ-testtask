import classes from './User.module.css'
const User = ({ user }) => {
    return (
        <div className={classes.card}>
            <div className={classes.card__content}>
                <div
                    className={classes.image}
                    style={{ backgroundImage: `url(${user.photo})` }}>

                </div>
                <p>{user.name}</p>
                <div className={classes.user__description}>
                    <p>
                        {user.position}
                        <br></br>
                        {user.email}
                        <br></br>
                        {user.phone}
                    </p>

                </div>
            </div>
        </div>
    )
}
export default User;