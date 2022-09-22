import { useState, useCallback, useEffect } from "react";
import User from "./User";
import classes from './GetRequestPart.module.css'
const GetRequestPart = (props) => {
    const page = props.page
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsers, setLoadedUsers] = useState([])
    const fetchUsers = useCallback(() => {
        setIsLoading(true);
        console.log('fetchPage')
        return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?offset=${page*6}&count=${page*6}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsLoading(false);
                setLoadedUsers(data.users)
            })
    }, [page]);
    const nextPage = ()=>{
        props.changePage();
    }
    useEffect(() => {
        const timer = setTimeout(()=>{
            fetchUsers();
        },300)
        return ()=>{
            clearTimeout(timer)
        }
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
                <button onClick={nextPage}>Show More</button>

        </div>
    )
}
export default GetRequestPart;