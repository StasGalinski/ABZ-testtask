import { useState, useCallback, useEffect } from "react";
import User from "./User";
import classes from './GetRequestPart.module.css'
const GetRequestPart = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsers, setLoadedUsers] = useState([])
    const fetchUsers = useCallback(() => {
        setIsLoading(true)
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5')
            .then(res => res.json())
            .then(data => {
                console.log(data.users)
                setLoadedUsers(data.users)
                setIsLoading(false)
            })
    }, []);
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers])
    let content;
    if (loadedUsers) {
        content = loadedUsers.map(el => <User key={el.id} user={el} />)
    }
    return (
        <div>
            <p>GET REQUEST PART</p>
            {isLoading && <p>Loading</p>}
            
                {!isLoading && <div className={classes.container}> {content }</div>}
            

        </div>
    )
}
export default GetRequestPart;