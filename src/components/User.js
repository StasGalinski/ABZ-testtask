import Card from './Card'
const User = ({ user }) => {
    return (
        <Card>
            <img src={user.photo} alt="oops"></img>
            <p>{user.name}</p>
            <div>
                <p>{user.position}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>
        </Card>
    )
}
export default User;